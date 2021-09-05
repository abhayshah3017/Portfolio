import './App.css';
import Header from './Components/header';
import NavBar from './Components/navBar';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
    <Particles 
      params={{
        particles: {
          number: {
             value: 40,
             density: {
                enable: true,
                value_area: 900
                          }
                      },
          shape: {
            type: "polygon",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
                    }
                 }}/>
    <NavBar />
    <Header />
    </>
  );
}

export default App;
