import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { DELETE, ADD, REMOVE } from '../cartRedux/actions/action'




const CardsDetails = () => {

  const [data, setData] = useState([])

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const getdata = useSelector((state) => state.cartReducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata)
  }

  const send = (e) => {
    dispatch(ADD(e));
}

  const dlt = (id) => {
    dispatch(DELETE(id));
    navigate('/header');
  }

  const remove = (item)=> {
    dispatch(REMOVE(item))
  }

  useEffect(() => {
    compare();
  }, [id])


  return (
    <div className="container mt-2">
      <h2>Item Details Page</h2>

      <section className='container mt-3'>
        <div className="iteamsdetails" style={{ borderRadius: '5px' }}>
          {
            data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>
                  <div className="details" style={{ height: 282, borderRadius: '15px' }}>
                    <table class="table table-borderless">
                      <tr>
                        <td style={{ textAlign: 'left' }}>
                          <p><strong>Resaurant</strong> : {ele.rname}</p>
                          <p><strong>Price</strong> : {ele.price} </p>
                          <p><strong>Dishes</strong> :  {ele.address}</p>
                          <p><strong>Total</strong> : Rs {ele.price * ele.qnty }</p>
                          <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: 'pointer' }}>
                            <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? ()=>dlt(ele.id):()=>{remove(ele)}}>-</span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span style={{ fontSize: 24 }} onClick={()=>send(ele)}>+</span>
                          </div>
                        </td>
                        <td style={{ textAlign: 'left' }}>
                          <p><strong>Rating : </strong><span style={{ backgroundColor: 'green', borderRadius: '5px', padding: '2px 5px', color: '#fff' }}>{ele.rating} ★</span></p>
                          <p><strong>Order Review : </strong><span>{ele.somedata}</span></p>
                          <p><strong>Remove Item : </strong><span><i className='fas fa-trash' style={{ color: 'red', fontSize: 16, cursor: 'pointer' }} onClick={() => dlt(ele.id)}></i></span></p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>
    </div>)
}

export default CardsDetails