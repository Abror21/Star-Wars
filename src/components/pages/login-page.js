import { Navigate } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
    if (isLoggedIn) {
        return <Navigate to="/"/>
    }
    return (
        <div className="bg-secondary d-flex flex-column align-items-center p-5 mt-3 rounded">
            <p className="fs-3">Login to see secret page!</p>
            <button className="btn btn-primary" onClick={onLogin}>
                Login
            </button>
        </div>
    )
}

export default LoginPage;