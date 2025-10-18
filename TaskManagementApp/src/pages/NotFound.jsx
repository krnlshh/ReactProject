import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <div className="container mt-5">
            <div className="card shadow-lg border-0 text-center">
                <div className="card-body p-5">
                    <h1 className="display-1 text-danger">404</h1>
                    <h2 className="mb-4">Page Not Found</h2>
                    <p className="lead mb-4">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <Link to="/" className="btn btn-primary btn-lg">
                        🏠 Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;    