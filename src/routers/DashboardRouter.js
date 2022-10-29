import React from 'react';
import {Navbar} from "../components/ui/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import MarvelPage from "../components/marvel/MarvelPage";
import DCPage from "../components/dc/DCPage";
import HeroesPage from "../components/heroes/HeroesPage";
import SearchPage from "../components/search/SearchPage";
import All from "../components/asociacion/All";

const DashboardRouter = () => {
    return (
        <div>
            <Navbar />

            <div className='container mt-2'>
                <Routes>
                    <Route exact path = "/Heroes-App/marvel" element = { <MarvelPage />} />
                    <Route exact path = "/Heroes-App/" element = { <All />} />
                    <Route exact path = "/Heroes-App/dc" element = { <DCPage />} />
                    <Route exact path = "/Heroes-App/search" element = { <SearchPage />} />
                    <Route exact path="/Heroes-App/hero/:heroeId" element={ <HeroesPage /> } />

                    <Route render={() => <Navigate to="/marvel" />} />
                </Routes>
            </div>
        </div>
    );
};


export default DashboardRouter;

//ruta hija del App Router


//al poner :heroeId, le estamos diciendo algo asi heroeID = al que sea su id, como que le damos el nombre
//a la variable que tendra id