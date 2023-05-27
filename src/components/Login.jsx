
import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 const Login = () => {

   const [input,setinput]=useState({})
    const navigate = useNavigate()

    const changeMyData=(e)=>{
      setinput({
         ...input,[e.target.name]:e.target.value
      })
    }
    const newOTP=()=>{
      console.log("first")
      console.log(input)
        axios.post("http://localhost:1000/api/newemail",input)
        .then(response=>{
            console.log(input)
            alert("OTP sent")
            navigate('/otp')
        })
    }
  return (
    <div className="container">

  <div className="row g-3">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor=""  >Email</label>
          <input type="text" name="email" onChange={changeMyData}/>
      </div>
    
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <button className="btn btn-success" onClick={newOTP} >Submit</button>
      </div>
  </div>
</div>
   
  )
}

export default Login