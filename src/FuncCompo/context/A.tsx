import { createContext, useState } from "react";
import Contexxho from "./Contexxho";

export interface IUserDetailContext {
    name: string;
    rollNo: number | null
}

const initialValue = {
    name: '',
    rollNo: null
}

const user = {
    name: 'Ankit',
    rollNo: 7
}

export const userContext = createContext<IUserDetailContext>(initialValue)

export function UseContextHook() {
    const [userDetails, setUserDetails] = useState(user);
    const updateName = (name: string) => {
        setUserDetails({
            ...userDetails,
            name: name
        });
    }
    return (
        <userContext.Provider value={userDetails}>
            <button onClick={() => updateName('Ankit1')}>Update Name</button>
            <Contexxho />
        </userContext.Provider>
    )
}