import React from 'react';
import HeroeList from "../heroes/HeroeList";

const MarvelPage = () => {
    return (
        <div>
            <h1 className="mt-5 ms-5">Marvel</h1>
            <hr />
            <HeroeList publisher='Marvel Comics' />
        </div>
    );
};

export default MarvelPage;