import './error.css';
import icon from './error.png';

const Error = () => {
  return (
    <div className='error'>
        <img className='error__img' src={icon} alt="error icon" />
        <h5>Something has gone wrong!</h5>
        <span>lorem ajksdflk alskjdf salkjdf sldf lkajsd f.</span>
        <span>alksjd flaksjdf alskdjf aslkdj fasdf</span>
    </div>
  )
}

export default Error;
