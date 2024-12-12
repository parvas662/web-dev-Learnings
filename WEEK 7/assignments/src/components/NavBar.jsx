
import { Button } from "./Button"
import { Assignment1 } from "./Assignment1" 
import { Assignment2 } from './Assignment2'
import { Assignment3 } from './Assignment3'
import { Assignment4 } from './Assignment4'
import { Assignment5 } from './Assignment5'
export function NavBar() {
    return (
        <div className="bg-slate-400  h-screen  py-12  ">
            <div className="text-center  font-bold text-3xl "  >
                    Welcome to week 7 Assignments
            </div >
                <div className="flex   items-center justify-center gap-3 pt-28" >
                    <Button label={"Assignment 1"} to={"/Assignment1"} />
                    <Button label={"Assignment 2"} to={"/Assignment2"} />
                    <Button label={"Assignment 3"} to={"/Assignment3"} />
                    <Button label={"Assignment 4"} to={"/Assignment4"} />
                    <Button label={"Assignment 5"} to={"/Assignment5"} />
                    </div>
        </div>

    )
}