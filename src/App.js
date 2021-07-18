import './App.css';
import Nav from './components/Nav';
// import Card from './components/Card';
import Grid from './components/Grid';
import Description from './components/Description';

function App() {
  return (
    <div className='App'>
      <Nav />
      {/* <Card /> */}
      <Description />
      <Grid />
    </div>
  );
}

export default App;
