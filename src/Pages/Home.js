import React from "react";
import "../Css/Home.css";
import { Link } from "react-router-dom";

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
      <div className="about-container">
        <h1 id="about-me-title">Über mich</h1>

        <div>
          <tr>
            <tbody>
              <tr>
                <td >Name:</td>
                <td>Eisenring</td>
              </tr>
              <tr>
                <td>Vorname:</td>
                <td>Damian</td>
              </tr>
              <tr>
                <td>Geburtsdatum:</td>
                <td>20.07.2006</td>
              </tr>
              <tr>
                <td>Grösse:</td>
                <td>196cm</td>
              </tr>
              <tr>
                <td>Gewicht:</td>
                <td>100kg</td>
              </tr>
              <tr>
                <td>Beruf:</td>
                <td>
                  Informatiker EFZ in Ausbildung an der Informatikmittelschule
                </td>
              </tr>
              <tr>
                <td>Adresse:</td>
                <td>Rebackerstrasse 13, 5042 Hirschthal</td>
              </tr>
            </tbody>
          </tr>
        </div>
      </div>

      <div className="skills-container">
        <h1>Lehre mehr über:</h1>
        <Link to="/Informatik" className="btn">
          Meine Projekte
        </Link>
        <Link to="/Informatik" className="btn">
          Meine Skills
        </Link>
        <Link to="/Schwingen" className="btn">
          Meine Schwingkarriere
        </Link>
      </div>
    </div>
  );
};

export default Home;
