import React from 'react';
import AppRouter from './component/route/RouterComponent';
import NavBar from "./component/route/NavBar";
import Container from '@material-ui/core/Container';

//calendar
import "react-date-range/dist/styles.css";
import 'react-date-range/dist/theme/default.css';  
import './App.css'; 



function App() {
  return (
    <div>
      <NavBar />
      
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;