import React from 'react'
import style from "./shopCard.module.css"


export const ShopCard = (props) => {
    const {card , viewMode} = props
    const {color, img, name, price} = card 
    // console.log(viewMode)
  return (
      <div className={viewMode == 'module' ? [style['card'], style['card-module']].join(" ") : style['card']}>
        <div className={style['card-name']}>{name}</div>
        <div className={style['card-color']}>{color}</div>
        <img className={style['img']} src={img} alt="photo sneakers" />
        <div className={style['card-price-and-btn']}>
          <div className={style['card-price']}>${price}</div>
          <button className={style['card-btn']}>Add to cart</button>
        </div>
      </div>
  )
} 
