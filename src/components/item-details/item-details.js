import React, { useState, useEffect } from 'react';
import ErrorButton from '../error-button/error-button';
import Spinner from '../spinner';
import './item-details.css';

const ItemDetails = ({ itemId, getData, getImgUrl, children }) => {
  const [item, setItem] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    updateItem();
  }, [itemId, getData, getImgUrl])

  const updateItem = () => {
    if (!itemId) {
      return;
    }
    getData(itemId)
      .then(item => {
        setItem(item);
        setImgUrl(getImgUrl(item))
      })
  }

  if (!item || itemId === undefined) {
    return;
  }
  if (item.id !== itemId) {
    return <Spinner />
  }
  const { name } = item;

  return (
    <div className="item-details card">
      <img className="item-image" src={imgUrl} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(
              children, child => {
                return React.cloneElement(child, { item });
              }
            )
          }
        </ul>
        <ErrorButton />
      </div>
    </div>
  )
}
export default ItemDetails;

const Record = ({ field, label, item }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  )
}

export { Record };
