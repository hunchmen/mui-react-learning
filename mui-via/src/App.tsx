import React from 'react';
import './App.css'
import StylingBasics from './section2/components/StylingBasics';
import SxPropComponent from './section2/components/SxPropComponent'
import ReusableStyles from './section2/components/ReusableStyles';


function App() {

  return (
    <React.Fragment>
      <ReusableStyles />
      <StylingBasics />
      <SxPropComponent />
    </React.Fragment>
  );
}

export default App
