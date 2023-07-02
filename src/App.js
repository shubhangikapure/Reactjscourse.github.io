
import './App.css';
import ClassClick from './Components/ClassClick';
import ClassComponents from './Components/ClassComponents';
import Counter from './Components/Counter';
import EventHandling from './Components/EventHandling';
import Greet from './Components/Greet';
import StateClass from './Components/StateClass';
import StateandPropsDestrucing from './Components/StateandPropsDestrucing';
import BindingEventHandler from './Components/BindingEventHandler'
import MethodsOfProps from './Components/MethodsOfProps';
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import Style from './Components/Style';
import Inlinecss from './Components/Inlinecss';
import Ref from './Components/Ref';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import { Fragment } from 'react';
import Fragments from './Components/Fragments';
import Table from './Components/Table';
import PureComponents from './Components/PureComponents';
import ParentComponent from './Components/ParentComponent';
function App() {
  return (
    <div className="App">
    {/*<ConditionalRendering/>
  <ListRendering/>*/}
 {/*
     <Greet name="shubahngi" age='65'/>
     <p>this is childrens</p>
     <Greet name="shuba " age='37'/>
     <button>Action</button>
     <Greet name="shu" age='6'/>
  <ClassComponents name='omkar' age="28"/>
  

  <StateClass/>
  <Counter/>
  <StateandPropsDestrucing name='shubhangi' age='28'/>
  <EventHandling/>
  <ClassClick/>
  <BindingEventHandler/>
  <MethodsOfProps/>*/}
{/*<Style primary={true}/>
<Inlinecss/>
<Form/>
<LifecycleA/>
<Fragments/>
<Table/>
<ParentComponent/>*/}
<Ref/>
    </div>
  );
}

export default App;
