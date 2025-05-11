import Button from './Button.jsx';
import { useState } from 'react';
import './App.css';


function App() {
  const [input, setInput] = useState('');


  function handleClick(value) {
    if(value === 'c'){
      setInput(' ');
      return;
    }
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
      return;
    }
    setInput(input + value);
  }

  return (
      <>
      <div><h3 id='DISPLAY'>{input}</h3></div>
      <div id='Buttons'>
      <Button value="/" handleClick={handleClick} />
    
      <br></br>
      <Button value="1" handleClick={handleClick} />
      <Button value="2" handleClick={handleClick} />
      <Button value="3" handleClick={handleClick} />
      <Button value="*" handleClick={handleClick} />
      <br></br>
      <Button value="4" handleClick={handleClick} />
      <Button value="5" handleClick={handleClick} />
      <Button value="6" handleClick={handleClick} />
      <Button value="-" handleClick={handleClick} />
      <br></br>
      <Button value="7" handleClick={handleClick} />
      <Button value="8" handleClick={handleClick} />
      <Button value="9" handleClick={handleClick} />
      <Button value="+" handleClick={handleClick} />
      <br></br>
      <Button value="c" handleClick={handleClick} />
      <Button value="0" handleClick={handleClick} />
      <Button value="." handleClick={handleClick} />
      <Button value="=" handleClick={handleClick} />
      </div>
      </>
  );
}

export default App;
