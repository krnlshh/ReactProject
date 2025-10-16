import { useState } from "react"

const MiniProject = () => {

    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">RGB Color Picker</h5>
                        </div>
                        <div className="card-body">
                            {/* Red Slider */}
                            <div className="mb-4">
                                <label className="form-label fw-bold">
                                    <span className="badge bg-danger me-2">R</span>
                                    Red: {r}
                                </label>
                                <input 
                                    onChange={(e) => setR(e.target.value)} 
                                    type="range" 
                                    className="form-range" 
                                    min={0} 
                                    max={255}
                                    value={r}
                                />
                            </div>

                            {/* Green Slider */}
                            <div className="mb-4">
                                <label className="form-label fw-bold">
                                    <span className="badge bg-success me-2">G</span>
                                    Green: {g}
                                </label>
                                <input 
                                    onChange={(e) => setG(e.target.value)} 
                                    type="range" 
                                    className="form-range" 
                                    min={0} 
                                    max={255}
                                    value={g}
                                />
                            </div>

                            {/* Blue Slider */}
                            <div className="mb-4">
                                <label className="form-label fw-bold">
                                    <span className="badge bg-info me-2">B</span>
                                    Blue: {b}
                                </label>
                                <input 
                                    onChange={(e) => setB(e.target.value)} 
                                    type="range" 
                                    className="form-range" 
                                    min={0} 
                                    max={255}
                                    value={b}
                                />
                            </div>

                            {/* Color Display Box */}
                            <div className="text-center">
                                <div 
                                    className="mx-auto rounded shadow-sm"
                                    style={{
                                        backgroundColor: `rgb(${r}, ${g}, ${b})`,
                                        width: '100%',
                                        height: '200px',
                                        border: '3px solid #dee2e6',
                                        transition: 'background-color 0.1s ease'
                                    }}
                                >
                                </div>
                                <p className="mt-3 mb-0">
                                    <strong>RGB Value:</strong> 
                                    <span className="badge bg-dark ms-2">
                                        rgb({r}, {g}, {b})
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MiniProject