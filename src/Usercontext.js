import { createContext, useState } from "react";


export const UserContext = createContext();

function UserProvider({children}){

    const [ user, setUser ] = useState({
        name: "Bitch",
        gender: "Slugathor"
    })

    return(
        <UserContext.Provider
        value={{ user, setUser }}
        >
            <p>{children}</p>
        </UserContext.Provider>

    )
}
export default UserProvider