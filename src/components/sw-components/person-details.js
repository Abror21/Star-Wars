import ItemDetails from '../item-details';
import { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />
            <Record field='birthYear' label='Birth Year' />
        </ItemDetails>
    )
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImgUrl: swapiService.getPersonImg
    }
}

export default withSwapiService(mapMethodToProps)(PersonDetails);