import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    //si mi publisher no contine los valores q estan en validPublisher lanza una excepcion
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    // retorna los heroes los cuales su publisher es igual a la del publisher pasado
    return heroes.filter( hero => hero.publisher === publisher );

}
