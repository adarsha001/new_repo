import React from 'react'
import {CounterContext} from '../../context/context'
import { useContext } from "react";
const Button = () => {
    
  return (
    <div onClick={() => console.log("hello")}>
      hello
    </div>
  )
}

export default Button
