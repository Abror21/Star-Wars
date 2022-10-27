import Row from '../row';
import { PersonList } from "../sw-components";
import { PersonDetails } from "../sw-components";
import { useParams, useNavigate } from "react-router-dom";

const PeoplePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <Row
            left={<PersonList onItemSelect={id => navigate(`/people/${id}`)} />}
            right={<PersonDetails itemId={id} />}
        />
    )
}
export default PeoplePage;