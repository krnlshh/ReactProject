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

            {/* Question 3: Advantages of React */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q3</span>
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
                        onClick={() => toggleAnswer(3)}
                    >
                        {showAnswer[3] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[3] && (
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

            {/* Question 4: What is JavaScript */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q4</span>
                        What is JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is JavaScript? What are its key features and benefits?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(4)}
                    >
                        {showAnswer[4] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[4] && (
                        <div className="alert alert-light border">
                            <div className="alert alert-success">
                                <h6 className="text-success mb-2">📖 Simple Definition:</h6>
                                <p className="mb-0" style={{fontSize: '1.1rem'}}>
                                    <strong>JavaScript is a programming language that makes websites interactive and dynamic.</strong>
                                </p>
                            </div>

                            <h6 className="text-primary mt-3">🎯 Detailed Explanation:</h6>
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-0">
                                    <strong>JavaScript is a high-level, interpreted programming language</strong> that is a core technology of the web 
                                    (alongside HTML and CSS). It powers interactive and dynamic functionality on websites and applications.
                                </p>
                            </div>

                            <h6 className="text-primary mt-3">📌 Key Characteristics:</h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group mb-3">
                                        <li className="list-group-item">
                                            <strong>✅ Synchronous by default</strong><br/>
                                            <small className="text-muted">Executes code line by line, but has asynchronous capabilities</small>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>✅ Single-threaded</strong><br/>
                                            <small className="text-muted">Executes one task at a time on the main thread</small>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>✅ Event-driven</strong><br/>
                                            <small className="text-muted">Responds to user actions and events</small>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>✅ Dynamic typing</strong><br/>
                                            <small className="text-muted">Variables can change types at runtime</small>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group mb-3">
                                        <li className="list-group-item">
                                            <strong>✅ Client & Server-side</strong><br/>
                                            <small className="text-muted">Runs in browsers and servers (Node.js, Deno, Bun)</small>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>✅ No compilation required</strong><br/>
                                            <small className="text-muted">Interpreted directly by JavaScript engines</small>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>✅ Cross-platform</strong><br/>
                                            <small className="text-muted">Works everywhere with a JavaScript engine</small>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>✅ Prototype-based</strong><br/>
                                            <small className="text-muted">Uses prototypal inheritance</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h6 className="text-primary mt-3">🚀 Where JavaScript Runs:</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Platform</th>
                                            <th>Runtime/Engine</th>
                                            <th>Examples</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Browser (Client-side)</strong></td>
                                            <td>V8, SpiderMonkey, JavaScriptCore</td>
                                            <td>Interactive websites, web apps</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Server (Backend)</strong></td>
                                            <td>Node.js, Deno, Bun</td>
                                            <td>REST APIs, real-time servers</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Mobile</strong></td>
                                            <td>React Native, Ionic</td>
                                            <td>iOS & Android apps</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Desktop</strong></td>
                                            <td>Electron</td>
                                            <td>VS Code, Slack, Discord</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-3">⚡ Asynchronous Capabilities:</h6>
                            <div className="bg-warning bg-opacity-10 p-3 rounded mb-3">
                                <p className="mb-2">
                                    While JavaScript is <strong>synchronous by default</strong>, it has powerful <strong>asynchronous capabilities</strong> 
                                    through the <strong>Event Loop</strong>:
                                </p>
                                <ul className="mb-0">
                                    <li><strong>Callbacks</strong> - Functions passed as arguments</li>
                                    <li><strong>Promises</strong> - Objects representing future values</li>
                                    <li><strong>Async/Await</strong> - Modern syntax for handling async operations</li>
                                    <li><strong>Event Loop</strong> - Manages async operations without blocking the main thread</li>
                                </ul>
                            </div>

                            <h6 className="text-primary mt-3">💪 Key Benefits:</h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card border-success mb-3">
                                        <div className="card-header bg-success text-white">
                                            <strong>Development Benefits</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0 small">
                                                <li>✅ Build dynamic, interactive UIs</li>
                                                <li>✅ Single language for full-stack development</li>
                                                <li>✅ No compilation step needed</li>
                                                <li>✅ Huge ecosystem (npm packages)</li>
                                                <li>✅ Large community and resources</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-info mb-3">
                                        <div className="card-header bg-info text-white">
                                            <strong>Technical Benefits</strong>
                                        </div>
                                        <div className="card-body">
                                            <ul className="mb-0 small">
                                                <li>✅ Event-driven, non-blocking I/O</li>
                                                <li>✅ Cross-platform compatibility</li>
                                                <li>✅ Real-time capabilities (WebSocket)</li>
                                                <li>✅ Modern ES6+ features</li>
                                                <li>✅ Strong tooling and frameworks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-3">🔧 Popular Frameworks & Libraries:</h6>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="alert alert-primary mb-2">
                                        <strong>Frontend:</strong><br/>
                                        React, Vue, Angular, Svelte
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="alert alert-success mb-2">
                                        <strong>Backend:</strong><br/>
                                        Node.js, Express, NestJS
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="alert alert-warning mb-2">
                                        <strong>Mobile:</strong><br/>
                                        React Native, Ionic
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Key Takeaway:</strong> JavaScript started as a simple scripting language for web browsers 
                                but has evolved into a powerful, versatile language used across all platforms - from frontend to backend, 
                                mobile to desktop applications!
                            </div>

                            <div className="alert alert-success mt-3">
                                <strong>🎯 Interview Answer Summary:</strong>
                                <p className="mb-0">
                                    "JavaScript is a high-level, interpreted programming language that is synchronous and single-threaded by default, 
                                    but has asynchronous capabilities through callbacks, promises, and async/await. It runs on JavaScript engines 
                                    (like V8) in browsers and can also run server-side with Node.js. Originally created for web interactivity, 
                                    it's now used for frontend, backend, mobile, and desktop development. Key benefits include dynamic UI creation, 
                                    cross-platform compatibility, no compilation requirement, and a huge ecosystem of libraries and frameworks."
                                </p>
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

            {/* Question 26b: Render Props Pattern */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q26b</span>
                        What is Render Props Pattern?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is Render Props Pattern? How does it work? What are its benefits?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-success btn-sm mb-3" 
                        onClick={() => toggleAnswer('26b')}
                    >
                        {showAnswer['26b'] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer['26b'] && (
                        <div className="alert alert-light border">
                            <h6 className="text-primary">🎯 What is Render Props Pattern?</h6>
                            <div className="alert alert-info">
                                <p className="mb-2">
                                    A technique where a component receives a <strong>function as a prop</strong> and calls that function to determine what to render.
                                </p>
                                <p className="mb-0">
                                    <strong>Key Flow:</strong> Parent passes a function TO child → Child has the logic and data processing → Child CALLS the parent's function with the processed data → The parent's function decides how to render/display that data.
                                </p>
                            </div>
                            
                            <div className="bg-warning bg-opacity-10 p-3 rounded mb-3">
                                <strong>💡 Simple Definition:</strong><br/>
                                Component doesn't decide what to render - <strong>YOU tell it via a function!</strong>
                            </div>

                            <div className="bg-primary bg-opacity-10 p-3 rounded mb-3">
                                <strong>🔄 Data Flow:</strong>
                                <ol className="mb-0 mt-2">
                                    <li><strong>Parent</strong> → Passes render function to child</li>
                                    <li><strong>Child</strong> → Processes data (logic)</li>
                                    <li><strong>Child</strong> → Calls parent's function with processed data</li>
                                    <li><strong>Parent's function</strong> → Returns JSX to render</li>
                                </ol>
                            </div>

                            <h6 className="text-primary mt-4">🎯 Purpose:</h6>
                            <div className="alert alert-success">
                                <p className="mb-0">
                                    Share logic between components <strong>WITHOUT using HOCs or inheritance</strong>.<br/>
                                    Instead of wrapping components (HOCs), you pass a function that returns JSX.
                                </p>
                            </div>

                            <h6 className="text-primary mt-4">✅ Benefits:</h6>
                            <ul>
                                <li><strong>Reusable Logic</strong> - Share behavior across components</li>
                                <li><strong>Flexible</strong> - YOU control what gets rendered</li>
                                <li><strong>No Wrapper Hell</strong> - Unlike HOCs, no deep nesting</li>
                                <li><strong>Explicit Props</strong> - Clear what data is passed</li>
                                <li><strong>Type Safety</strong> - Easy to type in TypeScript</li>
                            </ul>

                            <h6 className="text-primary mt-4">📝 Basic Example: Mouse Position Tracker</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Component with shared logic
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Call the render function with data
  return render(position);
}

// Usage 1: Show coordinates
<MouseTracker render={(pos) => (
  <p>Mouse at: {pos.x}, {pos.y}</p>
)} />

// Usage 2: Show dot that follows mouse
<MouseTracker render={(pos) => (
  <div style={{ 
    position: 'fixed', 
    left: pos.x, 
    top: pos.y,
    width: '20px',
    height: '20px',
    background: 'red',
    borderRadius: '50%'
  }} />
)} />`}
                            </pre>

                            <h6 className="text-primary mt-4">📝 Example 2: Data Fetcher with Render Props</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Reusable data fetcher
function DataFetcher({ url, render }) {
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

  // Pass loading, data, error to render function
  return render({ loading, data, error });
}

// Usage: Flexible rendering
<DataFetcher 
  url="/api/users" 
  render={({ loading, data, error }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
      <ul>
        {data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }}
/>`}
                            </pre>

                            <h6 className="text-primary mt-4">📝 Alternative Syntax: Using "children" as a function</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Component using children as render prop
function Toggle({ children }) {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);

  // Call children as a function
  return children({ isOn, toggle });
}

// Usage: More natural syntax
<Toggle>
  {({ isOn, toggle }) => (
    <div>
      <p>Status: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )}
</Toggle>`}
                            </pre>

                            <h6 className="text-primary mt-4">🆚 Render Props vs HOC vs Hooks:</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Feature</th>
                                            <th>Render Props</th>
                                            <th>HOC</th>
                                            <th>Hooks (Modern)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Syntax</strong></td>
                                            <td>Pass function as prop</td>
                                            <td>Wrap component</td>
                                            <td>Call hook inside component</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Flexibility</strong></td>
                                            <td>✅ High (control rendering)</td>
                                            <td>⚠️ Medium (fixed structure)</td>
                                            <td>✅ High (custom logic)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Wrapper Hell</strong></td>
                                            <td>✅ No extra nesting</td>
                                            <td>❌ Multiple wrappers</td>
                                            <td>✅ No wrappers</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Readability</strong></td>
                                            <td>⚠️ Can get verbose</td>
                                            <td>⚠️ Hidden props magic</td>
                                            <td>✅ Clear and simple</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Modern?</strong></td>
                                            <td>⚠️ Still used but less common</td>
                                            <td>⚠️ Legacy pattern</td>
                                            <td>✅ Preferred modern approach</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-4">🔄 Same Example with All 3 Patterns:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// 1️⃣ RENDER PROPS
<MouseTracker render={(pos) => (
  <p>X: {pos.x}, Y: {pos.y}</p>
)} />

// 2️⃣ HOC
const EnhancedComponent = withMousePosition(MyComponent);

// 3️⃣ HOOKS (Modern ✅)
function MyComponent() {
  const position = useMousePosition(); // Custom hook
  return <p>X: {position.x}, Y: {position.y}</p>;
}`}
                            </pre>

                            <div className="alert alert-warning mt-4">
                                <h6 className="alert-heading">⚠️ When to Use Render Props?</h6>
                                <ul className="mb-0">
                                    <li>✅ When you need <strong>fine control over rendering</strong></li>
                                    <li>✅ When building <strong>library components</strong> (maximum flexibility)</li>
                                    <li>✅ When working with <strong>class components</strong> (can't use hooks)</li>
                                    <li>❌ For simple logic sharing, prefer <strong>Custom Hooks</strong> instead</li>
                                </ul>
                            </div>

                            <div className="alert alert-success mt-3">
                                <h6 className="alert-heading">✅ Real-World Libraries Using Render Props:</h6>
                                <ul className="mb-0">
                                    <li><strong>React Router:</strong> <code>&lt;Route render={'{'} (props) =&gt; ... {'}'} /&gt;</code></li>
                                    <li><strong>Formik:</strong> <code>&lt;Formik&gt; {'{'} (formProps) =&gt; ... {'}'} &lt;/Formik&gt;</code></li>
                                    <li><strong>React Motion:</strong> Animation library</li>
                                    <li><strong>Downshift:</strong> Dropdown/autocomplete library</li>
                                </ul>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Interview Tip:</strong> Explain that while Render Props is a valid pattern, 
                                <strong> Custom Hooks are now the preferred modern approach</strong> for most use cases. 
                                However, Render Props still has its place when you need maximum rendering flexibility or 
                                when building library components!
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

            {/* Question 37: JavaScript Patterns - Unique Values & Group By */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q37</span>
                        JavaScript Patterns: Get Unique Values & Group By
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">How do you get unique values from an array? How do you group data by a specific property?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-warning btn-sm mb-3" 
                        onClick={() => toggleAnswer(37)}
                    >
                        {showAnswer[37] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[37] && (
                        <div>
                            {/* UNIQUE VALUES */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">📌 Pattern 1: Get Unique Values</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Method 1: Using Set (Best!) ✅</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const numbers = [1, 2, 2, 3, 4, 4, 5];

// Create Set (automatically removes duplicates)
const unique = [...new Set(numbers)];

console.log(unique); // [1, 2, 3, 4, 5]

// One-liner! 🚀
const uniqueArray = [...new Set(array)];`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Method 2: Using filter()</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const numbers = [1, 2, 2, 3, 4, 4, 5];

const unique = numbers.filter(
  (item, index) => numbers.indexOf(item) === index
);

console.log(unique); // [1, 2, 3, 4, 5]

// How it works:
// indexOf returns FIRST occurrence
// If index matches, it's the first time!`}
                                            </pre>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <strong>Unique Objects by Property</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const users = [
  ${'{'} id: 1, name: 'John' ${'}'}, 
  ${'{'} id: 2, name: 'Jane' ${'}'},
  ${'{'} id: 1, name: 'John' ${'}'}, // Duplicate!
];

// Get unique by 'id'
const uniqueUsers = users.filter(
  (user, index, self) => 
    index === self.findIndex(u => u.id === user.id)
);

console.log(uniqueUsers);
// [${'{'} id: 1, name: 'John' ${'}'}, ${'{'} id: 2, name: 'Jane' ${'}'}]

// Using Map (Alternative)
const uniqueById = [
  ...new Map(users.map(u => [u.id, u])).values()
];`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-success mt-2">
                                        <strong>💡 When to use:</strong> Remove duplicates • Filter unique items • Clean data before display
                                    </div>
                                </div>
                            </div>

                            {/* GROUP BY */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">📌 Pattern 2: Group By Property</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <strong>Example 1: Group Products by Category</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const products = [
  ${'{'} name: 'Laptop', category: 'electronics', price: 50000 ${'}'}, 
  ${'{'} name: 'Phone', category: 'electronics', price: 30000 ${'}'},
  ${'{'} name: 'Shirt', category: 'clothing', price: 1000 ${'}'},
  ${'{'} name: 'Jeans', category: 'clothing', price: 2000 ${'}'}
];

// Group by category using reduce
const grouped = products.reduce((acc, product) => ${'{'} 
  const category = product.category;
  
  // If category doesn't exist, create empty array
  if (!acc[category]) ${'{'} 
    acc[category] = [];
  ${'}'} 
  
  // Add product to category
  acc[category].push(product);
  
  return acc;
${'}'}, ${'{'} ${'}'}); // Start with empty object

console.log(grouped);
/*
${'{'} 
  electronics: [
    ${'{'} name: 'Laptop', category: 'electronics', price: 50000 ${'}'}, 
    ${'{'} name: 'Phone', category: 'electronics', price: 30000 ${'}'}
  ],
  clothing: [
    ${'{'} name: 'Shirt', category: 'clothing', price: 1000 ${'}'}, 
    ${'{'} name: 'Jeans', category: 'clothing', price: 2000 ${'}'}
  ]
${'}'} 
*/`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 2: Group & Count</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const orders = [
  ${'{'} product: 'Laptop', status: 'delivered' ${'}'}, 
  ${'{'} product: 'Phone', status: 'pending' ${'}'},
  ${'{'} product: 'Mouse', status: 'delivered' ${'}'}
];

// Count by status
const statusCount = orders.reduce(
  (acc, order) => ${'{'} 
    const status = order.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  ${'}'}, 
  ${'{'} ${'}'}
);

console.log(statusCount);
// ${'{'} delivered: 2, pending: 1 ${'}'}`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Example 3: Modern Object.groupBy() 🆕</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// ES2024+ (New feature!)
const products = [
  ${'{'} name: 'Laptop', category: 'electronics' ${'}'}, 
  ${'{'} name: 'Shirt', category: 'clothing' ${'}'}
];

// Much simpler! 🚀
const grouped = Object.groupBy(
  products, 
  product => product.category
);

console.log(grouped);
// Same result as reduce method above!

// ⚠️ Note: Check browser support first`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-success mt-2">
                                        <strong>💡 When to use:</strong> Organize data by property • Create categories • Generate reports • Display grouped lists in React
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-warning">
                                <strong>🎯 Real-World React Example:</strong>
                                <pre className="bg-dark text-light p-3 rounded mb-0 mt-2">
{`// E-commerce: Group products by category
function ProductList(${'{'} products ${'}'}) ${'{'} 
  // Group products
  const grouped = products.reduce((acc, p) => ${'{'} 
    const cat = p.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(p);
    return acc;
  ${'}'}, ${'{'} ${'}'}); 
  
  return (
    <div>
      ${'{'}Object.entries(grouped).map(([category, items]) => (
        <div key=${'{'}category${'}'}>
          <h2>${'{'}category${'}'}</h2>
          <ul>
            ${'{'}items.map(item => (
              <li key=${'{'}item.id${'}'}>
                ${'{'}item.name${'}'} - ₹${'{'}item.price${'}'}
              </li>
            ))${'}'}
          </ul>
        </div>
      ))${'}'}
    </div>
  );
${'}'}`}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 38: Arrow Functions */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q38</span>
                        What are Arrow Functions? How are they different?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are arrow functions in JavaScript? How are they different from regular functions?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-success btn-sm mb-3" 
                        onClick={() => toggleAnswer(38)}
                    >
                        {showAnswer[38] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[38] && (
                        <div>
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <h6 className="text-primary">🎯 What are Arrow Functions?</h6>
                                <p className="mb-0">
                                    <strong>Arrow functions</strong> are a shorter syntax for writing functions, introduced in ES6. 
                                    They use the <code>={'>'}</code> syntax and have different behavior with <code>this</code> keyword.
                                </p>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="card border-warning">
                                        <div className="card-header bg-warning">
                                            <strong>Regular Function</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// Traditional syntax
function add(a, b) ${'{'} 
  return a + b;
${'}'} 

// Function expression
const multiply = function(a, b) ${'{'} 
  return a * b;
${'}'};`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-success">
                                        <div className="card-header bg-success text-white">
                                            <strong>Arrow Function ✅</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// Arrow syntax - shorter!
const add = (a, b) => ${'{'} 
  return a + b;
${'}'};

// Even shorter (implicit return)
const multiply = (a, b) => a * b;`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-3">📝 Arrow Function Syntax Variations:</h6>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <strong>1. Multiple Parameters</strong>
                                    <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// With parentheses
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const double = x => x * 2;

// No parameters
const greet = () => 'Hello!';`}
                                    </pre>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <strong>2. Return Variations</strong>
                                    <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// Implicit return (one-liner)
const square = x => x * x;

// Explicit return (multiple lines)
const calculate = (a, b) => ${'{'} 
  const sum = a + b;
  return sum * 2;
${'}'};

// Return object (need parentheses!)
const makeUser = name => (${'{'} name, age: 25 ${'}'}); `}
                                    </pre>
                                </div>
                            </div>

                            <div className="table-responsive mt-3">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Feature</th>
                                            <th>Regular Function</th>
                                            <th>Arrow Function</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Syntax</strong></td>
                                            <td><code>function name() ${'{'}${'}'}</code></td>
                                            <td><code>const name = () =&gt; ${'{'}${'}'}</code></td>
                                        </tr>
                                        <tr>
                                            <td><strong>this binding</strong></td>
                                            <td>Has its own <code>this</code></td>
                                            <td>Inherits <code>this</code> from parent</td>
                                        </tr>
                                        <tr>
                                            <td><strong>arguments object</strong></td>
                                            <td>✅ Has <code>arguments</code></td>
                                            <td>❌ No <code>arguments</code></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Can be constructor?</strong></td>
                                            <td>✅ Yes (with <code>new</code>)</td>
                                            <td>❌ No</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Hoisting</strong></td>
                                            <td>✅ Hoisted</td>
                                            <td>❌ Not hoisted</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-3">🎯 Key Difference: 'this' Binding</h6>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card border-danger mb-3">
                                        <div className="card-header bg-danger text-white">
                                            <strong>❌ Regular Function (Problem)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`const user = ${'{'} 
  name: 'John',
  greet: function() ${'{'} 
    setTimeout(function() ${'{'} 
      console.log('Hi ' + this.name);
      // ❌ Error! 'this' is undefined
    ${'}'}, 1000);
  ${'}'} 
${'}'};

user.greet(); // Hi undefined 😱`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border-success mb-3">
                                        <div className="card-header bg-success text-white">
                                            <strong>✅ Arrow Function (Solution)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`const user = ${'{'} 
  name: 'John',
  greet: function() ${'{'} 
    setTimeout(() => ${'{'} 
      console.log('Hi ' + this.name);
      // ✅ Works! Inherits 'this' from greet
    ${'}'}, 1000);
  ${'}'} 
${'}'};

user.greet(); // Hi John ✅`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-success">
                                <strong>💡 When to use Arrow Functions:</strong>
                                <ul className="mb-0">
                                    <li>✅ Array methods (map, filter, reduce)</li>
                                    <li>✅ Callbacks (setTimeout, addEventListener)</li>
                                    <li>✅ React components (functional components)</li>
                                    <li>✅ Short, simple functions</li>
                                    <li>✅ When you need parent's <code>this</code></li>
                                </ul>
                            </div>

                            <div className="alert alert-danger">
                                <strong>❌ When NOT to use Arrow Functions:</strong>
                                <ul className="mb-0">
                                    <li>❌ Object methods (if you need <code>this</code> to refer to the object)</li>
                                    <li>❌ Constructor functions</li>
                                    <li>❌ When you need <code>arguments</code> object</li>
                                    <li>❌ Event handlers (if you need <code>this</code> to refer to element)</li>
                                </ul>
                            </div>

                            <div className="alert alert-warning">
                                <strong>🎯 React Example:</strong>
                                <pre className="bg-dark text-light p-3 rounded mb-0 mt-2">
{`// Arrow functions are PERFECT for React!
function UserList() ${'{'} 
  const [users, setUsers] = useState([]);
  
  // ✅ Arrow function in map
  return (
    <ul>
      ${'{'}users.map(user => (
        <li key=${'{'}user.id${'}'}>
          ${'{'}user.name${'}'}
        </li>
      ))${'}'}
    </ul>
  );
${'}'} 

// ✅ Arrow function for event handler
const handleClick = () => ${'{'} 
  console.log('Clicked!');
${'}'};

// ✅ Arrow function component
const Button = (${'{'} label ${'}'}) => <button>${'{'}label${'}'}</button>;`}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 39: Latest JavaScript Features */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q39</span>
                        Latest JavaScript Features (ES2020+)
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are the latest JavaScript features? What's new in modern JavaScript?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(39)}
                    >
                        {showAnswer[39] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[39] && (
                        <div>
                            {/* Optional Chaining */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">📌 1. Optional Chaining (?.) - ES2020 🔥</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Purpose:</strong> Safely access nested object properties without errors.</p>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong>❌ Old Way (Verbose)</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} 
  name: 'John',
  address: ${'{'} city: 'Mumbai' ${'}'} 
${'}'};

// Check every level manually
const city = user && 
             user.address && 
             user.address.city;

// If address doesn't exist:
const zip = user && 
            user.address && 
            user.address.zip; // undefined`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>✅ New Way (Clean!)</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} 
  name: 'John',
  address: ${'{'} city: 'Mumbai' ${'}'} 
${'}'};

// One-liner! 🚀
const city = user?.address?.city;
// Result: 'Mumbai'

// If property doesn't exist:
const zip = user?.address?.zip;
// Result: undefined (no error!)

// Works with arrays too!
const firstUser = users?.[0]?.name;`}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="alert alert-success mt-2">
                                        <strong>💡 React Use Case:</strong>
                                        <code>const userName = data?.user?.profile?.name || 'Guest';</code>
                                    </div>
                                </div>
                            </div>

                            {/* Nullish Coalescing */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">📌 2. Nullish Coalescing (??) - ES2020 🔥</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Purpose:</strong> Provide default value only for <code>null</code> or <code>undefined</code>.</p>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong>❌ Using || (Problem)</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const count = 0;
const result = count || 10;
console.log(result); // 10 😱
// Problem: 0 is falsy, so uses default!

const text = '';
const display = text || 'No text';
console.log(display); // 'No text' 😱
// Problem: empty string is falsy!`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>✅ Using ?? (Correct!)</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const count = 0;
const result = count ?? 10;
console.log(result); // 0 ✅
// Only null/undefined use default!

const text = '';
const display = text ?? 'No text';
console.log(display); // '' ✅

const age = null;
const userAge = age ?? 25;
console.log(userAge); // 25 ✅`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Promise.allSettled */}
                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <h6 className="mb-0">📌 3. Promise.allSettled() - ES2020</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Purpose:</strong> Wait for all promises to complete (success or failure).</p>
                                    
                                    <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/error'); // This fails!

// Wait for ALL (even failures)
const results = await Promise.allSettled([
  promise1, 
  promise2, 
  promise3
]);

console.log(results);
/*
[
  ${'{'} status: 'fulfilled', value: ... ${'}'}, 
  ${'{'} status: 'fulfilled', value: ... ${'}'},
  ${'{'} status: 'rejected', reason: Error ${'}'} 
]
*/

// vs Promise.all() - stops on first failure!`}
                                    </pre>
                                </div>
                            </div>

                            {/* Other Features */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="card border-info h-100">
                                        <div className="card-header bg-info text-white">
                                            <strong>4. Logical Assignment (ES2021)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// Old way
obj.prop = obj.prop || 'default';

// New way - shorter!
obj.prop ||= 'default';
obj.prop &&= 'value';
obj.prop ??= 'default';

// Example
let count = 0;
count ||= 10; // count = 10
count &&= 20; // count = 20`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="card border-secondary h-100">
                                        <div className="card-header bg-secondary text-white">
                                            <strong>5. String.replaceAll() (ES2021)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`const text = 'Hello Hello Hello';

// Old way (regex)
const result1 = text.replace(/Hello/g, 'Hi');

// New way - simpler!
const result2 = text.replaceAll('Hello', 'Hi');

console.log(result2);
// 'Hi Hi Hi'`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="card border-primary h-100">
                                        <div className="card-header bg-primary text-white">
                                            <strong>6. Array.at() (ES2022)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`const arr = [10, 20, 30, 40, 50];

// Old way (negative index)
const last = arr[arr.length - 1]; // 50

// New way - cleaner!
const last = arr.at(-1); // 50
const secondLast = arr.at(-2); // 40

// Positive index works too
arr.at(0); // 10`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="card border-success h-100">
                                        <div className="card-header bg-success text-white">
                                            <strong>7. Top-Level await (ES2022)</strong>
                                        </div>
                                        <div className="card-body">
                                            <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// Old way - wrap in async function
(async () => ${'{'} 
  const data = await fetch('/api');
${'}'})();

// New way - use await directly!
const data = await fetch('/api');
const json = await data.json();

// No need for async wrapper! 🚀`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-success">
                                <strong>🎯 Most Important for Interview:</strong>
                                <ul className="mb-0">
                                    <li><strong>Optional Chaining (?.)</strong> - Safely access nested properties</li>
                                    <li><strong>Nullish Coalescing (??)</strong> - Better default values</li>
                                    <li><strong>Promise.allSettled()</strong> - Handle multiple async operations</li>
                                    <li><strong>Array.at()</strong> - Easy negative indexing</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 40: JavaScript Prototypes */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q40</span>
                        What is Prototype and Prototype Chain?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is a prototype? Why use prototypes? What is the prototype chain?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-warning btn-sm mb-3" 
                        onClick={() => toggleAnswer(40)}
                    >
                        {showAnswer[40] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[40] && (
                        <div>
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">📌 What is a Prototype?</h6>
                                </div>
                                <div className="card-body">
                                    <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                        <p className="mb-0">
                                            <strong>A prototype is an object that serves as a parent, allowing other objects to inherit and share properties and methods.</strong>
                                        </p>
                                    </div>
                                    
                                    <div className="alert alert-success">
                                        <strong>💡 Simple Analogy:</strong> Think of it like genetic inheritance - children inherit traits from parents! 👨‍👩‍👧
                                    </div>

                                    <pre className="bg-dark text-light p-3 rounded">
{`const person = ${'{'} name: 'John' ${'}'};

// Every object has __proto__ (link to prototype)
console.log(person.__proto__); 
// Result: Object.prototype (the parent)

// toString() comes from prototype, not person!
console.log(person.toString()); // [object Object]`}
                                    </pre>
                                </div>
                            </div>

                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">📌 Why Use Prototypes?</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="alert alert-success mb-0">
                                                <strong>✅ Memory Efficient</strong><br/>
                                                <small>Methods are shared, not duplicated</small>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="alert alert-success mb-0">
                                                <strong>✅ Easy to Maintain</strong><br/>
                                                <small>Change once, affects all instances</small>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="alert alert-success mb-0">
                                                <strong>✅ Code Reusability</strong><br/>
                                                <small>Everyone can access when needed</small>
                                            </div>
                                        </div>
                                    </div>

                                    <h6 className="text-success mt-3">Example:</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong>❌ Without Prototype (Wasteful)</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`function User(name) ${'{'} 
  this.name = name;
  // New function for EVERY user! 😱
  this.greet = function() ${'{'} 
    return 'Hi, ' + this.name;
  ${'}'};
${'}'} 

const user1 = new User('John');
const user2 = new User('Jane');
console.log(user1.greet === user2.greet);
// false (separate functions - wastes memory!)`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6">
                                            <strong>✅ With Prototype (Efficient)</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`function User(name) ${'{'} 
  this.name = name;
${'}'} 

// Shared by ALL users! ✅
User.prototype.greet = function() ${'{'} 
  return 'Hi, ' + this.name;
${'}'};

const user1 = new User('John');
const user2 = new User('Jane');
console.log(user1.greet === user2.greet);
// true (same function - saves memory!)`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <h6 className="mb-0">📌 What is the Prototype Chain?</h6>
                                </div>
                                <div className="card-body">
                                    <div className="bg-warning bg-opacity-10 p-3 rounded mb-3">
                                        <p className="mb-2">
                                            <strong>The prototype chain is how JavaScript finds properties and methods.</strong>
                                        </p>
                                        <p className="mb-0">
                                            First it checks the object → then the object's prototype → then the prototype's prototype → 
                                            keeps going until it finds <code>null</code>.
                                        </p>
                                    </div>

                                    <div className="alert alert-info">
                                        <strong>💡 Perfect Analogy:</strong><br/>
                                        It's like a child asking parents, parents asking grandparents, and grandparents asking 
                                        great-grandparents for something you need! 👨‍👩‍👧‍👦
                                    </div>

                                    <h6 className="text-warning mt-3">Visual Example:</h6>
                                    <pre className="bg-dark text-light p-3 rounded">
{`const animal = ${'{'} eats: true ${'}'};
const dog = ${'{'} barks: true ${'}'};

// Set dog's prototype to animal
Object.setPrototypeOf(dog, animal);

console.log(dog.barks);  // true (found in dog)
console.log(dog.eats);   // true (found in animal - inherited!)
console.log(dog.flies);  // undefined (not found anywhere)

// Prototype chain:
// dog {barks: true}
//   ↓ __proto__
// animal {eats: true}
//   ↓ __proto__
// Object.prototype {toString, valueOf, etc}
//   ↓ __proto__
// null`}
                                    </pre>

                                    <h6 className="text-warning mt-3">Step-by-Step Lookup:</h6>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>Property</th>
                                                    <th>Step 1: Check dog</th>
                                                    <th>Step 2: Check animal</th>
                                                    <th>Step 3: Check Object.prototype</th>
                                                    <th>Result</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><code>dog.barks</code></td>
                                                    <td className="table-success">✅ Found!</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>true</td>
                                                </tr>
                                                <tr>
                                                    <td><code>dog.eats</code></td>
                                                    <td className="table-danger">❌ Not found</td>
                                                    <td className="table-success">✅ Found!</td>
                                                    <td>-</td>
                                                    <td>true</td>
                                                </tr>
                                                <tr>
                                                    <td><code>dog.toString()</code></td>
                                                    <td className="table-danger">❌ Not found</td>
                                                    <td className="table-danger">❌ Not found</td>
                                                    <td className="table-success">✅ Found!</td>
                                                    <td>[object Object]</td>
                                                </tr>
                                                <tr>
                                                    <td><code>dog.flies</code></td>
                                                    <td className="table-danger">❌ Not found</td>
                                                    <td className="table-danger">❌ Not found</td>
                                                    <td className="table-danger">❌ Not found</td>
                                                    <td>undefined</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-info mb-3">
                                <div className="card-header bg-info text-white">
                                    <h6 className="mb-0">📌 Real-World Example: Inheritance</h6>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-dark text-light p-3 rounded">
{`// Parent (Animal)
function Animal(name) ${'{'} 
  this.name = name;
${'}'} 
Animal.prototype.eat = function() ${'{'} 
  return this.name + ' is eating';
${'}'};

// Child (Dog) inherits from Animal
function Dog(name, breed) ${'{'} 
  Animal.call(this, name); // Call parent
  this.breed = breed;
${'}'} 

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function() ${'{'} 
  return this.name + ' says Woof!';
${'}'};

// Usage
const myDog = new Dog('Buddy', 'Golden Retriever');

console.log(myDog.name);   // 'Buddy'
console.log(myDog.breed);  // 'Golden Retriever'
console.log(myDog.eat());  // 'Buddy is eating' (inherited!)
console.log(myDog.bark()); // 'Buddy says Woof!'`}
                                    </pre>
                                </div>
                            </div>

                            <div className="alert alert-success">
                                <strong>🎯 Quick Interview Answers:</strong>
                                <ul className="mb-0">
                                    <li><strong>What is prototype?</strong> An object that serves as a parent for inheritance</li>
                                    <li><strong>Why use it?</strong> Saves memory, easy to maintain, code reusability</li>
                                    <li><strong>Prototype chain?</strong> Lookup mechanism: object → prototype → prototype's prototype → null</li>
                                    <li><strong>Modern alternative:</strong> ES6 Classes (syntactic sugar over prototypes)</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 41: Destructuring in Detail */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q41</span>
                        What is Destructuring? Explain in Detail
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is destructuring in JavaScript? How does it work with arrays and objects? What are the advanced patterns?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(41)}
                    >
                        {showAnswer[41] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[41] && (
                        <div>
                            <div className="bg-info bg-opacity-10 p-3 rounded mb-3">
                                <h6 className="text-primary">🎯 What is Destructuring?</h6>
                                <p className="mb-0">
                                    <strong>Destructuring</strong> is a JavaScript expression that allows you to <strong>unpack</strong> values 
                                    from arrays or properties from objects into separate variables in a single statement.
                                </p>
                            </div>

                            <div className="alert alert-success mb-3">
                                <strong>💡 Simple Definition:</strong>
                                <p className="mb-0">
                                    Instead of accessing values one by one, destructuring lets you <strong>extract multiple values at once</strong> 
                                    using a pattern-matching syntax. Think of it as "unpacking a box" directly into labeled containers!
                                </p>
                            </div>

                            {/* ARRAY DESTRUCTURING */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">📌 1. Array Destructuring</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Basic Array Destructuring</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// Without destructuring (Old way)
const colors = ['red', 'green', 'blue'];
const first = colors[0];
const second = colors[1];
const third = colors[2];

// With destructuring (Modern way) ✅
const [first, second, third] = colors;

console.log(first);  // 'red'
console.log(second); // 'green'
console.log(third);  // 'blue'`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Skipping Elements</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const numbers = [1, 2, 3, 4, 5];

// Skip with comma
const [first, , third] = numbers;
console.log(first); // 1
console.log(third); // 3 (skipped 2)

// Get first and skip rest
const [head] = numbers;
console.log(head); // 1

// Skip multiple
const [, , , fourth] = numbers;
console.log(fourth); // 4`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Default Values</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const arr = [1];

// Set defaults for missing values
const [a, b = 10, c = 20] = arr;
console.log(a); // 1
console.log(b); // 10 (default)
console.log(c); // 20 (default)

// Works with empty arrays
const [x = 5, y = 10] = [];
console.log(x); // 5
console.log(y); // 10`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Rest Operator with Arrays</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const numbers = [1, 2, 3, 4, 5];

// Get first, rest in array
const [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

// Get first two, rest in array
const [a, b, ...others] = numbers;
console.log(a);      // 1
console.log(b);      // 2
console.log(others); // [3, 4, 5]`}
                                            </pre>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <strong>Swapping Variables</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`let a = 1;
let b = 2;

// Swap without temp variable!
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

// Rotate three variables
let x = 1, y = 2, z = 3;
[x, y, z] = [y, z, x];
console.log(x, y, z); // 2 3 1`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* OBJECT DESTRUCTURING */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">📌 2. Object Destructuring</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Basic Object Destructuring</strong>
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
console.log(age);  // 25
console.log(city); // 'Mumbai'`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Renaming Variables</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} name: 'John', age: 25 ${'}'};

// Rename while destructuring
const ${'{'} 
  name: userName, 
  age: userAge 
${'}'} = user;

console.log(userName); // 'John'
console.log(userAge);  // 25

// Original names don't exist
// console.log(name); // ❌ Error!`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Default Values</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} name: 'John' ${'}'};

// Set defaults for missing properties
const ${'{'} 
  name, 
  age = 18, 
  city = 'Unknown' 
${'}'} = user;

console.log(name); // 'John'
console.log(age);  // 18 (default)
console.log(city); // 'Unknown' (default)

// Combine rename + default
const ${'{'} name: n = 'Guest' ${'}'} = ${'{'} ${'}'};
console.log(n); // 'Guest'`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Rest Operator with Objects</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} 
  id: 1, 
  name: 'John', 
  age: 25, 
  city: 'Mumbai' 
${'}'};

// Get id, rest in object
const ${'{'} id, ...rest ${'}'} = user;
console.log(id);   // 1
console.log(rest); 
// ${'{'} name: 'John', age: 25, city: 'Mumbai' ${'}'}

// Exclude multiple properties
const ${'{'} id: _, name: __, ...data ${'}'} = user;
console.log(data); // ${'{'} age: 25, city: 'Mumbai' ${'}'}`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* NESTED DESTRUCTURING */}
                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <h6 className="mb-0">📌 3. Nested Destructuring</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Nested Objects</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const user = ${'{'} 
  name: 'John',
  address: ${'{'} 
    city: 'Mumbai', 
    state: 'Maharashtra',
    zip: ${'{'} code: '400001' ${'}'} 
  ${'}'} 
${'}'};

// Nested destructuring
const ${'{'} 
  name, 
  address: ${'{'} city, state ${'}'} 
${'}'} = user;

console.log(name);  // 'John'
console.log(city);  // 'Mumbai'
console.log(state); // 'Maharashtra'

// Deep nesting
const ${'{'} address: ${'{'} zip: ${'{'} code ${'}'} ${'}'} ${'}'} = user;
console.log(code); // '400001'`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Array of Objects</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const users = [
  ${'{'} id: 1, name: 'John', age: 25 ${'}'}, 
  ${'{'} id: 2, name: 'Jane', age: 30 ${'}'}
];

// Destructure first object
const [${'{'} name, age ${'}'}] = users;
console.log(name); // 'John'
console.log(age);  // 25

// Destructure specific item
const [, ${'{'} name: secondName ${'}'}] = users;
console.log(secondName); // 'Jane'

// Loop with destructuring
users.forEach((${'{'} name, age ${'}'}) => ${'{'} 
  console.log(\`\${name} is \${age}\`);
${'}'}); `}
                                            </pre>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <strong>Complex Nested Example</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const data = ${'{'} 
  user: ${'{'} 
    profile: ${'{'} 
      name: 'John',
      contact: ${'{'} 
        email: 'john@example.com',
        phones: ['123', '456']
      ${'}'} 
    ${'}'} 
  ${'}'} 
${'}'};

// Deep nested destructuring
const ${'{'} 
  user: ${'{'} 
    profile: ${'{'} 
      name,
      contact: ${'{'} 
        email,
        phones: [primary, secondary]
      ${'}'} 
    ${'}'} 
  ${'}'} 
${'}'} = data;

console.log(name);      // 'John'
console.log(email);     // 'john@example.com'
console.log(primary);   // '123'
console.log(secondary); // '456'`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FUNCTION PARAMETERS */}
                            <div className="card border-info mb-3">
                                <div className="card-header bg-info text-white">
                                    <h6 className="mb-0">📌 4. Destructuring in Function Parameters</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Object Parameters</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// Without destructuring
function greet(user) ${'{'} 
  console.log(\`Hi \${user.name}, age \${user.age}\`);
${'}'} 

// With destructuring ✅
function greet(${'{'} name, age ${'}'}) ${'{'} 
  console.log(\`Hi \${name}, age \${age}\`);
${'}'} 

greet(${'{'} name: 'John', age: 25 ${'}'}); 
// Hi John, age 25

// With defaults
function greet(${'{'} name = 'Guest', age = 18 ${'}'}) ${'{'} 
  console.log(\`Hi \${name}, age \${age}\`);
${'}'}`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Array Parameters</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// Destructure array params
function sum([a, b]) ${'{'} 
  return a + b;
${'}'} 

console.log(sum([5, 10])); // 15

// With rest operator
function calculate([first, ...rest]) ${'{'} 
  const total = rest.reduce((a, b) => a + b, 0);
  return first + total;
${'}'} 

console.log(calculate([1, 2, 3, 4])); 
// 1 + (2+3+4) = 10`}
                                            </pre>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <strong>React Component Props</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// ❌ Without destructuring
function UserCard(props) ${'{'} 
  return (
    <div>
      <h2>${'{'}props.name${'}'}</h2>
      <p>${'{'}props.age${'}'} years old</p>
      <p>${'{'}props.city${'}'}</p>
    </div>
  );
${'}'} 

// ✅ With destructuring (cleaner!)
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
<UserCard name="John" age={25} city="Mumbai" />

// With defaults and rest
function Button(${'{'} label = 'Click', ...rest ${'}'}) ${'{'} 
  return <button ${'{'}...rest${'}'} >${'{'}label${'}'}</button>;
${'}'}`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ADVANCED PATTERNS */}
                            <div className="card border-danger mb-3">
                                <div className="card-header bg-danger text-white">
                                    <h6 className="mb-0">📌 5. Advanced Patterns</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>Dynamic Property Names</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`const key = 'name';
const user = ${'{'} name: 'John', age: 25 ${'}'};

// Can't do: const { key } = user
// Use computed property
const ${'{'} [key]: value ${'}'} = user;
console.log(value); // 'John'

// Multiple dynamic keys
const keys = ['name', 'age'];
const values = keys.map(k => user[k]);
console.log(values); // ['John', 25]`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>Destructuring Return Values</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// Function returning array
function getCoords() ${'{'} 
  return [10, 20];
${'}'} 
const [x, y] = getCoords();

// Function returning object
function getUser() ${'{'} 
  return ${'{'} name: 'John', age: 25 ${'}'};
${'}'} 
const ${'{'} name, age ${'}'} = getUser();

// React useState hook!
const [count, setCount] = useState(0);
const [user, setUser] = useState(${'{'} ${'}'}); `}
                                            </pre>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <strong>Mixed Destructuring</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// Array + Object
const data = [${'{'} name: 'John' ${'}'}, ${'{'} name: 'Jane' ${'}'}];
const [${'{'} name: first ${'}'}] = data;
console.log(first); // 'John'

// Object with array property
const user = ${'{'} 
  name: 'John',
  hobbies: ['reading', 'coding']
${'}'};
const ${'{'} name, hobbies: [hobby1, hobby2] ${'}'} = user;
console.log(hobby1); // 'reading'

// Complex real-world example
const response = ${'{'} 
  data: ${'{'} 
    users: [${'{'} id: 1, name: 'John' ${'}'}]
  ${'}'},
  status: 200
${'}'};
const ${'{'} data: ${'{'} users: [${'{'} name ${'}'}] ${'}'} ${'}'} = response;
console.log(name); // 'John'`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PRACTICAL USE CASES */}
                            <div className="alert alert-success">
                                <strong>🎯 Real-World React Examples:</strong>
                                <pre className="bg-dark text-light p-3 rounded mb-0 mt-2">
{`// 1. Component props
function ProductCard(${'{'} name, price, image, onBuy ${'}'}) ${'{'} 
  return (
    <div>
      <img src=${'{'} image ${'}'} alt=${'{'} name ${'}'} />
      <h3>${'{'}name${'}'}</h3>
      <p>₹${'{'} price ${'}'}</p>
      <button onClick=${'{'} onBuy ${'}'} >Buy Now</button>
    </div>
  );
${'}'} 

// 2. API response
const fetchUser = async () => ${'{'} 
  const response = await fetch('/api/user');
  const ${'{'} data: ${'{'} user: ${'{'} name, email ${'}'} ${'}'} ${'}'} = await response.json();
  console.log(name, email);
${'}'};

// 3. Event handlers
const handleSubmit = (${'{'} target: ${'{'} email, password ${'}'} ${'}'}) => ${'{'} 
  console.log('Email:', email.value);
  console.log('Password:', password.value);
${'}'};

// 4. Multiple state updates
const [state, setState] = useState(${'{'} count: 0, name: '' ${'}'}); 
const ${'{'} count, name ${'}'} = state;

// 5. Array methods
const users = [${'{'} name: 'John' ${'}'}, ${'{'} name: 'Jane' ${'}'}];
users.forEach((${'{'} name ${'}'}) => console.log(name));
const names = users.map((${'{'} name ${'}'}) => name);`}
                                </pre>
                            </div>

                            <div className="alert alert-warning">
                                <strong>⚠️ Common Mistakes to Avoid:</strong>
                                <ul className="mb-0">
                                    <li>❌ <code>const ${'{'} user.name ${'}'} = data;</code> - Can't use dot notation</li>
                                    <li>❌ <code>const ${'{'} name ${'}'} = null;</code> - Can't destructure null/undefined</li>
                                    <li>❌ <code>const [a, b] = 'hello';</code> - Works but unusual (gives characters)</li>
                                    <li>✅ Always provide defaults when value might be undefined</li>
                                    <li>✅ Use parentheses when returning object literal: <code>(${'{'} name ${'}'})</code></li>
                                </ul>
                            </div>

                            <div className="alert alert-info">
                                <strong>💡 Key Benefits:</strong>
                                <ul className="mb-0">
                                    <li>✅ <strong>Less code</strong> - Extract multiple values in one line</li>
                                    <li>✅ <strong>More readable</strong> - Clear what variables you're creating</li>
                                    <li>✅ <strong>No temp variables</strong> - Direct assignment</li>
                                    <li>✅ <strong>Perfect for React</strong> - Props, state, hooks all use it</li>
                                    <li>✅ <strong>Works everywhere</strong> - Function params, loops, assignments</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 42: Group By in JavaScript */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q42</span>
                        How to Group Array Elements by Property in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">How do you group array elements by a specific property? Explain the "Group By" pattern with reduce.</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(42)}
                    >
                        {showAnswer[42] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>

                    {showAnswer[42] && (
                        <div className="alert alert-success">
                            <h6 className="alert-heading">✅ Answer: Group By Pattern</h6>
                            
                            {/* What is Group By */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">🎯 What is "Group By"?</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Group By</strong> = Organize items into categories based on a common property</p>
                                    <p className="mb-0">Like sorting fruits into baskets by color, or students into classes by grade!</p>
                                </div>
                            </div>

                            {/* Example */}
                            <div className="card border-info mb-3">
                                <div className="card-header bg-info text-white">
                                    <h6 className="mb-0">📊 Example</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Input:</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const users = [
  {name: 'John', city: 'Mumbai'},
  {name: 'Jane', city: 'Delhi'},
  {name: 'Bob', city: 'Mumbai'},
  {name: 'Alice', city: 'Bangalore'}
]`}
                                    </pre>
                                    
                                    <p className="mt-3"><strong>Output (Grouped by city):</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`{
  'Mumbai': [
    {name: 'John', city: 'Mumbai'},
    {name: 'Bob', city: 'Mumbai'}
  ],
  'Delhi': [
    {name: 'Jane', city: 'Delhi'}
  ],
  'Bangalore': [
    {name: 'Alice', city: 'Bangalore'}
  ]
}`}
                                    </pre>
                                </div>
                            </div>

                            {/* Implementation */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">💻 Implementation</h6>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-light p-2 rounded">
{`const groupBy = (array, property) => {
   return array.reduce((result, item) => {
      
      // 1. Create key from property value
      const key = item[property]
      
      // 2. Check if key is available in result or not? 
      //    If not, create empty array with key
      if (!result[key]) {
         result[key] = []
      }
      
      // 3. Add items in empty array
      result[key].push(item)
      
      // 4. Return result (categorized data)
      return result
      
   }, {})  // Start with empty object
}

// Usage
const grouped = groupBy(users, 'city')
console.log(grouped)`}
                                    </pre>
                                </div>
                            </div>

                            {/* Step-by-Step Process */}
                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <h6 className="mb-0">🔄 Step-by-Step Process</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">Step 1: Create Key</h6>
                                    <pre className="bg-light p-2 rounded">
{`const key = item[property]  
// Example: item['city'] = 'Mumbai'`}
                                    </pre>

                                    <h6 className="text-primary mt-3">Step 2: Check Key Availability</h6>
                                    <pre className="bg-light p-2 rounded">
{`if (!result[key]) {
   result[key] = []  // Create empty array for new group
}`}
                                    </pre>
                                    <p className="mb-0"><small>Ensures we don't overwrite existing groups!</small></p>

                                    <h6 className="text-primary mt-3">Step 3: Add Items to Array</h6>
                                    <pre className="bg-light p-2 rounded">
{`result[key].push(item)  
// Add current item to its category`}
                                    </pre>

                                    <h6 className="text-primary mt-3">Step 4: Return Result</h6>
                                    <pre className="bg-light p-2 rounded">
{`return result  
// Pass updated accumulator to next iteration`}
                                    </pre>
                                </div>
                            </div>

                            {/* Visual Flow */}
                            <div className="card border-secondary mb-3">
                                <div className="card-header bg-secondary text-white">
                                    <h6 className="mb-0">👁️ Visual Flow</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Iteration 1: John from Mumbai</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`result = {}
key = 'Mumbai'
result['Mumbai'] = []          // Create group
result['Mumbai'].push(John)    // Add John
result = {'Mumbai': [John]}`}
                                    </pre>

                                    <p className="mt-3"><strong>Iteration 2: Jane from Delhi</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`result = {'Mumbai': [John]}
key = 'Delhi'
result['Delhi'] = []           // Create group
result['Delhi'].push(Jane)     // Add Jane
result = {'Mumbai': [John], 'Delhi': [Jane]}`}
                                    </pre>

                                    <p className="mt-3"><strong>Iteration 3: Bob from Mumbai</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`result = {'Mumbai': [John], 'Delhi': [Jane]}
key = 'Mumbai'
// Group exists! Skip creation
result['Mumbai'].push(Bob)     // Add Bob to existing group
result = {'Mumbai': [John, Bob], 'Delhi': [Jane]}`}
                                    </pre>
                                </div>
                            </div>

                            {/* Key Concepts */}
                            <div className="card border-info mb-3">
                                <div className="card-header bg-info text-white">
                                    <h6 className="mb-0">🔑 Key Concepts</h6>
                                </div>
                                <div className="card-body">
                                    <ul className="mb-0">
                                        <li><strong>Dynamic Property Access:</strong> <code>item[property]</code> uses variable as property name</li>
                                        <li><strong>Bracket vs Dot Notation:</strong> <code>result[key]</code> (dynamic) vs <code>result.key</code> (literal)</li>
                                        <li><strong>Keys = Unique Values:</strong> No matter how many times 'Mumbai' appears, it's ONE key</li>
                                        <li><strong>Reduce Pattern:</strong> Build up an object from an array</li>
                                        <li><strong>Initial Value:</strong> Start with empty object <code>{`{}`}</code></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Common Use Cases */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">💡 Common Use Cases</h6>
                                </div>
                                <div className="card-body">
                                    <ul className="mb-0">
                                        <li>Group products by category</li>
                                        <li>Group users by role or department</li>
                                        <li>Group transactions by date</li>
                                        <li>Group students by grade</li>
                                        <li>Data aggregation and reporting</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Interview Tips */}
                            <div className="alert alert-warning">
                                <h6 className="alert-heading">💡 Interview Tips:</h6>
                                <ul className="mb-0">
                                    <li>✅ Explain the 4 steps clearly</li>
                                    <li>✅ Emphasize dynamic property access</li>
                                    <li>✅ Mention reduce is perfect for building objects</li>
                                    <li>✅ Show you understand keys vs items</li>
                                    <li>✅ Mention real-world use cases</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 43: HTML & CSS */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q43</span>
                        HTML & CSS Interview Questions
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">Common HTML and CSS interview questions for React developers</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-info btn-sm mb-3" 
                        onClick={() => toggleAnswer(43)}
                    >
                        {showAnswer[43] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[43] && (
                        <div>
                            {/* HTML Questions */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">📌 HTML Questions</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>1. Semantic HTML</strong>
                                            <div className="bg-light p-2 rounded mt-2">
                                                <p className="small mb-2"><strong>Q: What is semantic HTML?</strong></p>
                                                <p className="small mb-0">
                                                    <strong>A:</strong> HTML tags that convey meaning about their content.
                                                </p>
                                            </div>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// ❌ Non-semantic
<div class="header">
  <div class="nav">...</div>
</div>

// ✅ Semantic (Better!)
<header>
  <nav>...</nav>
</header>

// Other semantic tags:
<main>, <section>, <article>, 
<aside>, <footer>, <figure>`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>2. Inline vs Block Elements</strong>
                                            <div className="bg-light p-2 rounded mt-2">
                                                <p className="small mb-0">
                                                    <strong>Block:</strong> Takes full width, starts new line<br/>
                                                    <code>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;, &lt;section&gt;</code>
                                                </p>
                                                <hr className="my-2"/>
                                                <p className="small mb-0">
                                                    <strong>Inline:</strong> Only takes needed width<br/>
                                                    <code>&lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;button&gt;</code>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>3. data-* Attributes</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`// Store custom data in HTML
<div 
  data-user-id="123" 
  data-role="admin"
>
  User Info
</div>

// Access in JavaScript
const el = document.querySelector('div');
console.log(el.dataset.userId); // '123'
console.log(el.dataset.role); // 'admin'`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>4. Form Validation</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`<form>
  <input 
    type="email" 
    required 
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    minlength="3"
    maxlength="50"
  />
  
  <input 
    type="number" 
    min="18" 
    max="100"
  />
</form>`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CSS Questions */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">📌 CSS Questions</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <strong>1. Box Model</strong>
                                            <div className="bg-light p-2 rounded mt-2">
                                                <p className="small mb-0">
                                                    <strong>Q: What is CSS Box Model?</strong><br/>
                                                    <strong>A:</strong> Every element is a box with:<br/>
                                                    • Content (text/images)<br/>
                                                    • Padding (inside box)<br/>
                                                    • Border (edge of box)<br/>
                                                    • Margin (outside box)
                                                </p>
                                            </div>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`.box ${'{'} 
  width: 200px;
  padding: 20px;
  border: 5px solid blue;
  margin: 10px;
  
  /* Total width = 
     200 + 20*2 + 5*2 + 10*2 
     = 270px */
${'}'}`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>2. Flexbox vs Grid</strong>
                                            <div className="bg-light p-2 rounded mt-2 small">
                                                <p className="mb-1"><strong>Flexbox:</strong> One-dimensional (row OR column)</p>
                                                <p className="mb-0"><strong>Grid:</strong> Two-dimensional (rows AND columns)</p>
                                            </div>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`/* Flexbox - Row layout */
.container ${'{'} 
  display: flex;
  justify-content: space-between;
  align-items: center;
${'}'} 

/* Grid - 3 columns */
.grid ${'{'} 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
${'}'}`}
                                            </pre>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>3. Position Property</strong>
                                            <div className="bg-light p-2 rounded mt-2 small">
                                                <p className="mb-1">• <code>static</code> - Default (no positioning)</p>
                                                <p className="mb-1">• <code>relative</code> - Relative to original position</p>
                                                <p className="mb-1">• <code>absolute</code> - Relative to parent</p>
                                                <p className="mb-1">• <code>fixed</code> - Relative to viewport (stays on scroll)</p>
                                                <p className="mb-0">• <code>sticky</code> - Hybrid (fixed after scroll)</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <strong>4. Center Elements</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`/* Method 1: Flexbox ✅ */
.parent ${'{'} 
  display: flex;
  justify-content: center;
  align-items: center;
${'}'} 

/* Method 2: Grid */
.parent ${'{'} 
  display: grid;
  place-items: center;
${'}'} 

/* Method 3: Position */
.child ${'{'} 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
${'}'}`}
                                            </pre>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <strong>5. Media Queries (Responsive Design)</strong>
                                            <pre className="bg-dark text-light p-2 rounded mt-2 small">
{`/* Mobile first approach */
.container ${'{'} 
  width: 100%;
  padding: 10px;
${'}'} 

/* Tablet */
@media (min-width: 768px) ${'{'} 
  .container ${'{'} 
    width: 750px;
    padding: 20px;
  ${'}'} 
${'}'} 

/* Desktop */
@media (min-width: 1024px) ${'{'} 
  .container ${'{'} 
    width: 1000px;
    padding: 30px;
  ${'}'} 
${'}'}`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-warning">
                                <strong>🎯 Common Interview Scenario:</strong>
                                <p className="mb-2"><strong>Q: "Create a responsive navbar with centered logo and right-aligned links"</strong></p>
                                <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`<nav className="navbar">
  <div className="logo">Logo</div>
  <div className="links">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</nav>

<style>
.navbar ${'{'} 
  display: flex;
  justify-content: space-between; /* Logo left, links right */
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
${'}'} 

.links ${'{'} 
  display: flex;
  gap: 1rem;
${'}'} 

/* Mobile */
@media (max-width: 768px) ${'{'} 
  .navbar ${'{'} flex-direction: column; ${'}'} 
${'}'} 
</style>`}
                                </pre>
                            </div>

                            <div className="alert alert-success">
                                <strong>💡 Key Points for React Developers:</strong>
                                <ul className="mb-0">
                                    <li>Use semantic HTML for accessibility</li>
                                    <li>Flexbox for one-dimensional layouts (navigation, card rows)</li>
                                    <li>Grid for two-dimensional layouts (photo galleries, dashboards)</li>
                                    <li>Mobile-first responsive design with media queries</li>
                                    <li>CSS Modules or styled-components in React projects</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 44: Remove Duplicates using Set */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q44</span>
                        How to Get Unique Values (Remove Duplicates) Using Set in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">How do you remove duplicates from an array to get unique values? Explain using <code>Set</code>.</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(44)}
                    >
                        {showAnswer[44] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>

                    {showAnswer[44] && (
                        <div className="alert alert-success">
                            <h6 className="alert-heading">✅ Answer: Using Set for Unique Values</h6>
                            
                            {/* What is Set */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">🎯 What is a Set?</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Set</strong> = A collection that stores only <strong>unique values</strong></p>
                                    <p className="mb-0">Automatically removes duplicates when you create it!</p>
                                    
                                    <div className="alert alert-info mt-3 mb-0">
                                        <strong>Key Feature:</strong> Set doesn't allow duplicate values - perfect for getting unique items!
                                    </div>
                                </div>
                            </div>

                            {/* Simple Example */}
                            <div className="card border-info mb-3">
                                <div className="card-header bg-info text-white">
                                    <h6 className="mb-0">📊 Simple Example</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Problem:</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5]
// We want: [1, 2, 3, 4, 5] (unique only)`}
                                    </pre>
                                    
                                    <p className="mt-3"><strong>Solution:</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const uniqueNumbers = [...new Set(numbers)]
console.log(uniqueNumbers)
// Output: [1, 2, 3, 4, 5] ✅`}
                                    </pre>
                                </div>
                            </div>

                            {/* Step-by-Step Breakdown */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">🔄 Step-by-Step Breakdown</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">Step 1: Create Set from Array</h6>
                                    <pre className="bg-light p-2 rounded">
{`new Set(numbers)
// Creates: Set {1, 2, 3, 4, 5}
// Duplicates automatically removed!`}
                                    </pre>

                                    <h6 className="text-primary mt-3">Step 2: Convert Set Back to Array</h6>
                                    <pre className="bg-light p-2 rounded">
{`[...new Set(numbers)]
// Spread operator converts Set → Array
// Result: [1, 2, 3, 4, 5]`}
                                    </pre>

                                    <div className="alert alert-warning mt-3 mb-0">
                                        <strong>⚠️ Important:</strong> Set returns a Set object, not an array. Use spread <code>[...]</code> or <code>Array.from()</code> to convert it back to an array!
                                    </div>
                                </div>
                            </div>

                            {/* Different Implementations */}
                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <h6 className="mb-0">💻 Different Ways to Use Set</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Method 1: Spread Operator (Most Common)</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const unique = [...new Set(array)]`}
                                    </pre>

                                    <p className="mt-3"><strong>Method 2: Array.from()</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const unique = Array.from(new Set(array))`}
                                    </pre>

                                    <p className="mt-3"><strong>Method 3: In a Function</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const removeDuplicates = (arr) => {
   return [...new Set(arr)]
}

const result = removeDuplicates([1, 2, 2, 3, 3])
// [1, 2, 3]`}
                                    </pre>
                                </div>
                            </div>

                            {/* Works with Different Types */}
                            <div className="card border-secondary mb-3">
                                <div className="card-header bg-secondary text-white">
                                    <h6 className="mb-0">🎨 Works with Different Data Types</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Numbers:</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`[...new Set([5, 8, 5, 9, 8])]
// [5, 8, 9]`}
                                    </pre>

                                    <p className="mt-3"><strong>Strings:</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`[...new Set('HELLO')]
// ['H', 'E', 'L', 'O']

[...new Set(['apple', 'banana', 'apple'])]
// ['apple', 'banana']`}
                                    </pre>

                                    <p className="mt-3"><strong>Remove Duplicate Characters from String:</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const str = 'JHONSON'
const unique = [...new Set(str.split(''))].join('')
console.log(unique)
// 'JHONS' (duplicate 'O' and 'N' removed)`}
                                    </pre>
                                </div>
                            </div>

                            {/* Complete Examples */}
                            <div className="card border-info mb-3">
                                <div className="card-header bg-info text-white">
                                    <h6 className="mb-0">📝 Complete Examples</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Example 1: Remove Duplicate Numbers</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const numbers = [5, 8, 5, 66, 9, 8, 77, 52, 6]
const unique = [...new Set(numbers)]
console.log(unique)
// [5, 8, 66, 9, 77, 52, 6]`}
                                    </pre>

                                    <p className="mt-3"><strong>Example 2: Remove Duplicates Function</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const removeDuplicates = (arr) => {
   const uniqueSet = new Set(arr)
   const uniqueArray = [...uniqueSet]
   return uniqueArray
}

// Or one-liner:
const removeDuplicates = (arr) => [...new Set(arr)]

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
// [1, 2, 3, 4, 5]`}
                                    </pre>

                                    <p className="mt-3"><strong>Example 3: Remove Duplicate Strings</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const fruits = ['apple', 'banana', 'apple', 'orange', 'banana']
const uniqueFruits = [...new Set(fruits)]
console.log(uniqueFruits)
// ['apple', 'banana', 'orange']`}
                                    </pre>
                                </div>
                            </div>

                            {/* Visual Flow */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">👁️ Visual Flow</h6>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-light p-2 rounded">
{`Step 1: Original Array
[1, 2, 2, 3, 3, 3, 4, 5, 5]

Step 2: Create Set (duplicates removed automatically)
new Set([1, 2, 2, 3, 3, 3, 4, 5, 5])
→ Set {1, 2, 3, 4, 5}

Step 3: Convert back to Array
[...Set {1, 2, 3, 4, 5}]
→ [1, 2, 3, 4, 5]

Final Result: ✅
[1, 2, 3, 4, 5]`}
                                    </pre>
                                </div>
                            </div>

                            {/* Key Advantages */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">✅ Why Use Set?</h6>
                                </div>
                                <div className="card-body">
                                    <ul className="mb-0">
                                        <li><strong>Automatic:</strong> No manual checking needed</li>
                                        <li><strong>Fast:</strong> Set operations are very efficient</li>
                                        <li><strong>Clean:</strong> One-liner solution</li>
                                        <li><strong>Simple:</strong> Easy to understand and maintain</li>
                                        <li><strong>Built-in:</strong> No external libraries needed</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Common Use Cases */}
                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <h6 className="mb-0">💡 Common Use Cases</h6>
                                </div>
                                <div className="card-body">
                                    <ul className="mb-0">
                                        <li>Remove duplicate IDs from a list</li>
                                        <li>Get unique tags/categories</li>
                                        <li>Deduplicate user selections</li>
                                        <li>Clean up data from APIs</li>
                                        <li>Find unique characters in a string</li>
                                        <li>Remove duplicate array elements before processing</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Set vs Filter Comparison */}
                            <div className="card border-secondary mb-3">
                                <div className="card-header bg-secondary text-white">
                                    <h6 className="mb-0">⚖️ Set vs Filter Comparison</h6>
                                </div>
                                <div className="card-body">
                                    <p><strong>Using Set (Recommended):</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const unique = [...new Set(array)]
// ✅ Simple, fast, clean`}
                                    </pre>

                                    <p className="mt-3"><strong>Using Filter (Alternative):</strong></p>
                                    <pre className="bg-light p-2 rounded">
{`const unique = array.filter((item, index) => {
   return array.indexOf(item) === index
})
// ❌ More complex, slower for large arrays`}
                                    </pre>

                                    <div className="alert alert-success mt-3 mb-0">
                                        <strong>💡 Recommendation:</strong> Use Set - it's simpler and more efficient!
                                    </div>
                                </div>
                            </div>

                            {/* Interview Tips */}
                            <div className="alert alert-warning">
                                <h6 className="alert-heading">💡 Interview Tips:</h6>
                                <ul className="mb-0">
                                    <li>✅ Mention Set only stores unique values</li>
                                    <li>✅ Explain why you need to convert back to array</li>
                                    <li>✅ Show you know both spread and Array.from()</li>
                                    <li>✅ Mention it works with any data type</li>
                                    <li>✅ Compare with filter approach (Set is better)</li>
                                    <li>✅ Know it's O(n) time complexity (efficient)</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 45: Type Conversions in JavaScript */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q45</span>
                        JavaScript Type Conversions: Complete Guide with Syntax
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">How do you convert between different data types in JavaScript? Explain conversions like object to array, string to object, array to string, etc. with specific syntax.</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(45)}
                    >
                        {showAnswer[45] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>

                    {showAnswer[45] && (
                        <div className="alert alert-success">
                            <h6 className="alert-heading">✅ Answer: JavaScript Type Conversions</h6>
                            
                            {/* String Conversions */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">📝 String Conversions</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">1. Number to String</h6>
                                    <pre className="bg-light p-2 rounded">
{`const num = 456

// Method 1: String() constructor
const str1 = String(num)           // "456"

// Method 2: .toString() method
const str2 = num.toString()        // "456"

// Method 3: Template literal
const str3 = \`\${num}\`             // "456"

// Method 4: Concatenation with empty string
const str4 = num + ''              // "456"`}
                                    </pre>

                                    <h6 className="text-primary mt-3">2. Array to String</h6>
                                    <pre className="bg-light p-2 rounded">
{`const arr = ['apple', 'banana', 'orange']

// Method 1: .join() with separator
const str1 = arr.join(', ')        // "apple, banana, orange"
const str2 = arr.join('-')         // "apple-banana-orange"
const str3 = arr.join('')          // "applebananaorange"

// Method 2: .toString() (joins with comma)
const str4 = arr.toString()        // "apple,banana,orange"

// Method 3: String() constructor
const str5 = String(arr)           // "apple,banana,orange"`}
                                    </pre>

                                    <h6 className="text-primary mt-3">3. Object to String (JSON)</h6>
                                    <pre className="bg-light p-2 rounded">
{`const obj = {name: 'John', age: 25}

// JSON.stringify() - Object to JSON string
const jsonString = JSON.stringify(obj)
// '{"name":"John","age":25}'

// With formatting (pretty print)
const formatted = JSON.stringify(obj, null, 2)
// {
//   "name": "John",
//   "age": 25
// }`}
                                    </pre>
                                </div>
                            </div>

                            {/* Number Conversions */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">🔢 Number Conversions</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">1. String to Number</h6>
                                    <pre className="bg-light p-2 rounded">
{`const str = "123"

// Method 1: Number() constructor
const num1 = Number(str)           // 123

// Method 2: parseInt() - for integers
const num2 = parseInt(str)         // 123
const num3 = parseInt("100px")     // 100 (extracts number)

// Method 3: parseFloat() - for decimals
const num4 = parseFloat("3.14")    // 3.14

// Method 4: Unary plus operator (+)
const num5 = +str                  // 123

// Method 5: Math operations
const num6 = str * 1               // 123
const num7 = str - 0               // 123`}
                                    </pre>

                                    <h6 className="text-primary mt-3">2. Boolean to Number</h6>
                                    <pre className="bg-light p-2 rounded">
{`const bool1 = true
const bool2 = false

Number(bool1)                      // 1
Number(bool2)                      // 0
+bool1                             // 1
+bool2                             // 0`}
                                    </pre>
                                </div>
                            </div>

                            {/* Array Conversions */}
                            <div className="card border-info mb-3">
                                <div className="card-header bg-info text-white">
                                    <h6 className="mb-0">📚 Array Conversions</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">1. String to Array</h6>
                                    <pre className="bg-light p-2 rounded">
{`const str = "hello"

// Method 1: .split() - split by character
const arr1 = str.split('')         // ['h','e','l','l','o']

// Method 2: .split() - split by separator
const csv = "apple,banana,orange"
const arr2 = csv.split(',')        // ['apple','banana','orange']

// Method 3: Spread operator
const arr3 = [...str]              // ['h','e','l','l','o']

// Method 4: Array.from()
const arr4 = Array.from(str)       // ['h','e','l','l','o']`}
                                    </pre>

                                    <h6 className="text-primary mt-3">2. Object to Array</h6>
                                    <pre className="bg-light p-2 rounded">
{`const obj = {name: 'John', age: 25, city: 'NYC'}

// Method 1: Object.keys() - Get keys as array
const keys = Object.keys(obj)
// ['name', 'age', 'city']

// Method 2: Object.values() - Get values as array
const values = Object.values(obj)
// ['John', 25, 'NYC']

// Method 3: Object.entries() - Get [key, value] pairs
const entries = Object.entries(obj)
// [['name', 'John'], ['age', 25], ['city', 'NYC']]`}
                                    </pre>

                                    <h6 className="text-primary mt-3">3. Set/Map to Array</h6>
                                    <pre className="bg-light p-2 rounded">
{`const mySet = new Set([1, 2, 3])
const myMap = new Map([['a', 1], ['b', 2]])

// Set to Array
const arr1 = [...mySet]            // [1, 2, 3]
const arr2 = Array.from(mySet)     // [1, 2, 3]

// Map to Array
const arr3 = [...myMap]            // [['a', 1], ['b', 2]]
const arr4 = Array.from(myMap)     // [['a', 1], ['b', 2]]`}
                                    </pre>

                                    <h6 className="text-primary mt-3">4. NodeList/HTMLCollection to Array</h6>
                                    <pre className="bg-light p-2 rounded">
{`// DOM elements (NodeList)
const divs = document.querySelectorAll('div')

// Method 1: Spread operator
const arr1 = [...divs]

// Method 2: Array.from()
const arr2 = Array.from(divs)

// Method 3: Array.prototype.slice.call()
const arr3 = Array.prototype.slice.call(divs)`}
                                    </pre>
                                </div>
                            </div>

                            {/* Object Conversions */}
                            <div className="card border-warning mb-3">
                                <div className="card-header bg-warning">
                                    <h6 className="mb-0">🔷 Object Conversions</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">1. Array to Object</h6>
                                    <pre className="bg-light p-2 rounded">
{`// Method 1: From entries array
const entries = [['name', 'John'], ['age', 25]]
const obj1 = Object.fromEntries(entries)
// {name: 'John', age: 25}

// Method 2: From array with indices as keys
const arr = ['a', 'b', 'c']
const obj2 = {...arr}              // {0: 'a', 1: 'b', 2: 'c'}

// Method 3: Using reduce
const arr2 = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}]
const obj3 = arr2.reduce((acc, item) => {
  acc[item.id] = item
  return acc
}, {})
// {1: {id: 1, name: 'John'}, 2: {id: 2, name: 'Jane'}}`}
                                    </pre>

                                    <h6 className="text-primary mt-3">2. String to Object (JSON)</h6>
                                    <pre className="bg-light p-2 rounded">
{`const jsonString = '{"name":"John","age":25}'

// JSON.parse() - String to Object
const obj = JSON.parse(jsonString)
// {name: 'John', age: 25}

// With error handling
try {
  const obj = JSON.parse(jsonString)
  console.log(obj)
} catch(error) {
  console.log('Invalid JSON:', error.message)
}`}
                                    </pre>

                                    <h6 className="text-primary mt-3">3. Map to Object</h6>
                                    <pre className="bg-light p-2 rounded">
{`const myMap = new Map([
  ['name', 'John'],
  ['age', 25]
])

// Method 1: Object.fromEntries()
const obj1 = Object.fromEntries(myMap)
// {name: 'John', age: 25}

// Method 2: Manual conversion
const obj2 = {}
myMap.forEach((value, key) => {
  obj2[key] = value
})`}
                                    </pre>
                                </div>
                            </div>

                            {/* Boolean Conversions */}
                            <div className="card border-danger mb-3">
                                <div className="card-header bg-danger text-white">
                                    <h6 className="mb-0">✅ Boolean Conversions</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">1. Any Value to Boolean</h6>
                                    <pre className="bg-light p-2 rounded">
{`const str = "hello"
const num = 0
const arr = []

// Method 1: Boolean() constructor
Boolean(str)                       // true
Boolean(num)                       // false (0 is falsy)
Boolean(arr)                       // true (arrays are truthy)

// Method 2: Double NOT operator (!!)
!!str                              // true
!!num                              // false
!!arr                              // true

// Method 3: Comparison
str === "hello"                    // true
num > 0                            // false`}
                                    </pre>

                                    <h6 className="text-primary mt-3">Falsy Values in JavaScript</h6>
                                    <pre className="bg-light p-2 rounded">
{`// These 6 values are falsy:
false
0
""        // empty string
null
undefined
NaN

// Everything else is truthy:
[]        // empty array is truthy!
{}        // empty object is truthy!
"0"       // string "0" is truthy!
"false"   // string "false" is truthy!`}
                                    </pre>
                                </div>
                            </div>

                            {/* Special Conversions */}
                            <div className="card border-secondary mb-3">
                                <div className="card-header bg-secondary text-white">
                                    <h6 className="mb-0">🎨 Special Conversions</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">1. Array to Set (Remove Duplicates)</h6>
                                    <pre className="bg-light p-2 rounded">
{`const arr = [1, 2, 2, 3, 3, 4]

const mySet = new Set(arr)         // Set {1, 2, 3, 4}
const unique = [...new Set(arr)]   // [1, 2, 3, 4]`}
                                    </pre>

                                    <h6 className="text-primary mt-3">2. Object to Map</h6>
                                    <pre className="bg-light p-2 rounded">
{`const obj = {name: 'John', age: 25}

const myMap = new Map(Object.entries(obj))
// Map {'name' => 'John', 'age' => 25}`}
                                    </pre>

                                    <h6 className="text-primary mt-3">3. Nested Array Flattening</h6>
                                    <pre className="bg-light p-2 rounded">
{`const nested = [[1, 2], [3, 4], [5]]

// Method 1: .flat() - one level
const flat1 = nested.flat()        // [1, 2, 3, 4, 5]

// Method 2: .flat(depth) - multiple levels
const deep = [1, [2, [3, [4]]]]
const flat2 = deep.flat(Infinity)  // [1, 2, 3, 4]

// Method 3: .flatMap()
const flat3 = nested.flatMap(x => x) // [1, 2, 3, 4, 5]`}
                                    </pre>

                                    <h6 className="text-primary mt-3">4. Arguments to Array</h6>
                                    <pre className="bg-light p-2 rounded">
{`function myFunc() {
  // Method 1: Spread operator
  const arr1 = [...arguments]
  
  // Method 2: Array.from()
  const arr2 = Array.from(arguments)
  
  // Method 3: Rest parameters (modern way)
}

// Modern approach
const myFunc2 = (...args) => {
  // args is already an array!
  console.log(args)
}`}
                                    </pre>
                                </div>
                            </div>

                            {/* Common Conversion Patterns */}
                            <div className="card border-primary mb-3">
                                <div className="card-header bg-primary text-white">
                                    <h6 className="mb-0">🔄 Common Conversion Patterns</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-primary">CSV String ↔ Array ↔ Object</h6>
                                    <pre className="bg-light p-2 rounded">
{`// CSV to Array
const csv = "John,25,NYC"
const arr = csv.split(',')         // ['John', '25', 'NYC']

// Array to Object
const obj = {
  name: arr[0],
  age: Number(arr[1]),
  city: arr[2]
}
// {name: 'John', age: 25, city: 'NYC'}

// Object to CSV
const csvBack = Object.values(obj).join(',')
// "John,25,NYC"`}
                                    </pre>

                                    <h6 className="text-primary mt-3">Query String ↔ Object</h6>
                                    <pre className="bg-light p-2 rounded">
{`// Query String to Object
const query = "name=John&age=25&city=NYC"
const params = new URLSearchParams(query)
const obj = Object.fromEntries(params)
// {name: 'John', age: '25', city: 'NYC'}

// Object to Query String
const queryObj = {name: 'John', age: 25, city: 'NYC'}
const queryString = new URLSearchParams(queryObj).toString()
// "name=John&age=25&city=NYC"`}
                                    </pre>

                                    <h6 className="text-primary mt-3">Form Data ↔ Object</h6>
                                    <pre className="bg-light p-2 rounded">
{`// FormData to Object
const formData = new FormData()
formData.append('name', 'John')
formData.append('age', '25')

const obj = Object.fromEntries(formData)
// {name: 'John', age: '25'}

// Object to FormData
const data = {name: 'John', age: 25}
const formData2 = new FormData()
Object.entries(data).forEach(([key, value]) => {
  formData2.append(key, value)
})`}
                                    </pre>
                                </div>
                            </div>

                            {/* Quick Reference Table */}
                            <div className="card border-success mb-3">
                                <div className="card-header bg-success text-white">
                                    <h6 className="mb-0">📋 Quick Reference Table</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-sm">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>From</th>
                                                    <th>To</th>
                                                    <th>Method</th>
                                                    <th>Example</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Number</td>
                                                    <td>String</td>
                                                    <td><code>String()</code>, <code>.toString()</code></td>
                                                    <td><code>String(123)</code></td>
                                                </tr>
                                                <tr>
                                                    <td>String</td>
                                                    <td>Number</td>
                                                    <td><code>Number()</code>, <code>parseInt()</code>, <code>+</code></td>
                                                    <td><code>Number("123")</code></td>
                                                </tr>
                                                <tr>
                                                    <td>Array</td>
                                                    <td>String</td>
                                                    <td><code>.join()</code></td>
                                                    <td><code>arr.join(',')</code></td>
                                                </tr>
                                                <tr>
                                                    <td>String</td>
                                                    <td>Array</td>
                                                    <td><code>.split()</code></td>
                                                    <td><code>str.split(',')</code></td>
                                                </tr>
                                                <tr>
                                                    <td>Object</td>
                                                    <td>Array</td>
                                                    <td><code>Object.keys()</code>, <code>Object.values()</code>, <code>Object.entries()</code></td>
                                                    <td><code>Object.entries(obj)</code></td>
                                                </tr>
                                                <tr>
                                                    <td>Array</td>
                                                    <td>Object</td>
                                                    <td><code>Object.fromEntries()</code></td>
                                                    <td><code>Object.fromEntries(arr)</code></td>
                                                </tr>
                                                <tr>
                                                    <td>Object</td>
                                                    <td>JSON String</td>
                                                    <td><code>JSON.stringify()</code></td>
                                                    <td><code>JSON.stringify(obj)</code></td>
                                                </tr>
                                                <tr>
                                                    <td>JSON String</td>
                                                    <td>Object</td>
                                                    <td><code>JSON.parse()</code></td>
                                                    <td><code>JSON.parse(str)</code></td>
                                                </tr>
                                                <tr>
                                                    <td>Array</td>
                                                    <td>Set</td>
                                                    <td><code>new Set()</code></td>
                                                    <td><code>new Set(arr)</code></td>
                                                </tr>
                                                <tr>
                                                    <td>Set</td>
                                                    <td>Array</td>
                                                    <td><code>[...]</code>, <code>Array.from()</code></td>
                                                    <td><code>[...mySet]</code></td>
                                                </tr>
                                                <tr>
                                                    <td>Any</td>
                                                    <td>Boolean</td>
                                                    <td><code>Boolean()</code>, <code>!!</code></td>
                                                    <td><code>Boolean(value)</code></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Interview Tips */}
                            <div className="alert alert-warning">
                                <h6 className="alert-heading">💡 Interview Tips:</h6>
                                <ul className="mb-0">
                                    <li>✅ Know multiple ways to convert (shows depth)</li>
                                    <li>✅ Mention performance for large datasets</li>
                                    <li>✅ Explain falsy values when discussing boolean conversion</li>
                                    <li>✅ Show JSON.parse with error handling</li>
                                    <li>✅ Mention modern methods (Array.from, Object.fromEntries)</li>
                                    <li>✅ Know the difference between parseInt() and Number()</li>
                                    <li>✅ Remember spread operator works for many conversions</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 45: var, let, const */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q45</span>
                        What is the difference between var, let, and const in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What is the difference between var, let, and const?</li>
                            <li>Explain scope differences</li>
                            <li>Can you reassign values?</li>
                            <li>What about mutation?</li>
                            <li>What is hoisting and temporal dead zone?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(45)}
                    >
                        {showAnswer[45] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[45] && (
                        <div className="alert alert-light border">
                            {/* Quick Reference */}
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer Template:</h6>
                                <p className="mb-2"><strong>"The main differences are:"</strong></p>
                                <ul className="mb-0">
                                    <li><strong>Scope:</strong> var is function-scoped (accessible outside blocks), while let and const are block-scoped</li>
                                    <li><strong>Initialization:</strong> var and let can be declared without values (default: undefined), const must be initialized</li>
                                    <li><strong>Reassignment:</strong> var and let can be reassigned, const cannot</li>
                                    <li><strong>Mutation:</strong> All three allow mutation of objects/arrays</li>
                                    <li><strong>Hoisting:</strong> var is hoisted and initialized to undefined, let/const have temporal dead zone</li>
                                    <li><strong>Best Practice:</strong> Use const by default, let when reassigning, avoid var in modern code</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 46: == vs === */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q46</span>
                        What is the difference between == and === in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What is the difference between == and ===?</li>
                            <li>What is type coercion?</li>
                            <li>Which one should you use and why?</li>
                            <li>Give examples of unexpected behavior</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(46)}
                    >
                        {showAnswer[46] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[46] && (
                        <div className="alert alert-light border">
                            {/* Quick Reference */}
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"The main differences are:"</strong></p>
                                <ul className="mb-0">
                                    <li><strong>== (loose equality):</strong> Checks if values are equal AFTER performing type coercion (automatic type conversion)</li>
                                    <li><strong>=== (strict equality):</strong> Checks if both value AND type are equal, with NO type coercion</li>
                                    <li><strong>Example:</strong> '1' == 1 is true (converts string to number), but '1' === 1 is false (different types)</li>
                                    <li><strong>Best Practice:</strong> Always use === and !== because they're more predictable, safer, and prevent unexpected bugs from type coercion</li>
                                    <li><strong>Same applies to:</strong> != (loose) and !== (strict)</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 47: Hoisting */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q47</span>
                        What is Hoisting in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What is hoisting?</li>
                            <li>How does it work with var, let, const?</li>
                            <li>What about function hoisting?</li>
                            <li>What is Temporal Dead Zone (TDZ)?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(47)}
                    >
                        {showAnswer[47] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[47] && (
                        <div className="alert alert-light border">
                            {/* Quick Reference */}
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"Hoisting is JavaScript's behavior where variable and function declarations are moved to the top of their scope during the compilation phase, before code execution."</strong></p>
                                <ul className="mb-0">
                                    <li><strong>var:</strong> Hoisted and initialized to undefined - can access before declaration (returns undefined)</li>
                                    <li><strong>let/const:</strong> Hoisted but NOT initialized - accessing before declaration throws error (Temporal Dead Zone)</li>
                                    <li><strong>Functions:</strong> Fully hoisted with their body - can call before declaration</li>
                                    <li><strong>Key Point:</strong> Only declarations move, not assignments</li>
                                    <li><strong>Best Practice:</strong> Declare variables at the top of their scope to avoid confusion</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 48: Closures */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q48</span>
                        What are Closures in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What is a closure?</li>
                            <li>How does it work?</li>
                            <li>Give an example</li>
                            <li>Where are closures commonly used?</li>
                            <li>What are the benefits?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(48)}
                    >
                        {showAnswer[48] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[48] && (
                        <div className="alert alert-light border">
                            {/* Quick Reference */}
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"A closure is when an inner function has access to the outer function's variables, even after the outer function has finished executing. The inner function 'remembers' the environment in which it was created."</strong></p>
                                
                                <h6 className="mt-3 mb-2"><strong>Key Concepts:</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Definition:</strong> Inner function accesses outer function's variables even after outer returns</li>
                                    <li><strong>Memory:</strong> The inner function "remembers" the outer scope</li>
                                    <li><strong>Privacy:</strong> Creates private variables (encapsulation)</li>
                                    <li><strong>Independence:</strong> Each closure has its own separate memory</li>
                                </ul>

                                <h6 className="mt-3 mb-2"><strong>Example - Counter:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`function createCounter() {
  let count = 0;  // Private variable
  
  return function() {
    count++;      // Closure remembers count!
    return count;
  }
}

const counter = createCounter();  // Outer finished
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
// count is still accessible!`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Example - Private Data (Getters/Setters):</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`function createPerson(name) {
  let privateName = name;  // Private!
  
  return {
    getName: () => privateName,
    setName: (newName) => privateName = newName
  }
}

const person = createPerson('Krunal');
console.log(person.getName());  // "Krunal"
person.setName('John');
console.log(person.getName());  // "John"
// privateName not directly accessible - safe!`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Common Use Cases:</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Data Privacy:</strong> Creating private variables that can't be accessed directly</li>
                                    <li><strong>Function Factories:</strong> Creating customized functions with preset values</li>
                                    <li><strong>Event Handlers:</strong> Preserving state in callbacks</li>
                                    <li><strong>Module Pattern:</strong> Organizing code with private and public methods</li>
                                    <li><strong>Memoization:</strong> Caching function results</li>
                                </ul>

                                <h6 className="mt-3 mb-2"><strong>Benefits:</strong></h6>
                                <ul className="mb-0">
                                    <li>✅ <strong>Encapsulation:</strong> Hide implementation details</li>
                                    <li>✅ <strong>Data Privacy:</strong> Variables can't be accessed directly</li>
                                    <li>✅ <strong>Stateful Functions:</strong> Functions can maintain state</li>
                                    <li>✅ <strong>Factory Pattern:</strong> Create multiple instances with separate state</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 49: null vs undefined */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q49</span>
                        What is the difference between null and undefined in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What does null mean?</li>
                            <li>What does undefined mean?</li>
                            <li>How are they created/assigned?</li>
                            <li>What are their types?</li>
                            <li>How do they compare (== vs ===)?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(49)}
                    >
                        {showAnswer[49] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[49] && (
                        <div className="alert alert-light border">
                            {/* Quick Reference */}
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"The main differences between null and undefined are:"</strong></p>
                                
                                <h6 className="mt-3 mb-2"><strong>NULL:</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Meaning:</strong> Intentionally no value or empty</li>
                                    <li><strong>Assignment:</strong> Must be explicitly assigned by developer</li>
                                    <li><strong>Type:</strong> <code>typeof null</code> returns "object" (JavaScript bug, kept for compatibility)</li>
                                    <li><strong>Falsy:</strong> Yes (falsy value)</li>
                                    <li><strong>Common Use:</strong> Initialize variable as empty, then assign value later</li>
                                    <li><strong>Example:</strong> <code>let user = null;</code> (will assign user object later)</li>
                                </ul>

                                <h6 className="mt-3 mb-2"><strong>UNDEFINED:</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Meaning:</strong> Variable declared but not assigned a value</li>
                                    <li><strong>Assignment:</strong> JavaScript automatically assigns it (default value)</li>
                                    <li><strong>Type:</strong> <code>typeof undefined</code> returns "undefined"</li>
                                    <li><strong>Falsy:</strong> Yes (falsy value)</li>
                                    <li><strong>Common Use:</strong> When we don't know what value should be assigned yet</li>
                                    <li><strong>Example:</strong> <code>let name;</code> (automatically undefined)</li>
                                </ul>

                                <h6 className="mt-3 mb-2"><strong>Comparison:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`null == undefined   // true (loose equality - special case)
null === undefined  // false (strict equality - different types)

typeof null         // "object" ⚠️ (JavaScript bug!)
typeof undefined    // "undefined"

!null              // true (both are falsy)
!undefined         // true (both are falsy)`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Best Practices:</strong></h6>
                                <ul className="mb-0">
                                    <li>✅ Use <code>null</code> to explicitly set "intentionally empty"</li>
                                    <li>✅ Let <code>undefined</code> happen naturally (don't manually assign it)</li>
                                    <li>✅ Use <code>===</code> to check for null or undefined specifically</li>
                                    <li>✅ Use <code>value == null</code> if you want to check for both null AND undefined</li>
                                    <li>❌ Don't do: <code>let x = undefined;</code> (use null or don't initialize)</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 50: map, filter, reduce */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q50</span>
                        What is the difference between map(), filter(), and reduce() in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What does each method do?</li>
                            <li>What do they return?</li>
                            <li>Do they mutate the original array?</li>
                            <li>Give examples of each</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(50)}
                    >
                        {showAnswer[50] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[50] && (
                        <div className="alert alert-light border">
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                
                                <h6 className="mt-3 mb-2"><strong>MAP():</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Purpose:</strong> Transform each element in an array</li>
                                    <li><strong>Returns:</strong> New array with transformed elements (same length)</li>
                                    <li><strong>Mutates:</strong> ❌ No (creates new array)</li>
                                    <li><strong>Use Case:</strong> When you want to modify every item</li>
                                </ul>
                                <pre className="bg-dark text-light p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5] (unchanged)`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>FILTER():</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Purpose:</strong> Keep only elements that pass a condition</li>
                                    <li><strong>Returns:</strong> New array with filtered elements (≤ original length)</li>
                                    <li><strong>Mutates:</strong> ❌ No (creates new array)</li>
                                    <li><strong>Use Case:</strong> When you want to remove/keep items based on condition</li>
                                </ul>
                                <pre className="bg-dark text-light p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const greaterThan2 = numbers.filter(x => x >= 3);
console.log(greaterThan2);  // [3, 4, 5]
console.log(numbers);       // [1, 2, 3, 4, 5] (unchanged)`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>REDUCE():</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Purpose:</strong> Process array elements to produce a single value</li>
                                    <li><strong>Returns:</strong> Single value (number, string, object, etc.)</li>
                                    <li><strong>Mutates:</strong> ❌ No (returns new value)</li>
                                    <li><strong>Use Case:</strong> Sum, average, factorial, combining values</li>
                                </ul>
                                <pre className="bg-dark text-light p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);      // 15
console.log(numbers);  // [1, 2, 3, 4, 5] (unchanged)`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Comparison Table:</strong></h6>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Method</th>
                                                <th>Returns</th>
                                                <th>Purpose</th>
                                                <th>Mutates?</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>map()</strong></td>
                                                <td>New array (same length)</td>
                                                <td>Transform each element</td>
                                                <td>❌ No</td>
                                            </tr>
                                            <tr>
                                                <td><strong>filter()</strong></td>
                                                <td>New array (≤ length)</td>
                                                <td>Keep elements that pass test</td>
                                                <td>❌ No</td>
                                            </tr>
                                            <tr>
                                                <td><strong>reduce()</strong></td>
                                                <td>Single value</td>
                                                <td>Combine/calculate from array</td>
                                                <td>❌ No</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h6 className="mt-3 mb-2"><strong>Chaining Example:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(x => x > 2)       // [3, 4, 5]
  .map(x => x * 2)          // [6, 8, 10]
  .reduce((a, b) => a + b); // 24

console.log(result);  // 24`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Key Points:</strong></h6>
                                <ul className="mb-0">
                                    <li>✅ All three are <strong>immutable</strong> - don't change original array</li>
                                    <li>✅ <strong>map</strong> always returns same length array</li>
                                    <li>✅ <strong>filter</strong> returns array with 0 to original length</li>
                                    <li>✅ <strong>reduce</strong> returns single value (any type)</li>
                                    <li>✅ Can be <strong>chained</strong> together</li>
                                    <li>✅ Perfect for React (immutable state updates)</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 51: Promises & async/await */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q51</span>
                        What are Promises in JavaScript? Explain async/await.
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What is a Promise?</li>
                            <li>What are the 3 states of a Promise?</li>
                            <li>How do you handle promises?</li>
                            <li>What is async/await?</li>
                            <li>How to handle errors?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(51)}
                    >
                        {showAnswer[51] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[51] && (
                        <div className="alert alert-light border">
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"A Promise represents a value that will be available in the future. It's an object that handles asynchronous operations."</strong></p>
                                
                                <h6 className="mt-3 mb-2"><strong>Three States of Promise:</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Pending:</strong> Initial state, operation in progress</li>
                                    <li><strong>Fulfilled (Resolved):</strong> Operation completed successfully, returns data</li>
                                    <li><strong>Rejected:</strong> Operation failed, returns error</li>
                                </ul>

                                <h6 className="mt-3 mb-2"><strong>Handling with .then()/.catch():</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('Done'));`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>ASYNC/AWAIT (Modern Way):</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>async:</strong> Makes function return a Promise</li>
                                    <li><strong>await:</strong> Pauses execution until Promise resolves</li>
                                    <li><strong>Benefit:</strong> Makes async code look synchronous (cleaner)</li>
                                </ul>

                                <h6 className="mt-3 mb-2"><strong>Example with async/await:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  } finally {
    console.log('Cleanup');
  }
}

fetchData();`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Key Differences:</strong></h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="alert alert-warning">
                                            <h6>.then() Style:</h6>
                                            <ul className="mb-0 small">
                                                <li>Uses chaining</li>
                                                <li>Can lead to callback hell</li>
                                                <li>Older syntax</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="alert alert-success">
                                            <h6>async/await Style:</h6>
                                            <ul className="mb-0 small">
                                                <li>Linear code (top to bottom)</li>
                                                <li>Easier to read</li>
                                                <li>Modern syntax (ES2017+)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h6 className="mt-3 mb-2"><strong>Multiple Promises:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`// Wait for all to succeed:
const [users, posts] = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts')
]);

// First to finish:
const fastest = await Promise.race([
  fetch('/api/1'),
  fetch('/api/2')
]);`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Key Points:</strong></h6>
                                <ul className="mb-0">
                                    <li>✅ <code>async</code> function always returns a Promise</li>
                                    <li>✅ <code>await</code> only works inside <code>async</code> functions</li>
                                    <li>✅ Use <code>try/catch</code> for error handling with async/await</li>
                                    <li>✅ <code>await</code> pauses function execution, not entire program</li>
                                    <li>✅ Can use <code>.finally()</code> for cleanup code</li>
                                    <li>✅ Both .then() and async/await do the same thing (syntactic sugar)</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 52: slice vs splice */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q52</span>
                        What is the difference between slice() and splice() in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What does each method do?</li>
                            <li>Do they mutate the original array?</li>
                            <li>What parameters do they take?</li>
                            <li>What do they return?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(52)}
                    >
                        {showAnswer[52] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[52] && (
                        <div className="alert alert-light border">
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                
                                <h6 className="mt-3 mb-2"><strong>SLICE(start, end):</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Purpose:</strong> Extract elements into a NEW array</li>
                                    <li><strong>Mutation:</strong> ❌ Does NOT modify original array</li>
                                    <li><strong>Returns:</strong> New array with extracted elements</li>
                                    <li><strong>Parameters:</strong> start index (inclusive), end index (exclusive)</li>
                                    <li><strong>Use Case:</strong> Copy portion of array safely</li>
                                </ul>
                                <pre className="bg-dark text-light p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const extracted = numbers.slice(1, 4);

console.log(extracted);  // [2, 3, 4] (end index not included)
console.log(numbers);    // [1, 2, 3, 4, 5] (original unchanged)`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>SPLICE(start, deleteCount, ...items):</strong></h6>
                                <ul className="mb-3">
                                    <li><strong>Purpose:</strong> Add, remove, or replace elements</li>
                                    <li><strong>Mutation:</strong> ✅ DOES modify original array</li>
                                    <li><strong>Returns:</strong> Array of removed elements</li>
                                    <li><strong>Parameters:</strong> start index, how many to delete, items to add (optional)</li>
                                    <li><strong>Use Case:</strong> Modify array in place</li>
                                </ul>

                                <h6 className="mt-3 mb-2"><strong>Splice Examples:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`// Remove elements:
const arr1 = [1, 2, 3, 4, 5];
const removed = arr1.splice(1, 2);  // Remove 2 items at index 1
console.log(removed);  // [2, 3] (returns removed)
console.log(arr1);     // [1, 4, 5] (original modified)

// Add elements:
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 0, 'a', 'b');  // Add at index 2, delete 0
console.log(arr2);  // [1, 2, 'a', 'b', 3, 4, 5]

// Replace elements:
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2, 'x', 'y');  // Remove 2, add 'x', 'y'
console.log(arr3);  // [1, 'x', 'y', 4, 5]`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Comparison Table:</strong></h6>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Feature</th>
                                                <th>slice()</th>
                                                <th>splice()</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Purpose</strong></td>
                                                <td>Extract/copy elements</td>
                                                <td>Add/remove/replace</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Mutates Original?</strong></td>
                                                <td>❌ No (immutable)</td>
                                                <td>✅ Yes (mutates)</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Returns</strong></td>
                                                <td>New array (extracted)</td>
                                                <td>Array of removed items</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Parameters</strong></td>
                                                <td>(start, end)</td>
                                                <td>(start, deleteCount, ...items)</td>
                                            </tr>
                                            <tr>
                                                <td><strong>End Index</strong></td>
                                                <td>Exclusive (not included)</td>
                                                <td>N/A</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Use in React</strong></td>
                                                <td>✅ Safe (doesn't mutate)</td>
                                                <td>❌ Avoid (mutates state)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h6 className="mt-3 mb-2"><strong>Memory Trick:</strong></h6>
                                <div className="alert alert-info">
                                    <p className="mb-0">
                                        <strong>sLice</strong> = <strong>L</strong>eaves original alone 🍰<br/>
                                        <strong>spLice</strong> = changes the originaL ✂️
                                    </p>
                                </div>

                                <h6 className="mt-3 mb-2"><strong>Key Points:</strong></h6>
                                <ul className="mb-0">
                                    <li>✅ Use <strong>slice()</strong> when you want to keep original array unchanged</li>
                                    <li>✅ Use <strong>splice()</strong> when you want to modify array in place</li>
                                    <li>✅ slice() is safe for React state updates (immutable)</li>
                                    <li>✅ splice() should be avoided in React (use slice, filter, map instead)</li>
                                    <li>✅ slice() end index is exclusive (not included)</li>
                                    <li>✅ splice() returns removed elements, not the modified array</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 53: Event Bubbling and Capturing */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q53</span>
                        What is Event Bubbling and Event Capturing in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What is event propagation?</li>
                            <li>What are the 3 phases?</li>
                            <li>What is event bubbling?</li>
                            <li>What is event capturing?</li>
                            <li>How to stop propagation?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(53)}
                    >
                        {showAnswer[53] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[53] && (
                        <div className="alert alert-light border">
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"When you click on an element, the event doesn't happen only on that element. It travels through the DOM tree in 3 phases:"</strong></p>
                                
                                <h6 className="mt-3 mb-2"><strong>Three Phases of Event Propagation:</strong></h6>
                                
                                <div className="alert alert-info">
                                    <h6>1. CAPTURING PHASE (Top → Down):</h6>
                                    <p className="mb-0">Event travels from Window to Target element</p>
                                </div>
                                <pre className="bg-dark text-light p-3 rounded">
{`Window → Document → HTML → Body → Grandparent → Parent → Child`}
                                </pre>

                                <div className="alert alert-warning">
                                    <h6>2. TARGET PHASE:</h6>
                                    <p className="mb-0">Event reaches the actual clicked element</p>
                                </div>

                                <div className="alert alert-success">
                                    <h6>3. BUBBLING PHASE (Bottom → Up):</h6>
                                    <p className="mb-0">Event bubbles back up (reverse of capturing)</p>
                                </div>
                                <pre className="bg-dark text-light p-3 rounded">
{`Child → Parent → Grandparent → Body → HTML → Document → Window`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Stopping Propagation:</strong></h6>
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="alert alert-warning">
                                            <h6>stopPropagation():</h6>
                                            <p className="small mb-0">Stops event from traveling to parent elements</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="alert alert-danger">
                                            <h6>stopImmediatePropagation():</h6>
                                            <p className="small mb-0">Stops everything including other handlers on same element</p>
                                        </div>
                                    </div>
                                </div>

                                <h6 className="mt-3 mb-2"><strong>Key Points:</strong></h6>
                                <ul className="mb-0">
                                    <li>✅ Events propagate in <strong>3 phases:</strong> Capturing → Target → Bubbling</li>
                                    <li>✅ <strong>Bubbling is default</strong> (false or omitted in addEventListener)</li>
                                    <li>✅ Use <code>true</code> as 3rd parameter to enable <strong>capturing</strong></li>
                                    <li>✅ <code>stopPropagation()</code> stops event from traveling to parents</li>
                                    <li>✅ <code>stopImmediatePropagation()</code> stops everything including other handlers</li>
                                    <li>✅ <strong>Event delegation</strong> uses bubbling for efficiency</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 54: Spread Operator & Rest Parameter */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q54</span>
                        What is the Spread Operator and Rest Parameter in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What is the spread operator (...)?</li>
                            <li>What is the rest parameter (...)?</li>
                            <li>How are they different?</li>
                            <li>Give examples with arrays and objects</li>
                            <li>What are common use cases?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(54)}
                    >
                        {showAnswer[54] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[54] && (
                        <div className="alert alert-light border">
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"Both use ... syntax but have OPPOSITE purposes:"</strong></p>
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="alert alert-success">
                                            <h6>SPREAD (...) - EXPANDS:</h6>
                                            <p className="small mb-0">Unpacks array/object into individual elements</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="alert alert-info">
                                            <h6>REST (...) - COLLECTS:</h6>
                                            <p className="small mb-0">Packs multiple items into an array</p>
                                        </div>
                                    </div>
                                </div>

                                <h6 className="mt-3 mb-2"><strong>SPREAD OPERATOR - Use Cases:</strong></h6>
                                
                                <h6 className="mt-3"><strong>1. Copy Array (Shallow Copy):</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const copyNumbers = [...numbers];  // Shallow copy

console.log(copyNumbers);  // [1, 2, 3, 4, 5]
console.log(numbers === copyNumbers);  // false (different reference)`}
                                </pre>

                                <h6 className="mt-3"><strong>2. Combine Arrays:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Add elements:
const withNew = [...arr1, 'new', ...arr2];  // [1, 2, 3, 'new', 4, 5, 6]`}
                                </pre>

                                <h6 className="mt-3"><strong>3. Pass Array as Function Arguments:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const numbers = [1, 5, 3, 9, 2];
Math.max(...numbers);  // 9
// Same as: Math.max(1, 5, 3, 9, 2)`}
                                </pre>

                                <h6 className="mt-3"><strong>4. Copy Object (Shallow Copy):</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const user = { name: 'John', age: 30 };
const copiedUser = { ...user };  // Shallow copy

console.log(copiedUser);  // { name: 'John', age: 30 }`}
                                </pre>

                                <h6 className="mt-3"><strong>5. Merge Objects:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const user = { name: 'John' };
const details = { age: 30, city: 'NYC' };

const merged = { ...user, ...details };
// { name: 'John', age: 30, city: 'NYC' }

// Override properties:
const updated = { ...user, age: 25 };
// { name: 'John', age: 25 }`}
                                </pre>

                                <h6 className="mt-4 mb-2"><strong>REST PARAMETER - Use Cases:</strong></h6>

                                <h6 className="mt-3"><strong>1. Unknown Number of Arguments:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
}

sum(1, 2, 3);        // 6
sum(1, 2, 3, 4, 5);  // 15
// numbers becomes an array: [1, 2, 3, 4, 5]`}
                                </pre>

                                <h6 className="mt-3"><strong>2. Array Destructuring:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5] ← Rest of array`}
                                </pre>

                                <h6 className="mt-3"><strong>3. Object Destructuring:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const user = { name: 'John', age: 30, city: 'NYC', country: 'USA' };
const { name, ...otherDetails } = user;

console.log(name);          // 'John'
console.log(otherDetails);  // { age: 30, city: 'NYC', country: 'USA' }`}
                                </pre>

                                <h6 className="mt-3"><strong>4. Flexible Function Parameters:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const greet = (greeting, ...names) => {
  return names.map(name => \`\${greeting}, \${name}!\`);
}

greet('Hello', 'John');  // ['Hello, John!']
greet('Hello', 'John', 'Jane', 'Bob');  
// ['Hello, John!', 'Hello, Jane!', 'Hello, Bob!']`}
                                </pre>

                                <h6 className="mt-4 mb-2"><strong>Comparison Table:</strong></h6>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Feature</th>
                                                <th>Spread (...)</th>
                                                <th>Rest (...)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Purpose</strong></td>
                                                <td>EXPANDS/UNPACKS</td>
                                                <td>COLLECTS/PACKS</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Location</strong></td>
                                                <td>Function call, array/object literal</td>
                                                <td>Function parameter, destructuring</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Input</strong></td>
                                                <td>Array or Object</td>
                                                <td>Multiple arguments</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Output</strong></td>
                                                <td>Individual elements</td>
                                                <td>Array</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Example</strong></td>
                                                <td><code>func(...arr)</code></td>
                                                <td><code>func(...args)</code></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h6 className="mt-3 mb-2"><strong>React - Common Use Cases:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`// 1. Copy state (immutable update):
const [items, setItems] = useState([1, 2, 3]);
setItems([...items, 4]);  // Add item: [1, 2, 3, 4]

// 2. Update object state:
const [user, setUser] = useState({ name: 'John', age: 30 });
setUser({ ...user, age: 31 });  // Update age only

// 3. Pass props:
const props = { name: 'John', age: 30 };
<Component {...props} />  // Spread props

// 4. Combine arrays:
const oldMessages = ['Hi', 'Hello'];
const newMessages = ['Hey', ...oldMessages];  
// ['Hey', 'Hi', 'Hello']`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Key Points:</strong></h6>
                                <ul className="mb-0">
                                    <li>✅ Same syntax <code>...</code> but <strong>opposite purposes</strong></li>
                                    <li>✅ <strong>Spread</strong> = EXPANDS (unpacks array/object)</li>
                                    <li>✅ <strong>Rest</strong> = COLLECTS (packs into array)</li>
                                    <li>✅ Spread works with arrays AND objects</li>
                                    <li>✅ Rest works in function parameters AND destructuring</li>
                                    <li>✅ Creates <strong>shallow copies</strong> (not deep clones)</li>
                                    <li>✅ Essential for <strong>immutable updates</strong> in React</li>
                                    <li>✅ Rest parameter must be the <strong>last parameter</strong></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 55: Destructuring */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q55</span>
                        What is Destructuring in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <ul className="mb-0 mt-2">
                            <li>What is destructuring?</li>
                            <li>How does array destructuring work?</li>
                            <li>How does object destructuring work?</li>
                            <li>Can you set default values?</li>
                            <li>What is nested destructuring?</li>
                        </ul>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(55)}
                    >
                        {showAnswer[55] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[55] && (
                        <div className="alert alert-light border">
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"Destructuring is a way to extract values from arrays or properties from objects into separate variables. It makes code cleaner and more readable."</strong></p>
                                
                                <h6 className="mt-3 mb-2"><strong>1. ARRAY DESTRUCTURING:</strong></h6>
                                
                                <h6 className="mt-3"><strong>Basic:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const [one, two, three] = numbers;

console.log(one);    // 1
console.log(two);    // 2
console.log(three);  // 3`}
                                </pre>

                                <h6 className="mt-3"><strong>Skip Elements:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const [first, , third] = [1, 2, 3];
console.log(first);   // 1
console.log(third);   // 3 (skipped second)`}
                                </pre>

                                <h6 className="mt-3"><strong>With Rest Parameter:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]`}
                                </pre>

                                <h6 className="mt-3"><strong>Default Values:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const [a, b, c = 3] = [1, 2];
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3 (default value)`}
                                </pre>

                                <h6 className="mt-3"><strong>Swapping Variables:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`let a = 1, b = 2;
[a, b] = [b, a];  // Swap!
console.log(a);  // 2
console.log(b);  // 1`}
                                </pre>

                                <h6 className="mt-4 mb-2"><strong>2. OBJECT DESTRUCTURING:</strong></h6>

                                <h6 className="mt-3"><strong>Basic:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const user = { name: 'John', age: 30 };
const { name, age } = user;

console.log(name);  // "John"
console.log(age);   // 30`}
                                </pre>

                                <h6 className="mt-3"><strong>Rename Variables:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const user = { name: 'John', age: 30 };
const { name: userName, age: userAge } = user;

console.log(userName);  // "John"
console.log(userAge);   // 30`}
                                </pre>

                                <h6 className="mt-3"><strong>Default Values:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const user = { name: "John" };
const { name, age = 25 } = user;

console.log(name);  // "John"
console.log(age);   // 25 ✅ (default value)`}
                                </pre>

                                <h6 className="mt-3"><strong>With Rest Parameter:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const user = { name: 'John', age: 30, city: 'NYC', country: 'USA' };
const { name, ...rest } = user;

console.log(name);  // "John"
console.log(rest);  // { age: 30, city: 'NYC', country: 'USA' }`}
                                </pre>

                                <h6 className="mt-4 mb-2"><strong>3. NESTED DESTRUCTURING:</strong></h6>

                                <h6 className="mt-3"><strong>Nested Objects:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const user = {
  name: 'John',
  age: 25,
  address: {
    city: 'Ahmedabad',
    country: 'India'
  }
};

const { name, age, address: { city, country } } = user;

console.log(name);     // "John"
console.log(city);     // "Ahmedabad"
console.log(country);  // "India"`}
                                </pre>

                                <h6 className="mt-3"><strong>Nested Arrays:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const data = [1, [2, 3], 4];
const [a, [b, c], d] = data;

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3
console.log(d);  // 4`}
                                </pre>

                                <h6 className="mt-4 mb-2"><strong>4. PRACTICAL USE CASES:</strong></h6>

                                <h6 className="mt-3"><strong>Function Parameters:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`// Without destructuring:
function displayUser(user) {
  console.log(user.name);
  console.log(user.age);
}

// With destructuring (cleaner):
function displayUser({ name, age, city = 'Unknown' }) {
  console.log(name);
  console.log(age);
  console.log(city);
}

displayUser({ name: 'John', age: 30 });`}
                                </pre>

                                <h6 className="mt-3"><strong>API Response:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const response = {
  data: {
    user: {
      id: 1,
      name: 'John',
      email: 'john@example.com'
    }
  }
};

const { data: { user: { name, email } } } = response;
console.log(name);   // "John"
console.log(email);  // "john@example.com"`}
                                </pre>

                                <h6 className="mt-3"><strong>React Props:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`// Without destructuring:
function Component(props) {
  return <h1>{props.title}</h1>;
}

// With destructuring (cleaner):
function Component({ title, subtitle = 'No subtitle' }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}`}
                                </pre>

                                <h6 className="mt-3"><strong>Import Specific Items:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`// Import only what you need:
import { useState, useEffect } from 'react';

// Destructure from objects:
const { useState, useEffect } = React;`}
                                </pre>

                                <h6 className="mt-3"><strong>Form Data Extraction:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`const formData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  password: '****'
};

// Extract only needed fields:
const { firstName, lastName, email } = formData;`}
                                </pre>

                                <h6 className="mt-4 mb-2"><strong>Quick Reference:</strong></h6>
                                <pre className="bg-dark text-light p-3 rounded">
{`// ARRAYS:
const [a, b] = [1, 2];
const [a, , c] = [1, 2, 3];           // Skip
const [a, ...rest] = [1, 2, 3];       // Rest
const [a = 1] = [];                   // Default

// OBJECTS:
const { name, age } = user;
const { name: n } = user;             // Rename
const { age = 25 } = user;            // Default
const { name, ...rest } = user;       // Rest

// NESTED:
const { address: { city } } = user;
const [a, [b, c]] = [1, [2, 3]];

// FUNCTION PARAMS:
function fn({ name, age = 25 }) { }`}
                                </pre>

                                <h6 className="mt-3 mb-2"><strong>Key Points:</strong></h6>
                                <ul className="mb-0">
                                    <li>✅ <strong>Cleaner code:</strong> Extract values in one line</li>
                                    <li>✅ <strong>Arrays:</strong> Position-based destructuring</li>
                                    <li>✅ <strong>Objects:</strong> Property-based destructuring</li>
                                    <li>✅ <strong>Default values:</strong> Use = to set defaults</li>
                                    <li>✅ <strong>Rename:</strong> Use colon : to rename object properties</li>
                                    <li>✅ <strong>Skip elements:</strong> Use comma , to skip array items</li>
                                    <li>✅ <strong>Rest operator:</strong> Collect remaining items with ...</li>
                                    <li>✅ <strong>Nested:</strong> Destructure nested objects/arrays</li>
                                    <li>✅ <strong>Function params:</strong> Directly destructure in parameters</li>
                                    <li>✅ <strong>Very common in React:</strong> Props and hooks</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 56: Callback Functions */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q56</span>
                        What are Callback Functions in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What are callback functions? How do they work? Give examples of synchronous and asynchronous callbacks.</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(56)}
                    >
                        {showAnswer[56] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[56] && (
                        <div className="alert alert-light border">
                            {/* Quick Interview Answer */}
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"A callback function is a function that is passed as an argument to another function and gets executed at a specific time or when a certain condition is met."</strong></p>
                                <ul className="mb-0">
                                    <li><strong>Purpose:</strong> Enables asynchronous programming and code reusability</li>
                                    <li><strong>Synchronous:</strong> Executed immediately (map, filter, forEach)</li>
                                    <li><strong>Asynchronous:</strong> Executed later (setTimeout, API calls, event handlers)</li>
                                    <li><strong>Key Point:</strong> Function is passed, not called - another function calls it</li>
                                    <li><strong>Use Cases:</strong> Event handling, array operations, async operations, higher-order functions</li>
                                </ul>
                            </div>

                            <hr className="my-3"/>

                            <h6 className="text-primary">📌 What is a Callback Function?</h6>
                            <p><strong>Definition:</strong> A callback is a function passed as an argument to another function, which is then invoked inside that function.</p>

                            <div className="alert alert-info">
                                <strong>💡 Key Concept:</strong> The term "callback" describes the USAGE PATTERN, not a special type of function. Any function can be a callback!
                            </div>

                            <h6 className="text-primary mt-4">📌 Simple Example:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Callback function
function greet(name) {
  console.log('Hello ' + name);
}

// Higher-order function (takes a callback)
function processUserInput(callback) {
  const name = 'John';
  callback(name);  // Calling the callback
}

processUserInput(greet);  // Pass function, don't call it!
// Output: "Hello John"`}
                            </pre>

                            <h6 className="text-primary mt-4">📌 Synchronous vs Asynchronous Callbacks:</h6>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="alert alert-success">
                                        <h6><strong>Synchronous Callbacks</strong></h6>
                                        <p className="small mb-2">Execute immediately and block further code execution.</p>
                                        <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// Array methods
const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);  // Executes now
});
console.log('Done');

// Output:
// 1
// 2
// 3
// Done`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="alert alert-warning">
                                        <h6><strong>Asynchronous Callbacks</strong></h6>
                                        <p className="small mb-2">Execute later, don't block code execution.</p>
                                        <pre className="bg-dark text-light p-2 rounded mb-0 small">
{`// setTimeout
console.log('Start');

setTimeout(() => {
  console.log('Callback');  // Executes later
}, 1000);

console.log('End');

// Output:
// Start
// End
// Callback (after 1 second)`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-4">📌 Real-World Examples:</h6>

                            <div className="accordion" id="callbackExamples">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#example1">
                                            1. Array Methods (map, filter, reduce)
                                        </button>
                                    </h2>
                                    <div id="example1" className="accordion-collapse collapse" data-bs-parent="#callbackExamples">
                                        <div className="accordion-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-0">
{`const numbers = [1, 2, 3, 4, 5];

// map with callback
const doubled = numbers.map((num) => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter with callback
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);  // [2, 4]

// reduce with callback
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#example2">
                                            2. Event Handlers
                                        </button>
                                    </h2>
                                    <div id="example2" className="accordion-collapse collapse" data-bs-parent="#callbackExamples">
                                        <div className="accordion-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-0">
{`// Event listener with callback
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
});

// React event handler
<button onClick={(e) => handleClick(e)}>
  Click me
</button>`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#example3">
                                            3. Error Handling with Callbacks
                                        </button>
                                    </h2>
                                    <div id="example3" className="accordion-collapse collapse" data-bs-parent="#callbackExamples">
                                        <div className="accordion-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-0">
{`function divide(a, b, onSuccess, onError) {
  if (b === 0) {
    onError('Cannot divide by zero');
  } else {
    const result = a / b;
    onSuccess(result);
  }
}

// Usage
divide(10, 2,
  (result) => console.log('Success:', result),
  (error) => console.log('Error:', error)
);
// Output: Success: 5`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#example4">
                                            4. Callback Hell (Problem)
                                        </button>
                                    </h2>
                                    <div id="example4" className="accordion-collapse collapse" data-bs-parent="#callbackExamples">
                                        <div className="accordion-body">
                                            <pre className="bg-dark text-light p-3 rounded mb-0">
{`// Callback hell - hard to read and maintain
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        console.log('Done!');
      });
    });
  });
});

// ❌ Problems:
// - Hard to read (pyramid of doom)
// - Difficult to handle errors
// - Hard to maintain

// ✅ Solution: Use Promises or async/await`}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-4">📌 Common Interview Questions:</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Question</th>
                                            <th>Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Why use callbacks?</td>
                                            <td>For asynchronous operations, code reusability, and flexibility</td>
                                        </tr>
                                        <tr>
                                            <td>Difference from normal function?</td>
                                            <td>No difference - it's about USAGE (passed as argument)</td>
                                        </tr>
                                        <tr>
                                            <td>What is callback hell?</td>
                                            <td>Deeply nested callbacks that are hard to read and maintain</td>
                                        </tr>
                                        <tr>
                                            <td>How to avoid callback hell?</td>
                                            <td>Use Promises, async/await, or named functions</td>
                                        </tr>
                                        <tr>
                                            <td>Can callbacks return values?</td>
                                            <td>Yes, but in async callbacks the return value is often unused</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-4">📌 Key Takeaways:</h6>
                            <div className="alert alert-success">
                                <ul className="mb-0">
                                    <li>✅ <strong>Pass function, don't call it:</strong> <code>func(callback)</code> not <code>func(callback())</code></li>
                                    <li>✅ <strong>Two types:</strong> Synchronous (immediate) and Asynchronous (delayed)</li>
                                    <li>✅ <strong>Used everywhere:</strong> Array methods, event handlers, timers, APIs</li>
                                    <li>✅ <strong>Enables flexibility:</strong> Same function, different behaviors</li>
                                    <li>✅ <strong>Foundation for Promises:</strong> Callbacks evolved into Promises and async/await</li>
                                    <li>✅ <strong>Interview tip:</strong> Be ready to implement debounce, throttle, or custom callbacks</li>
                                </ul>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Pro Tip:</strong> Modern JavaScript prefers Promises and async/await for asynchronous operations, but understanding callbacks is crucial as they're the foundation of async JavaScript!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 57: this Keyword */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q57</span>
                        What is the `this` keyword in JavaScript?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">Explain the `this` keyword in JavaScript. What are the different binding rules? How does `this` behave in different contexts?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(57)}
                    >
                        {showAnswer[57] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[57] && (
                        <div className="alert alert-light border">
                            {/* Quick Interview Answer */}
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-2"><strong>"The `this` keyword in JavaScript refers to the object that is currently executing the code. Its value is determined by HOW a function is called, not WHERE it's defined."</strong></p>
                                <ul className="mb-0">
                                    <li><strong>4 Binding Rules:</strong> Implicit, Explicit, New, Default</li>
                                    <li><strong>Key Point:</strong> `this` changes based on the calling context</li>
                                    <li><strong>Arrow Functions:</strong> Don't have their own `this`, inherit from parent scope</li>
                                    <li><strong>Common Pitfall:</strong> Losing `this` context when passing methods as callbacks</li>
                                    <li><strong>Solutions:</strong> Use `bind()`, arrow functions, or `call()`/`apply()`</li>
                                </ul>
                            </div>

                            <hr className="my-3"/>

                            <h6 className="text-primary">📌 The 4 Rules of `this`:</h6>

                            <div className="accordion" id="thisRules">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#rule1">
                                            Rule 1: Implicit Binding (The Dot Rule) ⭐
                                        </button>
                                    </h2>
                                    <div id="rule1" className="accordion-collapse collapse show" data-bs-parent="#thisRules">
                                        <div className="accordion-body">
                                            <p><strong>Rule:</strong> When a method is called with a dot notation, `this` refers to the object before the dot.</p>
                                            <pre className="bg-dark text-light p-3 rounded">
{`const person = {
  name: 'John',
  greet: function() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();  // "Hi, I am John"
// 'this' = person (object before the dot)`}
                                            </pre>
                                            <div className="alert alert-info mt-2 mb-0">
                                                <strong>💡 Simple Rule:</strong> Whatever is LEFT of the dot becomes `this`!
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rule2">
                                            Rule 2: Default Binding (No Dot = Problem!) ⚠️
                                        </button>
                                    </h2>
                                    <div id="rule2" className="accordion-collapse collapse" data-bs-parent="#thisRules">
                                        <div className="accordion-body">
                                            <p><strong>Rule:</strong> When a function is called standalone (no dot), `this` is `undefined` (strict mode) or `window` (non-strict mode).</p>
                                            <pre className="bg-dark text-light p-3 rounded">
{`const person = {
  name: 'John',
  greet: function() {
    console.log(this.name);
  }
};

person.greet();  // ✅ "John" (has dot)

const func = person.greet;
func();  // ❌ undefined (no dot, lost context!)`}
                                            </pre>
                                            <div className="alert alert-warning mt-2 mb-0">
                                                <strong>⚠️ Common Trap:</strong> Extracting a method loses its `this` context!
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rule3">
                                            Rule 3: Explicit Binding (call, apply, bind) 🔧
                                        </button>
                                    </h2>
                                    <div id="rule3" className="accordion-collapse collapse" data-bs-parent="#thisRules">
                                        <div className="accordion-body">
                                            <p><strong>Rule:</strong> We can explicitly set `this` using `call()`, `apply()`, or `bind()`.</p>
                                            
                                            <h6 className="mt-3"><strong>call() - Execute NOW:</strong></h6>
                                            <pre className="bg-dark text-light p-2 rounded">
{`function greet() {
  console.log('Hello ' + this.name);
}

const user = { name: 'Alice' };
greet.call(user);  // "Hello Alice" (runs immediately)`}
                                            </pre>

                                            <h6 className="mt-3"><strong>bind() - Create function for LATER:</strong></h6>
                                            <pre className="bg-dark text-light p-2 rounded">
{`const boundGreet = greet.bind(user);
boundGreet();  // "Hello Alice" (call whenever you want)

// Perfect for callbacks!
setTimeout(user.greet.bind(user), 1000);`}
                                            </pre>

                                            <div className="table-responsive mt-3">
                                                <table className="table table-sm table-bordered">
                                                    <thead className="table-dark">
                                                        <tr>
                                                            <th>Method</th>
                                                            <th>When to Use</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><code>call()</code></td>
                                                            <td>Execute function NOW with specific `this`</td>
                                                        </tr>
                                                        <tr>
                                                            <td><code>apply()</code></td>
                                                            <td>Same as call(), but with array of arguments</td>
                                                        </tr>
                                                        <tr>
                                                            <td><code>bind()</code></td>
                                                            <td>Create function for LATER (callbacks, events)</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rule4">
                                            Rule 4: New Binding (Constructor Functions) 🏗️
                                        </button>
                                    </h2>
                                    <div id="rule4" className="accordion-collapse collapse" data-bs-parent="#thisRules">
                                        <div className="accordion-body">
                                            <p><strong>Rule:</strong> When a function is called with `new`, `this` becomes a brand new empty object.</p>
                                            <pre className="bg-dark text-light p-3 rounded">
{`function Person(name, age) {
  this.name = name;  // this = new object {}
  this.age = age;
}

const john = new Person('John', 25);
console.log(john);  // { name: 'John', age: 25 }`}
                                            </pre>
                                            <div className="alert alert-success mt-2 mb-0">
                                                <strong>✅ What `new` does:</strong>
                                                <ol className="mb-0 mt-2">
                                                    <li>Creates a new empty object `{}`</li>
                                                    <li>Sets `this` to that object</li>
                                                    <li>Executes the function</li>
                                                    <li>Returns `this` automatically</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-4">📌 Arrow Functions & `this`:</h6>
                            <div className="alert alert-warning">
                                <p><strong>Arrow functions DON'T have their own `this`!</strong></p>
                                <p className="mb-2">They inherit `this` from the parent scope (lexical `this`).</p>
                                <pre className="bg-dark text-light p-3 rounded mb-2">
{`const person = {
  name: 'John',
  greet: function() {
    // Regular function - has its own 'this'
    setTimeout(function() {
      console.log(this.name);  // ❌ undefined
    }, 1000);
    
    // Arrow function - inherits 'this' from greet
    setTimeout(() => {
      console.log(this.name);  // ✅ "John"
    }, 1000);
  }
};`}
                                </pre>
                                <p className="mb-0"><strong>💡 Use arrow functions to preserve `this` in callbacks!</strong></p>
                            </div>

                            <h6 className="text-primary mt-4">📌 Common Interview Questions:</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Question</th>
                                            <th>Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>What determines `this`?</td>
                                            <td>HOW the function is CALLED, not where it's defined</td>
                                        </tr>
                                        <tr>
                                            <td>How to fix lost `this` in setTimeout?</td>
                                            <td>Use `bind()` or arrow function</td>
                                        </tr>
                                        <tr>
                                            <td>Difference: call vs bind?</td>
                                            <td>call() executes NOW, bind() creates function for LATER</td>
                                        </tr>
                                        <tr>
                                            <td>What is `this` in arrow function?</td>
                                            <td>Inherited from parent scope (lexical)</td>
                                        </tr>
                                        <tr>
                                            <td>What is `this` in global scope?</td>
                                            <td>undefined (strict mode) or window (non-strict)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-4">📌 Quick Decision Chart:</h6>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Code Pattern</th>
                                            <th>`this` Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>obj.method()</code></td>
                                            <td>`obj` ✅</td>
                                        </tr>
                                        <tr>
                                            <td><code>method()</code></td>
                                            <td>`undefined` ❌</td>
                                        </tr>
                                        <tr>
                                            <td><code>func.call(obj)</code></td>
                                            <td>`obj` ✅</td>
                                        </tr>
                                        <tr>
                                            <td><code>func.bind(obj)()</code></td>
                                            <td>`obj` ✅</td>
                                        </tr>
                                        <tr>
                                            <td><code>new Func()</code></td>
                                            <td>new object `{}` ✅</td>
                                        </tr>
                                        <tr>
                                            <td><code>() =&gt; {'{}'}</code> (arrow)</td>
                                            <td>inherited from parent ✅</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-4">📌 Real-World Examples:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// React Class Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // Bind method to preserve 'this'
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({ clicked: true });
  }
  
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}

// Or use arrow function (auto-binds)
handleClick = () => {
  this.setState({ clicked: true });
}`}
                            </pre>

                            <h6 className="text-primary mt-4">📌 Key Takeaways:</h6>
                            <div className="alert alert-success">
                                <ul className="mb-0">
                                    <li>✅ <strong>`this` is determined by HOW function is called</strong></li>
                                    <li>✅ <strong>4 Rules:</strong> Implicit (dot), Default (no dot), Explicit (call/bind), New</li>
                                    <li>✅ <strong>Use `bind()` for callbacks:</strong> setTimeout, events, React handlers</li>
                                    <li>✅ <strong>Arrow functions inherit `this`</strong> from parent scope</li>
                                    <li>✅ <strong>Lost context?</strong> Use bind(), arrow functions, or call()</li>
                                    <li>✅ <strong>Interview tip:</strong> Practice predicting `this` in tricky code examples</li>
                                </ul>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Pro Tip:</strong> When in doubt, look for the DOT! If there's a dot before the function call, `this` = the object before the dot. No dot = likely undefined or lost context!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 58: Prototypes & Prototype Chain */}
            <div className="card mb-3 shadow-sm">
                <div className="card-header bg-warning text-dark d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => toggleAnswer(58)}>
                    <span><strong>Q58. What are Prototypes and the Prototype Chain in JavaScript?</strong></span>
                    <span className="badge bg-danger">⭐⭐⭐⭐⭐ CRITICAL</span>
                </div>
                <div className={`card-body ${showAnswer[58] ? '' : 'd-none'}`}>
                    {showAnswer[58] && (
                        <div>
                            <h5 className="text-success">📌 Quick Interview Answer (30 seconds):</h5>
                            <div className="alert alert-success">
                                <p className="mb-0">
                                    <strong>&quot;Prototype is a hidden object that JavaScript uses to share properties and methods between objects. 
                                    Every object has a __proto__ link that connects it to its parent (prototype). When you access a property, 
                                    JavaScript searches the object first, then follows the __proto__ chain until it finds the property or reaches null. 
                                    This chain is called the prototype chain. Constructor functions have a prototype property used as a blueprint 
                                    for all objects created with new. This pattern saves memory by sharing methods instead of creating copies.&quot;</strong>
                                </p>
                            </div>

                            <h5 className="text-primary mt-4">🎯 Core Concepts:</h5>
                            
                            <h6 className="text-secondary mt-3">1️⃣ What is a Prototype?</h6>
                            <div className="alert alert-light">
                                <p><strong>Simple Definition:</strong> Prototype is an object that serves as a parent, allowing other objects to inherit and share properties and methods.</p>
                                <p className="mb-0"><strong>Analogy:</strong> Think of a car blueprint 🚗 - instead of redrawing every car, you copy from the blueprint. All cars share the same instructions!</p>
                            </div>

                            <pre className="bg-dark text-light p-3 rounded">
{`// Every object has access to built-in methods
const person = {
  name: 'John'
};

// Where does toString() come from?
console.log(person.toString());  // "[object Object]"

// From the prototype!
console.log(person.__proto__ === Object.prototype);  // true ✅`}
                            </pre>

                            <h6 className="text-secondary mt-3">2️⃣ Three Different Terms:</h6>
                            <table className="table table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Term</th>
                                        <th>What Is It?</th>
                                        <th>Where?</th>
                                        <th>Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>PROTOTYPES</code></td>
                                        <td>The whole concept/system</td>
                                        <td>Everywhere</td>
                                        <td>JavaScript's inheritance model</td>
                                    </tr>
                                    <tr>
                                        <td><code>__proto__</code></td>
                                        <td>Connection to parent</td>
                                        <td>On objects</td>
                                        <td>Links child to parent</td>
                                    </tr>
                                    <tr>
                                        <td><code>prototype</code></td>
                                        <td>Blueprint property</td>
                                        <td>On functions</td>
                                        <td>Template for new objects</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h6 className="text-secondary mt-3">3️⃣ `__proto__` - The Connection:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// __proto__ = "Who is my parent?"
const car = { brand: 'Toyota' };

console.log(car.__proto__ === Object.prototype);  // true ✅

// car inherits methods from Object.prototype:
car.hasOwnProperty('brand');  // true (inherited method!)
car.toString();               // "[object Object]" (inherited!)`}
                            </pre>

                            <h6 className="text-secondary mt-3">4️⃣ `prototype` - The Blueprint:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Constructor function
function Car(brand) {
  this.brand = brand;
}

// Add method to prototype (shared by all cars)
Car.prototype.honk = function() {
  console.log(this.brand + ' says Beep!');
};

// Create objects
const car1 = new Car('Toyota');
const car2 = new Car('Honda');

// Both use the SAME method (saves memory!)
console.log(car1.honk === car2.honk);  // true ✅

car1.honk();  // "Toyota says Beep!"
car2.honk();  // "Honda says Beep!"`}
                            </pre>

                            <h6 className="text-secondary mt-3">5️⃣ The Prototype Chain:</h6>
                            <div className="alert alert-light">
                                <p><strong>When you access a property, JavaScript searches:</strong></p>
                                <ol>
                                    <li>Check object itself</li>
                                    <li>Not found? → Check `__proto__` (parent)</li>
                                    <li>Not found? → Check parent's `__proto__` (grandparent)</li>
                                    <li>Continue until found OR reach `null`</li>
                                </ol>
                            </div>

                            <pre className="bg-dark text-light p-3 rounded">
{`// Inheritance Example
function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function() {
  console.log(this.name + ' is eating');
};

function Dog(name, breed) {
  Animal.call(this, name);  // Borrow Animal's properties
  this.breed = breed;
}

// Set up inheritance chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;  // Fix constructor

// Add Dog's own method
Dog.prototype.bark = function() {
  console.log(this.name + ' says Woof!');
};

const myDog = new Dog('Buddy', 'Labrador');

// The chain in action:
myDog.bark();  // Found in Dog.prototype ✅
myDog.eat();   // Found in Animal.prototype (via chain!) ✅

// Visualize the chain:
// myDog → Dog.prototype → Animal.prototype → Object.prototype → null`}
                            </pre>

                            <h5 className="text-primary mt-4">❓ Common Interview Questions:</h5>
                            
                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q1: What's the difference between `__proto__` and `prototype`?</strong>
                                </div>
                                <div className="card-body">
                                    <p><strong>Answer:</strong></p>
                                    <ul>
                                        <li><code>__proto__</code> is on <strong>objects</strong> and points to the parent object</li>
                                        <li><code>prototype</code> is on <strong>constructor functions</strong> and is used as a blueprint for new objects</li>
                                        <li>When you create an object with <code>new</code>, the object's <code>__proto__</code> points to the constructor's <code>prototype</code></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q2: How do you check if a property is own vs inherited?</strong>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-light p-2 mb-0">
{`const myDog = new Dog('Buddy', 'Labrador');

// Check own property
myDog.hasOwnProperty('name');   // true (own)
myDog.hasOwnProperty('bark');   // false (inherited)

// Check if property exists (own or inherited)
'name' in myDog;  // true
'bark' in myDog;  // true`}
                                    </pre>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q3: How do you check the type of an object?</strong>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-light p-2 mb-0">
{`const myDog = new Dog('Buddy', 'Labrador');

// instanceof - checks constructor in prototype chain
myDog instanceof Dog;      // true
myDog instanceof Animal;   // true (via prototype chain!)
myDog instanceof Object;   // true (everything inherits from Object!)

// Check prototype directly
Dog.prototype.isPrototypeOf(myDog);     // true
Animal.prototype.isPrototypeOf(myDog);  // true`}
                                    </pre>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q4: Why use prototypes instead of adding methods in the constructor?</strong>
                                </div>
                                <div className="card-body">
                                    <p><strong>Answer: Memory Efficiency!</strong></p>
                                    <pre className="bg-light p-2 mb-2">
{`// ❌ BAD: Creates new function copy for each object
function Person(name) {
  this.name = name;
  this.greet = function() {  // New copy every time!
    console.log('Hi ' + this.name);
  };
}

// ✅ GOOD: One shared function for all objects
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {  // One copy!
  console.log('Hi ' + this.name);
};

// 1000 objects = 1 shared function (saves memory!) 💪`}
                                    </pre>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q5: What is `Object.create()` and why use it?</strong>
                                </div>
                                <div className="card-body">
                                    <p><strong>Answer:</strong> Creates a new object with a specified prototype.</p>
                                    <pre className="bg-light p-2 mb-0">
{`// Create object with specific prototype
const parent = { greet: function() { console.log('Hello'); } };
const child = Object.create(parent);

child.greet();  // "Hello" (inherited from parent!)

// Used for inheritance
Dog.prototype = Object.create(Animal.prototype);
// Creates new object with Animal.prototype as parent`}
                                    </pre>
                                </div>
                            </div>

                            <h5 className="text-primary mt-4">🎯 Quick Decision Chart:</h5>
                            <div className="alert alert-light border">
                                <table className="table table-sm mb-0">
                                    <tbody>
                                        <tr>
                                            <td><strong>Need to create multiple similar objects?</strong></td>
                                            <td>→ Use constructor + prototype</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Need to share methods?</strong></td>
                                            <td>→ Add to prototype</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Need inheritance?</strong></td>
                                            <td>→ Use Object.create()</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Check own vs inherited property?</strong></td>
                                            <td>→ Use hasOwnProperty()</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Check object type?</strong></td>
                                            <td>→ Use instanceof</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-4">📌 Key Takeaways:</h6>
                            <div className="alert alert-success">
                                <ul className="mb-0">
                                    <li>✅ <strong>Prototype = Parent object</strong> that shares properties/methods</li>
                                    <li>✅ <strong>`__proto__` = Connection</strong> from child to parent</li>
                                    <li>✅ <strong>`prototype` = Blueprint</strong> on constructor functions</li>
                                    <li>✅ <strong>Prototype chain = Search path</strong> (object → parent → grandparent → ... → null)</li>
                                    <li>✅ <strong>Memory efficiency:</strong> Share methods via prototype instead of copying</li>
                                    <li>✅ <strong>Inheritance:</strong> Use Object.create() to set up prototype chain</li>
                                    <li>✅ <strong>Check methods:</strong> hasOwnProperty(), instanceof, isPrototypeOf()</li>
                                </ul>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Pro Tip:</strong> When debugging, use <code>console.dir(obj)</code> to see the full prototype chain in browser console. Modern JavaScript uses ES6 classes which are just syntactic sugar over prototypes!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 59: Debouncing & Throttling */}
            <div className="card mb-3 shadow-sm">
                <div className="card-header bg-warning text-dark d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => toggleAnswer(59)}>
                    <span><strong>Q59. What are Debouncing and Throttling in JavaScript?</strong></span>
                    <span className="badge bg-danger">⭐⭐⭐⭐ VERY COMMON!</span>
                </div>
                <div className={`card-body ${showAnswer[59] ? '' : 'd-none'}`}>
                    {showAnswer[59] && (
                        <div>
                            <h5 className="text-success">📌 Quick Interview Answer (30 seconds):</h5>
                            <div className="alert alert-success">
                                <p className="mb-0">
                                    <strong>"Debouncing and Throttling are performance optimization techniques that limit how often a function executes. 
                                    Debouncing waits until the user stops an action (like typing) before executing the function - it delays execution. 
                                    Throttling ensures a function executes at most once in a specified time period - it limits frequency. 
                                    Both prevent excessive function calls that could slow down the application, commonly used for search inputs (debounce) 
                                    and scroll events (throttle)."</strong>
                                </p>
                            </div>

                            <h5 className="text-primary mt-4">🎯 The Problem:</h5>
                            
                            <div className="alert alert-light">
                                <p><strong>Real-World Example: Search Bar 🔍</strong></p>
                                <p>User types: <code>"j"</code> → <code>"ja"</code> → <code>"jav"</code> → <code>"java"</code> → <code>"javas"</code> → <code>"javasc"</code> → <code>"javascri"</code> → <code>"javascrip"</code> → <code>"javascript"</code></p>
                                <p className="mb-0"><strong>Without optimization:</strong> 10 API calls! 😫 (Wastes resources, slows down app)</p>
                            </div>

                            <h5 className="text-primary mt-4">🎯 DEBOUNCING:</h5>
                            
                            <h6 className="text-secondary mt-3">Definition:</h6>
                            <div className="alert alert-info">
                                <p className="mb-0"><strong>Debouncing = "Wait until the action stops, THEN execute"</strong></p>
                                <p className="mb-0">Delays execution until after a pause in activity.</p>
                            </div>

                            <h6 className="text-secondary mt-3">How It Works:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// User types: j → ja → jav → java → javascript (then STOPS)
// 
// Debounce waits 300ms after LAST keystroke
// 
// Timeline:
// Type "j"     → Timer starts (300ms)
// Type "ja"    → Timer RESETS (300ms)
// Type "jav"   → Timer RESETS (300ms)
// Type "java"  → Timer RESETS (300ms)
// ...user stops typing...
// Wait 300ms   → Execute API call! ✅
//
// Result: 1 API call instead of 10!`}
                            </pre>

                            <h6 className="text-secondary mt-3">Implementation:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear previous timer
    clearTimeout(timeoutId);
    
    // Set new timer
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Usage:
const searchAPI = (query) => {
  console.log('API call for:', query);
};

const debouncedSearch = debounce(searchAPI, 300);

// User typing:
debouncedSearch('j');      // Timer starts
debouncedSearch('ja');     // Timer resets
debouncedSearch('jav');    // Timer resets
debouncedSearch('java');   // Timer resets
// ...300ms after last call...
// Output: "API call for: java" (only once!) ✅`}
                            </pre>

                            <h6 className="text-secondary mt-3">Use Cases:</h6>
                            <ul>
                                <li>✅ Search input (wait until user finishes typing)</li>
                                <li>✅ Form validation (validate after user stops editing)</li>
                                <li>✅ Window resize (recalculate layout after resize stops)</li>
                                <li>✅ Auto-save (save after user stops editing)</li>
                            </ul>

                            <h5 className="text-primary mt-4">🎯 THROTTLING:</h5>
                            
                            <h6 className="text-secondary mt-3">Definition:</h6>
                            <div className="alert alert-info">
                                <p className="mb-0"><strong>Throttling = "Execute at most once per time period"</strong></p>
                                <p className="mb-0">Limits how frequently a function can execute.</p>
                            </div>

                            <h6 className="text-secondary mt-3">How It Works:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// User scrolls continuously for 5 seconds
// 
// Throttle executes every 1000ms (1 second)
// 
// Timeline:
// 0ms    → Execute! ✅
// 500ms  → Ignore
// 1000ms → Execute! ✅
// 1500ms → Ignore
// 2000ms → Execute! ✅
// 3000ms → Execute! ✅
// 4000ms → Execute! ✅
// 5000ms → Execute! ✅
//
// Result: 6 executions instead of hundreds!`}
                            </pre>

                            <h6 className="text-secondary mt-3">Implementation:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`function throttle(func, delay) {
  let lastCall = 0;
  
  return function(...args) {
    const now = Date.now();
    
    // Check if enough time has passed
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

// Usage:
const handleScroll = () => {
  console.log('Scroll position:', window.scrollY);
};

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener('scroll', throttledScroll);
// Executes at most once per second, no matter how fast you scroll!`}
                            </pre>

                            <h6 className="text-secondary mt-3">Use Cases:</h6>
                            <ul>
                                <li>✅ Scroll events (update UI elements during scroll)</li>
                                <li>✅ Mouse move tracking (track position without overwhelming CPU)</li>
                                <li>✅ Button clicks (prevent rapid repeated clicks)</li>
                                <li>✅ Game loop updates (limit frame rate)</li>
                                <li>✅ API rate limiting (respect API call limits)</li>
                            </ul>

                            <h5 className="text-primary mt-4">⚡ Key Differences:</h5>
                            
                            <table className="table table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Aspect</th>
                                        <th>Debouncing</th>
                                        <th>Throttling</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>When executes?</strong></td>
                                        <td>After action STOPS</td>
                                        <td>During action (at intervals)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Frequency</strong></td>
                                        <td>Once (after delay)</td>
                                        <td>Multiple times (at rate limit)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Timer behavior</strong></td>
                                        <td>Resets on each call</td>
                                        <td>Ignores calls within delay</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Best for</strong></td>
                                        <td>Search, form validation</td>
                                        <td>Scroll, resize, mouse move</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Analogy</strong></td>
                                        <td>Elevator waits for people</td>
                                        <td>Elevator leaves at intervals</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="text-primary mt-4">❓ Common Interview Questions:</h5>
                            
                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q1: When would you use debouncing vs throttling?</strong>
                                </div>
                                <div className="card-body">
                                    <p><strong>Answer:</strong></p>
                                    <ul>
                                        <li><strong>Debouncing:</strong> When you only care about the final state after user stops (search input, form validation)</li>
                                        <li><strong>Throttling:</strong> When you want regular updates during an ongoing action (scroll position, mouse tracking)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q2: How does debounce reset the timer?</strong>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-light p-2 mb-0">
{`function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);  // ← Clears previous timer!
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Each call clears the old timer and starts a new one`}
                                    </pre>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q3: What's the difference in their implementations?</strong>
                                </div>
                                <div className="card-body">
                                    <p><strong>Debounce:</strong> Uses <code>setTimeout</code> + <code>clearTimeout</code> (resets timer)</p>
                                    <p><strong>Throttle:</strong> Uses <code>Date.now()</code> to check time elapsed (ignores calls)</p>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q4: Can you implement debounce with immediate execution?</strong>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-light p-2 mb-0">
{`function debounce(func, delay, immediate = false) {
  let timeoutId;
  
  return function(...args) {
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) func(...args);
    }, delay);
    
    if (callNow) func(...args);  // Execute immediately on first call
  };
}

// Useful for button clicks - prevent spam but allow first click instantly`}
                                    </pre>
                                </div>
                            </div>

                            <div className="card mb-2">
                                <div className="card-header bg-light">
                                    <strong>Q5: Real-world React example?</strong>
                                </div>
                                <div className="card-body">
                                    <pre className="bg-light p-2 mb-0">
{`import { useState, useCallback } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');
  
  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      // API call here
      fetch(\`/api/search?q=\${searchTerm}\`)
        .then(res => res.json())
        .then(data => console.log(data));
    }, 300),
    []
  );
  
  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);  // Debounced API call
  };
  
  return <input value={query} onChange={handleChange} />;
}`}
                                    </pre>
                                </div>
                            </div>

                            <h5 className="text-primary mt-4">🎯 Quick Decision Chart:</h5>
                            <div className="alert alert-light border">
                                <table className="table table-sm mb-0">
                                    <tbody>
                                        <tr>
                                            <td><strong>Search box typing?</strong></td>
                                            <td>→ Debounce</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Form field validation?</strong></td>
                                            <td>→ Debounce</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Scroll events?</strong></td>
                                            <td>→ Throttle</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Window resize?</strong></td>
                                            <td>→ Debounce (or Throttle if need updates during)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Button spam prevention?</strong></td>
                                            <td>→ Throttle (or Debounce with immediate)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Mouse move tracking?</strong></td>
                                            <td>→ Throttle</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Auto-save while editing?</strong></td>
                                            <td>→ Debounce</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6 className="text-primary mt-4">📌 Key Takeaways:</h6>
                            <div className="alert alert-success">
                                <ul className="mb-0">
                                    <li>✅ <strong>Debounce = Wait until action stops</strong> (delays execution)</li>
                                    <li>✅ <strong>Throttle = Limit frequency</strong> (executes at intervals)</li>
                                    <li>✅ <strong>Both prevent excessive function calls</strong> (performance optimization)</li>
                                    <li>✅ <strong>Debounce resets timer</strong> on each call</li>
                                    <li>✅ <strong>Throttle ignores calls</strong> within time window</li>
                                    <li>✅ <strong>Common use:</strong> Search (debounce), Scroll (throttle)</li>
                                    <li>✅ <strong>Implementation:</strong> Closure + setTimeout/Date.now()</li>
                                </ul>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Pro Tip:</strong> Libraries like Lodash provide <code>_.debounce()</code> and <code>_.throttle()</code> with additional options. However, knowing how to implement them yourself is crucial for interviews!
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 60: Currying */}
            <div className="card border-start border-primary border-4 mb-4 shadow-sm">
                <div className="card-body">
                    <h3 className="card-title text-primary d-flex align-items-center gap-2">
                        <span className="badge bg-primary rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>60</span>
                        What is Currying in JavaScript? ⭐⭐⭐⭐
                        <button className="btn btn-sm btn-outline-primary ms-auto" onClick={() => toggleAnswer(60)}>
                            {showAnswer[60] ? 'Hide Answer ▲' : 'Show Answer ▼'}
                        </button>
                    </h3>
                    {showAnswer[60] && (
                        <div className="mt-3">
                            <div className="alert alert-success">
                                <strong>📌 Simple Definition:</strong>
                                <p className="mb-0"><strong>Currying is breaking function calls into steps.</strong> It transforms a function that takes multiple arguments into a chain of functions, each taking one argument.</p>
                            </div>

                            <h5 className="text-secondary mt-4">🔄 Normal Function vs Curried Function:</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="alert alert-light">
                                        <strong>❌ Normal Function:</strong>
                                        <pre className="bg-dark text-white p-3 rounded mt-2">
{`function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3); // 6
// ✅ One call, all arguments`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="alert alert-light">
                                        <strong>✅ Curried Function:</strong>
                                        <pre className="bg-dark text-white p-3 rounded mt-2">
{`function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

add(1)(2)(3); // 6
// ✅ Three calls, one argument each`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <h5 className="text-secondary mt-4">🎯 Why Use Currying?</h5>
                            <div className="alert alert-info">
                                <ol>
                                    <li><strong>Reusability:</strong> Create specialized functions from general ones</li>
                                    <li><strong>Partial Application:</strong> Pre-fill some arguments, use later</li>
                                    <li><strong>Function Composition:</strong> Chain functions together</li>
                                    <li><strong>Cleaner Code:</strong> Break complex logic into small steps</li>
                                </ol>
                            </div>

                            <h5 className="text-secondary mt-4">🌟 Real-World Example: API Calls</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`// Problem: Multiple API calls with similar structure
fetchData('users', 'GET', '/api/users');
fetchData('posts', 'GET', '/api/posts');
fetchData('comments', 'POST', '/api/comments');

// ✅ Solution: Curry it!
function fetchData(method) {
  return function(url) {
    return function(data) {
      return fetch(url, {
        method: method,
        body: JSON.stringify(data)
      });
    }
  }
}

// Create specialized functions
const getRequest = fetchData('GET');
const postRequest = fetchData('POST');

// Use them cleanly
getRequest('/api/users')();
postRequest('/api/comments')({ text: 'Hello' });`}
                            </pre>

                            <h5 className="text-secondary mt-4">📚 Classic Interview Example: multiply(2)(3)(4)</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`// Implement: multiply(2)(3)(4) → 24

function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    }
  }
}

console.log(multiply(2)(3)(4)); // 24

// ✅ With Arrow Functions (ES6):
const multiply = a => b => c => a * b * c;

console.log(multiply(2)(3)(4)); // 24`}
                            </pre>

                            <h5 className="text-secondary mt-4">🔥 Advanced: Generic Curry Function</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`// Convert ANY function into curried version
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      }
    }
  };
}

// Use it:
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6 ← Works both ways!
console.log(curriedSum(1, 2, 3)); // 6`}
                            </pre>

                            <h5 className="text-secondary mt-4">💡 Real Use Case: Logging</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`// Create different loggers
function log(level) {
  return function(module) {
    return function(message) {
      console.log(\`[\${level}] [\${module}] \${message}\`);
    }
  }
}

// Create specialized loggers
const errorLog = log('ERROR');
const authError = errorLog('AUTH');
const dbError = errorLog('DATABASE');

authError('Login failed');      // [ERROR] [AUTH] Login failed
dbError('Connection timeout');  // [ERROR] [DATABASE] Connection timeout`}
                            </pre>

                            <h5 className="text-secondary mt-4">🎯 Common Interview Questions:</h5>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Question</th>
                                            <th>Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Q: What is currying?</strong></td>
                                            <td>Breaking function calls into steps. Chain of functions, each taking one argument.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: <code>add(1, 2, 3)</code> vs <code>add(1)(2)(3)</code>?</strong></td>
                                            <td>First is normal function (all at once). Second is currying (one at a time).</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Why use currying?</strong></td>
                                            <td>Reusability, partial application, function composition, cleaner code.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Implement <code>multiply(2)(3)(4)</code></strong></td>
                                            <td><code>const multiply = a =&gt; b =&gt; c =&gt; a * b * c;</code></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Real-world use case?</strong></td>
                                            <td>API wrappers, logging systems, configuration functions, event handlers.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Currying vs Partial Application?</strong></td>
                                            <td>Currying: Always one argument per function. Partial: Can be multiple arguments.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 className="text-secondary mt-4">🧪 Practice Questions:</h5>
                            <div className="alert alert-warning">
                                <strong>Q1: Predict Output</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`const greet = name => greeting => \`\${greeting}, \${name}!\`;
const greetJohn = greet('John');
console.log(greetJohn('Hello'));
console.log(greetJohn('Hi'));`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>Output:</strong>
                                        <pre>Hello, John!
Hi, John!</pre>
                                        <strong>Explanation:</strong> <code>greetJohn</code> is a curried function with 'John' pre-filled.
                                    </div>
                                </details>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>Q2: Implement discount(price)(discountPercent)</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`// Should work like:
discount(100)(10) // 90 (10% off 100)
discount(200)(20) // 160 (20% off 200)`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <pre className="bg-dark text-white p-2 rounded">
{`const discount = price => percent => {
  return price - (price * percent / 100);
};

// Or one-liner:
const discount = price => percent => price * (1 - percent / 100);`}
                                        </pre>
                                    </div>
                                </details>
                            </div>

                            <h5 className="text-secondary mt-4">⚡ Quick Decision Chart:</h5>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Scenario</th>
                                            <th>Use Currying?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Need to reuse function with some fixed values</td>
                                            <td>✅ Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Want to create specialized functions from general ones</td>
                                            <td>✅ Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Simple function called once</td>
                                            <td>❌ No (overkill)</td>
                                        </tr>
                                        <tr>
                                            <td>Function composition pipeline</td>
                                            <td>✅ Yes</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Interview Tip:</strong> When asked about currying:
                                <ol className="mb-0 mt-2">
                                    <li>Start with simple definition: "Breaking function calls into steps"</li>
                                    <li>Show basic example: <code>add(1)(2)(3)</code></li>
                                    <li>Mention benefit: "Reusability and partial application"</li>
                                    <li>Give real use case: "API wrappers or logging"</li>
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 61: Classes (ES6) */}
            <div className="card border-start border-primary border-4 mb-4 shadow-sm">
                <div className="card-body">
                    <h3 className="card-title text-primary d-flex align-items-center gap-2">
                        <span className="badge bg-primary rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>61</span>
                        What are Classes in JavaScript (ES6)? ⭐⭐⭐⭐
                        <button className="btn btn-sm btn-outline-primary ms-auto" onClick={() => toggleAnswer(61)}>
                            {showAnswer[61] ? 'Hide Answer ▲' : 'Show Answer ▼'}
                        </button>
                    </h3>
                    {showAnswer[61] && (
                        <div className="mt-3">
                            <div className="alert alert-success">
                                <strong>📌 Simple Definition:</strong>
                                <p className="mb-0"><strong>Classes are a modern way to create objects and handle inheritance in JavaScript.</strong> They are syntactic sugar over constructor functions and prototypes.</p>
                            </div>

                            <h5 className="text-secondary mt-4">🔄 Old Way vs New Way (ES6):</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="alert alert-light">
                                        <strong>❌ Old Way (Constructor Function):</strong>
                                        <pre className="bg-dark text-white p-3 rounded mt-2">
{`function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log('Hi, I am ' + this.name);
}

const john = new Person('John', 25);
john.greet(); // Hi, I am John`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="alert alert-light">
                                        <strong>✅ New Way (ES6 Class):</strong>
                                        <pre className="bg-dark text-white p-3 rounded mt-2">
{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const john = new Person('John', 25);
john.greet(); // Hi, I am John`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <h5 className="text-secondary mt-4">🎯 Class Components:</h5>
                            <div className="alert alert-info">
                                <ol>
                                    <li><strong>constructor():</strong> Initializes object properties (runs when <code>new</code> is called)</li>
                                    <li><strong>Methods:</strong> Functions inside the class (auto added to prototype)</li>
                                    <li><strong>extends:</strong> Inherit from parent class</li>
                                    <li><strong>super():</strong> Call parent constructor/methods</li>
                                    <li><strong>static:</strong> Methods that belong to class, not instances</li>
                                </ol>
                            </div>

                            <h5 className="text-secondary mt-4">🏗️ Basic Class Structure:</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`class ClassName {
  // 1. Constructor (runs on 'new')
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
  }

  // 2. Methods (added to prototype automatically)
  method1() {
    console.log(this.property1);
  }

  method2() {
    return this.property2;
  }
}

// Create instance
const obj = new ClassName('value1', 'value2');
obj.method1();`}
                            </pre>

                            <h5 className="text-secondary mt-4">🌟 Real-World Example: User Management</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isActive = true;
  }

  login() {
    console.log(\`\${this.name} logged in\`);
  }

  logout() {
    console.log(\`\${this.name} logged out\`);
  }

  deactivate() {
    this.isActive = false;
  }
}

const user1 = new User('Alice', 'alice@example.com');
user1.login();      // Alice logged in
user1.logout();     // Alice logged out
user1.deactivate(); // Sets isActive to false`}
                            </pre>

                            <h5 className="text-secondary mt-4">🔗 Inheritance with 'extends':</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`// Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(\`\${this.name} is eating\`);
  }
}

// Child Class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // ✅ Must call parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(\`\${this.name} says Woof!\`);
  }
}

const myDog = new Dog('Buddy', 'Labrador');
myDog.eat();  // Buddy is eating (inherited!)
myDog.bark(); // Buddy says Woof! (own method)`}
                            </pre>

                            <h5 className="text-secondary mt-4">⚡ super() - Calling Parent:</h5>
                            <div className="alert alert-warning">
                                <strong>Two Uses of super():</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Hello from Parent');
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);  // 1️⃣ Call parent constructor
    this.age = age;
  }

  greet() {
    super.greet(); // 2️⃣ Call parent method
    console.log('Hello from Child');
  }
}

const child = new Child('Tom', 10);
child.greet();
// Output:
// Hello from Parent
// Hello from Child`}
                                </pre>
                            </div>

                            <h5 className="text-secondary mt-4">🔥 Static Methods:</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`class MathHelper {
  // Static method (belongs to class, not instances)
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Call directly on class (no 'new' needed)
console.log(MathHelper.add(5, 3));      // 8
console.log(MathHelper.multiply(4, 2)); // 8

// ❌ Cannot call on instances:
const helper = new MathHelper();
// helper.add(5, 3); // ❌ Error!`}
                            </pre>

                            <h5 className="text-secondary mt-4">💡 Real Use Case: React Components</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`// Old React Class Component
class Counter extends React.Component {
  constructor(props) {
    super(props);  // ✅ Must call super in React
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}`}
                            </pre>

                            <h5 className="text-secondary mt-4">🎯 Common Interview Questions:</h5>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Question</th>
                                            <th>Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Q: What are classes in JavaScript?</strong></td>
                                            <td>Modern way to create objects and handle inheritance. Syntactic sugar over constructor functions.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: What is constructor()?</strong></td>
                                            <td>Special method that runs when you create a new instance with <code>new</code>. Initializes properties.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: What does 'extends' do?</strong></td>
                                            <td>Creates a child class that inherits from a parent class.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: What is super()?</strong></td>
                                            <td>Calls the parent class constructor or methods. Must be called before using <code>this</code> in child constructor.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: What are static methods?</strong></td>
                                            <td>Methods that belong to the class itself, not instances. Called directly on class name.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Classes vs Constructor Functions?</strong></td>
                                            <td>Classes are cleaner syntax, easier to read. Under the hood, same prototype mechanism.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Can you call super() anywhere?</strong></td>
                                            <td>No. In constructor, must call before using <code>this</code>. In methods, use <code>super.methodName()</code>.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 className="text-secondary mt-4">🧪 Practice Questions:</h5>
                            <div className="alert alert-warning">
                                <strong>Q1: Predict Output</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`class Car {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    console.log(this.brand);
  }
}

const car1 = new Car('Toyota');
const car2 = new Car('Honda');
car1.showBrand();
car2.showBrand();`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>Output:</strong>
                                        <pre>Toyota
Honda</pre>
                                        <strong>Explanation:</strong> Each instance gets its own <code>brand</code> property from constructor.
                                    </div>
                                </details>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>Q2: What's Wrong Here?</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`class Child extends Parent {
  constructor(name, age) {
    this.age = age;  // ❌ Error!
    super(name);
  }
}`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>Error:</strong> Must call <code>super()</code> BEFORE using <code>this</code>!
                                        <pre className="bg-dark text-white p-2 rounded mt-2">
{`// ✅ Correct:
class Child extends Parent {
  constructor(name, age) {
    super(name);     // First!
    this.age = age;  // Then use this
  }
}`}
                                        </pre>
                                    </div>
                                </details>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>Q3: Static Method Question</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`class Calculator {
  static add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));  // What happens?`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>Result:</strong> ❌ Error! <code>calc.add is not a function</code>
                                        <br/><strong>Reason:</strong> Static methods belong to the class, not instances.
                                        <pre className="bg-dark text-white p-2 rounded mt-2">
{`// ✅ Correct way:
console.log(Calculator.add(2, 3)); // 5`}
                                        </pre>
                                    </div>
                                </details>
                            </div>

                            <h5 className="text-secondary mt-4">⚡ Quick Decision Chart:</h5>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Scenario</th>
                                            <th>Use What?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Initialize object properties</td>
                                            <td>✅ <code>constructor()</code></td>
                                        </tr>
                                        <tr>
                                            <td>Inherit from another class</td>
                                            <td>✅ <code>extends ParentClass</code></td>
                                        </tr>
                                        <tr>
                                            <td>Call parent constructor</td>
                                            <td>✅ <code>super()</code> in constructor</td>
                                        </tr>
                                        <tr>
                                            <td>Call parent method</td>
                                            <td>✅ <code>super.methodName()</code></td>
                                        </tr>
                                        <tr>
                                            <td>Utility function (no instance needed)</td>
                                            <td>✅ <code>static methodName()</code></td>
                                        </tr>
                                        <tr>
                                            <td>Method for instances</td>
                                            <td>✅ Regular method (no static)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 className="text-secondary mt-4">🔑 Key Points to Remember:</h5>
                            <div className="alert alert-info">
                                <ul className="mb-0">
                                    <li>✅ <strong>Classes</strong> = Modern syntax for objects and inheritance</li>
                                    <li>✅ <strong>constructor()</strong> = Initializes properties when <code>new</code> is called</li>
                                    <li>✅ <strong>extends</strong> = Inheritance (child gets parent features)</li>
                                    <li>✅ <strong>super()</strong> = Must call parent constructor BEFORE using <code>this</code></li>
                                    <li>✅ <strong>static</strong> = Method belongs to class, not instances</li>
                                    <li>✅ Under the hood: Classes use prototypes (just cleaner syntax!)</li>
                                </ul>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Interview Tip:</strong> When asked about classes:
                                <ol className="mb-0 mt-2">
                                    <li>Start with: "Modern way to create objects and handle inheritance"</li>
                                    <li>Mention: "Syntactic sugar over constructor functions and prototypes"</li>
                                    <li>Explain: <code>constructor()</code>, <code>extends</code>, <code>super()</code></li>
                                    <li>Give example: Simple class with inheritance</li>
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 62: Higher Order Functions */}
            <div className="card border-start border-primary border-4 mb-4 shadow-sm">
                <div className="card-body">
                    <h3 className="card-title text-primary d-flex align-items-center gap-2">
                        <span className="badge bg-primary rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>62</span>
                        What are Higher Order Functions in JavaScript? ⭐⭐⭐⭐⭐
                        <button className="btn btn-sm btn-outline-primary ms-auto" onClick={() => toggleAnswer(62)}>
                            {showAnswer[62] ? 'Hide Answer ▲' : 'Show Answer ▼'}
                        </button>
                    </h3>
                    {showAnswer[62] && (
                        <div className="mt-3">
                            <div className="alert alert-success">
                                <strong>📌 Simple Definition:</strong>
                                <p className="mb-0"><strong>Higher Order Function (HOF) = A function that:</strong></p>
                                <ol className="mb-0 mt-2">
                                    <li><strong>Takes another function as an argument</strong>, OR</li>
                                    <li><strong>Returns a function</strong></li>
                                </ol>
                            </div>

                            <h5 className="text-secondary mt-4">🔄 Two Types of HOFs:</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="alert alert-light">
                                        <strong>Type 1: Function as Argument</strong>
                                        <pre className="bg-dark text-white p-3 rounded mt-2">
{`function greet(name) {
  console.log('Hello ' + name);
}

function processUser(name, callback) {
  callback(name); // Takes function
}

processUser('John', greet);
// Output: Hello John

// ✅ This is like CALLBACKS!`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="alert alert-light">
                                        <strong>Type 2: Returns Function</strong>
                                        <pre className="bg-dark text-white p-3 rounded mt-2">
{`function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  }
}

const double = createMultiplier(2);
console.log(double(5)); // 10

// ✅ This is like CURRYING!`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <h5 className="text-secondary mt-4">💡 You Already Know HOFs!</h5>
                            <div className="alert alert-info">
                                <p><strong>Higher Order Functions are EVERYWHERE in JavaScript:</strong></p>
                                <ul className="mb-0">
                                    <li>✅ <strong>Callbacks</strong> → HOF (Type 1)</li>
                                    <li>✅ <strong>Currying</strong> → HOF (Type 2)</li>
                                    <li>✅ <strong>Array methods:</strong> <code>map()</code>, <code>filter()</code>, <code>reduce()</code> → HOFs</li>
                                    <li>✅ <strong>setTimeout()</strong> → HOF (takes callback)</li>
                                    <li>✅ <strong>addEventListener()</strong> → HOF (takes callback)</li>
                                </ul>
                            </div>

                            <h5 className="text-secondary mt-4">🌟 Built-in HOFs: Array Methods</h5>

                            <h6 className="text-primary mt-3">1️⃣ map() - Transform Each Item</h6>
                            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

// With arrow function:
const doubled = numbers.map(num => num * 2);`}
                            </pre>

                            <h6 className="text-primary mt-3">2️⃣ filter() - Select Items by Condition</h6>
                            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]

// With arrow function:
const evenNumbers = numbers.filter(num => num % 2 === 0);`}
                            </pre>

                            <h6 className="text-primary mt-3">3️⃣ reduce() - Combine into Single Value</h6>
                            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 2, 3, 4];

const sum = numbers.reduce(function(accumulator, num) {
  return accumulator + num;
}, 0);

console.log(sum); // 10

// With arrow function:
const sum = numbers.reduce((acc, num) => acc + num, 0);`}
                            </pre>

                            <h5 className="text-secondary mt-4">🔨 Creating Your Own HOFs</h5>

                            <h6 className="text-primary mt-3">Example 1: Call Function Twice</h6>
                            <pre className="bg-dark text-white p-3 rounded">
{`function callTwice(func) {
  func();
  func();
}

function sayHello() {
  console.log('Hello!');
}

callTwice(sayHello);
// Output:
// Hello!
// Hello!`}
                            </pre>

                            <h6 className="text-primary mt-3">Example 2: Repeat N Times</h6>
                            <pre className="bg-dark text-white p-3 rounded">
{`function repeat(times, func) {
  for (let i = 0; i < times; i++) {
    func(i);
  }
}

repeat(3, function(num) {
  console.log('Count: ' + num);
});
// Output:
// Count: 0
// Count: 1
// Count: 2`}
                            </pre>

                            <h6 className="text-primary mt-3">Example 3: Add Logging to Any Function</h6>
                            <pre className="bg-dark text-white p-3 rounded">
{`function withLogging(func) {
  return function(value) {
    console.log('Input: ' + value);
    const result = func(value);
    console.log('Output: ' + result);
    return result;
  }
}

function double(x) {
  return x * 2;
}

const doubleWithLog = withLogging(double);
doubleWithLog(5);
// Output:
// Input: 5
// Output: 10`}
                            </pre>

                            <h5 className="text-secondary mt-4">🔗 Function Composition</h5>
                            <div className="alert alert-warning">
                                <strong>Definition:</strong> Combining multiple functions to create a new function.
                            </div>
                            <pre className="bg-dark text-white p-3 rounded">
{`function double(x) {
  return x * 2;
}

function addFive(x) {
  return x + 5;
}

// Manual composition:
function doubleAndAddFive(x) {
  return addFive(double(x)); // double first, then addFive
}

console.log(doubleAndAddFive(3)); // double(3) = 6, then 6 + 5 = 11

// ⚠️ Read INSIDE-OUT (right to left):
// Step 1: double(3) = 6
// Step 2: addFive(6) = 11`}
                            </pre>

                            <h6 className="text-primary mt-3">Creating a compose() Function (Advanced)</h6>
                            <pre className="bg-dark text-white p-3 rounded">
{`function compose(func1, func2) {
  return function(value) {
    return func1(func2(value));
  }
}

const doubleAndAdd5 = compose(addFive, double);
console.log(doubleAndAdd5(3)); // 11`}
                            </pre>

                            <h5 className="text-secondary mt-4">🎯 Common Interview Questions:</h5>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Question</th>
                                            <th>Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Q: What is a Higher Order Function?</strong></td>
                                            <td>A function that takes another function as argument OR returns a function.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Give examples of built-in HOFs</strong></td>
                                            <td><code>map()</code>, <code>filter()</code>, <code>reduce()</code>, <code>forEach()</code>, <code>setTimeout()</code>, <code>addEventListener()</code></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: What's the difference between map() and filter()?</strong></td>
                                            <td><code>map()</code> transforms each item (same length). <code>filter()</code> selects items by condition (can be shorter).</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Are callbacks HOFs?</strong></td>
                                            <td>Yes! Any function that takes a callback is a Higher Order Function (Type 1).</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Is currying a HOF?</strong></td>
                                            <td>Yes! Curried functions return functions, making them Higher Order Functions (Type 2).</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: What is function composition?</strong></td>
                                            <td>Combining multiple functions to create a new function. Read inside-out (right to left).</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Why use HOFs?</strong></td>
                                            <td>Code reusability, abstraction, cleaner code, functional programming patterns.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 className="text-secondary mt-4">🧪 Practice Questions:</h5>
                            <div className="alert alert-warning">
                                <strong>Q1: Predict Output</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`const numbers = [10, 20, 30];
const result = numbers.map(num => num / 10);
console.log(result);`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>Output:</strong>
                                        <pre>[1, 2, 3]</pre>
                                        <strong>Explanation:</strong> <code>map()</code> divides each number by 10.
                                    </div>
                                </details>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>Q2: What prints?</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`function square(x) { return x * x; }
function add3(x) { return x + 3; }

console.log(add3(square(4)));`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>Output:</strong> <code>19</code>
                                        <br/><strong>Explanation:</strong>
                                        <ul>
                                            <li>Step 1 (inner): <code>square(4)</code> = <code>16</code></li>
                                            <li>Step 2 (outer): <code>add3(16)</code> = <code>19</code></li>
                                        </ul>
                                        <strong>Remember:</strong> Read inside-out!
                                    </div>
                                </details>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>Q3: Is this a Higher Order Function?</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`function add(a, b) {
  return a + b;
}`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>Answer:</strong> ❌ <strong>NO</strong>
                                        <br/><strong>Reason:</strong> It doesn't take a function as argument AND doesn't return a function. It's a regular function.
                                    </div>
                                </details>
                            </div>

                            <h5 className="text-secondary mt-4">⚡ Quick Reference:</h5>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Method</th>
                                            <th>Purpose</th>
                                            <th>Returns</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>map()</code></td>
                                            <td>Transform each item</td>
                                            <td>New array (same length)</td>
                                        </tr>
                                        <tr>
                                            <td><code>filter()</code></td>
                                            <td>Select items by condition</td>
                                            <td>New array (≤ original length)</td>
                                        </tr>
                                        <tr>
                                            <td><code>reduce()</code></td>
                                            <td>Combine into single value</td>
                                            <td>Single value (any type)</td>
                                        </tr>
                                        <tr>
                                            <td><code>forEach()</code></td>
                                            <td>Execute for each item</td>
                                            <td><code>undefined</code> (no return)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 className="text-secondary mt-4">🔑 Key Points to Remember:</h5>
                            <div className="alert alert-info">
                                <ul className="mb-0">
                                    <li>✅ <strong>HOF</strong> = Takes function as argument OR returns function</li>
                                    <li>✅ <strong>Type 1:</strong> Takes function (callbacks, map, filter, reduce)</li>
                                    <li>✅ <strong>Type 2:</strong> Returns function (currying, function factories)</li>
                                    <li>✅ <strong>Callbacks & Currying</strong> are both HOFs!</li>
                                    <li>✅ <strong>map()</strong> transforms, <strong>filter()</strong> selects, <strong>reduce()</strong> combines</li>
                                    <li>✅ <strong>Function composition:</strong> Read inside-out (right to left)</li>
                                    <li>✅ <strong>Benefits:</strong> Code reusability, abstraction, cleaner code</li>
                                </ul>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Interview Tip:</strong> When asked about HOFs:
                                <ol className="mb-0 mt-2">
                                    <li>Start with: "A function that takes a function as argument or returns a function"</li>
                                    <li>Give examples: "Like <code>map()</code>, <code>filter()</code>, callbacks, currying"</li>
                                    <li>Mention benefits: "Code reusability and abstraction"</li>
                                    <li>Show simple example: Create a <code>repeat()</code> or <code>multiplyBy()</code> function</li>
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 63: TypeScript Basics */}
            <div className="card border-start border-success border-4 mb-4 shadow-sm">
                <div className="card-body">
                    <h3 className="card-title text-success d-flex align-items-center gap-2">
                        <span className="badge bg-success rounded-circle" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>63</span>
                        What is TypeScript? ⭐⭐⭐⭐⭐ (JD CRITICAL!)
                        <button className="btn btn-sm btn-outline-success ms-auto" onClick={() => toggleAnswer(63)}>
                            {showAnswer[63] ? 'Hide Answer ▲' : 'Show Answer ▼'}
                        </button>
                    </h3>
                    {showAnswer[63] && (
                        <div className="mt-3">
                            <div className="alert alert-success">
                                <strong>📌 Simple Definition:</strong>
                                <p className="mb-0"><strong>TypeScript = JavaScript + Types</strong></p>
                                <p className="mb-0">TypeScript is a superset of JavaScript that adds static type checking to catch errors during development before the code runs.</p>
                            </div>

                            <h5 className="text-secondary mt-4">🎯 What TypeScript Does:</h5>
                            <div className="alert alert-info">
                                <ol>
                                    <li><strong>Check DataType:</strong> Ensures variables have correct types</li>
                                    <li><strong>Error Before Runtime:</strong> Shows errors while coding (red underline in VS Code), NOT when code runs</li>
                                    <li><strong>Easy to Understand:</strong> Types make code self-documenting</li>
                                    <li><strong>Easy to Refactor:</strong> Safely rename/move code, TypeScript updates all references</li>
                                    <li><strong>Converts to JavaScript:</strong> Browsers can't run TypeScript, so it compiles to JavaScript</li>
                                    <li><strong>Autocomplete Suggestions:</strong> IntelliSense shows available properties/methods based on type</li>
                                </ol>
                            </div>

                            <h5 className="text-secondary mt-4">🔄 JavaScript vs TypeScript:</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="alert alert-light">
                                        <strong>❌ JavaScript (No Type Safety):</strong>
                                        <pre className="bg-dark text-white p-3 rounded mt-2">
{`let age = 25;
age = "twenty-five"; // ✅ JavaScript allows this
// No error until runtime! 😱

function add(a, b) {
  return a + b;
}
add(5, "3"); // "53" (string concat!) 🐛`}
                                        </pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="alert alert-light">
                                        <strong>✅ TypeScript (Type Safety):</strong>
                                        <pre className="bg-dark text-white p-3 rounded mt-2">
{`let age: number = 25;
age = "twenty-five"; // ❌ Error immediately!
// Red underline in VS Code ✅

function add(a: number, b: number): number {
  return a + b;
}
add(5, "3"); // ❌ Error before running! ✅`}
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            <h5 className="text-secondary mt-4">📚 Basic Types:</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`// String
let name: string = "John";

// Number
let age: number = 25;

// Boolean
let isActive: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// Union Types (multiple types)
let id: string | number;
id = "abc123"; // ✅ Works
id = 123;      // ✅ Works
id = true;     // ❌ Error!

// Any (avoid when possible - no type checking!)
let anything: any = "hello";
anything = 123; // ✅ Works (but defeats purpose of TypeScript)`}
                            </pre>

                            <h5 className="text-secondary mt-4">🎯 Type Inference (TypeScript is Smart!):</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`// TypeScript automatically knows the type!
let message = "Hello"; // TypeScript knows: string
message = 123; // ❌ Error! TypeScript remembers it's string

let count = 10; // TypeScript knows: number
count = "10"; // ❌ Error!

// No need to write:
// let message: string = "Hello";
// TypeScript already figured it out! ✅`}
                            </pre>

                            <h5 className="text-secondary mt-4">🔨 Functions with Types:</h5>
                            <pre className="bg-dark text-white p-3 rounded">
{`// Typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

add(5, 3); // ✅ Returns 8
add("5", "3"); // ❌ Error! Expects numbers

// Optional parameters
function greet(name: string, age?: number): string {
  if (age) {
    return \`Hi \${name}, you are \${age}\`;
  }
  return \`Hi \${name}\`;
}

greet("John"); // ✅ Works (age is optional)
greet("John", 25); // ✅ Works

// Void (no return value)
function log(message: string): void {
  console.log(message);
  // No return statement
}`}
                            </pre>

                            <h5 className="text-secondary mt-4">🔄 Interface vs Type:</h5>
                            <div className="alert alert-warning">
                                <p className="mb-2"><strong>Both define the shape of an object (what properties it has).</strong></p>
                                <pre className="bg-dark text-white p-3 rounded">
{`// Using Interface
interface User {
  name: string;
  age: number;
}

// Using Type
type User = {
  name: string;
  age: number;
}`}
                                </pre>
                                <div className="mt-3">
                                    <h6 className="text-primary">📋 Quick Decision Chart:</h6>
                                    <div className="table-responsive">
                                        <table className="table table-sm table-bordered">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Use Case</th>
                                                    <th>Use This</th>
                                                    <th>Why</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>React Props</td>
                                                    <td><code>interface</code></td>
                                                    <td>Better errors, extendable</td>
                                                </tr>
                                                <tr>
                                                    <td>Union types ('a' | 'b')</td>
                                                    <td><code>type</code></td>
                                                    <td>Interface can't do this</td>
                                                </tr>
                                                <tr>
                                                    <td>API Response shape</td>
                                                    <td><code>interface</code></td>
                                                    <td>Clear object structure</td>
                                                </tr>
                                                <tr>
                                                    <td>Complex types</td>
                                                    <td><code>type</code></td>
                                                    <td>More flexible</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h6 className="text-danger">❌ Interface CANNOT do this:</h6>
                                    <pre className="bg-dark text-white p-3 rounded">
{`// Union types - ONLY Type can do this
type Status = 'loading' | 'success' | 'error'; // ✅ Works

interface Status = 'loading' | 'success' | 'error'; // ❌ ERROR!`}
                                    </pre>
                                </div>
                                <div className="mt-3">
                                    <h6 className="text-success">✅ But Interface CAN have union properties:</h6>
                                    <pre className="bg-dark text-white p-3 rounded">
{`interface User {
  role: 'admin' | 'user' | 'guest';  // ✅ Valid!
}`}
                                    </pre>
                                </div>
                                <div className="mt-3">
                                    <h6 className="text-info">🔄 Extending (Inheritance):</h6>
                                    <pre className="bg-dark text-white p-3 rounded">
{`// Interface: Uses 'extends'
interface Person {
  name: string;
}
interface Employee extends Person {
  employeeId: number;
}

// Type: Uses '&' (Intersection)
type Person = {
  name: string;
}
type Employee = Person & {
  employeeId: number;
}

// Both achieve the same result!`}
                                    </pre>
                                </div>
                            </div>

                            <h5 className="text-secondary mt-4">🎯 Common Interview Questions:</h5>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Question</th>
                                            <th>Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Q: What is TypeScript?</strong></td>
                                            <td>TypeScript is a superset of JavaScript that adds static type checking. It helps catch errors during development, provides autocomplete, and makes code easier to refactor. It compiles down to JavaScript, so browsers can run it.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Interface vs Type?</strong></td>
                                            <td>Both define object shapes. Interface is better for objects and can be extended. Type is more flexible and can handle unions like 'red' | 'blue'. For React props, both work fine, but interface is slightly preferred.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Why use TypeScript?</strong></td>
                                            <td>Catches errors before runtime, better autocomplete, easier refactoring, self-documenting code, improved maintainability.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Does TypeScript run in the browser?</strong></td>
                                            <td>No! TypeScript compiles to JavaScript. Browsers only understand JavaScript.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: When does TypeScript show errors?</strong></td>
                                            <td>During development (while coding), NOT at runtime. You see red underlines in your editor.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: What is type inference?</strong></td>
                                            <td>TypeScript automatically figures out types without you writing them. Example: <code>let x = 10</code> → TypeScript knows it's a number.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: What are union types?</strong></td>
                                            <td>A variable that can be multiple types: <code>let id: string | number;</code></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Q: Should you use 'any' type?</strong></td>
                                            <td>Avoid it! 'any' disables type checking, defeating the purpose of TypeScript. Use it only when absolutely necessary.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 className="text-secondary mt-4">🧪 Practice Questions:</h5>
                            <div className="alert alert-warning">
                                <strong>Q1: What's wrong here?</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`let age: number = 25;
age = "25";`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>Error:</strong> Cannot assign string to number type.
                                        <br/><strong>Reason:</strong> <code>age</code> is declared as <code>number</code>, but trying to assign a string "25".
                                    </div>
                                </details>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>Q2: What type is 'result'?</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`let result = 10 + 20;`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>Answer:</strong> <code>number</code>
                                        <br/><strong>Reason:</strong> TypeScript uses type inference. It sees <code>10 + 20</code> and knows the result is a number.
                                    </div>
                                </details>
                            </div>

                            <div className="alert alert-warning mt-3">
                                <strong>Q3: Will this work?</strong>
                                <pre className="bg-dark text-white p-3 rounded mt-2">
{`let id: string | number;
id = "abc123";
id = 456;
id = true;`}
                                </pre>
                                <details>
                                    <summary><strong>Click for Answer</strong></summary>
                                    <div className="mt-2 p-2 bg-light rounded">
                                        <strong>First two lines:</strong> ✅ Work (string and number are allowed)
                                        <br/><strong>Third line:</strong> ❌ Error! <code>id</code> can only be string OR number, not boolean.
                                    </div>
                                </details>
                            </div>

                            <h5 className="text-secondary mt-4">🔑 Key Points to Remember:</h5>
                            <div className="alert alert-info">
                                <ul className="mb-0">
                                    <li>✅ <strong>TypeScript = JavaScript + Types</strong></li>
                                    <li>✅ <strong>Catches errors BEFORE runtime</strong> (during development)</li>
                                    <li>✅ <strong>Compiles to JavaScript</strong> (browsers can't run TypeScript)</li>
                                    <li>✅ <strong>Type inference:</strong> TypeScript figures out types automatically</li>
                                    <li>✅ <strong>Better autocomplete</strong> based on types</li>
                                    <li>✅ <strong>Self-documenting code</strong> - types explain what's expected</li>
                                    <li>✅ <strong>Avoid 'any' type</strong> - it disables type checking</li>
                                </ul>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Interview Tip:</strong> When asked about TypeScript:
                                <ol className="mb-0 mt-2">
                                    <li>Start with: "TypeScript is JavaScript with static types"</li>
                                    <li>Explain benefit: "Catches errors during development, not at runtime"</li>
                                    <li>Mention: "Compiles to JavaScript for browsers"</li>
                                    <li>Give example: Show a simple typed function</li>
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Question 58: Component Composition */}
            <div className="card mb-4 border-0 shadow">
                <div className="card-header bg-primary">
                    <h5 className="text-white mb-0">
                        <span className="badge bg-white text-primary me-2">Q58</span>
                        What is Component Composition?
                    </h5>
                </div>
                <div className="card-body">
                    <div className="alert alert-secondary mb-3">
                        <strong>📝 Question:</strong>
                        <p className="mb-0 mt-2">What is Component Composition in React? How does it help in building reusable and maintainable applications?</p>
                    </div>
                    
                    <button 
                        className="btn btn-outline-primary btn-sm mb-3" 
                        onClick={() => toggleAnswer(58)}
                    >
                        {showAnswer[58] ? '🔼 Hide Answer' : '🔽 Show Answer'}
                    </button>
                    
                    {showAnswer[58] && (
                        <div className="alert alert-light border">
                            {/* Quick Interview Answer */}
                            <div className="alert alert-primary">
                                <h6 className="alert-heading">🎯 Quick Interview Answer:</h6>
                                <p className="mb-0">
                                    <strong>"Component Composition is when you build complex UIs by combining smaller, reusable components. The parent component handles logic and state, then passes data and functions to child components via props. The child components focus on displaying UI and triggering parent functions when needed. This keeps code organized, reusable, and maintainable."</strong>
                                </p>
                            </div>

                            <hr className="my-3"/>

                            <h6 className="text-primary">📌 Key Concepts:</h6>
                            
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="alert alert-success">
                                        <h6 className="alert-heading">✅ Benefits of Component Composition:</h6>
                                        <ul className="mb-0">
                                            <li><strong>Reusability:</strong> Use components in multiple places</li>
                                            <li><strong>Flexibility:</strong> Easy to modify and extend</li>
                                            <li><strong>Maintainability:</strong> Smaller, focused components</li>
                                            <li><strong>Clear Structure:</strong> Better code organization</li>
                                            <li><strong>Easier Testing:</strong> Test small units independently</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="alert alert-info">
                                        <h6 className="alert-heading">🔑 Core Principle:</h6>
                                        <p className="mb-2"><strong>"Composition over Inheritance"</strong></p>
                                        <p className="mb-0 small">Build complex components by combining simple ones, rather than extending base classes.</p>
                                    </div>
                                </div>
                            </div>

                            <h6 className="text-primary mt-4">💡 Simple Example:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Parent Component (handles logic & state)
function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build App', completed: true }
  ]);

  const handleToggle = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h2>My Tasks</h2>
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          onToggle={handleToggle}  // Pass function to child
        />
      ))}
    </div>
  );
}

// Child Component (displays UI & triggers parent function)
function TaskItem({ task, onToggle }) {
  return (
    <div>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}  // Call parent function
      />
      <span>{task.title}</span>
    </div>
  );
}`}
                            </pre>

                            <h6 className="text-primary mt-4">🧩 Composition Pattern - Using `children` prop:</h6>
                            <pre className="bg-dark text-light p-3 rounded">
{`// Container Component
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage - Compose different content
function App() {
  return (
    <Card>
      <h2>Welcome</h2>
      <p>This is flexible content!</p>
      <button>Click Me</button>
    </Card>
  );
}`}
                            </pre>

                            <div className="alert alert-warning mt-3">
                                <h6 className="alert-heading">⚡ Key Takeaways:</h6>
                                <ul className="mb-0">
                                    <li><strong>Parent:</strong> Manages state and logic</li>
                                    <li><strong>Child:</strong> Displays UI and triggers callbacks</li>
                                    <li><strong>Props:</strong> Bridge for passing data and functions</li>
                                    <li><strong>Result:</strong> Cleaner, reusable, maintainable code</li>
                                </ul>
                            </div>

                            <div className="alert alert-info mt-3">
                                <strong>💡 Interview Tip:</strong> When explaining Component Composition:
                                <ol className="mb-0 mt-2">
                                    <li>Start with: "It's building complex UIs from smaller components"</li>
                                    <li>Explain: "Parent handles logic, child handles display"</li>
                                    <li>Mention: "Props connect parent and child"</li>
                                    <li>Give example: Show a simple parent-child relationship</li>
                                    <li>Highlight benefits: Reusability, maintainability, flexibility</li>
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )

}

export default QuestionAndAnswer
