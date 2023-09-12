import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import logo from './logo.svg';
import './App.css';
import HomeView from "./views/HomeView";

const Container = styled.div`
  text-align: right;
`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
