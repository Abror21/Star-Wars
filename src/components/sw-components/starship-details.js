import ItemDetails from '../item-details';
import { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import { useParams } from 'react-router-dom';

const StarshipDetails = (props) => {
    const { id } = useParams();
    return (
        <ItemDetails {...props} itemId={id}>
            <Record field='model' label='Model' />
            <Record field='length' label='Length' />
            <Record field='Cost' label='costInCredits' />
        </ItemDetails>
    )
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImgUrl: swapiService.getStarshipImg
    }
}

export default withSwapiService(mapMethodToProps)(StarshipDetails);