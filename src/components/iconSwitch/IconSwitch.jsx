import React from 'react'
import styles from "./iconSwitch.module.css"

export const IconSwitch = (props) => {
    const {iconName, onSwitch} = props
  return (
    <>
    <div className={styles['material-icons']} onClick={() => onSwitch()}>{iconName}</div>
    </>
  )
}
