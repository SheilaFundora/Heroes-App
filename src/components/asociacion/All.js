import React from 'react';
import HeroeList from "../heroes/HeroeList";

const All = () => {
    return (
        <div>
            <h1 className="mt-5 ms-5">DC Comics</h1>
            <hr />
            <HeroeList publisher='DC Comics' />
            <h1 className="mt-5 ms-5">Marvel Comics</h1>
            <hr />
            <HeroeList publisher='Marvel Comics' />

        </div>
    );
};

export default All;