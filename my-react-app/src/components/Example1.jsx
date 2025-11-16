import { useState } from "react"
import User from "./User";

function Example1(){
  const [count,setCount] = useState(0);
  function changeCount(){
    setCount(count+1)
  }

  const [display,setDisplay] =useState(true);

  let nameArray = ["x","y","z"]

  // Styles
  const containerStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  };

  const counterDisplayStyle = {
    width: '120px',
    height: '120px',
    margin: '0 auto 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
    transition: 'transform 0.3s ease'
  };

  const buttonStyle = {
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
    marginBottom: '20px'
  };

  const toggleButtonStyle = {
    padding: '12px 28px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
    background: display 
      ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    marginTop: '10px'
  };

  const conditionCardStyle = {
    padding: '20px',
    margin: '25px 0',
    backgroundColor: '#f8f9ff',
    borderRadius: '15px',
    border: '2px solid #e0e7ff',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const conditionTextStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#4c51bf',
    margin: 0
  };

  const headerStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '30px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const dividerStyle = {
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #e0e7ff, transparent)',
    margin: '25px 0',
    border: 'none'
  };

  const getConditionMessage = () => {
    if (count === 0) return "🎯 Starting Point";
    if (count === 1) return "🚀 First Step";
    if (count === 2) return "⭐ Second Step";
    if (count === 3) return "🎉 Third Step";
    return `🔥 Level ${count}`;
  };

    return(
      <div style={containerStyle}>
        <h2 style={headerStyle}>Counter Application</h2>
        
        <div 
          style={counterDisplayStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {count}
        </div>

        <button 
          style={buttonStyle}
          onClick={changeCount}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
          }}
        >
          ➕ Increment Counter
        </button>

        <div style={conditionCardStyle}>
          <h5 style={conditionTextStyle}>{getConditionMessage()}</h5>
        </div>
         
        <hr style={dividerStyle} />

        <button 
          style={toggleButtonStyle}
          onClick={()=>setDisplay(!display)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
          }}
        >
          {display ? '👁️ Hide User' : '👁️‍🗨️ Show User'}
        </button>
        
        {display && (
          <div style={{ marginTop: '20px', animation: 'fadeIn 0.5s' }}>
            <User user={nameArray} />
          </div>
        )}
      </div>
    )
}

export default Example1