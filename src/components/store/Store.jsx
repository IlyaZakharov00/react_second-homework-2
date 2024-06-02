import React from 'react'
import { useState } from 'react'
import { IconSwitch } from '../iconSwitch/IconSwitch'
import { CardsView } from '../cardsView/CardsView'
import {products} from "../products"



export const Store = () => {
const [icon, setIcon] = useState("view_module")
const [viewMode, setViewMode] = useState("list");


const hendlerChangeIcon = () => {
  if(icon == 'view_list'){
    setIcon('view_module')
    setViewMode("list")
  } else {
    setIcon('view_list')
    setViewMode("module")
  }
}


  return (
    <>
    <IconSwitch 
    iconName = {icon}
    onSwitch = {hendlerChangeIcon}/>
    <CardsView 
    cards = {products}
    viewMode = {viewMode}/>
    </>
  )
}
