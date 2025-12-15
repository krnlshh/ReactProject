import React, { useState, useRef, useEffect } from 'react';
/**
 * 🎯 HOOK: useRef Practice
 * 
 * You'll build 3 examples:
 * 1. Auto-focus input (DOM manipulation)
 * 2. Count renders (persistent value)
 * 3. Store previous value (advanced pattern)
 * 
 * CONCEPTS COVERED:
 * - useRef for DOM access
 * - useRef for mutable values
 * - .current property
 * - Refs vs State
 */

// ========================================
// EXAMPLE 1: Auto-Focus Input
// ========================================

/**
 * TODO: Build AutoFocusInput Component
 * 
 * GOAL: When component loads, input should be focused automatically
 * 
 * STEPS:
 * 1. Import useRef and useEffect
 * 2. Create ref using useRef(null)
 * 3. Attach ref to input element
 * 4. Use useEffect to focus on mount
 * 5. Access DOM element with ref.current.focus()
 */

const AutoFocusInput = () => {
   const inputRef = useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return <div>  <input  ref={inputRef} placeholder='focus here' /></div>

};

const Counter = () => {
  console.log('🔄 Component RENDERED!');
  
  const [count, setCount] = useState(0);
  const renderCountRef = useRef(0);
  const testRef = useRef(100);  // ← New ref for testing
  
  renderCountRef.current++;

  const handleClick = () => {
    setCount(prev => prev + 1);
  }
  
  const updateRefOnly = () => {
    testRef.current = testRef.current + 1;  // ← Only updates ref!
    console.log('Ref updated to:', testRef.current);
  }

  return (
    <div>
      <p>useState: {count}</p>
      <p>useRef: {renderCountRef.current}</p>
      <p>Test Ref: {testRef.current}</p>
      
      <button onClick={handleClick}>Add (useState)</button>
      <button onClick={updateRefOnly}>Update Ref Only</button>  {/* ← New button! */}
    </div>
  );
}


// ========================================
// MAIN COMPONENT
// ========================================

const UseRefPractice = () => {
 

 return (<div>example 1  <AutoFocusInput/>  <Counter/></div> )
 
};

export default UseRefPractice;

