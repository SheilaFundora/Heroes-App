import React from 'react';
import {Link} from "react-router-dom";

const HeroCard = ( { id, superhero, alter_ego, first_appearance, characters} ) => {
    return (
        <div className="card mt-5" style={ {maxWidth: 430}}>
            <div className="row">
                <div className="col-md-4">
                    <img src={ `./assets/${ id }.jpg` } className="card-img" alt={ superhero } />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> { superhero } </h5>
                        <p className="card-text"> { alter_ego} </p>

                        {
                            ( alter_ego !== characters )
                            && <p className="card-text"> { characters } </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> { first_appearance } </small>
                        </p>

                        <Link to={ `/hero/${ id }` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroCard;