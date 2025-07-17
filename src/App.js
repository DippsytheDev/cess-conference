import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Judges from "./components/Judges";
import Finalists from "./components/Finalists";
import Team from "./components/Team";
import EventGallery from "./components/EventGallery";
import Schedule from "./components/Schedule";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import { StagewiseToolbar } from "@stagewise/toolbar-react";
import ReactPlugin from "@stagewise-plugins/react";

function App() {
  return (
    <div className="App">
      <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
      <Header />
      <Hero />
      <About />
      <Speakers />
      <Judges />
      <Finalists />
      <Team />
      <EventGallery />
      <Schedule />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
