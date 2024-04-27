import React, { useEffect, useState } from "react";
import Student from "./Student";
import "./chat.css";
import Teacher from './Teacher'

function TeacherMessage() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [toParent, setToParent] = useState('');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    // Fetch user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('userdata'));
    setUserData(storedUserData);

    let param = {
      from: storedUserData.id,
    };

    fetchMessages(param);
  }, [refresh]);

  const fetchMessages = (param) => {
    fetch("https://projectlogi.club/mathmate/public/api/getparentswithmessages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        const updatedMembers = data.map(member => {
          const lastMessage = member.messages?.length > 0 ? member?.messages[member.messages?.length - 1] : null;
          return {
            ...member,
            lastMessage: lastMessage ? lastMessage?.messages : "",
            lastMessageTime: lastMessage ? lastMessage?.time : "",
          };
        });
        setMembers(updatedMembers);
      });
    });
  };

  const handleClick = (member) => {
    setSelectedMember(member);

    setToParent(member.parentid);
  };

  const sendMessage = () => {
    let param = {
      from: userData.id,
      to: toParent,
      message: message
    };

    fetch("https://projectlogi.club/mathmate/public/api/sendmessageteacher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        // Fetch messages again after sending a message
        fetchMessages({ from: userData.id });
        setRefresh(prev=>prev+1)
        setMessage('')
 window.location.reload()

      });
    });
  };

  return (
    <>
      <Teacher />
      
      <div className="container">
      <section style={{ backgroundColor: "#eee", width: '1050px', height: '400px', marginLeft: '160px', marginTop: '-570px' }} className="py-3">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-xl-6 mb-4 mb-md-0">
            <h5 className="font-weight-bold text-start text-primary ms-5">
              Communicate with parents
            </h5>
            <div className="card mx-5" style={{ width: '500px' }}>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {members.map((member, index) => (
                    <li
                      key={index}
                      className={`p-2 border-bottom ${selectedMember === member ? 'bg-primary text-white' : ''}`}
                      style={{ backgroundColor: "#eee", cursor: "pointer" }}
                      onClick={() => handleClick(member)}
                    >
                      <div className="d-flex flex-row">
                        <div className="pt-1">
                          <p className="fw-bold mb-0">{member.parentname}</p>
                          <p className="small text-muted mb-0">{member.lastMessage}</p>
                          <p className="small text-muted mb-0">{member.lastMessageTime}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary p-3" style={{ width: '470px' }}>
                <div className="form-outline mb-3">
                  <div className="d-flex">
                    <textarea
                      className="form-control"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message..."
                      required
                      style={{ height: '100px' }}
                    ></textarea>
                    <button type="button" className="btn btn-success float-end" onClick={sendMessage}>
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 col-xl-6">
            <div className="messages" style={{ height: "calc(400px - 45px)", overflowY: "auto" }}>
              {selectedMember && selectedMember.messages && selectedMember.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`d-flex justify-content-${userData && msg.fromid === userData.id ? "end sent-message" : "start received-message"} mb-4`}
                >
                  <div className="card">
                    <div className="card-header d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">{selectedMember.parentname}</p>
                      <p className="text-muted small mb-0">
                        <i className="far fa-clock"></i> {msg.time}
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">{msg.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default TeacherMessage;
