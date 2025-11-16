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
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q1</span>
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
                            
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Position</th>
                                            <th>❌ Mutating (Changes Original)</th>
                                            <th>✅ Non-Mutating (Creates New)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Add at START</strong></td>
                                            <td><code>arr.unshift('a')</code></td>
                                            <td>
                                                <code>['a', ...arr]</code><br/>
                                                <code>arr.concat()</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Add at END</strong></td>
                                            <td><code>arr.push('a')</code></td>
                                            <td>
                                                <code>[...arr, 'a']</code><br/>
                                                <code>arr.concat('a')</code>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Add at MIDDLE</strong></td>
                                            <td><code>arr.splice(2, 0, 'a')</code></td>
                                            <td>
                                                <code>[...arr.slice(0,2), 'a', ...arr.slice(2)]</code><br/>
                                                <small className="text-muted">(at index 2)</small>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                    </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 React Best Practice:</strong> Always use <strong>non-mutating methods</strong> for state updates!<br/>
                                <code>setItems([...items, newItem])</code> ✅ instead of <code>items.push(newItem)</code> ❌
                            </div>

                            <hr className="my-3"/>

                            <h6 className="text-primary">📌 Copy Types:</h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="p-3 bg-warning bg-opacity-10 rounded">
                                        <h6 className="text-warning">⚠️ Shallow Copy</h6>
                                        <p className="small mb-2">Copies only first level. Nested objects/arrays still reference original.</p>
                                        <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`const arr = [1, {name: 'John'}];
const copy = [...arr];
copy[1].name = 'Jane';
console.log(arr[1].name); // 'Jane'
// Nested object changed! ⚠️`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-info bg-opacity-10 rounded">
                                        <h6 className="text-info">🔒 Deep Copy</h6>
                                        <p className="small mb-2">Copies everything, including nested. Completely independent.</p>
                                        <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`const arr = [1, {name: 'John'}];
const copy = JSON.parse(
  JSON.stringify(arr)
);
copy[1].name = 'Jane';
console.log(arr[1].name); // 'John'
// Original safe! ✅`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 2: How React Works */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q2</span>
                        Explain React?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">Explain React? How React Works? What is Virtual DOM? What is Reconciliation? Why is Virtual DOM Fast?</p>
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
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-2">React keeps a copy of your UI in memory (called <strong>Virtual DOM</strong>).</p>
                                <p className="mb-2">When something changes, React:</p>
                                <ol className="mb-0">
                                    <li><strong>Step 1:</strong> Creates a <strong>NEW Virtual DOM</strong></li>
                                    <li><strong>Step 2:</strong> Compares <strong>NEW Virtual DOM</strong> with <strong>OLD Virtual DOM</strong> (Diffing/Reconciliation)</li>
                                    <li><strong>Step 3:</strong> Identifies what changed</li>
                                    <li><strong>Step 4:</strong> Updates <strong>only those changes</strong> in the Real DOM</li>
                                </ol>
                            </div>

                            <div className="alert alert-warning mb-3">
                                <strong>⚠️ Important:</strong> React compares <strong>Virtual DOM with Virtual DOM</strong> (not with Real DOM!) 
                                because Virtual DOM is fast (JavaScript objects in memory), while Real DOM is slow to access.
                            </div>

                            <h6 className="text-primary mt-3">🎯 What is Reconciliation?</h6>
                            <div className="bg-success bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-0">
                                    <strong>Reconciliation</strong> is the process of comparing (diffing) old and new Virtual DOM 
                                    to find what changed and updating only those parts in the Real DOM.
                                </p>
                            </div>

                            <h6 className="text-primary">⚡ Why is Virtual DOM Fast?</h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="p-3 bg-danger bg-opacity-10 rounded">
                                        <h6 className="text-danger">🐌 Real DOM</h6>
                                        <ul className="small mb-0">
                                            <li>Heavy (200+ properties per element)</li>
                                            <li>Triggers browser repaint/reflow</li>
                                            <li>Expensive DOM API calls</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-success bg-opacity-10 rounded">
                                        <h6 className="text-success">⚡ Virtual DOM</h6>
                                        <ul className="small mb-0">
                                            <li>Lightweight JavaScript object</li>
                                            <li>In-memory operations (fast!)</li>
                                            <li>Batches updates to Real DOM</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 3: Real DOM vs Virtual DOM */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q3</span>
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
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q4</span>
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
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q5</span>
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
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q6</span>
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
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q7</span>
                        What is State in React?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is state in React? What happens when you call setState?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-danger btn-sm mb-3" 
                        onClick={() => toggleAnswer(7)}
                    >
                        {showAnswer[7] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[7] && (
                        <div>
                        <div className="alert alert-info">
                                <h6 className="text-primary">📌 What is State?</h6>
                                <p>
                                    <strong>State</strong> is data that can change over time in a component. 
                                When state changes, React re-renders the component to reflect those changes.
                            </p>
                                <p className="mb-0">
                                    <strong>💡 Important:</strong> State can be <strong>any data type</strong> - string, number, boolean, array, object, null, etc.
                                </p>
                            </div>

                            <h6 className="text-primary mt-3">📝 State Examples:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`const [name, setName] = useState('John');        // string
const [count, setCount] = useState(0);           // number
const [isActive, setIsActive] = useState(true);  // boolean
const [items, setItems] = useState([]);          // array
const [user, setUser] = useState({name: 'John'}); // object`}
                            </pre>

                            <h6 className="text-primary mt-3">🔄 Exact Flow: What Happens When setState is Called?</h6>
                            <div className="bg-light border rounded p-3">
                                <ol className="mb-0">
                                    <li className="mb-2">
                                        <strong>Step 1:</strong> <code>setState(newValue)</code> is called
                                    </li>
                                    <li className="mb-2">
                                        <strong>Step 2:</strong> React <strong>schedules a re-render</strong> (doesn't update immediately!)
                                        <div className="text-muted small ms-3">⚠️ setState is asynchronous - updates are batched for performance</div>
                                    </li>
                                    <li className="mb-2">
                                        <strong>Step 3:</strong> Component function <strong>re-runs</strong> with new state value
                                    </li>
                                    <li className="mb-2">
                                        <strong>Step 4:</strong> React creates a <strong>new Virtual DOM</strong> with updated values
                                    </li>
                                    <li className="mb-2">
                                        <strong>Step 5:</strong> <strong>Reconciliation</strong> - React compares Old Virtual DOM vs New Virtual DOM (diffing)
                                    </li>
                                    <li className="mb-2">
                                        <strong>Step 6:</strong> React identifies <strong>only the changed parts</strong>
                                    </li>
                                    <li className="mb-2">
                                        <strong>Step 7:</strong> Only changed parts <strong>update in Real DOM</strong>
                                    </li>
                                    <li className="mb-0">
                                        <strong>Step 8:</strong> <strong>UI updates</strong> on screen
                                    </li>
                                </ol>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>💡 Important:</strong> React batches multiple setState calls for better performance. 
                                Multiple state updates in the same event handler are batched together!
                            </div>

                            <h6 className="text-primary mt-3">📝 Example:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`const [name, setName] = useState('');

// User types "John"
const handleChange = (e) => {
  setName(e.target.value);  // Step 1: setState called
  // Step 2-8 happen automatically!
};

return <input value={name} onChange={handleChange} />;`}
                            </pre>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 8: How to Update State? */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q8</span>
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
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q9</span>
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
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q10</span>
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
                                        <td><strong>Update Method</strong></td>
                                        <td>Can't update</td>
                                        <td>Use setState()</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Like in JS</strong></td>
                                        <td>Function parameters</td>
                                        <td>Function variables</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 11: Component Lifecycle Phases */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q11</span>
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

                            <div className="bg-primary bg-opacity-10 p-3 rounded mt-3">
                                <h6 className="text-primary mb-3">📌 Simple Definition:</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">✅ <strong>First render</strong> = Mounting</li>
                                    <li className="mb-2">✅ <strong>Re-render (due to state change)</strong> = Updating</li>
                                    <li className="mb-0">✅ <strong>Removed from DOM</strong> = Unmounting</li>
                                </ul>
            </div>

                            <div className="bg-success bg-opacity-10 p-3 rounded mt-3">
                                <h6 className="text-success mb-3">⚡ Execution Order (Every Render):</h6>
                                <div className="d-flex flex-column">
                                    <div className="mb-2">
                                        <strong>1.</strong> Component function runs
                </div>
                                    <div className="text-center mb-2">↓</div>
                                    <div className="mb-2">
                                        <strong>2.</strong> State/props are evaluated
                    </div>
                                    <div className="text-center mb-2">↓</div>
                                    <div className="mb-2">
                                        <strong>3.</strong> JSX is returned
                                    </div>
                                    <div className="text-center mb-2">↓</div>
                                    <div className="mb-2">
                                        <strong>4.</strong> React updates the DOM
                                </div>
                                    <div className="text-center mb-2">↓</div>
                                    <div className="mb-2">
                                        <strong>5.</strong> Browser paints the screen <span className="badge bg-success">YOU SEE IT!</span>
                                    </div>
                                    <div className="text-center mb-2">↓</div>
                                    <div className="mb-0">
                                        <strong>6.</strong> useEffect runs <span className="badge bg-warning text-dark">AFTER everything above!</span>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>💡 Key Point:</strong> useEffect ALWAYS runs AFTER the render is complete and displayed on screen. 
                                This is why it's perfect for side effects like data fetching, subscriptions, or tracking previous values with useRef!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 12: useMemo vs useCallback */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q12</span>
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
                        onClick={() => toggleAnswer(12)}
                    >
                        {showAnswer[12] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[12] && (
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

            {/* Question 13: Error Boundaries */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q13</span>
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
                        onClick={() => toggleAnswer(13)}
                    >
                        {showAnswer[13] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[13] && (
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

            {/* Question 14: Code Splitting */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q14</span>
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
                        onClick={() => toggleAnswer(14)}
                    >
                        {showAnswer[14] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[14] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">📦 What is Code Splitting?</h6>
                            <p><strong>Code Splitting</strong> = Breaking your bundle into smaller chunks that load on demand (lazy loading).</p>
                            
                            <h6 className="text-primary mt-3">🎯 How to Implement:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Lazy load component
const Dashboard = React.lazy(() => 
  import('./Dashboard')
);

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Dashboard />
</Suspense>`}
                                </pre>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Benefits:</strong> Faster initial load, better performance!
                            </div>

                            <hr className="my-4"/>

                            <h6 className="text-primary">⚠️ When NOT to Use Lazy Loading</h6>
                            
                            <div className="bg-danger bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-0">
                                    <strong>Important:</strong> Lazy loading is NOT always the right solution! 
                                    Using it incorrectly can actually make your app SLOWER or hurt user experience.
                                </p>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="card border-danger h-100">
                                        <div className="card-header bg-danger text-white">
                                            <strong>❌ Don't Lazy Load:</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0 small">
                                                <li>Small components (&lt; 50KB)</li>
                                                <li>Components needed immediately on load</li>
                                                <li>Header/Navbar/Footer</li>
                                                <li>Components used on every page</li>
                                                <li>Modal dialogs (instant UX)</li>
                                                <li>Critical interactive components</li>
                                                <li>When optimizing prematurely</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="card border-success h-100">
                                        <div className="card-header bg-success text-white">
                                            <strong>✅ Do Lazy Load:</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0 small">
                                                <li>Route-based splitting (different pages)</li>
                                                <li>Admin panels / Settings pages</li>
                                                <li>Heavy libraries (charts, PDF viewers)</li>
                                                <li>Modal content on user action</li>
                                                <li>Components below the fold</li>
                                                <li>Optional features by permission</li>
                                                <li>Large components (&gt; 50KB)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>🎯 Golden Rule:</strong> Use lazy loading for components that are <strong>large</strong>, 
                                <strong>not immediately needed</strong>, and <strong>won't hurt UX</strong> with a brief loading state.
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 15: Custom Hooks */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q15</span>
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
                        onClick={() => toggleAnswer(15)}
                    >
                        {showAnswer[15] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[15] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🎣 What are Custom Hooks?</h6>
                            <p><strong>Custom Hook</strong> = A JavaScript function that uses React hooks and can be reused across components.</p>
                            
                            <div className="bg-success bg-opacity-10 p-3 rounded mt-3 mb-3">
                                <p className="mb-0"><strong>Simple Example:</strong> Instead of writing the same fetch API code in 5 different components, create one custom hook called <code>useFetch</code> and use it everywhere! 🎯</p>
                                    </div>
                            
                            <div className="alert alert-info">
                                <strong>📌 Rules:</strong> Must start with "use" • Can call other Hooks • Reusable across components
                            </div>

                            <h6 className="text-primary">💡 Example: useFetch Hook</h6>
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
                        </div>
                    )}
                </div>
            </div>

            {/* Question 16: Controlled vs Uncontrolled Components */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q16</span>
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
                        onClick={() => toggleAnswer(16)}
                    >
                        {showAnswer[16] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[16] && (
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

            {/* Question 17: What is Context API */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q17</span>
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
                        onClick={() => toggleAnswer(17)}
                    >
                        {showAnswer[17] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[17] && (
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

                            <div className="alert alert-info mt-3">
                                <strong>💡 Remember:</strong> <strong>Create</strong> → <strong>Provide</strong> → <strong>Consume</strong> • Any component can access it (no prop drilling!)
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 18: Single Page Application (SPA) */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q18</span>
                        What is Single Page Application (SPA)?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is Single Page Application (SPA)? Explain its advantages and disadvantages.</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-danger btn-sm mb-3" 
                        onClick={() => toggleAnswer(18)}
                    >
                        {showAnswer[18] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[18] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🌐 What is Single Page Application (SPA)?</h6>
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-0">
                                    <strong>Single Page Application (SPA)</strong> is a web application that loads a single HTML page 
                                    once and dynamically updates content without full page reloads. JavaScript handles routing, 
                                    navigation, and updates, providing a smooth user experience.
                                </p>
                            </div>

                            <div className="alert alert-warning mb-3">
                                <strong>⚠️ Important:</strong> SPA has <strong>one HTML page</strong> but can have <strong>multiple routes</strong> 
                                (URLs like /home, /about, /dashboard) - all handled by client-side routing!
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>✅ Advantages</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0 small">
                                                <li>Smooth UX (no page flickers)</li>
                                                <li>Fast after initial load</li>
                                                <li>Only updates what changed</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-danger">
                                        <div className="card-header bg-danger text-white">
                                            <strong>❌ Disadvantages</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0 small">
                                                <li>Slower initial load</li>
                                                <li>SEO challenges</li>
                                                <li>Requires JavaScript</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Remember:</strong> One HTML page + Multiple routes (React Router) • Only changed parts update • Great UX but SEO challenges
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 19: Context API vs Redux */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q19</span>
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
                        onClick={() => toggleAnswer(19)}
                    >
                        {showAnswer[19] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[19] && (
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
                                            <td>External library</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Setup</strong></td>
                                            <td>Easy, minimal code</td>
                                            <td>More boilerplate</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Tools</strong></td>
                                            <td>No special tools</td>
                                            <td>DevTools, middleware</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Best For</strong></td>
                                            <td>Small-medium apps</td>
                                            <td>Large, complex apps</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>🎯 When to Use:</strong><br/>
                                <strong>Context API:</strong> Small-medium apps, theme, auth, simple state<br/>
                                <strong>Redux:</strong> Large apps, complex state, need debugging/middleware
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 20: useRef Hook */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q20</span>
                        What is useRef and how is it different from useState?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the useRef hook used for? How is it different from useState?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-success btn-sm mb-3" 
                        onClick={() => toggleAnswer(20)}
                    >
                        {showAnswer[20] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[20] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🎯 What is useRef?</h6>
                            <p><strong>useRef</strong> returns a mutable object that persists for the component's lifetime.</p>
                            
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Feature</th>
                                            <th>useRef</th>
                                            <th>useState</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Triggers Re-render?</strong></td>
                                            <td>❌ No</td>
                                            <td>✅ Yes</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Mutability</strong></td>
                                            <td>Can mutate `.current` directly</td>
                                            <td>Must use setter function</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Use Cases</strong></td>
                                            <td>DOM access, storing mutable values</td>
                                            <td>Managing component state</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-3">💡 Common Uses:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// 1. Accessing DOM elements
const inputRef = useRef();
inputRef.current.focus();

// 2. Storing previous values
const prevCount = useRef();
useEffect(() => {
  prevCount.current = count;
}, [count]);

// 3. Storing mutable values (timers, etc)
const timerRef = useRef();
timerRef.current = setInterval(() => {...}, 1000);`}
                            </pre>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 21: Key Prop */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q21</span>
                        What is the "key" prop and why is it important?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the "key" prop and how does it relate to performance?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-warning btn-sm mb-3" 
                        onClick={() => toggleAnswer(21)}
                    >
                        {showAnswer[21] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[21] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🔑 What is the Key Prop?</h6>
                            <p>The <strong>key</strong> prop helps React identify which items have changed, been added, or removed in lists.</p>
                            
                            <div className="alert alert-danger mt-3">
                                <strong>❌ Bad Practice:</strong>
                                <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// Using index as key
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}`}
                                </pre>
                                <p className="mb-0 mt-2"><strong>Problem:</strong> Causes bugs when reordering, deleting items</p>
                            </div>

                            <div className="alert alert-success">
                                <strong>✅ Good Practice:</strong>
                                <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// Using unique ID as key
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}`}
                                </pre>
                                <p className="mb-0 mt-2"><strong>Benefits:</strong> Efficient reordering, correct state, better performance</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 22: Common Re-render Mistakes */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q22</span>
                        What are common mistakes that cause unnecessary re-renders?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are some common mistakes that lead to unnecessary re-renders?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-danger btn-sm mb-3" 
                        onClick={() => toggleAnswer(22)}
                    >
                        {showAnswer[22] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[22] && (
                        <div className="alert alert-light border">
                            <h6 className="text-danger">❌ Common Mistakes:</h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="p-3 bg-danger bg-opacity-10 rounded mb-3">
                                        <strong>1. Creating objects in render:</strong>
                                        <pre className="bg-dark text-light p-2 rounded mt-2 mb-0 small">
{`// Bad - new object every render
<Child style={{color: 'red'}} />

// Good - memoize
const style = useMemo(() => 
  ({color: 'red'}), []
);`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 bg-danger bg-opacity-10 rounded mb-3">
                                        <strong>2. Inline functions:</strong>
                                        <pre className="bg-dark text-light p-2 rounded mt-2 mb-0 small">
{`// Bad
<button onClick={() => doSomething()} />

// Good
const handleClick = useCallback(
  () => doSomething(), []
);`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="alert alert-warning">
                                <strong>⚠️ Other Mistakes:</strong>
                                <ul className="mb-0 mt-2">
                                    <li>Using index as key in lists</li>
                                    <li>Mutating state directly</li>
                                    <li>Incorrect dependency arrays in hooks</li>
                                    <li>Not using React.memo for expensive child components</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 23: Lazy Initial State */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q23</span>
                        What is lazy initial state in useState?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the "lazy initial state" pattern with useState?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-info btn-sm mb-3" 
                        onClick={() => toggleAnswer(23)}
                    >
                        {showAnswer[23] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[23] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">⚡ Lazy Initial State</h6>
                            <p>Pass a <strong>function</strong> to useState for expensive initial computations.</p>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card border-danger">
                                        <div className="card-header bg-danger text-white">
                                            <strong>❌ Bad (Runs every render)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`const [data, setData] = useState(
  expensiveComputation()
);
// Runs on EVERY render! 😱`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>✅ Good (Runs only once)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`const [data, setData] = useState(
  () => expensiveComputation()
);
// Runs only on initial render! ✅`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 When to Use:</strong> localStorage reads, complex calculations, large array filtering
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 24: useEffect Cleanup */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q24</span>
                        How does useEffect cleanup prevent memory leaks?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">How does the useEffect cleanup function help prevent memory leaks?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(24)}
                    >
                        {showAnswer[24] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[24] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🧹 Cleanup Function</h6>
                            <p>The cleanup function runs <strong>before unmount</strong> and <strong>before re-running the effect</strong>.</p>
                            
                            <div className="bg-success bg-opacity-10 p-3 rounded mb-3">
                                <strong>✅ Common Cleanup Tasks:</strong>
                                            <ul className="mb-0">
                                    <li>Cancel network requests</li>
                                    <li>Clear timers (setTimeout, setInterval)</li>
                                    <li>Remove event listeners</li>
                                    <li>Unsubscribe from subscriptions</li>
                                            </ul>
                                        </div>

                            <h6 className="text-primary">💡 Example:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`useEffect(() => {
  // Setup
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  const subscription = api.subscribe();
  
  // Cleanup function
  return () => {
    clearInterval(timer);     // ✅ Clear timer
    subscription.unsubscribe(); // ✅ Cleanup
  };
}, []);`}
                            </pre>

                            <div className="alert alert-danger mt-3">
                                <strong>⚠️ Without Cleanup:</strong> Memory leaks, performance issues, errors after unmount!
                                    </div>
                                </div>
                    )}
                </div>
            </div>

            {/* Question 25: Redux Immutability */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q25</span>
                        Why is immutability important in Redux?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is "Immutability" and why is it important in Redux?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-success btn-sm mb-3" 
                        onClick={() => toggleAnswer(25)}
                    >
                        {showAnswer[25] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[25] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🔒 Immutability in Redux</h6>
                            <p><strong>Immutability</strong> means not modifying existing objects/arrays, but creating new ones.</p>
                            
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card border-danger">
                                        <div className="card-header bg-danger text-white">
                                            <strong>❌ MUTATION (Wrong)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// BAD - Mutates state
state.todos.push(newTodo);
state.user.name = 'John';
// Redux won't detect changes! 😱`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>✅ IMMUTABLE (Correct)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// GOOD - Creates new objects
return {
  ...state,
  todos: [...state.todos, newTodo]
};`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-info bg-opacity-10 p-3 rounded mt-3">
                                <strong>🎯 Why Important:</strong>
                                <ul className="mb-0">
                                    <li>Efficient change detection (reference comparison)</li>
                                    <li>Makes state predictable and debuggable</li>
                                    <li>Enables time-travel debugging</li>
                                    <li>Works with React's rendering optimization</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 26: Higher-Order Components */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q26</span>
                        What are Higher-Order Components (HOC)?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are Higher-Order Components? How do they work?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-warning btn-sm mb-3" 
                        onClick={() => toggleAnswer(26)}
                    >
                        {showAnswer[26] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[26] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🎁 Higher-Order Component (HOC)</h6>
                            <p>A HOC is a <strong>function that takes a component and returns a new enhanced component</strong>.</p>
                            
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <strong>Formula:</strong> <code>HOC = (Component) =&gt; EnhancedComponent</code>
                            </div>

                            <h6 className="text-primary">💡 Example: withAuth HOC</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Create HOC
const withAuth = (Component) => {
  return (props) => {
    const [isAuth, setIsAuth] = useState(false);
    
    if (!isAuth) {
      return <div>Please login!</div>;
    }
    
    return <Component {...props} />;
  };
};

// Use HOC
const Dashboard = () => <h1>Dashboard</h1>;
const ProtectedDashboard = withAuth(Dashboard);`}
                            </pre>

                            <div className="alert alert-warning mt-3">
                                <strong>💡 Modern Alternative:</strong> Custom Hooks are now preferred over HOCs!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 27: React Router */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q27</span>
                        What is React Router and why use it?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the purpose of React Router?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-info btn-sm mb-3" 
                        onClick={() => toggleAnswer(27)}
                    >
                        {showAnswer[27] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[27] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🛣️ React Router</h6>
                            <p>React Router is a library for <strong>client-side routing</strong> in React applications.</p>
                            
                            <div className="bg-success bg-opacity-10 p-3 rounded mb-3">
                                <strong>✅ Features:</strong>
                                <ul className="mb-0">
                                    <li>Client-side routing (no page refreshes)</li>
                                    <li>Nested route configuration</li>
                                    <li>Programmatic navigation</li>
                                    <li>Route parameters and query strings</li>
                                    <li>Route-based code splitting</li>
                                </ul>
                            </div>

                            <h6 className="text-primary">💡 Basic Example:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}`}
                            </pre>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 28: Fragments */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q28</span>
                        What are Fragments in React?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are Fragments in React and why are they useful?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(28)}
                    >
                        {showAnswer[28] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[28] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">📦 What are Fragments?</h6>
                            <p><strong>Fragments</strong> let you group multiple elements without adding extra nodes to the DOM.</p>
                            
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card border-danger">
                                        <div className="card-header bg-danger text-white">
                                            <strong>❌ Without Fragment (Extra div)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-2 small">
{`function App() {
  return (
    <div>  {/* Extra wrapper! */}
      <h1>Title</h1>
      <p>Text</p>
    </div>
  );
}

// DOM output:
<div>  {/* Unnecessary! */}
  <h1>Title</h1>
  <p>Text</p>
</div>`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>✅ With Fragment (Clean DOM)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-2 small">
{`function App() {
  return (
    <>  {/* No wrapper! */}
      <h1>Title</h1>
      <p>Text</p>
    </>
  );
}

// DOM output:
<h1>Title</h1>
<p>Text</p>
{/* Clean! No extra div */}`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-3">💡 Two Ways to Use Fragments:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Short Syntax (most common)
<>
  <h1>Hello</h1>
  <p>World</p>
</>

// Long Syntax (when you need 'key' prop)
<Fragment key={item.id}>
  <dt>{item.term}</dt>
  <dd>{item.description}</dd>
</Fragment>`}
                            </pre>

                            <div className="alert alert-success mt-3">
                                <strong>✅ Benefits:</strong> Cleaner DOM • Better performance • Avoid CSS issues • No unnecessary wrappers
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 29: useState vs useReducer */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q29</span>
                        useState vs useReducer - When to use each?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is the difference between useState and useReducer? When should you use each?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-danger btn-sm mb-3" 
                        onClick={() => toggleAnswer(29)}
                    >
                        {showAnswer[29] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[29] && (
                        <div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Feature</th>
                                            <th>useState</th>
                                            <th>useReducer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Complexity</strong></td>
                                            <td>Simple state</td>
                                            <td>Complex state with multiple sub-values</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Updates</strong></td>
                                            <td>Direct updates</td>
                                            <td>Action-based updates</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Logic</strong></td>
                                            <td>In component</td>
                                            <td>Centralized in reducer</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Best For</strong></td>
                                            <td>Single values, toggles, counters</td>
                                            <td>Forms, objects with many fields</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card border-primary">
                                        <div className="card-header bg-primary text-white">
                                            <strong>useState Example</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-0 small">
{`// Simple state
const [count, setCount] = useState(0);
const [name, setName] = useState('');

// Easy updates
setCount(count + 1);
setName('John');`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>useReducer Example</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-0 small">
{`// Complex state
const [state, dispatch] = useReducer(
  reducer, 
  { name: '', age: 0, email: '' }
);

// Action-based updates
dispatch({ type: 'SET_NAME', value: 'John' });
dispatch({ type: 'INCREMENT_AGE' });`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>🎯 Rule of Thumb:</strong> Use <strong>useState</strong> for simple state. Switch to <strong>useReducer</strong> when state logic gets complex or involves multiple related values!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 30: React.memo */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q30</span>
                        What is React.memo and when to use it?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is React.memo? How is it different from useMemo?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-info btn-sm mb-3" 
                        onClick={() => toggleAnswer(30)}
                    >
                        {showAnswer[30] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[30] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🚀 What is React.memo?</h6>
                            <p><strong>React.memo</strong> is a Higher-Order Component that prevents re-rendering if props haven't changed.</p>
                            
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Feature</th>
                                            <th>React.memo</th>
                                            <th>useMemo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>What it does</strong></td>
                                            <td>Memoizes entire <strong>component</strong></td>
                                            <td>Memoizes a <strong>value</strong></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Prevents</strong></td>
                                            <td>Unnecessary component re-renders</td>
                                            <td>Expensive calculations</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Usage</strong></td>
                                            <td>Wrap component</td>
                                            <td>Inside component</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card border-danger">
                                        <div className="card-header bg-danger text-white">
                                            <strong>❌ Without React.memo</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-2 small">
{`function Child({ name }) {
  console.log('Child rendered!');
  return <h1>{name}</h1>;
}

// Re-renders every time parent 
// re-renders, even if name is same!`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>✅ With React.memo</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-2 small">
{`const Child = React.memo(({ name }) => {
  console.log('Child rendered!');
  return <h1>{name}</h1>;
});

// Only re-renders if 'name' changes!`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>⚠️ When to Use React.memo:</strong> Pure components • Heavy rendering • Stable props • Lists with many items
                            </div>

                            <div className="alert alert-danger mt-3">
                                <strong>❌ When NOT to Use:</strong> Don't overuse! Only use when you have actual performance issues. Memoization has its own cost!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 31: forwardRef */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q31</span>
                        What is forwardRef and why is it needed?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is forwardRef in React? When and why would you use it?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-success btn-sm mb-3" 
                        onClick={() => toggleAnswer(31)}
                    >
                        {showAnswer[31] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[31] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🔗 What is forwardRef?</h6>
                            <p><strong>forwardRef</strong> allows a component to pass a ref to a child component (forward it down).</p>
                            
                            <div className="bg-warning bg-opacity-10 p-3 rounded mb-3">
                                <strong>⚠️ The Problem:</strong> By default, you can't pass refs to functional components. forwardRef solves this!
                            </div>

                            <h6 className="text-primary mt-3">❌ Without forwardRef (Doesn't Work):</h6>
                            <pre className="bg-dark text-light p-3 rounded mb-3">
{`// This WON'T work!
function Input(props) {
  return <input {...props} />;
}

function Parent() {
  const inputRef = useRef();
  
  // Can't access the input!
  return <Input ref={inputRef} />; // ❌ Error!
}`}
                            </pre>

                            <h6 className="text-primary">✅ With forwardRef (Works!):</h6>
                            <pre className="bg-dark text-light p-3 rounded mb-3">
{`// Wrap with forwardRef
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function Parent() {
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.focus(); // ✅ Works!
  }, []);
  
  return <Input ref={inputRef} />;
}`}
                            </pre>

                            <div className="alert alert-info">
                                <strong>💡 Common Use Cases:</strong>
                                            <ul className="mb-0">
                                    <li>Reusable input components that need focus control</li>
                                    <li>Custom button components</li>
                                    <li>Component libraries (Material-UI, etc.)</li>
                                    <li>When parent needs direct DOM access to child's element</li>
                                            </ul>
                                        </div>
                                    </div>
                    )}
                                </div>
                            </div>

            {/* Question 32: Portals */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q32</span>
                        What are Portals in React?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are Portals and when would you use them?</p>
                            </div>

                    <button 
                        className="btn btn-outline-warning btn-sm mb-3" 
                        onClick={() => toggleAnswer(32)}
                    >
                        {showAnswer[32] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[32] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🚪 What are Portals?</h6>
                            <p><strong>Portals</strong> let you render a component outside its parent DOM hierarchy, but keep its React hierarchy.</p>
                            
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-0">
                                    <strong>Simple Explanation:</strong> Portals allow you to render a child component into a different part of the DOM tree, 
                                    while maintaining its place in the React component tree.
                                </p>
                            </div>

                            <h6 className="text-primary mt-3">💡 Common Use Cases:</h6>
                            <ul>
                                <li>✅ Modals / Dialog boxes</li>
                                <li>✅ Tooltips</li>
                                <li>✅ Dropdowns</li>
                                <li>✅ Notifications / Toasts</li>
                            </ul>

                            <div className="alert alert-warning mb-3">
                                <strong>⚠️ Why Use Portals?</strong> To avoid CSS issues like <code>overflow: hidden</code> or <code>z-index</code> conflicts when rendering modals inside nested components.
                            </div>

                            <h6 className="text-primary">📝 How to Use:</h6>
                            <pre className="bg-dark text-light p-3 rounded mb-3">
{`import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.body  // Render directly in body!
  );
}

// Usage
function App() {
  return (
    <div className="app">
      <h1>My App</h1>
      <Modal>
        <p>This renders in document.body!</p>
      </Modal>
    </div>
  );
}`}
                            </pre>

                            <div className="alert alert-success">
                                <strong>✅ Benefits:</strong> Avoid CSS conflicts • Better accessibility • Proper z-index stacking • Cleaner DOM structure
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 33: JSON Methods */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q33</span>
                        JSON Methods: response.json() vs JSON.parse() vs JSON.stringify()
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What's the difference between response.json(), JSON.parse(), and JSON.stringify()? When do you use each one?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(33)}
                    >
                        {showAnswer[33] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[33] && (
                        <div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Method</th>
                                            <th>Converts</th>
                                            <th>Use Case</th>
                                            <th>Async?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>response.json()</strong></td>
                                            <td>Response → Object</td>
                                            <td>After fetch() API calls</td>
                                            <td>✅ Yes (needs await)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>JSON.parse()</strong></td>
                                            <td>String → Object</td>
                                            <td>localStorage, JSON strings</td>
                                            <td>❌ No (synchronous)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>JSON.stringify()</strong></td>
                                            <td>Object → String</td>
                                            <td>Save to localStorage, send to API</td>
                                            <td>❌ No (synchronous)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-3">📝 Example 1: response.json() - API Calls</h6>
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <strong>✅ Use with fetch() API</strong>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-dark text-light p-3 rounded mb-0 small">
{`// Fetching data from API
const response = await fetch('https://api.example.com/users/1');
const user = await response.json();  // ✅ Response → Object
console.log(user.name);  // "John"

// Why: fetch() returns Response object, 
// not the data directly!`}
                                    </pre>
                                </div>
                            </div>

                            <h6 className="text-primary">📝 Example 2: JSON.parse() - localStorage</h6>
                            <div className="card border-info mb-3">
                                <div className="card-header bg-info text-white">
                                    <strong>✅ Use with localStorage (Reading)</strong>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-dark text-light p-3 rounded mb-0 small">
{`// Reading from localStorage
const stored = localStorage.getItem('user');  // Returns string
const user = JSON.parse(stored);  // ✅ String → Object
console.log(user.name);  // "John"

// Why: localStorage stores data as strings!`}
                                    </pre>
                                </div>
                            </div>

                            <h6 className="text-primary">📝 Example 3: JSON.stringify() - localStorage</h6>
                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <strong>✅ Use with localStorage (Saving)</strong>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-dark text-light p-3 rounded mb-0 small">
{`// Saving to localStorage
const user = { name: "John", age: 30 };
const jsonString = JSON.stringify(user);  // ✅ Object → String
localStorage.setItem('user', jsonString);

// Why: localStorage can only store strings!`}
                                    </pre>
                                </div>
                            </div>

                            <h6 className="text-primary">🎯 Complete localStorage Example:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Save to localStorage
const user = { name: "John", age: 30 };
localStorage.setItem('user', JSON.stringify(user));  // Object → String

// Read from localStorage
const stored = localStorage.getItem('user');  // Returns string
const userData = JSON.parse(stored);  // String → Object
console.log(userData.name);  // "John"`}
                            </pre>

                            <div className="alert alert-danger mt-3">
                                <strong>❌ Common Mistakes:</strong>
                                <ul className="mb-0">
                                    <li><code>JSON.parse(response)</code> after fetch() - Wrong! Use <code>response.json()</code></li>
                                    <li><code>await JSON.parse(string)</code> - Wrong! JSON.parse is not async</li>
                                    <li>Forgetting to stringify before saving to localStorage</li>
                                </ul>
                            </div>

                            <div className="alert alert-success mt-3">
                                <strong>💡 Remember:</strong> 
                                <ul className="mb-0">
                                    <li><code>fetch()</code> → <code>response.json()</code> (with await)</li>
                                    <li><code>localStorage.getItem()</code> → <code>JSON.parse()</code> (no await)</li>
                                    <li><code>localStorage.setItem()</code> → <code>JSON.stringify()</code> (no await)</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 34: JavaScript Array Methods */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q34</span>
                        JavaScript Array Methods: map, filter, reduce, find
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">Explain map(), filter(), reduce(), and find() array methods with syntax and use cases.</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(34)}
                    >
                        {showAnswer[34] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[34] && (
                        <div>
                            {/* MAP */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">📌 1. map() - Transform Each Item</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Definition:</strong> Creates a <strong>new array</strong> by transforming each element.</p>
                                    
                                    <div className="bg-light p-2 rounded mb-2">
                                        <strong>Syntax:</strong> <code>array.map((item, index) ={'>'} newValue)</code>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 1: Extract One Property</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const users = [
  ${'{'} id: 1, name: 'John', age: 25 ${'}'}, 
  ${'{'} id: 2, name: 'Jane', age: 30 ${'}'}
];

// Get only names
const names = users.map(user => user.name);
// Result: ['John', 'Jane']`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 2: Transform Numbers</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(n => n * 2);
// Result: [2, 4, 6, 8, 10]

// Add 10 to each
const added = numbers.map(n => n + 10);
// Result: [11, 12, 13, 14, 15]`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 3: Add New Properties</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const products = [
  ${'{'} name: 'Laptop', price: 50000 ${'}'}, 
  ${'{'} name: 'Phone', price: 30000 ${'}'}
];

// Add discount field
const withDiscount = products.map(p => (${'{'} 
  ...p,
  discount: p.price * 0.1,
  finalPrice: p.price * 0.9
${'}'}));
// Each item now has discount & finalPrice!`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 4: Combine Properties</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const users = [
  ${'{'} firstName: 'John', lastName: 'Doe' ${'}'}, 
  ${'{'} firstName: 'Jane', lastName: 'Smith' ${'}'}
];

// Create full names
const fullNames = users.map(u => 
  u.firstName + ' ' + u.lastName
);
// Result: ['John Doe', 'Jane Smith']`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 5: Format Data</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const prices = [100, 250, 1500];

// Format as currency
const formatted = prices.map(p => 
  '₹' + p.toLocaleString()
);
// Result: ['₹100', '₹250', '₹1,500']

// Add percentage
const percentages = [0.1, 0.25, 0.5];
const display = percentages.map(p => 
  (p * 100) + '%'
);
// Result: ['10%', '25%', '50%']`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 6: React - Render Lists</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const users = [
  ${'{'} id: 1, name: 'John' ${'}'}, 
  ${'{'} id: 2, name: 'Jane' ${'}'}
];

// Most common React use case!
return (
  <ul>
    ${'{'} users.map(user => (
      <li key=${'{'} user.id ${'}'} >
        ${'{'} user.name ${'}'}
      </li>
    )) ${'}'}
  </ul>
);`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-info mt-2 mb-0">
                                        <strong>💡 When to use:</strong> When you need to transform/modify every item • Extract specific properties • Convert data format
                                    </div>
                                </div>
                            </div>

                            {/* FILTER */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">📌 2. filter() - Select Items by Condition</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Definition:</strong> Creates a <strong>new array</strong> with elements that pass a test.</p>
                                    
                                    <div className="bg-light p-2 rounded mb-2">
                                        <strong>Syntax:</strong> <code>array.filter((item, index) ={'>'} condition)</code>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <strong>Use Case 1: Filter by Category</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const products = [
  { name: 'Laptop', category: 'electronics' },
  { name: 'Shirt', category: 'clothing' },
  { name: 'Phone', category: 'electronics' }
];

// Get only electronics
const electronics = products.filter(
  p => p.category === 'electronics'
);
// Result: [Laptop, Phone]`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>Use Case 2: Filter by Condition</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const numbers = [5, 12, 8, 130, 44];

// Get numbers > 10
const large = numbers.filter(n => n > 10);
// Result: [12, 130, 44]

// Get even numbers
const even = numbers.filter(n => n % 2 === 0);
// Result: [12, 8, 130, 44]`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-info mt-2 mb-0">
                                        <strong>💡 When to use:</strong> When you need to filter/select specific items • Remove items • Search functionality
                                    </div>
                                </div>
                            </div>

                            {/* REDUCE */}
                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <h6 className="mb-0">📌 3. reduce() - Calculate Single Value</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Definition:</strong> Reduces array to a <strong>single value</strong> (sum, product, object, etc.).</p>
                                    
                                    <div className="bg-light p-2 rounded mb-2">
                                        <strong>Syntax:</strong> <code>array.reduce((accumulator, item) ={'>'} newAccumulator, initialValue)</code>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <strong>Use Case 1: Calculate Total</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const cart = [
  { name: 'Laptop', price: 50000 },
  { name: 'Mouse', price: 500 },
  { name: 'Keyboard', price: 1500 }
];

// Calculate total price
const total = cart.reduce(
  (sum, item) => sum + item.price, 
  0  // Initial value
);
// Result: 52000`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>Use Case 2: Count Occurrences</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const fruits = ['apple', 'banana', 
  'apple', 'orange', 'banana', 'apple'];

// Count each fruit
const count = fruits.reduce((acc, fruit) => ${'{'} 
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
${'}'}, ${'{'} ${'}'});

// Result: 
// ${'{'} apple: 3, banana: 2, orange: 1 ${'}'}`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-info mt-2 mb-0">
                                        <strong>💡 When to use:</strong> Calculate totals/averages • Count items • Group data • Flatten arrays • Build objects from arrays
                                    </div>
                                </div>
                            </div>

                            {/* FIND */}
                            <div className="card border-info mb-3">
                                <div className="card-header bg-info text-white">
                                    <h6 className="mb-0">📌 4. find() - Get First Match</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Definition:</strong> Returns the <strong>first element</strong> that satisfies the condition (or undefined).</p>
                                    
                                    <div className="bg-light p-2 rounded mb-2">
                                        <strong>Syntax:</strong> <code>array.find((item, index) ={'>'} condition)</code>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <strong>Use Case 1: Find by ID</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

// Find user with id=2
const user = users.find(u => u.id === 2);
// Result: { id: 2, name: 'Jane' }

// If not found
const notFound = users.find(u => u.id === 99);
// Result: undefined`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>Use Case 2: Find by Condition</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const numbers = [5, 12, 8, 130, 44];

// Find first number > 10
const first = numbers.find(n => n > 10);
// Result: 12 (stops at first match!)

const products = [
  { name: 'Phone', stock: 0 },
  { name: 'Laptop', stock: 5 }
];

// Find in-stock product
const available = products.find(
  p => p.stock > 0
);`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-info mt-2 mb-0">
                                        <strong>💡 When to use:</strong> Find specific item by ID • Get first match • Check if item exists
                                    </div>
                                </div>
                            </div>

                            {/* BONUS METHODS */}
                            <div className="card border-secondary mb-3">
                                <div className="card-header bg-secondary text-white">
                                    <h6 className="mb-0">🎁 Bonus: Other Useful Array Methods</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong>some() - Check if ANY item passes test</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 mb-3 small">
{`const ages = [18, 25, 16, 30];

// Any adult?
const hasAdult = ages.some(age => age >= 18);
// Result: true`}
                                            </pre>

                                            <strong>every() - Check if ALL items pass test</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const ages = [18, 25, 20, 30];

// All adults?
const allAdults = ages.every(age => age >= 18);
// Result: true`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>findIndex() - Get index of first match</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 mb-3 small">
{`const users = ['John', 'Jane', 'Bob'];

const index = users.findIndex(
  name => name === 'Jane'
);
// Result: 1`}
                                            </pre>

                                            <strong>includes() - Check if item exists</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const fruits = ['apple', 'banana'];

const hasApple = fruits.includes('apple');
// Result: true`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* COMPARISON TABLE */}
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Method</th>
                                            <th>Returns</th>
                                            <th>Use When</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>map()</strong></td>
                                            <td>New array (same length)</td>
                                            <td>Transform each item</td>
                                        </tr>
                                        <tr>
                                            <td><strong>filter()</strong></td>
                                            <td>New array (0 to n items)</td>
                                            <td>Select items by condition</td>
                                        </tr>
                                        <tr>
                                            <td><strong>reduce()</strong></td>
                                            <td>Single value</td>
                                            <td>Calculate total/aggregate</td>
                                        </tr>
                                        <tr>
                                            <td><strong>find()</strong></td>
                                            <td>Single item or undefined</td>
                                            <td>Get first matching item</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="alert alert-success mt-3">
                                <strong>🎯 Key Points:</strong>
                                <ul className="mb-0">
                                    <li>All these methods create <strong>new arrays/values</strong> (don't mutate original)</li>
                                    <li>Perfect for <strong>React state updates</strong> (immutability!)</li>
                                    <li>Can be <strong>chained</strong>: <code>array.filter(...).map(...)</code></li>
                                    <li>All take a <strong>callback function</strong> as parameter</li>
                                </ul>
                            </div>

                            <div className="alert alert-warning">
                                <strong>💡 Real-World React Example:</strong>
                                <pre className="bg-dark text-light p-3 rounded mb-0 mt-2">
{`// E-commerce cart component
const [cart, setCart] = useState([...]);

// Get total price (reduce)
const total = cart.reduce((sum, item) => 
  sum + (item.price * item.quantity), 0
);

// Filter in-stock items (filter)
const available = cart.filter(item => item.stock > 0);

// Display names (map)
return (
  <ul>
    ${'{'} cart.map(item => (
      <li key=${'{'} item.id ${'}'} > ${'{'} item.name ${'}'} </li>
    )) ${'}'} 
  </ul>
);`}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 35: Spread, Rest, and Destructuring */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q35</span>
                        Spread Operator, Rest Operator, and Destructuring
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is Spread Operator? What is Rest Operator? What is Destructuring? Explain syntax and use cases.</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(35)}
                    >
                        {showAnswer[35] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[35] && (
                        <div>
                            {/* SPREAD OPERATOR */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">📌 1. Spread Operator (...)</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">🎯 Definition:</h6>
                                    <p><strong>Spread operator (...)</strong> = "Unpack" or "spread out" all items from an array or object into individual elements.</p>
                                    
                                    <div className="bg-light p-2 rounded mb-3">
                                        <strong>Syntax:</strong> <code>...arrayOrObject</code>
                                    </div>

                                    <div className="alert alert-info mb-3">
                                        <strong>💡 Think of it as:</strong> Opening a box and taking everything out one by one!
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 1: Copy Array</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const original = [1, 2, 3];
const copy = [...original];

console.log(copy); // [1, 2, 3]
// New array, not same reference!`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 2: Combine Arrays</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined); 
// [1, 2, 3, 4, 5, 6]`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 3: Add Items to Array</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const fruits = ['apple', 'banana'];
const more = [...fruits, 'mango'];

console.log(more);
// ['apple', 'banana', 'mango']

// Add at start
const start = ['orange', ...fruits];
// ['orange', 'apple', 'banana']`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 4: Copy Object</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} name: 'John', age: 25 ${'}'};
const copy = ${'{'} ...user ${'}'};

console.log(copy);
// ${'{'} name: 'John', age: 25 ${'}'}`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 5: Merge Objects</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const obj1 = ${'{'} a: 1, b: 2 ${'}'};
const obj2 = ${'{'} c: 3, d: 4 ${'}'};
const merged = ${'{'} ...obj1, ...obj2 ${'}'};

console.log(merged);
// ${'{'} a: 1, b: 2, c: 3, d: 4 ${'}'}`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 6: Update Object Properties</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} name: 'John', age: 25 ${'}'};
const updated = ${'{'} 
  ...user, 
  age: 26,
  city: 'Mumbai' 
${'}'};

console.log(updated);
// ${'{'} name: 'John', age: 26, city: 'Mumbai' ${'}'}`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-success mt-2">
                                        <strong>🎯 React Use Case:</strong>
                                        <pre className="bg-dark text-light p-2 rounded mb-0 mt-2 small">
{`// Update state immutably
const [items, setItems] = useState([1, 2, 3]);

// Add item
setItems([...items, 4]);  // ✅ Creates new array

// Update object
const [user, setUser] = useState(${'{'} name: 'John' ${'}'});
setUser(${'{'} ...user, age: 25 ${'}'}); // ✅ Creates new object`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            {/* REST OPERATOR */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">📌 2. Rest Operator (...)</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-success">🎯 Definition:</h6>
                                    <p><strong>Rest operator (...)</strong> = "Collect" or "gather" remaining elements into an array.</p>
                                    
                                    <div className="bg-light p-2 rounded mb-3">
                                        <strong>Syntax:</strong> <code>...variableName</code> (used in function parameters or destructuring)
                                    </div>

                                    <div className="alert alert-warning mb-3">
                                        <strong>⚠️ Important:</strong> Same syntax as Spread (<code>...</code>) but <strong>opposite purpose</strong>!<br/>
                                        <strong>Spread</strong> = Unpack items | <strong>Rest</strong> = Pack items together
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 1: Function Parameters</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`function sum(...numbers) ${'{'} 
  return numbers.reduce(
    (total, n) => total + n, 0
  );
${'}'} 

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
// Accepts any number of arguments!`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 2: Array Destructuring</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
// Rest collects remaining items!`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 3: Object Destructuring</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} 
  id: 1, 
  name: 'John', 
  age: 25, 
  city: 'Mumbai' 
${'}'};

const ${'{'} id, ...rest ${'}'} = user;

console.log(id);   // 1
console.log(rest); 
// ${'{'} name: 'John', age: 25, city: 'Mumbai' ${'}'}`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Use Case 4: React Props</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`function Button(${'{'} label, ...rest ${'}'}) ${'{'} 
  return (
    <button ${'{'}...rest${'}'}>
      ${'{'}label${'}'}
    </button>
  );
${'}'} 

// Usage:
<Button 
  label="Click" 
  onClick=${'{'} handleClick ${'}'} 
  className="btn"
/>
// rest = { onClick, className }`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-success mt-2">
                                        <strong>💡 Key Difference:</strong>
                                        <pre className="bg-dark text-light p-2 rounded mb-0 mt-2 small">
{`// SPREAD - Unpacks items
const arr = [1, 2, 3];
console.log(...arr);  // 1 2 3 (individual items)

// REST - Packs items together
function fn(...args) ${'{'} 
  console.log(args);  // [1, 2, 3] (collected into array)
${'}'} 
fn(1, 2, 3);`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            {/* DESTRUCTURING */}
                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <h6 className="mb-0">📌 3. Destructuring</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-warning">🎯 Definition:</h6>
                                    <p><strong>Destructuring</strong> = Extract values from arrays or properties from objects into separate variables.</p>
                                    
                                    <div className="bg-light p-2 rounded mb-3">
                                        <strong>Syntax:</strong><br/>
                                        <code>const [var1, var2] = array;</code> (Array Destructuring)<br/>
                                        <code>const ${'{'} prop1, prop2 ${'}'} = object;</code> (Object Destructuring)
                                    </div>

                                    <div className="alert alert-info mb-3">
                                        <strong>💡 Think of it as:</strong> Unpacking specific items from a box directly into labeled containers!
                                    </div>

                                    <h6 className="text-warning mt-3">🔵 Array Destructuring:</h6>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 1: Basic Array</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const colors = ['red', 'green', 'blue'];

// Without destructuring
const first = colors[0];
const second = colors[1];

// With destructuring ✅
const [first, second, third] = colors;

console.log(first);  // 'red'
console.log(second); // 'green'
console.log(third);  // 'blue'`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 2: Skip Items</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const numbers = [1, 2, 3, 4, 5];

// Skip items with comma
const [first, , third] = numbers;

console.log(first); // 1
console.log(third); // 3 (skipped 2)

// Get first and rest
const [head, ...tail] = numbers;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 3: useState Hook</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// React useState returns array
// Perfect for destructuring!

const [count, setCount] = useState(0);
const [name, setName] = useState('John');

// Without destructuring:
const stateArray = useState(0);
const count = stateArray[0];
const setCount = stateArray[1];`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 4: Default Values</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const arr = [1];

// Set default if undefined
const [a, b = 10] = arr;

console.log(a); // 1
console.log(b); // 10 (default)

const [x = 5, y = 10] = [];
console.log(x); // 5 (default)
console.log(y); // 10 (default)`}
                                            </pre>
                                        </div>
                                    </div>

                                    <h6 className="text-warning mt-3">🔵 Object Destructuring:</h6>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 1: Basic Object</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} 
  name: 'John', 
  age: 25, 
  city: 'Mumbai' 
${'}'};

// Without destructuring
const name = user.name;
const age = user.age;

// With destructuring ✅
const ${'{'} name, age, city ${'}'} = user;

console.log(name); // 'John'
console.log(age);  // 25`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 2: Rename Variables</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} name: 'John', age: 25 ${'}'};

// Rename while destructuring
const ${'{'} name: userName, age: userAge ${'}'} = user;

console.log(userName); // 'John'
console.log(userAge);  // 25

// Original names don't exist
// console.log(name); // ❌ Error!`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 3: Nested Destructuring</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} 
  name: 'John',
  address: ${'{'} 
    city: 'Mumbai', 
    state: 'Maharashtra' 
  ${'}'} 
${'}'};

// Nested destructuring
const ${'{'} 
  name, 
  address: ${'{'} city, state ${'}'} 
${'}'} = user;

console.log(name);  // 'John'
console.log(city);  // 'Mumbai'
console.log(state); // 'Maharashtra'`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 4: Function Parameters</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// Destructure in function params
function greet(${'{'} name, age ${'}'}) ${'{'} 
  console.log(\`Hi \${name}, age \${age}\`);
${'}'} 

const user = ${'{'} name: 'John', age: 25 ${'}'};
greet(user);  // Hi John, age 25

// React component props
function Card(${'{'} title, price ${'}'}) ${'{'} 
  return <div>${'{'}title${'}'}: ₹${'{'}price${'}'}</div>;
${'}'}`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-success mt-2">
                                        <strong>💡 React Common Pattern:</strong>
                                        <pre className="bg-dark text-light p-2 rounded mb-0 mt-2 small">
{`// Destructure props
function UserCard(${'{'} name, age, city ${'}'}) ${'{'} 
  return (
    <div>
      <h2>${'{'}name${'}'}</h2>
      <p>${'{'}age${'}'} years old</p>
      <p>${'{'}city${'}'}</p>
    </div>
  );
${'}'} 

// Usage:
<UserCard name="John" age={25} city="Mumbai" />`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            {/* COMPARISON TABLE */}
                            <div className="table-responsive mt-3">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Feature</th>
                                            <th>Spread (...)</th>
                                            <th>Rest (...)</th>
                                            <th>Destructuring</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Purpose</strong></td>
                                            <td>Unpack/Spread items out</td>
                                            <td>Pack/Collect items together</td>
                                            <td>Extract specific items</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Syntax</strong></td>
                                            <td><code>...array</code> or <code>...object</code></td>
                                            <td><code>...args</code> (in params/destructuring)</td>
                                            <td><code>[a, b] = arr</code> or <code>${'{'} x, y ${'}'} = obj</code></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Use Case</strong></td>
                                            <td>Copy, merge, pass to functions</td>
                                            <td>Collect remaining arguments</td>
                                            <td>Extract values into variables</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Example</strong></td>
                                            <td><code>[...arr1, ...arr2]</code></td>
                                            <td><code>function fn(...args)</code></td>
                                            <td><code>const [a, b] = arr</code></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="alert alert-success mt-3">
                                <strong>🎯 Complete Example (All Three Together):</strong>
                                <pre className="bg-dark text-light p-3 rounded mb-0 mt-2">
{`const user = ${'{'} name: 'John', age: 25, city: 'Mumbai' ${'}'};

// 1. DESTRUCTURING - Extract values
const ${'{'} name, ...rest ${'}'} = user;
console.log(name); // 'John'
console.log(rest); // ${'{'} age: 25, city: 'Mumbai' ${'}'}  (REST collected remaining)

// 2. SPREAD - Create new object with updates
const updated = ${'{'} ...user, age: 26 ${'}'};
console.log(updated); // ${'{'} name: 'John', age: 26, city: 'Mumbai' ${'}'}

// 3. All in React setState
const [state, setState] = useState(${'{'} name: 'John', age: 25 ${'}'}); // DESTRUCTURING
setState(${'{'} ...state, age: 26 ${'}'}); // SPREAD for immutable update`}
                                </pre>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>💡 Remember:</strong>
                                <ul className="mb-0">
                                    <li><strong>Spread (...)</strong> = Opens/unpacks items (used when providing values)</li>
                                    <li><strong>Rest (...)</strong> = Collects/packs items (used when receiving values)</li>
                                    <li><strong>Destructuring</strong> = Extracts specific items into variables</li>
                                    <li>All three are essential for <strong>modern React development!</strong></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 36: Promise, Async, Await, Fetch */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q36</span>
                        What is Promise, async, await, and fetch?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is Promise? What is async/await? What is fetch? How do they work together?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-success btn-sm mb-3" 
                        onClick={() => toggleAnswer(36)}
                    >
                        {showAnswer[36] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[36] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🎯 What is a Promise?</h6>
                            
                            <div className="alert alert-success mb-3">
                                <strong>✨ Simple Definition:</strong>
                                <p className="mb-0 mt-2">
                                    <strong>A Promise represents a value that will be available later (in the future).</strong>
                                </p>
                            </div>

                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-2">
                                    <strong>Technical Definition:</strong> A Promise is an object that represents the eventual completion (or failure) 
                                    of an asynchronous operation and its resulting value.
                                </p>
                                <p className="mb-0">
                                    <strong>Real-World Analogy:</strong> A Promise is like ordering food online - you get a promise 
                                    that your food will arrive. It can be: <strong>Pending</strong> (cooking), <strong>Fulfilled</strong> (delivered), 
                                    or <strong>Rejected</strong> (cancelled).
                                </p>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <div className="card text-white bg-warning">
                                        <div className="card-body">
                                            <h6 className="card-title">⏳ Pending</h6>
                                            <p className="mb-0 small">Initial state, operation in progress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-white bg-success">
                                        <div className="card-body">
                                            <h6 className="card-title">✅ Fulfilled</h6>
                                            <p className="mb-0 small">Operation completed successfully</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-white bg-danger">
                                        <div className="card-body">
                                            <h6 className="card-title">❌ Rejected</h6>
                                            <p className="mb-0 small">Operation failed with error</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-3">📝 Promise Example:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Creating a Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Data loaded!"); // ✅ Success
    } else {
      reject("Error occurred!"); // ❌ Failure
    }
  }, 1000);
});

// Using Promise
promise
  .then(data => console.log(data))  // Handle success
  .catch(err => console.log(err));   // Handle error`}
                            </pre>

                            <hr className="my-4"/>

                            <h6 className="text-primary">🎯 What is async/await?</h6>
                            <div className="bg-success bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-2">
                                    <strong>async/await</strong> is modern syntax that makes working with Promises easier and 
                                    more readable. It makes asynchronous code look like synchronous code.
                                </p>
                                <ul className="mb-0">
                                    <li><code>async</code> - Makes a function return a Promise</li>
                                    <li><code>await</code> - Pauses execution until Promise resolves</li>
                                </ul>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="card border-warning">
                                        <div className="card-header bg-warning">
                                            <strong>⚠️ With .then() (Old Way)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`fetch('/api/users')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return fetch('/api/posts');
  })
  .then(res => res.json())
  .then(posts => {
    console.log(posts);
  })
  .catch(err => console.log(err));
// Callback hell! 😫`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>✅ With async/await (Modern)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`async function getData() {
  try {
    const res = await fetch('/api/users');
    const data = await res.json();
    console.log(data);
    
    const res2 = await fetch('/api/posts');
    const posts = await res2.json();
    console.log(posts);
  } catch (err) {
    console.log(err);
  }
}
// Clean and readable! ✅`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4"/>

                            <h6 className="text-primary">🎯 What is fetch()?</h6>
                            <div className="bg-primary bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-2">
                                    <strong>fetch()</strong> is a built-in JavaScript function to make HTTP requests (API calls). 
                                    It returns a Promise that resolves to the Response object.
                                </p>
                                <p className="mb-0">
                                    <strong>Common Uses:</strong> GET data from API, POST data to server, UPDATE/DELETE resources
                                </p>
                            </div>

                            <h6 className="text-primary mt-3">📝 Complete fetch() Examples:</h6>

                            <div className="mb-3">
                                <strong>1. GET Request (Fetch Data):</strong>
                                <pre className="bg-dark text-light p-3 rounded mt-2">
{`// Using async/await
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
                                </pre>
                            </div>

                            <div className="mb-3">
                                <strong>2. POST Request (Send Data):</strong>
                                <pre className="bg-dark text-light p-3 rounded mt-2">
{`async function createUser() {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'John',
        email: 'john@example.com'
      })
    });
    const data = await response.json();
    console.log('Created:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}`}
                                </pre>
                            </div>

                            <h6 className="text-primary mt-4">🔄 How They Work Together:</h6>
                            <div className="bg-warning bg-opacity-10 p-3 rounded">
                                <ol className="mb-0">
                                    <li className="mb-2">
                                        <strong>fetch()</strong> returns a <strong>Promise</strong>
                                    </li>
                                    <li className="mb-2">
                                        <strong>async</strong> function allows us to use <strong>await</strong>
                                    </li>
                                    <li className="mb-2">
                                        <strong>await</strong> pauses execution until the <strong>Promise</strong> resolves
                                    </li>
                                    <li className="mb-0">
                                        Result: Clean, readable asynchronous code! ✅
                                    </li>
                                </ol>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Key Points:</strong>
                                <ul className="mb-0">
                                    <li><strong>Promise</strong> = Represents future value (pending, fulfilled, rejected)</li>
                                    <li><strong>async</strong> = Makes function return a Promise</li>
                                    <li><strong>await</strong> = Waits for Promise to resolve (only works inside async functions)</li>
                                    <li><strong>fetch()</strong> = Makes HTTP requests, returns a Promise</li>
                                </ul>
                            </div>

                            <div className="alert alert-danger mt-3">
                                <strong>⚠️ Important Rules:</strong>
                                <ul className="mb-0">
                                    <li>Can only use <code>await</code> inside <code>async</code> functions</li>
                                    <li>Always use <code>try/catch</code> with async/await for error handling</li>
                                    <li><code>fetch()</code> needs TWO steps: get response → convert to JSON</li>
                                    <li>Don't forget <code>await</code> before <code>response.json()</code> - it's also async!</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )

}

export default QuestionAndAnswer
