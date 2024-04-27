import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Admin from '../components/Admin';

const EditAdminPage4 = () => {



    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [nameError, setNameError] = useState('');
    const [linkError, setLinkError] = useState('');




    const location = useLocation()
    const navigate = useNavigate()
   
    useEffect(() => {
        let param = {
            id: location.state.id
        };

        fetch('https://projectlogi.club/mathmate/public/api/getgamesbyid', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(param)
        }).then((res) => {
            res.json().then((data) => {
                setName(data.name);
                setLink(data.link);
            });
        });
    }, []);

    const validateForm = () => {
        let valid = true;

        if (!name) {
            setNameError('Game Name is required.');
            valid = false;
        } else {
            setNameError('');
        }

        if (!link) {
            setLinkError('Game Link is required.');
            valid = false;
        } else {
            setLinkError('');
        }

        return valid;
    };

    const updateGames = () => {
        if (validateForm()) {
            let param = {
                id: location.state.id,
                name: name,
                link: link,
            };

            fetch('https://projectlogi.club/mathmate/public/api/updategames', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(param)
            }).then((res) => {
                navigate('/adminpage4');
            });
        }
    };



    return (
        <>

            <Admin/>
            <div className="row">
      <div className="col-2"></div>
      <div className="col" style={{marginTop:'-645px'}}>

            <div className="card mt-5">
                <div className='card-header'><i className="fa fa-plus"></i></div>
                <div className="card-body">

                    <form>
                       
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Game Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="inputPassword6" className="form-control" placeholder='Enter Game Name' aria-describedby=""
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row g-3 mt-2 align-items-center">
                            <div className="col-2">
                                <label for="inputPassword6" className="col-form-label">Game Link</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="inputPassword6" className="form-control" placeholder='Enter Game Link ' aria-describedby=""
                                    value={link}
                                    onChange={(e) => {
                                        setLink(e.target.value)
                                    }}
                                />
                            </div>
                            
                           

                        </div>


                        <button type="submit" className="btn btn-success mt-2" onClick={(e) => {
                            e.preventDefault()
                            updateGames()
                        }}
                        >Edit</button>
                    </form>

                </div>
            </div>
 </div>
 </div>
        </>
    )
}

export default EditAdminPage4