import React, { useState } from "react";
const  Contact=()=> {

  const[data,setData]=useState({
    fullname:'',
    phonenumber:'',
    email:'',
    msg:'',
  });
  const InputEvent=(event)=>{
       const{name,value}=event.target;

       setData((preVal)=>{
         return {
           ...preVal,
           [name]:value,
         };
       });
      }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`This is ${data.fullname}.phone number is ${data.phonenumber}.email is ${data.phonenumber}.message is ${data.msg}`)
  }
  return (

    <>
    <div className="my-5">
       <h1 className="text-center">Contact Us</h1> 
    </div>
    <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
           <div className="form-group">
             <label for="name" >Name</label>
             <input 
                type="text" 
                className="form-control" 
                id="names"  
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                
               />
             
           </div>
           <div className="form-group">
             <label for="pno">Phone Number</label>
             <input type="number" 
               className="form-control" 
               id="phoneno" 
               name="phonenumber"
               value={data.phonenumber}
               onChange={InputEvent} 
               />
             
           </div>
           <div className="form-group">
             <label for="exampleInputEmail1">Email address</label>
             <input 
               type="email" 
               className="form-control" 
               id="exampleInputEmail1" 
               aria-describedby="emailHelp" 
               name="email"
               value={data.email}
               onChange={InputEvent}
               />
             
           </div>
           <div className="form-group">
             <label for="msgg">Message</label>
             <input 
               type="text"
               className="form-control" 
               id="msg" 
               name="msg"
               value={data.msg}
               onChange={InputEvent}
                />
           </div>
           <button type="submit" className="btn btn-primary my-3">Submit</button>
          </form>
           </div>
        </div>
    </div>

    </>
  );
};

export default Contact;
