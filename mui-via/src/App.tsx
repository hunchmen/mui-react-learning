import React from 'react';
import './App.css'
import StylingBasics from './section2/components/StylingBasics';
import SxPropComponent from './section2/components/SxPropComponent'
import ReusableStyles from './section2/components/ReusableStyles';
import { Global } from '@emotion/react';
import GlobalStyling from './section2/components/GlobalStyling';
import { Grid } from '@mui/material';


function App() {

  return (
    <React.Fragment>
      <Grid container spacing={2} padding={2}>
      <GlobalStyling />
      <ReusableStyles />
      <StylingBasics />
      <SxPropComponent />
      </Grid>
    </React.Fragment>
  );
}

export default App
