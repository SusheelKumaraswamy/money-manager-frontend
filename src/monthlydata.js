import React, { useEffect,useState } from "react";
import axios from 'axios';

export default function Weekdata(){

    const [input, setInput] = useState({
        user: []
      });

      const [date, setDate] = useState(0);
    
    const handleClick = async()=>{
        if(date >0){
            try {
                var res = await axios.get(`https://moneymanagerbackend31398.herokuapp.com/moneymanager/monthlytransactions/${date}`);
                console.log(res.data);
                console.log(date);
                await setInput({ user: res.data });
            } 
            catch (error) {
                console.log(error); 
            }
            
        } 
    }
    function handleReset(e){
        setDate(e.target.value);
    }
    return(
        <>
            <select onChange={handleReset}>
                <option value={0}>----Select-----</option>
                <option value={4}>April</option>
                <option value={5}>May</option>
            </select> &nbsp;

            <button onClick={handleClick}>Generate Report</button>
            <br>
            </br>
            <br></br>

            <table border={1}>
            <thead>
                <tr>
                <td>Income</td>
                <td>Expense</td>
                <td>date</td>
                <td>purposeofexpense</td>
                <td>typeofexpense</td>
                </tr>
            </thead>
                {input.user.map((row)=>{
                    return(
                        <>
                        <tr>
                            <td>{row.income}</td>
                            <td>{row.expenditure}</td>
                            <td>{row.date}</td>
                            <td>{row.purposeofexpense}</td>
                            <td>{row.typeofexpense}</td>
                        </tr>
                        </>
                    )
                })}
            </table>
        </>
    )
    
}