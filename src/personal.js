import React,{useEffect,useState} from "react";
import axios from "axios";
export default function personal(){
    const [input, setInput] = useState({
        user: []
      });
    
    const handleClick = async()=>{
        var res = await axios.get("https://moneymanagerbackend31398.herokuapp.com/moneymanager/personal");
        console.log(res.data);
        await setInput({ user: res.data });
    }

    return(
        <>
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