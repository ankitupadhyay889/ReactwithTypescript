import React from 'react';

type pl = {
    value: string;
    onChange: any;
}

const Inpcus = (props: pl) => {

    return (
        <div>
            <form>
                <label> Enter name:  </label> 
                <input type="text" value={props.value} onChange={props.onChange} />
            </form>
        </div>
    );
};

export default Inpcus;