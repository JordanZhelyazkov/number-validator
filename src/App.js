import { useState, useMemo } from "react";
import "./App.css";

function App() {

  const [text, setText] = useState('');
  
 
  const ifMemo = useMemo(() => {
  const regExp = `^[0-9]+.*[0-9]*$/g`;
  if(text.match(regExp)) {
    return text;
  }}, [text]);

 
  


  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(e) => setText(e.target.value)}
          value={text}

        />
        <span className="icon is-small is-right">
          <i  className={ifMemo === true ? "fa-check" : "fas fa-times"} />
        </span> 
      </div>
    </div>
  );
}

export default App;
