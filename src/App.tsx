import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from './Components/Template';
import Home from './Components/Home';
import Brothers from './Components/Brothers';
import About from './Components/About';
import Rush from './Components/Rush';
import House from './Components/House';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Alumni from './Components/Alumni';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={
            <Template child={<Home/>} title="MIT Sigma Alpha Epsilon" description="Welcome to the official website of MIT SAE. Explore our brotherhood, events, and learn more about our community." />
          }/>
          <Route path="/brothers" element={
            <Template child={<Brothers/>} title="Brothers of SAE" description="Meet the brothers of MIT SAE, our diverse and talented members who make our fraternity unique." />
          }/>
          <Route path="/about" element={
            <Template child={<About/>} title="About SAE" description="Learn about the history, values, and mission of Sigma Alpha Epsilon at MIT." />
          }/>
          <Route path="/rush" element={
            <Template child={<Rush/>} title="Rush SAE" description="Interested in rushing SAE? Find out about our rush events and how to join." />
          }/>
          <Route path="/house" element={
            <Template child={<House/>} title="The SAE House" description="Take a closer look at our chapter house and the facilities our brothers enjoy." />
          }/>
          <Route path="/events" element={
            <Template child={<Events/>} title="SAE Events" description="Check out upcoming events and see what's happening at SAE." />
          }/>
          <Route path="/contact" element={
            <Template child={<Contact/>} title="Contact SAE" description="Get in touch with us for any inquiries or further information." />
          }/>
          <Route path="/alumni" element={
            <Template child={<Alumni/>} title="SAE Alumni" description="Connecting with our alumni and their enduring legacy at SAE." />
          }/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;