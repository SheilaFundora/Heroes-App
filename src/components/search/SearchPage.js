import React, {useMemo} from 'react';
import HeroCard from "../heroes/HeroCard";
import {useForm} from "../../hooks/useForm";
import { useNavigate} from "react-router";
import {getHeroesByName} from "../../selectors/getHeroesByName";
const queryString = require('query-string');


const SearchPage = () => {
    const navigation = useNavigate();

    const handleSearch = (e) =>{
        e.preventDefault();
        navigation(`/Heroes-App/search/?=${searchText}`);
    }

    const [formValues, handleInputChange] = useForm({searchText:'' });
    //custom hook que se encarga de devolver los valores escritos en el input y el metodo que hace que esos valores
    // vallan cambianod

    const {searchText} = formValues;
    //desesctructrando el formValues para sacar el valor

    const heroFiltrados = useMemo(() => getHeroesByName(searchText), [ searchText ]);

    return (
        <div className='mt-5'>
            <h1>Search Page</h1>
            <hr />

            <div className="row">

                <div className="col-5 mt-4">

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}

                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary mt-3"
                        >
                            Search...
                        </button>
                    </form>
                </div>


                <div className="col-7 mt-4">
                    {
                        (searchText ==='')
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (searchText !=='' && heroFiltrados.length === 0 )
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with { searchText }
                        </div>
                    }
                    {
                        heroFiltrados.map( hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default SearchPage;