import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from './Components/Template';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={
            <Template child={<Home/>} title="MIT Sigma Alpha Epsilon" description="MIT SAE is a tightly-knit community of about 30 fun-loving guys who strive to excel in whatever our endeavors may be. Our members come from West Virginia to California, study everything from Math to Music, but find commonality in the idea that MIT is better when you’re part of a family. Ask any brother why they chose SAE, and they will likely tell you it’s because we’re “The Boys,” but beyond that, it’s because of our commitment to a supportive and inclusive environment that has served hundreds of brothers before us. Located at 155 Bay State Rd, SAE enjoys a prime location along the banks of the Charles, along with a short 10 minute bike commute to campus. If you want to join a community that has fun, works hard, and finds comfort in brotherhood, then be sure to come check us out!" />
          }/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
