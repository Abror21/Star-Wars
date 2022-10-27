import { useState } from "react";
import Row from '../row';
import { PlanetList } from "../sw-components";
import { PlanetDetails } from "../sw-components";

const PlanetsPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const onSelectItem = (selectedItem) => {
        setSelectedItem(selectedItem)
    }

    return (
        <Row
            left={<PlanetList onItemSelect={onSelectItem} />}
            right={<PlanetDetails itemId={selectedItem} />}
        />
    )
}
export default PlanetsPage;