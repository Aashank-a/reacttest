import React, { useState } from "react";
import userContext from "./usercontext";



const UserState = (props) => {
  const [auth, setauth] = useState("")
  const [user, setuser] = useState("")
  const [score, setscore] = useState(0)
  const [insctruction, setinsctruction] = useState(true)

  return (
    <userContext.Provider value={{ auth, setauth, user ,score,setscore,insctruction, setinsctruction}}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState;