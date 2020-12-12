import { useState } from 'react';
import './App.css';
import Header from './Layouts/Header.js';
import Footer from './Layouts/Footer.js';
import Content from './Layouts/Content.js';
import { Grid } from '@material-ui/core';


export default function App() {
  const [title] = useState("StockSymbols Sample");
  const [version] = useState("0.0.1");

  return (
    <Grid container 
      className="App"
      direction={"column"}
      alignItems={"stretch"} >
        <Grid item>
          <Header title={title} />
        </Grid>
        <Grid item>
          <Content />
        </Grid>
        <Grid item>
          <Footer version={version} />
        </Grid>
    </Grid>
  );
}
