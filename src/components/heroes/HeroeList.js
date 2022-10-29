import React, {useMemo} from 'react';
import {getHeroesByPublisher} from "../../selectors/getHeroeByPublisher";
import HeroCard from "./HeroCard";

const HeroeList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    //memo para que solo cambie el etado de la funcion getHereroBy... cuando cambie su dependecnia publishr

    return (
        <div className="d-flex flex-wrap justify-content-around animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id} {...hero} /> //{...hero}decimos que mandemos todos los argumentos d hero
                ) )
            }
            
        </div>
    );
};

export default HeroeList;