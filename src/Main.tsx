import React from "react";
import "./App.css";
import AccommodationCard from "./components/AccommodationCard/AccommodationCard";
import CityCard from "./components/CityCard/CityCard";
import Navigation from "./components/Nav/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PlaceCard from "./components/PlaceCard/PlaceCard";

function Main() {
  return (
    <>
      <Header />
      <Navigation />
      <CityCard />
      <AccommodationCard />
      <PlaceCard />
      <Footer />
    </>
  );
}

export default Main;
