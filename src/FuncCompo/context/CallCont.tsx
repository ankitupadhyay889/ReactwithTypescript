import { createContext, useState } from "react";
import Contexxho from "./Contexxho";

export type Icont = {
    name: string;
    rollNo: number | null
}

const iniV = {
    name: '',
    rollNo: null
}

const users = {
    name: 'Amit Kumar',
    rollNo: 7
}

export const there = createContext<Icont>(iniV)

export function CallCont() {

    const [use, setuser] = useState(users);
    const updateName = (name: string) => {
        setuser({...use, name: name});
    }
    return (
        <there.Provider value={use}>
            <button onClick={() => updateName('Ankit1')}>Update Name</button>
            <Contexxho />
        </there.Provider>
    )
}