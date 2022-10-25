import logo from './logo.svg';
import './App.css';
import { Button, DangerButton, LargeButton } from './Buttons';
import { ComposedDangerButton, ComposedLargeButton, ComposedLargeDangerButton } from './ComposedButtons';

function Wrapper({title, children}) {
  return (
    <div className="wrapper">
      <h1>{ title }</h1>
      { children }
    </div>
  )
}
function App() {
  return (
    <>
      <h1>Children Investigation</h1>

      <ComposedLargeDangerButton 
        text="Composed Large Danger Button"
        onClick = {()=>alert("composed large danger button")}/>

      <ComposedDangerButton 
        text="Did this work?"
        onClick={()=>alert("yes it did?")}/>

      <ComposedLargeButton
        text="Composed Large Button"
        onClick={()=>alert("composed large button")}/>
      <hr/>
      <LargeButton
        text="Large Button"
        size="small"
        onClick={()=>alert("clicked")}/>

      <DangerButton 
        text="danger" 
        colour="green"
        onClick={()=>alert("pressed")}/>


      <Button 
        text="Press Me" 
        colour="red"
        size="large"
        onClick={()=>alert("clicked")}
        disabled
        />
      <Button 
        text="Press Me" 
        colour="green"
        size="small"
        onClick={()=>alert("clicked")}/>

      <Wrapper title="The Wrapper">
        <p>Some text</p>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </Wrapper>
    </>
  );
}

export default App;
