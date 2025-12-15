import React, { createContext, useContext, useState } from "react";

/**
 * 🎯 COMPOUND COMPONENTS PATTERN - Tabs Example
 * 
 * EXERCISE: Build a Tabs component using Compound Components pattern
 * 
 * GOAL: Create components that work together:
 * - <Tabs> - Parent that manages active tab state
 * - <TabList> - Container for tab buttons
 * - <Tab> - Individual tab button
 * - <TabPanels> - Container for tab content
 * - <TabPanel> - Individual tab content
 * 
 * KEY CONCEPT: Child components automatically know which tab is active
 * through Context API - no manual prop passing!
 * 
 * CHECKLIST:
 * □ STEP 1: Create TabsContext
 * □ STEP 2: Create Tabs component (parent)
 * □ STEP 3: Create useTabsContext hook
 * □ STEP 4: Create TabList component
 * □ STEP 5: Create Tab component
 * □ STEP 6: Create TabPanels component
 * □ STEP 7: Create TabPanel component
 * □ STEP 8: Create demo component to test
 * 
 * BUILD IT ALL BY YOURSELF! 💪
 */

// ========================================
// STEP 1: Create TabsContext
// ========================================
// TODO: Create context to share activeIndex and setActiveIndex
const TabsContext = createContext(null);


// ========================================
// STEP 2: Create Tabs Component (Parent)
// ========================================
// TODO: This component should:
// - Have state for activeIndex (starts at 0)
// - Provide { activeIndex, setActiveIndex } via Context
// - Render children inside a styled div

const Tabs = ({ children }) => {

  const [activeIndex,setActiveIndex] = useState(0);
  return  <TabsContext.Provider value={{activeIndex,setActiveIndex}}>
            <div style={{ padding: "20px" }}>
              {children}
            </div>
          </TabsContext.Provider>  
};


// ========================================
// STEP 3: Create useTabsContext Hook
// ========================================
// TODO: This hook should:
// - Call useContext(TabsContext)
// - Throw error if context is null (used outside Tabs)
// - Return the context

const useTabsContext = () => {
   const context = useContext(TabsContext)
   if(!context){
    throw new Error('Tab components must be used within <Tabs>')
   }
   return context
};


// ========================================
// STEP 4: Create TabList Component
// ========================================
// TODO: This is just a container for tabs
// - Render children in a styled div (flex layout)

const TabList = ({ children }) => {
  return <div style={{display: "flex",gap: "5px",borderBottom: "2px solid #e0e0e0",marginBottom: "20px"}}>
    {children}
  </div>
};


// ========================================
// STEP 5: Create Tab Component
// ========================================
// TODO: Individual tab button
// - Use useTabsContext to get activeIndex and setActiveIndex
// - Use index prop to know its position
// - Style differently if active (background color change)
// - onClick should call setActiveIndex(index)

const Tab = ({ children, index }) => {

     const { activeIndex, setActiveIndex } = useTabsContext();
     const isActive = activeIndex === index;

     return <>
    <button onClick={() => setActiveIndex(index)} style={{padding: "12px 24px", border: "none", cursor: "pointer",
    fontSize: "16px",background: isActive ? "#667eea" : "#e0e0e0",
    color: isActive ? "white" : "#666",
    fontWeight: isActive ? "600" : "400",}}>{children}</button>
     </>
};


// ========================================
// STEP 6: Create TabPanels Component
// ========================================
// TODO: Container for tab content panels
// - Just renders children in a styled div

const TabPanels = ({ children }) => {
  return (<div style={{padding:'20px',border:'solid 1px red'}}>{children}</div> )
};


// ========================================
// STEP 7: Create TabPanel Component
// ========================================
// TODO: Individual tab content
// - Use useTabsContext to get activeIndex
// - Use index prop to know its position
// - Only render if index === activeIndex
// - Return null if not active

const TabPanel = ({ children, index }) => {
  const {activeIndex} = useTabsContext();
  if(index !== activeIndex){return null}
  return <div>{children}</div>
};


// ========================================
// STEP 8: Demo Component
// ========================================
// TODO: Create a demo that uses your Tabs components

const TabsDemo = () => {
  return (
    <div style={{ 
      maxWidth: "600px", 
      margin: "50px auto", 
      padding: "30px",
      fontFamily: "Arial, sans-serif" 
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        🎯 Compound Components - Tabs Example
      </h1>

      {/* TODO: Use your Tabs components here! */}
      {/* Example structure: */}
      <Tabs>
        <TabList>
          <Tab index={0}>Home</Tab>
          <Tab index={1}>Profile</Tab>
          <Tab index={2}>Settings</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel index={0}>
            <h2>Home Content</h2>
            <p>Welcome home!</p>
          </TabPanel>
          <TabPanel index={1}>
            <h2>Profile Content</h2>
            <p>Your profile info</p>
          </TabPanel>
          <TabPanel index={2}>
            <h2>Settings</h2>
            <p>Configure settings</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
     
      
      <p style={{ textAlign: "center", marginTop: "30px", color: "#666" }}>
        Build the Tabs components above to see this work! 💪
      </p>
    </div>
  );
};

export default TabsDemo;

