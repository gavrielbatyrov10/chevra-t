import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Sukkah from "./Sukkah";
import "./index.css"; // Ensure you import the CSS file
import Booking from "./Booking";

function MainPage() {
  return (
    <>
      <Nav />
      <Header />
      <Landing />
      <ScrollImage />
      <ServiceList />
      <ServiceDetail />
      <Testimonials />
      <Booking />
      <Contact />
      <Whatsapp />
      <ArrowUp />
    </>
  );
}

function Layout() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sukkah" element={<Sukkah />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
