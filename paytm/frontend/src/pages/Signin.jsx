import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtomWarning } from "../components/ButtomWarning";


export const Signin = ()=>{
    return <div className="bg-slate-300 h-screen flex  justify-center  ">
        <div className="flex flex-col justify-center  ">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4"> 
                <Heading label={"Sign In"} />
                <br />
                <InputBox  label ={'Email'} placeholder={'Enter your Email'} />
                <InputBox  label ={'Password'} placeholder={'Password'} />
                <div  className="pt-4">
                <Button label= {"Sign In"} />
                </div>
            <ButtomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/Signup"}/> 
            </div>
        </div>

    </div>
}