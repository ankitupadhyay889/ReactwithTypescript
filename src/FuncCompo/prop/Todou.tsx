import React, { useState } from 'react';

type Todo = {
    id: number;
    value: string;
}

let count = 1

const Todou = () => {
    const [item, setitem] = useState<Todo[]>([{id: 0 , value: ''}])

    const hanCha = (value: string, id: Todo['id']) => {
        setitem(pre => pre.map(it=> it.id === id ? {...it, value} : it))
    }

    const hanA = (ind: number) => {
        const newI = {id: count++ , value: ''}
        setitem(pre => [...pre.slice(0 , ind + 1), newI, ...pre.slice(ind + 1)])
    }

    return (
        <div>
            {

                item.map((it , ind) => {
                    return(
                        <div key={ind}>
                            <input type="text" value={it.value} onChange={e => hanCha(e.currentTarget.value, it.id)} />
                            <button onClick={() => hanA(ind)}> Add </button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Todou;