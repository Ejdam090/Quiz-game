import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import backimg from './assets/background_new.jpg';
import HomePage from "./Pages/HomePage";
import Technology from "./Pages/Technology";
import History from './Pages/History';
import Motorization from './Pages/Moto';
import Culture from './Pages/Culture';


const Container = styled.div`
  padding: 0;
  margin:0;
  width: 100wv;
  height: 100vh;
  background: url(${backimg}) no-repeat ;
  background-size: 100% 100%;
  margin: 0 auto;
  
`;

function App() {
  return (
    <Container>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' exact element={<HomePage / >} />
          <Route path='/Technology'  element={<Technology / >} />
          <Route path='/History'  element={<History / >} />
          <Route path='/Moto'  element={<Motorization / >} />
          <Route path='/Culture'  element={<Culture / >} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
