// TeacherMessage.js

import React, { useEffect, useState } from "react";
import Student from "./Student";
import "./chat.css";

function TeacherMessage() {
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

  const [message,setMessage] = useState('')
  const [teacherName,setTeacherName] = useState('')

  const sendMessage=()=>{
    
    let userdata = JSON.parse(localStorage.getItem('userdata'))

    let param ={
      from:userdata.id, 
      message:message
    }

    fetch("https://projectlogi.club/mathmate/public/api/sendmessageparent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        // setTeacherdata(data);
        console.log(param);
      });
    });

  }
  useEffect(()=>{

    let userdata = JSON.parse(localStorage.getItem('userdata'))

    let param ={
      from:userdata.id,  
    }

    fetch("https://projectlogi.club/mathmate/public/api/getparentswithmessages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        // setTeacherName(param);
      });
    });

  },[])

  return (
    <>
      <Student />
      <div className="container">
        <section style={{ backgroundColor: "#eee" }} className="py-5">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-6 mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                Messages
              </h5>
              <div className="card">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {members.map((member, index) => (
                      <li
                        key={index}
                        className="p-2 border-bottom"
                        style={{ backgroundColor: "#eee" }}
                      >
                        <a
                          href="#!"
                          className="d-flex justify-content-between text-decoration-none"
                        >
                          <div className="d-flex flex-row">
                            <div className="pt-1">
                              <p className="fw-bold mb-0">{member.name}</p>
                              <p className="small text-muted">
                                {member.message}
                              </p>
                            </div>
                          </div>
                          <div className="pt-1">
                            <p className="small text-muted mb-1">
                              {member.time}
                            </p>
                            {member.badge && (
                              <span className="badge bg-danger float-end">
                                {member.badge}
                              </span>
                            )}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-6">
              <div
                className="messages"
                style={{ height: "500px", overflowY: "scroll" }}
              >
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`d-flex justify-content-${
                      index % 2 === 0
                        ? "end sent-message"
                        : "start received-message"
                    } mb-4`}
                  >
                    <div className="card">
                      <div className="card-header d-flex justify-content-between p-3">
                        <p className="fw-bold mb-0">{message.name}</p>
                        <p className="text-muted small mb-0">
                          <i className="far fa-clock"></i> {message.time}
                        </p>
                      </div>
                      <div className="card-body">
                        <p className="mb-0">{message.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-3">
                <div className="form-outline mb-3">
                  <div className="d-flex">
                    <textarea
                      className="form-control"
                      rows="4"
                      onChange={(e)=>{setMessage(e.target.value)}}
                      placeholder="Message..."
                    ></textarea>
                    <button type="button" className="btn btn-success float-end" onClick={()=>{sendMessage()}}>
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TeacherMessage;
