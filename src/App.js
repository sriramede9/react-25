import './App.css';
// import Accordion from './components/accordian';
import data from './components/image-slider/data';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      <ImageSlider data={data}/>
    </div>
  );
}

export default App;
