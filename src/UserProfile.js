import { useContext } from "react"
import { UserContext } from "./Usercontext"



function UserProfile(){

    const { setUser } = useContext(UserContext)

    return(
        <div>
            <p>User profile</p>
            <button
            onClick={ () => {
                setUser({ name:"Asshole", gender:"unidentify"})
            }}
            >
                Change the user
            </button>
        </div>
    )
}
export default UserProfile