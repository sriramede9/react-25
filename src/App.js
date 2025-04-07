import './App.css';
import Accordion from './components/accordian';
import data from './components/accordian/data';

function App() {
  return (
    <div className="App">
      <Accordion data={data}/>
    </div>
  );
}

export default App;
