import { Navigate } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
    if(isLoggedIn){
        return(
            <div className="bg-secondary d-flex justify-content-center align-items-center p-5 mt-3 rounded">
                <h3>This is secret page!</h3>
            </div>
        )
    }
    return <Navigate to="/login"/>
}

export default SecretPage;