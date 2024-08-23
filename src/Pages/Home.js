import React from "react";
import "../Css/Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="text-container">
          <h1>Willkommen, ich bin</h1>
          <h1 id="name">Damian Eisenring</h1>
          <h1 id="beschreibung">IMS-Schüler und Schwinger</h1>
        </div>
        <div className="image-container">
          <img src="/Images/portrait.png" alt="Portrait" />
        </div>
      </div>
      <div>
        <h1>Über mich</h1>
      </div>
      <div>
        <h1>Meine Informatik Projekte</h1>
      </div>
      <div>
        <h1>Meine Schwingkarriere</h1>
      </div>
    </div>
  );
};

export default Home;
