import { withData } from "../hoc-helpers";
import ItemList from "../item-list";
import { withSwapiService, withChildFunction } from "../hoc-helpers";
import {compose} from "../hoc-helpers";


const renderItem = (i) => `${i.name}, (${i.gender}/${i.birthYear})`;
const renderDiamAndPop = (i) => `${i.name}, (${i.diameter}/${i.population})`;
const renderModelAndLength = (i) => `${i.name}, (${i.model}/${i.length})`;


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderItem)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunction(renderDiamAndPop)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(renderModelAndLength)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};