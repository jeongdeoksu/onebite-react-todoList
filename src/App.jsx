import { useState } from 'react';
import './App.css';
import Header from './Compoments/Header';
import Editor from './Compoments/Editor';
import List from './Compoments/List';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
