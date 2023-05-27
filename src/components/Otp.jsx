import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Otp = () => {
    const [input,setinput]=useState({})
    const navigate = useNavigate()

    const changeMyData=(e)=>{
      setinput({
         ...input,[e.target.name]:e.target.value
      })
    }
    // const OTPsent=()=>{
    //   console.log("first")
    //   console.log(input)
    //     axios.post("http://localhost:1000/api/verifyOTP",input)
    //     .then(response=>{
    //         if(response.data.status=="Success"){
    //             alert("Welcome")
    //             navigate('/welcome')
    //         }
    //         console.log(input)
          
    //     })
    // }
  return (
    <div className="container">

  <div className="row g-3">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label" onChange={changeMyData}>Enter OTP here</label>
          <input type="text" className="form-control" name="otp" />
      </div>
    
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <button className="btn btn-success"  >Submit</button>
      </div>
  </div>
</div>
  )
}

export default Otp