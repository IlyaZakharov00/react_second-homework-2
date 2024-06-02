import React from 'react'
import { ShopCard } from '../shopCard/ShopCard'
import style from "./cardsView.module.css"

export const CardsView = (props) => {
    const {cards, viewMode} = props
  return (
    <div className={style['cards-container']}>
      <>{cards.map((card, index) => <ShopCard key = {index} card = {card} viewMode = {viewMode}/>)}</>
    </div>
  )
}




