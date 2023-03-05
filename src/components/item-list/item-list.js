import PropTypes from 'prop-types';
import './item-list.css';


const ItemList = (props) => {

  const getPeopleName = (arr) => {
    const { onItemSelect, children } = props;
    return arr.map(item => {
      const label = children(item);
      return <li onClick={() => onItemSelect(item.id)} key={item.id} className="list-group-item">{label}</li>
    })
  }
    const {data, loadMessage, errorMessage, loading} = props;
    const people = (!loading && data) ? getPeopleName(data) : null;

    return (
      <ul className="item-list list-group">
        {loadMessage}
        {people}
        {errorMessage}
      </ul>
    );
}
ItemList.defaultProps = {
  onItemSelect: () => {},
}

ItemList.propTypes = {
  onItemSelect: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList;

