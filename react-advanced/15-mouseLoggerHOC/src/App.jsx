
import  { useState, useEffect} from 'react'
import './App.css'

const withMousePosition = (WrappedComponent) => {
  return (props) => {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMousePositionChange);

    return () => {
      window.removeEventListener('mousemove', handleMousePositionChange);
      }
    }, []); 

    return <WrappedComponent {...props} mousePosition={mousePosition}  />
  }
}


const PaneMouseLogger = ({ mousePosition }) => {
   if(!mousePosition){
    return null;
   }
return (
    <div className='BasicTracker'>
      <p>Mouse Position: Panel</p>
      <span className='PanelSpan'>X: {mousePosition.x}</span>
      <span className='PanelSpan'>Y: {mousePosition.y}</span>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if(!mousePosition){
    return null;
   }    
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PaneMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
  

  return (
    <div className='App'>
      <header className='header'> Little Lemon Restaurant </header>
      <PanelMouseTracker />
      <PointMouseTracker />
  
    </div>
  )
}

export default App
