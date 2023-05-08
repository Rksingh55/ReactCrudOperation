import React from "react";
import {useParams} from "react-router-dom"
const middleware=WrapperComponent=>props=>{
   const param   =useParams()
   return(
    <WrapperComponent
    {...props}
    param={param}
    />
   )
}
export default middleware