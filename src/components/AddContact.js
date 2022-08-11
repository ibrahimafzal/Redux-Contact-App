import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector((state) => state.contactReducer)
    console.log(contacts)

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number));

        if (!name || !email || !number) {
            return toast.warning("please fill in all fields!")
        }

        if (checkEmail) {
            return toast.warning("This email is already exists!")

        }

        if (checkNumber) {
            return toast.warning("This number is already exists!")
        }
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        };

        dispatch({ type: "ADD-CONTACT", payload: data })
        toast.success("Student added successfully!!")
        navigate("/", { replace: true })
    };

    return (
        <div className='container'>
            <h1 className='display-3 my-5 text-center'>
                Add Student
            </h1>
            <div className="row">
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <input style={{ marginBottom: 10 }} type="text" placeholder='Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input style={{ marginBottom: 10 }} type="email" placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input style={{ marginBottom: 10 }} type="number" placeholder='Phone Number' className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <input type="submit" value='Add Student' className='btn btn-block btn-dark' />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact