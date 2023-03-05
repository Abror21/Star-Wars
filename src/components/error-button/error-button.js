import React, { useState } from 'react'

const ErrorButton = () => {
  const [hasError, setHasError] = useState(false);
  const errorMaker = 0;
    if(hasError){
      errorMaker.error = 0
    }
    return (
      <button
        className='btn btn-danger error-button my-1'
        onClick={() => setHasError(true)}>Throw Error</button>
    )
}
export default ErrorButton;
