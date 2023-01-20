import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <Navbar title='Text Utilities' />
      <TextForm heading='Enter Your Text To Format'/>
    </div>
  );
}

export default App;
