import React, { useEffect,useState } from "react";
import axios from "axios";

export default function Component1(){
    const [input, setInput] = useState({
        user: []
      });

    const [date, setDate] = useState(0);
    async function handleChange(e){
        await setDate(e.target.value);
    }

    const handleClick =async ()=>{
        var res = await axios.get(`https://moneymanagerbackend31398.herokuapp.com/moneymanager/yearlytransaction/${date}`);
        console.log(res.data);
        await setInput({ user: res.data });
    }

    return(
        <>
            <select onChange={handleChange}>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
            </select>
            <button onClick={handleClick}>Generate Report</button>

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