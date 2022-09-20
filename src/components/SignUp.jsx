import React, {useState} from 'react'

import {useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';








const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [allset, setAllSet] = useState(false);

  const [success, setSuccess] = useState(false);

  const [alreadyExist, setAlreadyExist] = useState(false);



  // Login Handle

  function loginHandle(e){

    e.preventDefault();


  }



  
// useNavigate for redirect the page!
const navigate = useNavigate();




  // User Handler 
const userHandler = (e)=>{

  let name = e.target.value;
  var alpha = /^[a-zA-Z\s-, ]+$/;  

  if(!name.match(alpha) || name === ""){

    setNameErr(true);

  }
  else{

    setNameErr(false);

   


  }

  setName(name);


}

// Email Handler

const emailHandler = (e)=>{

  let invalidEmail = e.target.value;

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!invalidEmail.match(mailformat) || invalidEmail === "" ){

    setEmailErr(true);


  }
  else{

    setEmailErr(false);


  }
 
  setEmail(invalidEmail);


}


// Password handler
const passwordHandler = (e) =>{

let invalidPassword = e.target.value;

var reg =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; 

if(  invalidPassword ==="" || !invalidPassword.match(reg) ){

  setPasswordErr(true);


}
else{

  setPasswordErr(false);

}

setPassword(invalidPassword);



}



const getData = async ()=>{


  if(name ==="" || email === "" || password === ""){

    setAllSet(true);


  }
  else{

  
    setAllSet(false);
    // setSuccess(true);


   let uuid =  uuidv4();

    

   console.log(name, email,password, uuid);


let result = await fetch("http://localhost:5000/register", {

method:"POST",

// use the JSON.stringify  api always use json stringfy 
body:JSON.stringify({name,email,password,uuid}),

headers:{
  'Content-Type':'application/json'
},

});


let resp = await result.json();
console.log(resp);

if(resp.success === true){


  setSuccess(true);
  localStorage.setItem("u_id", JSON.stringify(uuid));
  navigate('/');




}
else{

setAlreadyExist(true);

}




}

}

  
  return (
    <form onSubmit={loginHandle}>
    <div className='sign-up'>

        <input className='inputbox' type="text"  onChange={userHandler} placeholder='Enter Your Name'  required/>{nameErr?<span style={{color:"red", fontSize:"16px", marginLeft:"28px"}}>Note: valid name format Example: ramesh </span>:""}
        <input className='inputbox'  type="email" onChange={emailHandler} placeholder='Enter Email'  pattern=".+@globex\.com" size="30" required />{emailErr?<span style={{color:"red",fontSize:"16px",marginLeft:"28px"}}>Note: valid email format Example: ramesh@mail.com</span>:"" }
        <input className='inputbox'  type="text" onChange={passwordHandler} placeholder='Enter Password' required />{passwordErr?<span style={{color:"red",fontSize:"16px", marginLeft:"28px"}}>Note: password must be alphanumeric one upper one lower   Example: Ramesh@123  </span>:""}

    {nameErr || emailErr || passwordErr ? "":
        <button type='button' onClick={getData} className='appbutton'>Register</button>
  }

 
{allset?<span style={{color:"red"}}>Fill all the  field!</span>:""}







{success? <span style={{color:"green"}}>You are Registered Successfully!</span>:"" }


{ alreadyExist ? <span style={{color:"red",fontSize:"16px",marginLeft:"28px"}}>This email is Already Registerd choose another!</span>:""}



    </div>
    </form>
  )
}

export default SignUp