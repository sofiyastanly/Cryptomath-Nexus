import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const GamePage = () => {



    // const [name, setName] = useState('');
    const [link, setLink] = useState('');





    const location = useLocation()
    const navigate = useNavigate()
   
    useEffect(() => {

        const info = JSON.parse(localStorage.getItem('userdata'))
        console.log(info.id)
        
        let param = {
            id: location.state.id
        }
        

        fetch('https://projectlogi.club/mathmate/public/api/getgamesbyid', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param)
        }).then((res) => {
            res.json().then((data) => {
                    // setName(data.name)
                    setLink(data.link+`?sid=${info.id}&gid=${location.state.id}`)
             
            })
        })

    }, [])

    
    


    return (
        <>

            <nav aria-label="breadcrumb"  >
                <ol className="breadcrumb bg-light p-2 px-4 border border-1 rounded-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">School</li>
                </ol>
            </nav>

            <div className="card mt-5">
                <div className='card-header'></div>
                <div className="card-body">
                    <iframe src={link} 
                     style={{position:'fixed', top:50, left:0, bottom:0, right:0, width:'100%', height:'100%', border:'none', margin:0, padding:0, overflow:'hidden', zIndex:999999
                     }}>

                    </iframe>
                   
                </div>
            </div>
 
        </>
    )
}

export default GamePage