import { withSwapiService } from '../hoc-helpers';
import ItemDetails from '../item-details';
import { Record } from '../item-details';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='population' label='Population' />
            <Record field='diameter' label='Diameter' />
            <Record field='rotationPeriod' label='Rotation' />
        </ItemDetails>
    )
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImgUrl: swapiService.getPlanetImg
    }
}

export default withSwapiService(mapMethodToProps)(PlanetDetails);