import React, { useState } from 'react';

const deF = [        
    { id: "1", value: "Ankit" },
    { id: "2", value: "Rahul" },
    { id: "3", value: "Mohit" },
    { id: "4", value: "Sanjay" }, 
];

// you also define obect in useState.

const Multiitem = () => {

    const [multi, setmulti] = useState<Array<any>>(deF)

    const addItems = (e:any) => {
        const item = deF.find((i) => !multi.includes(i));
        if(item){
            setmulti([...multi , item])
        }
    }
    const removeItem = (item:any) => {
        setmulti(multi.filter((i) => i !== item));
    }

    return (
        <div>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {multi.map((item) => (
                <li key={item.id}>
                    <button onClick={() => removeItem(item)}>Remove Item</button>
                    <label>{item.id}</label>
                    <input defaultValue={item.value}></input>
                </li>
                ))}
            </ul>

            <br/><br/>
            <button onClick={addItems}>Add Item</button>
        </div>
    );
};

export default Multiitem;