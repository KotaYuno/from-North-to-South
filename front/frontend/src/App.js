import logo from './logo.svg';
import './App.css';

function App() {
  // const [text, setText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>ReactとFlaskで通信したい</p>

        {/* <input 
        id="text" 
        type="text" 
        value={content} 
        onChange={(e) => {SVGTextContentElement(e.target.value);}} /> */}

        {/* <TextField setText={setText} text={text}/> */}

        <button id="button">送信</button>
        
        <div id="add"></div>

        

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Learn React
        </a> */}

      </header>
    </div>
  );
}

export default App;
