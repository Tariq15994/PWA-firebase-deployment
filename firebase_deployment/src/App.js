
import './App.css';
import {initNotification } from './services/firebaseService.js';
function App() {
  return (
    <div className="App">
     Hello World
     <button onClick = {initNotification}>configure notification</button>
    </div>
  );
}

export default App;
