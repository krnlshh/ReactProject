import { useState } from 'react';

function Time() {
    const [currentTime, setCurrentTime] = useState('');
    
    const showTime = () => {
        const now = new Date();
        setCurrentTime(now.toLocaleString());
    };

    return (
        <div className="section">
            <h3>5. Current Time</h3>
            <button onClick={showTime}>Show Current Time</button>
            <div className="result">
                {currentTime ? `Current time: ${currentTime}` : 'Click button to see current time'}
            </div>
        </div>
    );
}
export default Time