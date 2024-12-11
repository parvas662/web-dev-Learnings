import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = ()=>{
    return <div>
            <Appbar label={"Payment App"}/>
            <Balance value={"1000"} />
            <Users/>
    </div>
}