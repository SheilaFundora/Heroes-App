import React from 'react';
import HeroeList from "../heroes/HeroeList";

const DcPage = () => {
    return (
        <div>
            <h1 className="mt-5 ms-5">DC</h1>
            <hr />
            <HeroeList publisher='DC Comics' />

        </div>
    );
};

export default DcPage;