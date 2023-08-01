import Navigation from "./Navigation";
import '../css/contact.css'
import { useState } from "react";
const Contact =()=>{
    const [data,setData]= useState("")
    const[list,setlist] = useState([])
   const viewmessage = ()=>{
        alert("here is the description of meaasge");
    }
    const submit=(event)=>{
        event.preventDefault();
      setlist([...list,data])
      console.log(list);
      setData("");
    }
    return(
        <><Navigation/>
        <div className="contact">
        <div className="part1">
          <h1>Contact Form</h1>
         
          <button className="btn1" onClick={viewmessage} >View Message</button>
          <button className="btn1" >View call</button>
          <button className="btn2" >View Email and Gmail</button>
          <form onSubmit={submit}>
            <div className="form">
                <label>Name</label>
                <input type="text" name="name" value={data} onChange={(e)=>setData(e.target.value)}/>
            </div>
            <div className="form">
                <label>Email</label>
                <input type="email" name="email" value={data}onChange={(e)=>setData(e.target.value)} />
            </div>
            <div className="form">
                <label>Text</label>
                <input type="text" name="text" value={data} onChange={(e)=>setData(e.target.value)}/>
            </div>
            <div className="form">
                <button>Submit</button>
            </div>
            <div>
                {
                    list.map((element,index)=>{
                       return(
                        <h2>{element}</h2>
                       )
                    })
                }
            </div>
          </form>
        </div>
        <div className="part2">
           <img src="/images/flower.jpg" alt="flower"/>
        </div>
        </div>
        
        </>

       
    )
}
export default Contact;

