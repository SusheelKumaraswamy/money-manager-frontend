import React,{useState} from "react";
import axios from "axios";


export default function Betweendates(){
    const [date, setDate] = useState("");
    const [date1, setDate1] = useState("");
    const [input, setInput] = useState({
        user: []
      });
      

    async function handleSubmit(){
        if(date<date1){
            var res = await axios.get(`https://moneymanagerbackend31398.herokuapp.com/moneymanager/betweendates/${date}+${date1}`);
            console.log(res.data);
            await setInput({ user: res.data });
        }
        else{
            alert("from date should be smaller");
        }
    }
    return(
        <>
        <label>From:</label>
        <input type="date" onChange={(e)=>setDate(e.target.value)}></input>
        &nbsp;
        &nbsp;
        &nbsp;
        <label>To:</label>
        <input type="date" onChange={(e)=>setDate1(e.target.value)}></input>
        <br/>
        <br />
        <button onClick={handleSubmit}>Generate Report</button>
        <br />
        <br />
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
            {input.user.map((row)=>
                (
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
            )}
        </table>
        </>
    )
}
