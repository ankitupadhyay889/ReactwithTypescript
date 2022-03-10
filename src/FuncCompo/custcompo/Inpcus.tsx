import React, { ChangeEvent, useState } from 'react';

type pp = {
    onClick: (() => void);
    values: React.InputHTMLAttributes<HTMLInputElement>;value?: string | number | readonly string[] | undefined
}

const Inpcus = () => {

    const [dt, setdt] = useState<pp>();

    const haC = (e: any) => {
        setdt(e.currentTarget.value)
    }

    return (
        <div>
            <form>
                <label> Enter name: </label> 
                {/* <input type="text" name="name" value={dt} onChange={haC} /> */}
            </form>
        </div>
    );
};

export default Inpcus;