import React from "react";
import {useNavigate,useLocation} from "react-router-dom";

export default function Component1(){
    const navigate = useNavigate();
    return(
        <>
          <button onClick={()=>navigate('/add')}>Add new Data</button> &nbsp;
          <button onClick={()=>navigate('/weeklydata')}>Get Weekly data</button> &nbsp;
          <button onClick={()=>navigate('/monthlydata')}>Get Monthly data</button>&nbsp;
          <button onClick={()=>navigate('/yearlydata')}>Get Yearly data</button>&nbsp;
          <button onClick={()=>navigate('/officialdata')}>Get only official transaction data</button>&nbsp;
          <button onClick={()=>navigate('/personaldata')}>Get only Personal transaction data</button>&nbsp;
          <button onClick={()=>navigate('/betweendates')}>Get data between two dates</button>&nbsp;
        </>
    )
}