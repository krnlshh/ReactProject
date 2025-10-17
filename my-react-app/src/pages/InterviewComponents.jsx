import QuestionAndAnswer from "../Interview_Example/QuestionAndAnswer";
import { Link } from "react-router-dom";


const InterviewComponents = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <h2 className="mb-0">
                                <i className="bi bi-question-circle me-2"></i>
                                React Interview Questions & Practice
                            </h2>
                        </div>
                        <div className="card-body bg-light">
                            <QuestionAndAnswer/>
                            
                            {/* Link to Task Management Challenge */}
                            <div className="text-center mt-5 mb-4">
                                <div className="alert alert-info">
                                    <h4 className="alert-heading">🎯 Ready for a Practical Challenge?</h4>
                                    <p className="mb-3">Put your React knowledge to the test with a real-world project!</p>
                                    <Link to="/task-management" className="btn btn-info btn-lg">
                                        🚀 Go to Task Management Challenge
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterviewComponents