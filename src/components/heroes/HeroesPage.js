import React, {useMemo} from 'react';
import {useNavigate, useParams, Navigate, useLocation} from "react-router";
import {getHeroById} from "../../selectors/getHeroeById";


const HeroesPage = () => {
    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    if ( !hero ){
        return <Navigate to="/Heroe-App/" />
    }

    const {superhero, alter_ego, first_appearance, characters,publisher} = hero;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const handleReturn = () => {
        window.history.back();
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ `/assets/${ heroeId }.jpg` }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn ps-5">
                <h3> { superhero } </h3>

                <div className="mt-4 ms-3">
                    <ul className="list-group list-group-flush ps-0 ms-0">
                        <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                        <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                        <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                    </ul>

                    <h5 className="mt-4"> Characters </h5>
                    <p> { characters } </p>

                    <button className="btn btn-outline-info" onClick={handleReturn}>
                        Return
                    </button>
                </div>



            </div>

        </div>
    );
};

export default HeroesPage;