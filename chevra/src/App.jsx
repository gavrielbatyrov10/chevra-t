import React from "react";
import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import ServiceList from "./ServiceList";
import ServiceDetail from "./ServiceDetail";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Landing from "./Landing";
import ScrollImage from "./ScrollImage";
import Whatsapp from "./Whatsapp";
import ArrowUp from "./ArrowUp";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Landing />
      <ScrollImage />
      <ServiceList />
      <ServiceDetail />
      <Testimonials />
      <Contact />
      <Whatsapp />
      <ArrowUp />
      <Footer />
    </div>
  );
}

export default App;
