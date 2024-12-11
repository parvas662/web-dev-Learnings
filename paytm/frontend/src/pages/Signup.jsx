import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtomWarning } from "../components/ButtomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

export const Signup = () => {
    const  [firstname,setfirstName] = useState('');
    const  [lastname,setlastName] = useState('');
    const  [username,setUsername] = useState('');
    const  [password,setpassword] = useState('');
    let navigate = useNavigate();
    
    return <div className="bg-slate-300 h-screen flex  justify-center  ">

        <div className="flex flex-col justify-center  ">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4"> 
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your information to create and account"} />
                <InputBox onChange= {(e) =>{ setfirstName(e.target.value) }}
                 label = {'First Name'} placeholder={'Vishu'} />
                <InputBox onChange= {(e)=>{ setlastName(e.target.value) }} label ={'Last Name'} placeholder={'sharma'} />
                <InputBox onChange= {(e)=>{ setUsername(e.target.value) }} label ={'Email'} placeholder={'Vishusharma@gmail.com'} />
                <InputBox onChange= {(e)=>{ setpassword(e.target.value) }} label ={'Password'} placeholder={'1234'} />
                <div  className="pt-4">
                <Button label= {"Sign Up"}
                onClick={async ()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                        username,
                        firstname,
                        lastname,
                        password
                    })
                    localStorage.setItem("token",response.data.token)
                    navigate("/Signin")
                    alert(firstname.toUpperCase() +", welcome to PaytmApp")
                }} />
                </div>
            <ButtomWarning label={"Already have an Account?"} buttonText={"Sign in"} to={"/Signin"}/> 
            </div>
        </div>

    </div>
}