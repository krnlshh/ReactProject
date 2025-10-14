import Counter  from "./components/Counter";
import Calculator from "./components/Calculator";
import Greeting from "./components/Greeting";
import ColorChange from "./components/ColorChange";
import Time from "./components/Time";
import DynamicList from "./components/DynamicList";
import Example from "./components/Example";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import { useState } from "react";
import Example4 from "./components/Example4";
import Wrapper from "./components/Wrapper";
import Autogenerate from "./components/AutoGenerate";
import Example6 from "./components/Example6";
import SkillCheck from "./components/SkillCheck";
import EventPlan from "./components/EventPlan";
import RadioWork from "./components/RadioWork";
import ArrayOfOjectLoop from "./components/ArrayOfOjectLoop";
import Map from "./components/Map";
import Clock from "./components/Clock";
import Employee from "./components/Employee";
import DataFetcher from "./components/DataFetcher";
import EffectExample from "./components/EffectExample";
import EffectExample2 from "./components/EffectExample2";
import MountingStage from "./components/MountingStage";
import UpdateStage from "./components/UpdatingStage";
import StyleInline from "./components/StyleInline";
import Product from "./components/Product";
import UserRef from "./components/UserRef";
import Uncontrolled from "./components/Uncontrolled";
import Parent from "./components/Parent";
import Child from "./components/Child";
import RefParent from "./components/RefParent";
import UserFormStatus from "./components/UserFormStatus";
import UseTransition from "./components/UseTransition";
import DerivedState from "./components/DerivedState";
import ParentUser from "./components/ParentUser";
import UpdateObjectState from "./components/UpdateObjectState";
import UpdateArrayState from "./components/UpdateArrayState";
import UseAction from "./components/UseAction";
import ToggleHook from "./components/ToggleHook"
import { SubjectData } from "./components/ContextData";
import College from "./components/College";
import Router from "./components/Router";





function App() {

  const [count,setCount] = useState(0)
  const [ucount,usetCount] = useState(0)

const [studentName,setStudentName] = useState("chaman");

const [subject,setSubject] = useState("English");

    const items = [
        {id: 1, name: "Laptop", price: 1000, quantity: 1},
        {id: 2, name: "Mouse", price: 25, quantity: 2}
    ];
  
 
  return (
    <>
    <Counter/>  
    <Calculator/>  
    <Greeting/>
    <ColorChange/>
    <Time/>
    <DynamicList/>
    <Example/>
    <Example1/>
    <Example2 name={studentName}/>
    <button onClick={() => setStudentName("krunal updated") }>set name </button>
    <Example4 name="test"/>
    <Example4/>
    <Example4  name="krunal"/>
    <Wrapper color="green">
      <h1>hello everyone</h1>
    </Wrapper>
    <Wrapper color="blue">
      <h1>hello admin</h1>
    </Wrapper>
    <Wrapper>
      <h1>hello admin</h1>
    </Wrapper>
    <Autogenerate/>
    <Example6/>
    <SkillCheck/>
    <EventPlan/>
    <RadioWork/>
    <ArrayOfOjectLoop/>
    <Map item={items}/>
    <Clock/>
    <Employee/>    
    <DataFetcher/>
   <EffectExample/>
   <EffectExample2 count={count} ucount = {ucount}/>
   <button onClick={() => setCount(count + 1)}>Counter </button>
   <button onClick={() => usetCount(ucount + 1)}>UCounter </button>
   <MountingStage/>
   <UpdateStage/>
   <StyleInline/>
   <Product/>   
   <UserRef/>
   <Uncontrolled/>
   <Parent/>
   <RefParent/>
   <UserFormStatus/>
   <UseTransition/>
   <DerivedState/>
   <ParentUser/>
   <UpdateObjectState/>
   <UpdateArrayState/>
   <UseAction/>
   <ToggleHook/>
   
   <hr/>
   <h2>Nested Components with Context</h2>

   <select onChange={(e) => setSubject(e.target.value)} value={subject}>
    <option>Select Subject</option>
    <option>History</option>
    <option>Chemstery</option>
    <option>Geography</option>
    <option>Gujrati</option>
   </select>

   <button onClick={()=>setSubject('')}> Reset</button>

   <SubjectData.Provider value={subject}>
    <College/>
   </SubjectData.Provider>

   <Router/>

   
   
    </>
  )
}

export default App
