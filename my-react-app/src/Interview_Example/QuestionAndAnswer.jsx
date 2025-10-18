import { useState } from "react";

const QuestionAndAnswer = () => {
    const [showAnswer, setShowAnswer] = useState({});

    const toggleAnswer = (id) => {
        setShowAnswer(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return(
        <div className="container-fluid p-4">
            {/* Question 1: Array Methods */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q1</span>
                        Describe array, how we can add in start, middle and last?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>Describe array, how we can add in start, middle and last?</li>
                            <li>What is Mutating?</li>
                            <li>What is Non-Mutating?</li>
                            <li>What are copy types?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(1)}
                    >
                        {showAnswer[1] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[1] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">📌 Adding Elements to Array:</h6>
                            <ul className="list-unstyled ms-3">
                                <li className="mb-2">
                                    <code className="bg-dark text-warning p-2 rounded">arr.unshift('a')</code> 
                                    <span className="ms-2">- Add at start</span>
                                </li>
                                <li className="mb-2">
                                    <code className="bg-dark text-warning p-2 rounded">arr.splice(2, 0, 'a')</code> 
                                    <span className="ms-2">- Add at any position</span>
                                </li>
                                <li className="mb-2">
                                    <code className="bg-dark text-warning p-2 rounded">arr.push('a')</code> 
                                    <span className="ms-2">- Add at end</span>
                                </li>
                            </ul>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="p-3 bg-danger bg-opacity-10 rounded">
                                        <h6 className="text-danger">❌ Mutating (Changes Original)</h6>
                                        <p className="small mb-0">Modifies the original array</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-success bg-opacity-10 rounded">
                                        <h6 className="text-success">✅ Non-Mutating (Creates New Array)</h6>
                                        <p className="small mb-0">Returns a new array, original unchanged</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-3"/>

                            <h6 className="text-primary">📌 Copy Types:</h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="p-3 bg-warning bg-opacity-10 rounded">
                                        <h6 className="text-warning">⚠️ Shallow Copy</h6>
                                        <p className="small mb-0">Copies only first level. Nested objects/arrays still reference original.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-info bg-opacity-10 rounded">
                                        <h6 className="text-info">🔒 Deep Copy</h6>
                                        <p className="small mb-0">Copies everything, including nested. Completely independent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 2: How React Works */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q2</span>
                        Explain React?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">Explain React? How React Works? What is Virtual DOM? What is Reconciliation?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-danger btn-sm mb-3" 
                        onClick={() => toggleAnswer(2)}
                    >
                        {showAnswer[2] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[2] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🎯 What is React?</h6>
                            <ul>
                                <li>✅ React is a JavaScript library for building user interfaces</li>
                                <li>✅ React is not a full framework (like Angular) - focuses on UI layer</li>
                                <li>✅ React uses component-based architecture (not MVC)</li>
                                <li>✅ React maintains a tree structure for you</li>
                            </ul>

                            <h6 className="text-primary mt-3">🎯 How React Works?</h6>
                            <div className="bg-info bg-opacity-10 p-3 rounded">
                                <p className="mb-2">React keeps a copy of your UI in memory (called <strong>Virtual DOM</strong>).</p>
                                <p className="mb-2">When something changes, React:</p>
                                <ol>
                                    <li>Updates the Virtual DOM first</li>
                                    <li>Compares it with the Real DOM</li>
                                    <li>Only updates what changed in the Real DOM</li>
                                </ol>
                                <p className="mb-0"><em>Example: If only image alt name changes, only that updates!</em></p>
                            </div>

                            <h6 className="text-primary mt-3">🎯 Why Virtual DOM?</h6>
                            <ul>
                                <li>Real DOM is slow to update</li>
                                <li>Virtual DOM is fast (just JavaScript objects)</li>
                                <li>React compares Virtual DOM (fast) before updating Real DOM (slow)</li>
                            </ul>

                            <h6 className="text-primary mt-3">🎯 What is Reconciliation?</h6>
                            <div className="bg-success bg-opacity-10 p-3 rounded">
                                <p className="mb-0">
                                    <strong>Reconciliation</strong> is the process of comparing (diffing) old and new Virtual DOM 
                                    to find what changed. When a component re-renders due to state or props update, 
                                    React decides which parts of the Real DOM need to be updated.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 3: Real DOM vs Virtual DOM */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q3</span>
                        Difference between Real DOM vs Virtual DOM?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the difference between Real DOM vs Virtual DOM?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-info btn-sm mb-3" 
                        onClick={() => toggleAnswer(3)}
                    >
                        {showAnswer[3] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[3] && (
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Feature</th>
                                        <th>Real DOM</th>
                                        <th>Virtual DOM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Location</strong></td>
                                        <td>Lives in the browser</td>
                                        <td>Lives in JavaScript memory</td>
                                    </tr>
                                    <tr>
                                        <td><strong>What It Is</strong></td>
                                        <td>What you see on screen</td>
                                        <td>Lightweight copy</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Structure</strong></td>
                                        <td>Heavy and complex</td>
                                        <td>Just a simple object</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Speed</strong></td>
                                        <td>Slow to update</td>
                                        <td>Fast (JavaScript)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 4: Advantages of React */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q4</span>
                        Advantages of React?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are the advantages of using React?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-success btn-sm mb-3" 
                        onClick={() => toggleAnswer(4)}
                    >
                        {showAnswer[4] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[4] && (
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-group">
                                    <li className="list-group-item">✅ Component-Based Architecture</li>
                                    <li className="list-group-item">✅ Virtual DOM (Fast Performance)</li>
                                    <li className="list-group-item">✅ Reusable Components</li>
                                    <li className="list-group-item">✅ One-Way Data Flow</li>
                                    <li className="list-group-item">✅ Large Community & Ecosystem</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group">
                                    <li className="list-group-item">✅ Easy to Learn</li>
                                    <li className="list-group-item">✅ SEO Friendly (with SSR)</li>
                                    <li className="list-group-item">✅ React Native (Mobile Apps)</li>
                                    <li className="list-group-item">✅ Strong Developer Tools</li>
                                    <li className="list-group-item">✅ Backed by Meta (Facebook)</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 5: Limitations of React */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q5</span>
                        Limitation of React?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are the limitations of React?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-warning btn-sm mb-3" 
                        onClick={() => toggleAnswer(5)}
                    >
                        {showAnswer[5] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[5] && (
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-danger">❌ Not a Full Framework</li>
                                    <li className="list-group-item list-group-item-danger">❌ JSX Can Be Confusing</li>
                                    <li className="list-group-item list-group-item-danger">❌ Fast-Paced Updates</li>
                                    <li className="list-group-item list-group-item-danger">❌ Poor Documentation (Sometimes)</li>
                                    <li className="list-group-item list-group-item-danger">❌ SEO Issues (Client-Side Rendering)</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-danger">❌ Large Bundle Size</li>
                                    <li className="list-group-item list-group-item-danger">❌ Learning Curve for Beginners</li>
                                    <li className="list-group-item list-group-item-danger">❌ Too Many Choices</li>
                                    <li className="list-group-item list-group-item-danger">❌ Only View Layer</li>
                                    <li className="list-group-item list-group-item-danger">❌ Performance Issues with Large Lists</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 6: Can Browser Read JSX? */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q6</span>
                        Can Browser Read JSX Directly?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">Can browser read JSX directly?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-secondary btn-sm mb-3" 
                        onClick={() => toggleAnswer(6)}
                    >
                        {showAnswer[6] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[6] && (
                        <div className="alert alert-warning">
                            <h6 className="alert-heading">❌ No, browsers cannot read JSX directly!</h6>
                            <hr/>
                            <ul className="mb-0">
                                <li>JSX is not valid JavaScript - it's a syntax extension</li>
                                <li>JSX must be converted to regular JavaScript</li>
                                <li>Example: <code>&lt;h1&gt;Hello&lt;/h1&gt;</code> gets converted to <code>React.createElement('h1', null, 'Hello')</code></li>
                                <li>Build tools like Webpack, Vite, or Create React App automatically handle this conversion</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 7: What is State? */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q7</span>
                        What is State in React?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is state in React?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-danger btn-sm mb-3" 
                        onClick={() => toggleAnswer(7)}
                    >
                        {showAnswer[7] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[7] && (
                        <div className="alert alert-info">
                            <p className="mb-0">
                                <strong>State</strong> is a JavaScript object that stores data that can change over time in a component. 
                                When state changes, React re-renders the component to reflect those changes.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 8: How to Update State? */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q8</span>
                        How Can You Update the State of a Component?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">How can you update the state of a component?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-warning btn-sm mb-3" 
                        onClick={() => toggleAnswer(8)}
                    >
                        {showAnswer[8] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[8] && (
                        <div className="alert alert-success">
                            <p>Use the <code>setState</code> function (from <code>useState</code> hook):</p>
                            <pre className="bg-dark text-light p-3 rounded mb-0">
{`const [count, setCount] = useState(0);

// Update state
setCount(count + 1);

// Or use function form
setCount(prev => prev + 1);`}
                            </pre>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 9: What are Props? */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q9</span>
                        What are Props?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are props?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(9)}
                    >
                        {showAnswer[9] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[9] && (
                        <div className="alert alert-primary">
                            <p>
                                <strong>Props</strong> (short for "properties") are arguments passed from a parent component 
                                to a child component. They allow you to pass data and functions between components.
                            </p>
                            <p className="mb-0"><em>💡 Think of props like function parameters!</em></p>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 10: Props vs State */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q10</span>
                        Difference Between Props and State
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the difference between props and state?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-info btn-sm mb-3" 
                        onClick={() => toggleAnswer(10)}
                    >
                        {showAnswer[10] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[10] && (
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead className="table-primary">
                                    <tr>
                                        <th>Feature</th>
                                        <th>Props</th>
                                        <th>State</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Definition</strong></td>
                                        <td>Data passed FROM parent</td>
                                        <td>Data managed WITHIN component</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Mutability</strong></td>
                                        <td>Immutable (read-only)</td>
                                        <td>Mutable (can change)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Ownership</strong></td>
                                        <td>Parent owns it</td>
                                        <td>Component owns it</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Direction</strong></td>
                                        <td>Top-down (parent to child)</td>
                                        <td>Internal (component itself)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Changes</strong></td>
                                        <td>Parent changes them</td>
                                        <td>Component changes itself</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Purpose</strong></td>
                                        <td>Pass data & functions</td>
                                        <td>Store dynamic data</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Like in JS</strong></td>
                                        <td>Function parameters</td>
                                        <td>Function variables</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Update Method</strong></td>
                                        <td>Can't update (read-only)</td>
                                        <td>Use setState()</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Initial Value</strong></td>
                                        <td>Set by parent</td>
                                        <td>Set by component</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Re-render</strong></td>
                                        <td>Yes (when parent updates)</td>
                                        <td>Yes (when setState called)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 11: Component Lifecycle Phases */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q11</span>
                        What are the Different Phases of React Component's Lifecycle?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are the different phases of React component's lifecycle?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-success btn-sm mb-3" 
                        onClick={() => toggleAnswer(11)}
                    >
                        {showAnswer[11] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[11] && (
                        <div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <div className="card text-white bg-success">
                                        <div className="card-body">
                                            <h5 className="card-title">🟢 MOUNTING (Birth)</h5>
                                            <ul className="mb-0">
                                                <li>Component is created</li>
                                                <li>Added to DOM</li>
                                                <li>Rendered for first time</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-white bg-primary">
                                        <div className="card-body">
                                            <h5 className="card-title">🔵 UPDATING (Life)</h5>
                                            <ul className="mb-0">
                                                <li>Props change</li>
                                                <li>State change</li>
                                                <li>Parent re-renders</li>
                                                <li>Component re-renders</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-white bg-danger">
                                        <div className="card-body">
                                            <h5 className="card-title">🔴 UNMOUNTING (Death)</h5>
                                            <ul className="mb-0">
                                                <li>Component is removed</li>
                                                <li>Cleanup happens</li>
                                                <li>Removed from DOM</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info">
                                <strong>Summary:</strong> Every React component goes through these 3 phases - 
                                it's born (Mounting), lives and changes (Updating), and eventually dies (Unmounting).
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 12: React Fiber */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q12</span>
                        What is React Fiber?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is React Fiber? How does it improve React performance?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(12)}
                    >
                        {showAnswer[12] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[12] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🧵 What is React Fiber?</h6>
                            <p><strong>React Fiber</strong> is React's new reconciliation engine (from React 16+). It's like React's "brain upgrade"!</p>
                            
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="p-3 bg-danger bg-opacity-10 rounded mb-3">
                                        <h6 className="text-danger">❌ Old Stack Reconciler</h6>
                                        <ul className="small mb-0">
                                            <li>Works synchronously (all at once)</li>
                                            <li>Blocks main thread</li>
                                            <li>Can't pause/resume</li>
                                            <li>UI can freeze on big updates</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-success bg-opacity-10 rounded mb-3">
                                        <h6 className="text-success">✅ New Fiber Reconciler</h6>
                                        <ul className="small mb-0">
                                            <li>Works asynchronously (in chunks)</li>
                                            <li>Can pause and resume work</li>
                                            <li>Prioritizes important updates</li>
                                            <li>Smooth UI experience</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-3">🎯 Key Benefits:</h6>
                            <ul>
                                <li><strong>Time Slicing:</strong> Break work into small chunks</li>
                                <li><strong>Priority Updates:</strong> Handle urgent updates first</li>
                                <li><strong>Better Performance:</strong> No more frozen UI</li>
                                <li><strong>Suspense & Concurrent Mode:</strong> Enables advanced features</li>
                            </ul>

                            <div className="bg-info bg-opacity-10 p-3 rounded mt-3">
                                <p className="mb-0"><strong>Simple Analogy:</strong> Old React = cook entire meal before serving. Fiber = cook and serve dishes one by one, prioritizing hungry guests! 🍽️</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 13: useMemo vs useCallback */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q13</span>
                        Difference: useMemo vs useCallback
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the difference between useMemo and useCallback? When to use each?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-danger btn-sm mb-3" 
                        onClick={() => toggleAnswer(13)}
                    >
                        {showAnswer[13] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[13] && (
                        <div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Feature</th>
                                            <th>useMemo</th>
                                            <th>useCallback</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Returns</strong></td>
                                            <td>Memoized <strong>VALUE</strong></td>
                                            <td>Memoized <strong>FUNCTION</strong></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Use Case</strong></td>
                                            <td>Expensive calculations</td>
                                            <td>Prevent function re-creation</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Example</strong></td>
                                            <td>Filtering/sorting large arrays</td>
                                            <td>Event handlers passed to child</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Syntax</strong></td>
                                            <td><code>useMemo(() =&gt; value, [deps])</code></td>
                                            <td><code>useCallback(() =&gt; {"{}"}, [deps])</code></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card border-primary">
                                        <div className="card-header bg-primary text-white">
                                            <strong>useMemo Example</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-0 small">
{`// Memoize expensive calculation
const total = useMemo(() => {
  return items.reduce(
    (sum, item) => sum + item.price, 0
  );
}, [items]);

// total recalculates only when 
// items change`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>useCallback Example</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-0 small">
{`// Memoize function reference
const handleClick = useCallback(() => {
  console.log('Clicked!');
}, []);

// Function reference stays same
// Child won't re-render unnecessarily`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Remember:</strong> useMemo = cache result, useCallback = cache function itself!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 14: React.memo vs useMemo */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q14</span>
                        Difference: React.memo vs useMemo
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the difference between React.memo and useMemo?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-info btn-sm mb-3" 
                        onClick={() => toggleAnswer(14)}
                    >
                        {showAnswer[14] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[14] && (
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card border-warning mb-3">
                                        <div className="card-header bg-warning">
                                            <strong>React.memo</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>Higher-Order Component (HOC)</li>
                                                <li>Wraps entire component</li>
                                                <li>Prevents component re-render</li>
                                                <li>Compares props (shallow)</li>
                                                <li>Used outside component</li>
                                            </ul>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 mb-0 small">
{`const MyComponent = React.memo(
  (props) => {
    return <div>{props.name}</div>
  }
);`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-info mb-3">
                                        <div className="card-header bg-info text-white">
                                            <strong>useMemo</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>React Hook</li>
                                                <li>Memoizes specific value</li>
                                                <li>Prevents expensive calculations</li>
                                                <li>Uses dependency array</li>
                                                <li>Used inside component</li>
                                            </ul>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 mb-0 small">
{`const MyComponent = () => {
  const value = useMemo(() => {
    return expensiveCalc();
  }, [dependency]);
};`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-success">
                                <strong>🎯 Key Difference:</strong><br/>
                                <strong>React.memo:</strong> "Don't re-render THIS component unless props change"<br/>
                                <strong>useMemo:</strong> "Don't recalculate THIS value unless dependencies change"
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 15: Error Boundaries */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q15</span>
                        What are Error Boundaries?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are Error Boundaries in React? How do they work?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-success btn-sm mb-3" 
                        onClick={() => toggleAnswer(15)}
                    >
                        {showAnswer[15] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[15] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🛡️ What are Error Boundaries?</h6>
                            <p><strong>Error Boundaries</strong> are React components that catch JavaScript errors in their child component tree and display a fallback UI.</p>
                            
                            <div className="bg-danger bg-opacity-10 p-3 rounded mb-3">
                                <h6 className="text-danger">🚨 Without Error Boundary:</h6>
                                <p className="mb-0">One component crashes → Entire app breaks → White screen 💔</p>
                            </div>

                            <div className="bg-success bg-opacity-10 p-3 rounded mb-3">
                                <h6 className="text-success">✅ With Error Boundary:</h6>
                                <p className="mb-0">One component crashes → Show fallback UI → Rest of app works fine 🎉</p>
                            </div>

                            <h6 className="text-primary mt-3">📌 Error Boundaries Catch:</h6>
                            <ul>
                                <li>✅ Errors during rendering</li>
                                <li>✅ Errors in lifecycle methods</li>
                                <li>✅ Errors in constructors</li>
                            </ul>

                            <h6 className="text-primary mt-3">📌 Error Boundaries DON'T Catch:</h6>
                            <ul>
                                <li>❌ Event handlers (use try-catch)</li>
                                <li>❌ Async code (setTimeout, promises)</li>
                                <li>❌ Server-side rendering errors</li>
                                <li>❌ Errors in Error Boundary itself</li>
                            </ul>

                            <pre className="bg-dark text-light p-3 rounded mt-3">
{`class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

// Usage:
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`}
                            </pre>

                            <div className="alert alert-warning mt-3">
                                <strong>⚠️ Note:</strong> Error Boundaries must be CLASS components (no Hook equivalent yet)
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 16: Code Splitting */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q16</span>
                        What is Code Splitting?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is Code Splitting in React? How to implement it?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-warning btn-sm mb-3" 
                        onClick={() => toggleAnswer(16)}
                    >
                        {showAnswer[16] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[16] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">📦 What is Code Splitting?</h6>
                            <p><strong>Code Splitting</strong> = Breaking your bundle into smaller chunks that load on demand (lazy loading).</p>
                            
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="p-3 bg-danger bg-opacity-10 rounded">
                                        <h6 className="text-danger">❌ Without Code Splitting</h6>
                                        <p className="small mb-2">Load EVERYTHING at once:</p>
                                        <div className="text-center">
                                            <div className="badge bg-danger" style={{fontSize: '2rem'}}>📦</div>
                                            <p className="small mt-2">bundle.js (5MB) 🐌<br/>Slow initial load!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-success bg-opacity-10 rounded">
                                        <h6 className="text-success">✅ With Code Splitting</h6>
                                        <p className="small mb-2">Load what you need:</p>
                                        <div className="text-center">
                                            <div>
                                                <span className="badge bg-success mx-1">📦</span>
                                                <span className="badge bg-success mx-1">📦</span>
                                                <span className="badge bg-success mx-1">📦</span>
                                            </div>
                                            <p className="small mt-2">main.js (1MB) ⚡<br/>Fast initial load!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-4">🎯 Implementation Methods:</h6>
                            
                            <div className="mb-3">
                                <strong>1. React.lazy() + Suspense:</strong>
                                <pre className="bg-dark text-light p-3 rounded mt-2">
{`// Lazy load component
const Dashboard = React.lazy(() => 
  import('./Dashboard')
);

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Dashboard />
</Suspense>`}
                                </pre>
                            </div>

                            <div className="mb-3">
                                <strong>2. Route-based splitting:</strong>
                                <pre className="bg-dark text-light p-3 rounded mt-2">
{`const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Suspense>`}
                                </pre>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Benefits:</strong> Faster initial load, better performance, load features on demand!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 17: Custom Hooks */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q17</span>
                        What are Custom Hooks?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are Custom Hooks? Why and how to create them?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-secondary btn-sm mb-3" 
                        onClick={() => toggleAnswer(17)}
                    >
                        {showAnswer[17] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[17] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🎣 What are Custom Hooks?</h6>
                            <p><strong>Custom Hooks</strong> are JavaScript functions that use React Hooks and let you reuse stateful logic across components.</p>
                            
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="p-3 bg-warning bg-opacity-10 rounded">
                                        <h6 className="text-warning">📌 Rules:</h6>
                                        <ul className="small mb-0">
                                            <li>Must start with "use"</li>
                                            <li>Can call other Hooks</li>
                                            <li>Reusable across components</li>
                                            <li>Share logic, not state</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-info bg-opacity-10 rounded">
                                        <h6 className="text-info">🎯 Benefits:</h6>
                                        <ul className="small mb-0">
                                            <li>Reusable logic</li>
                                            <li>Clean code</li>
                                            <li>Easy to test</li>
                                            <li>Better organization</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-4">💡 Example: useFetch Hook</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Create Custom Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Use Custom Hook
function UserList() {
  const { data, loading, error } = 
    useFetch('/api/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return <div>{data}</div>;
}`}
                            </pre>

                            <div className="alert alert-success mt-3">
                                <strong>🎉 Result:</strong> Write once, use everywhere! No code duplication! 🚀
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 18: Higher-Order Components */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q18</span>
                        What are Higher-Order Components (HOC)?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are Higher-Order Components (HOC)? How do they work?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-danger btn-sm mb-3" 
                        onClick={() => toggleAnswer(18)}
                    >
                        {showAnswer[18] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[18] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🎁 What is HOC?</h6>
                            <p><strong>Higher-Order Component (HOC)</strong> is a function that takes a component and returns a new enhanced component.</p>
                            
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <strong>Formula:</strong><br/>
                                <code>HOC = (Component) =&gt; EnhancedComponent</code><br/>
                                <em className="small">Think of it as "component wrapper" or "component decorator"</em>
                            </div>

                            <h6 className="text-primary mt-3">🎯 Visual Flow:</h6>
                            <div className="text-center p-3 bg-light rounded mb-3">
                                <div>📦 Normal Component</div>
                                <div className="my-2">⬇️</div>
                                <div className="badge bg-primary" style={{fontSize: '1.2rem'}}>HOC Wraps It</div>
                                <div className="my-2">⬇️</div>
                                <div>🎁 Enhanced Component (with extra powers!)</div>
                            </div>

                            <h6 className="text-primary mt-3">💡 Example: withAuth HOC</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Create HOC
function withAuth(Component) {
  return function EnhancedComponent(props) {
    const isLoggedIn = checkAuth();
    
    if (!isLoggedIn) {
      return <div>Please login!</div>;
    }
    
    return <Component {...props} />;
  };
}

// Use HOC
const Dashboard = () => <h1>Dashboard</h1>;
const ProtectedDashboard = withAuth(Dashboard);

// Now Dashboard needs login!
<ProtectedDashboard />`}
                            </pre>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="p-3 bg-success bg-opacity-10 rounded">
                                        <h6 className="text-success">✅ Use Cases:</h6>
                                        <ul className="small mb-0">
                                            <li>Authentication checks</li>
                                            <li>Logging/Analytics</li>
                                            <li>Data fetching</li>
                                            <li>Props manipulation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-warning bg-opacity-10 rounded">
                                        <h6 className="text-warning">⚠️ Alternatives:</h6>
                                        <ul className="small mb-0">
                                            <li>Custom Hooks (preferred now)</li>
                                            <li>Render Props</li>
                                            <li>Context API</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Modern React:</strong> Custom Hooks are now preferred over HOCs for most use cases!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 19: Render Props */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q19</span>
                        What is Render Props Pattern?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the Render Props pattern in React? How does it work?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-warning btn-sm mb-3" 
                        onClick={() => toggleAnswer(19)}
                    >
                        {showAnswer[19] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[19] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🎨 What is Render Props?</h6>
                            <p><strong>Render Props</strong> is a technique where a component's prop is a function that returns React elements.</p>
                            
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <strong>Simple Explanation:</strong><br/>
                                Instead of passing data as props, you pass a <strong>function</strong> that decides <strong>how to render</strong> that data!
                            </div>

                            <h6 className="text-primary mt-3">💡 Example: Mouse Tracker</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Component with Render Prop
function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// Usage 1: Show coordinates
<Mouse render={({ x, y }) => (
  <h1>Mouse at ({x}, {y})</h1>
)} />

// Usage 2: Follow mouse with cat
<Mouse render={({ x, y }) => (
  <img src="cat.jpg" 
    style={{ left: x, top: y }} />
)} />`}
                            </pre>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="p-3 bg-success bg-opacity-10 rounded">
                                        <h6 className="text-success">✅ Benefits:</h6>
                                        <ul className="small mb-0">
                                            <li>Highly flexible</li>
                                            <li>Reusable logic</li>
                                            <li>Clear data flow</li>
                                            <li>No naming conflicts</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-danger bg-opacity-10 rounded">
                                        <h6 className="text-danger">❌ Drawbacks:</h6>
                                        <ul className="small mb-0">
                                            <li>Callback hell (nested)</li>
                                            <li>Verbose syntax</li>
                                            <li>Performance concerns</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>💡 Alternative:</strong> Can also use <code>children</code> as a function (same concept!)
                                <pre className="bg-dark text-light p-2 rounded mt-2 mb-0">
{`<Mouse>
  {({ x, y }) => <h1>({x}, {y})</h1>}
</Mouse>`}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 20: Controlled vs Uncontrolled Components */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q20</span>
                        Controlled vs Uncontrolled Components
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the difference between Controlled and Uncontrolled Components?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(20)}
                    >
                        {showAnswer[20] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[20] && (
                        <div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Feature</th>
                                            <th>Controlled Component</th>
                                            <th>Uncontrolled Component</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Data Source</strong></td>
                                            <td>React State</td>
                                            <td>DOM (Real DOM)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Who Controls?</strong></td>
                                            <td>React controls value</td>
                                            <td>DOM controls value</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Access Value</strong></td>
                                            <td>From state variable</td>
                                            <td>Using ref</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Update Value</strong></td>
                                            <td>onChange + setState</td>
                                            <td>Direct DOM access</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Validation</strong></td>
                                            <td>Easy (on every change)</td>
                                            <td>Manual (on submit)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Recommended?</strong></td>
                                            <td>✅ Yes (preferred)</td>
                                            <td>⚠️ Sometimes (simple forms)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>✅ Controlled Component</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-2 small">
{`function Form() {
  const [name, setName] = useState('');

  return (
    <input
      value={name}
      onChange={(e) => 
        setName(e.target.value)
      }
    />
  );
}
// React controls the value`}
                                            </pre>
                                            <div className="alert alert-success mb-0 small">
                                                <strong>Benefits:</strong> Real-time validation, conditional rendering, instant feedback
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-warning">
                                        <div className="card-header bg-warning">
                                            <strong>⚠️ Uncontrolled Component</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-2 small">
{`function Form() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input ref={inputRef} />;
}
// DOM controls the value`}
                                            </pre>
                                            <div className="alert alert-warning mb-0 small">
                                                <strong>Use Case:</strong> Simple forms, file inputs, integrating with non-React code
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>🎯 Rule of Thumb:</strong> Use <strong>Controlled</strong> for most forms. Use <strong>Uncontrolled</strong> for simple cases or file inputs.
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 21: What is Context API */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                    <h5 className="text-white mb-0">
                        <span className="badge bg-light text-dark me-2">Q21</span>
                        What is Context API?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is Context API in React? Why and when to use it?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(21)}
                    >
                        {showAnswer[21] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[21] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🌐 What is Context API?</h6>
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-0">
                                    <strong>Context API</strong> is React's built-in feature to share data (state) across 
                                    multiple components without passing props through every level. It's like a "global storage" 
                                    that any component can access!
                                </p>
                            </div>

                            <h6 className="text-primary mt-3">🎯 The Problem It Solves:</h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="p-3 bg-danger bg-opacity-10 rounded">
                                        <h6 className="text-danger">❌ Without Context (Prop Drilling)</h6>
                                        <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`<App>
  <Header user={user} />
    <Main user={user} />
      <Profile user={user} />
        <Avatar user={user} />

// Pass props 4 levels deep! 😫`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-success bg-opacity-10 rounded">
                                        <h6 className="text-success">✅ With Context</h6>
                                        <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`<UserContext.Provider value={user}>
  <App>
    <Header />
    <Main />
    <Avatar /> {/* Direct access! */}
  </App>
</UserContext.Provider>`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-4">💡 How to Use Context API (3 Steps):</h6>
                            
                            <div className="mb-3">
                                <strong>Step 1: Create Context</strong>
                                <pre className="bg-dark text-light p-3 rounded mt-2">
{`import { createContext } from 'react';

const UserContext = createContext();`}
                                </pre>
                            </div>

                            <div className="mb-3">
                                <strong>Step 2: Provide Context (Parent Component)</strong>
                                <pre className="bg-dark text-light p-3 rounded mt-2">
{`import { useState } from 'react';

function App() {
  const [user, setUser] = useState({ 
    name: 'John', 
    age: 25 
  });

  return (
    <UserContext.Provider value={user}>
      <Header />
      <Profile />
    </UserContext.Provider>
  );
}`}
                                </pre>
                            </div>

                            <div className="mb-3">
                                <strong>Step 3: Consume Context (Child Component)</strong>
                                <pre className="bg-dark text-light p-3 rounded mt-2">
{`import { useContext } from 'react';

function Profile() {
  const user = useContext(UserContext);
  
  return <h1>Hello, {user.name}!</h1>;
}`}
                                </pre>
                            </div>

                            <h6 className="text-primary mt-4">📌 When to Use Context API:</h6>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <div className="p-3 bg-success bg-opacity-10 rounded">
                                        <h6 className="text-success">✅ Good Use Cases:</h6>
                                        <ul className="small mb-0">
                                            <li>Theme (dark/light mode)</li>
                                            <li>User authentication data</li>
                                            <li>Language/localization</li>
                                            <li>Shopping cart data</li>
                                            <li>Global settings</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-warning bg-opacity-10 rounded">
                                        <h6 className="text-warning">⚠️ Avoid For:</h6>
                                        <ul className="small mb-0">
                                            <li>Frequently changing data</li>
                                            <li>Local component state</li>
                                            <li>Props that go 1-2 levels deep</li>
                                            <li>Performance-critical updates</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>🎯 Simple Analogy:</strong> Context API is like a TV remote that everyone in the house can use, 
                                instead of passing it hand-to-hand! 📺
                            </div>

                            <div className="alert alert-success mt-2">
                                <strong>💡 Remember:</strong><br/>
                                • <strong>Create</strong> → <strong>Provide</strong> → <strong>Consume</strong><br/>
                                • Any component can access it (no prop drilling!)<br/>
                                • Perfect for global data that doesn't change often
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 22: Context API vs Redux */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-gradient" style={{background: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)'}}>
                    <h5 className="text-dark mb-0">
                        <span className="badge bg-dark text-white me-2">Q22</span>
                        Context API vs Redux
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the difference between Context API and Redux? When to use each?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-info btn-sm mb-3" 
                        onClick={() => toggleAnswer(22)}
                    >
                        {showAnswer[22] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[22] && (
                        <div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Feature</th>
                                            <th>Context API</th>
                                            <th>Redux</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>What is it?</strong></td>
                                            <td>Built-in React feature</td>
                                            <td>External state library</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Installation</strong></td>
                                            <td>No installation needed</td>
                                            <td>npm install required</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Learning Curve</strong></td>
                                            <td>Easy to learn</td>
                                            <td>Steeper learning curve</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Boilerplate</strong></td>
                                            <td>Minimal code</td>
                                            <td>More boilerplate</td>
                                        </tr>
                                        <tr>
                                            <td><strong>DevTools</strong></td>
                                            <td>No special tools</td>
                                            <td>Redux DevTools (powerful!)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Middleware</strong></td>
                                            <td>No middleware</td>
                                            <td>Redux Thunk, Saga, etc.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Performance</strong></td>
                                            <td>Can cause re-renders</td>
                                            <td>Optimized with selectors</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Best For</strong></td>
                                            <td>Small to medium apps</td>
                                            <td>Large, complex apps</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card border-info">
                                        <div className="card-header bg-info text-white">
                                            <strong>Context API - Use When:</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>✅ Small to medium projects</li>
                                                <li>✅ Simple state management</li>
                                                <li>✅ Theme, language, user data</li>
                                                <li>✅ Want to avoid external libraries</li>
                                                <li>✅ Quick prototypes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-primary">
                                        <div className="card-header bg-primary text-white">
                                            <strong>Redux - Use When:</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0">
                                                <li>✅ Large applications</li>
                                                <li>✅ Complex state logic</li>
                                                <li>✅ Need time-travel debugging</li>
                                                <li>✅ Middleware needed</li>
                                                <li>✅ Team is familiar with Redux</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-success mt-3">
                                <strong>🎯 Decision Tree:</strong><br/>
                                Simple state + Small app → Context API<br/>
                                Complex state + Large app → Redux<br/>
                                Just theme/auth → Context API is enough!
                            </div>

                            <div className="alert alert-warning mt-2">
                                <strong>💡 Modern Alternative:</strong> Consider <strong>Zustand</strong> or <strong>Jotai</strong> - simpler than Redux, more powerful than Context!
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )

}

export default QuestionAndAnswer
