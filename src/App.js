import './App.css';
import image from './year.jpg'
import { Plans } from './Plans';

function App() {
  return (
    <div className='app'>
    <div className="img">
     <img className='image' src={image} alt=' pen ' width='150px' height='150px'/>
    </div>
    <div>
      <h3 className='text'> What are your plans for 2023?</h3>
    </div>
    <Plans/>
    </div>
  );
}

export default App;
