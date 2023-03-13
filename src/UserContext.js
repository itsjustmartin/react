import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    // simple without fetching data
    const [user] = useState({
        name: "John",
        email: "johny@email.com",
        dob: "01/01/2000",
    })
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);