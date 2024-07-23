import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import ServiceList from "./ServiceList";
import ServiceDetail from "./ServiceDetail";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Landing from "./Landing";
import ScrollImage from "./ScrollImage";
import Whatsapp from "./Whatsapp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Landing />
      <ScrollImage />
      <ServiceList />
      <ServiceDetail />
      <Testimonials />
      <Contact />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
