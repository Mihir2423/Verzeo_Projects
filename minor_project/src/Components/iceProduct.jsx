import React from 'react'

function IceProduct(props) {
  return (
    <div className='iceProduct'>
      <img src={props.image} alt="img"/>
      <h4 className="iceName">{props.name}</h4>
      <p className='iceSubHead'>{props.subhead}</p>
      <p className='iceRating'>Rating : <span className='rating'>({props.rating})</span></p>
      <button type='button' className='buttons-product'>Buy Now!</button>
    </div> 
  )
}

export default IceProduct
