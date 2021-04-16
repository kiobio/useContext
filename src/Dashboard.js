import { useContext } from "react"
import { UserContext } from "./Usercontext"
import UserProfile from "./UserProfile"


function Dashboard(){

    const { user} = useContext(UserContext)
    return(
        <div>
            <h1>I am {user.name} </h1>
            <UserProfile/>           
            
        </div>


    )
}
export default Dashboard