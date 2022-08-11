import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const EditContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const { id } = useParams();

    const contacts = useSelector(state => state.contactReducer);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const currentContact = contacts.find(contact => contact.id === parseInt(id))
    console.log('currentContact ::' , currentContact)

    useEffect(() => {
        if(currentContact) {
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);
        const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number));

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
            id: parseInt(id),
            name,
            email,
            number
        };

        dispatch({ type: "UPDATE-CONTACT", payload: data })
        toast.success("Student updated successfully!!")
        navigate("/", {replace:true})
    };


    return (
        <div className='container'>
            {currentContact ? (
                <>
                    <h1 className='display-3 my-5 text-center'>
                        Edit Student {id}
                    </h1>
                    <div className="row">
                        <div className='col-md-6 shadow mx-auto p-5'>
                            <form onSubmit ={handleSubmit}>

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
                                    <input style={{ marginBottom: 10 }} type="submit" value='Update Student' className='btn btn-dark' />
                                </div>

                                <Link to="/" className="btn btn-danger ml-3">
                                    Cancel
                                </Link>

                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <h6 className='display-3 my-5 text-center'>
                    Student contact with <strong style={{ color: 'red' }}><i>"id {id}"</i> </strong>  is not exists
                </h6>
            )}
        </div>
    );
};

export default EditContact