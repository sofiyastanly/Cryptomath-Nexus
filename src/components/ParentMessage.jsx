// ParentMessage.js

import React, { useEffect, useState } from "react";
import Student from "./Student";
import "./chat.css";
import Parent from "./Parent";

function ParentMessage() {
  // Array of members
  const members = [
    {
      name: "John Doe",
      message: "Hello, Are you there?",
      time: "Just now",
      badge: 1,
    },
    {
      name: "Danny Smith",
      message: "Lorem ipsum dolor sit.",
      time: "5 mins ago",
    },
    {
      name: "Danny Smith",
      message: "Lorem ipsum dolor sit.",
      time: "5 mins ago",
    },
    {
      name: "Danny Smith",
      message: "Lorem ipsum dolor sit.",
      time: "5 mins ago",
    },
    {
      name: "Danny Smith",
      message: "Lorem ipsum dolor sit.",
      time: "5 mins ago",
    },
    // Add more members as needed
  ];

  // Array of chat messages
  const chatMessages = [
    {
      name: "Brad Pitt",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      time: "12 mins ago",
    },
    {
      name: "Lara Croft",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      time: "13 mins ago",
    },
    {
      name: "Lara Croft",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      time: "13 mins ago",
    },
    {
      name: "Lara Croft",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      time: "13 mins ago",
    },
    {
      name: "Lara Croft",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      time: "13 mins ago",
    },
    // Add more messages as needed
  ];

  const [message, setMessage] = useState("");
  const [chatMessage, setChatMessage] = useState([]);
  const [teacherName, setTeacherName] = useState("");
  const [refresh, setrefresh] = useState(0);
  let userdata = JSON.parse(localStorage.getItem("userdata"));

  const sendMessage = () => {
  

    let param = {
      from: userdata.id,
      message: message,
    };

    fetch("https://projectlogi.club/mathmate/public/api/sendmessageparent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        setrefresh(prev=>prev+1)
        // setMessage('')
        console.log(data);
      });
    });
  };
  useEffect(() => { 

    let param = {
      from: userdata.id,
    };
    console.log(param);

    fetch("https://projectlogi.club/mathmate/public/api/getteachername", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        // setTeacherdata(data);
        setTeacherName(data);
      });
    });

    
    fetch("https://projectlogi.club/mathmate/public/api/getparentmessages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        setChatMessage(data);
        console.log(data);
        setMessage('')
      });
    }); 
  }, [refresh]);
   


  return (
    <>
    <Parent/>
    <div className="container">
  <section style={{ backgroundColor: "#b8bedd", width: '1050px', height: '400px', marginLeft: '200px', marginTop: '-570px', overflowY: 'auto' }} className="py-3">
    <div className="row">
      <div className="col-md-6 order-md-1">
        <div className="bg-white p-2 ms-2">
          <div className="form-outline mb-3">
            <div className="d-flex flex-column">
              <h5>Send Message</h5>
              <textarea
                className="form-control"
                style={{ width: '100%', height: '120px' }} // Set width and height here
                onChange={(e) => { setMessage(e.target.value); }}
                placeholder="Message..."
                value={message}
              ></textarea>
              <button
                type="button"
                className="btn btn-success mt-3" // Adjust margin-top here
                onClick={() => { sendMessage(); }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 order-md-2">
        <div className="messages" style={{ height: "100px" }}>
         
          <div className="d-flex flex-column-reverse">
            {chatMessage.map((message, index) => (
              <div key={index} className={`d-flex justify-content-${message.fromid == userdata.id ? "end sent-message" : "start received-message"} mb-4`}>
                <div className="card">
                  <div className="card-header d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">{message.fromid == userdata.id ? "You" : teacherName}</p>
                    <p className="text-muted small mb-0"><i className="far fa-clock"></i> {message.time}</p>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">{message.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>





    </>
  );
}

export default ParentMessage;
