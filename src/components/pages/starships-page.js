import { StarshipList } from "../sw-components";
import { useNavigate } from "react-router-dom";

const StarshipsPage = () => {
    const navigate = useNavigate();

    return <StarshipList onItemSelect={id => navigate(id)} />
}

export default StarshipsPage;
