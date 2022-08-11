import React, { useState, useEffect } from 'react'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { DELETE } from '../cartRedux/actions/action'

const Header = () => {

    const [price, setPrice] = useState(0);

    const router = useLocation();
    const getdata = useSelector((state) => state.cartReducer.carts);


    const dispatch = useDispatch();


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };



    const handleClose = () => {
        setAnchorEl(null);
    };



    const dlt = (id) => {
        dispatch(DELETE(id));
    }



    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        })
        setPrice(price);
    };



    useEffect(() => {
        total();
    }, [total])



    if (router.pathname === '/')
        return null
                
        if (router.pathname === '/add')
        return null
        
        if (router.pathname === '/edit/:id')
        return null



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/header' style={{ marginLeft: 60 }}>
                        <strong style={{ fontFamily: 'Kaushan Script', fontSize: '30px' }}>FriChicks 🐓</strong>
                    </Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/header">Home</Link>
                            </li>
                        </ul>
                        <span className="navbar-text" style={{ marginRight: 60 }}>
                            <Badge badgeContent={getdata.length} color="primary"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }}></i>
                            </Badge>
                        </span>
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        style={{ fontSize: 10 }}
                    >
                        {
                            getdata.length ?
                                <div className="card_details" style={{ height: 'auto', width: '16rem', padding: 7 }}>
                                    <table className='table table-borderless'>
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Restaurant Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getdata.map((e) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <Link to={`/cart/${e.id}`} onClick={handleClose}>
                                                                        <img src={e.imgdata} alt="" style={{ width: '5rem', height: '5rem' }} />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <p>{e.rname}</p>
                                                                    <p>Price : Rs {e.price}</p>
                                                                    <p>Quantity : {e.qnty}</p>
                                                                    <p style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onClick={() => dlt(e.id)}>
                                                                        <i className='fas fa-trash smalltrash'></i>
                                                                    </p>
                                                                </td>
                                                                <td className='mt-5' style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash largetrash'></i>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                            <p className='text-center'> <strong>Total :</strong> Rs {price}</p>
                                        </tbody>
                                    </table>
                                </div> :
                                <div className="card_details d-flex justify-content-center align-items-center" style={{ width: '14rem', position: 'relative' }}>
                                    <i className='fas fa-close smallclose' style={{ position: 'absolute', top: 2, right: 20, fontSize: 23, cursor: 'pointer' }} onClick={handleClose}></i>
                                    <p style={{ fontSize: 15, marginBottom: 0 }}>Your cart is empty</p>
                                    <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: '3rem', padding: 10 }} />
                                </div>
                        }


                    </Menu>
                </div>
            </nav>
        </>

    )
}

export default Header