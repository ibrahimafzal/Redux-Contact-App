import React, { useState } from 'react'
import CardsData from './CardsData'
import { useDispatch } from 'react-redux';
import {ADD} from '../cartRedux/actions/action'

const Cards = () => {

  const dispatch = useDispatch();

  const send = (e) => {
        dispatch(ADD(e));
  }

  const [data, setData] = useState(CardsData)

  return (
    <div className="container mt-3">
      <h2 style={{ marginTop: 30, fontFamily: 'Russo One' }}>Add to Cart Project</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((element, id) => {
            return (
              <>
                <div className="card mx-2 mt-4 card_style" style={{ width: "22rem", border: 'none', cursor: 'pointer' }}>
                  <img src={element.imgdata} className="card-img-top mt-3" alt="..." style={{ height: '16rem' }} />
                  <div className="card-body">
                    <h5 className="card-title">{element.rname}</h5>
                    <p className="card-text"> <strong style={{ color: "orange" }}>Price :</strong> Rs {element.price}</p>
                    <div className="button_div d-flex justify-content-center">
                      <button onClick={() => send(element)} href="#" className="btn btn-primary col-lg-12">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards;