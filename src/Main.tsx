import React from "react";
import "./App.css";
import AccommodationCard from "./components/AccommodationCard/AccommodationCard";
import CityCard from "./components/CityCard/CityCard";
import Navigation from "./components/Nav/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PlaceCard from "./components/PlaceCard/PlaceCard";
import AccommodationDetails from "./components/AccommodationDetailsCard/AccommodationDetails";

function Main() {
  return (
    <>
      {/*  <Header />
      <Navigation />
      <CityCard name="London" count={5102} />
      <AccommodationCard
        title="Sugar & Spice Apartments"
        place="Split"
        price="EUR 75"
      /> */}
      <AccommodationDetails
        title="Poseidon Hotel Suites"
        subtitle="Stay in the heart of Mykonos City"
        typeOfRoom="Room"
        categorization={5}
        personCount="2"
        freeCancelation="True"
        price={500}
        location="Mykonos City"
        postalCode="846 00"
      />
      {/* <PlaceCard />
      <Footer /> */}
    </>
  );
}

export default Main;
