import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter"
import "./Certif.css";
import Card from "./Card";
import "./project.css"
import Portfolio_data from "./Portfolio_data";
import moi from "./moi.jpeg";
import ProjectData from "../projectData";


const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h1>
              Bonjour, Je m'appelle <span>ENNAHHAL Bouchra</span>
            </h1>
            <p>
              Elève Ingénieure En Ingénierie Informatique Et Technologies Emergentes{" "}
              <strong>(2ITE)</strong>, passionnée et motivée par le développement de systèmes informatiques.
            </p>

          </div>
          <div className="right">
            <div className="right_img">
              <img src={moi} alt="moi" />
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:ennahhalbouchra@example.com" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/bouchra-ennahhal-743728209/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>

          </div>
        </div>
      </section>
      <br />
      <br />

      <section id='formations'>
        <div className="title">
          <h2>
            <span>
              <Typewriter words={[" Les Formations "]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
          </h2>
        </div>
    




        <ul className="aducation-box">
          <li id="li3">
            <span>2022 - 2023</span>
            <h6>Cycle ingénieur</h6>
            <p>1ère année cycle d'ingénieur à l'Ecole Nationale Des Sciences Appliquées El Jadida</p>
            <p> <strong>Filière : </strong> Ingénierie en Informatique et Technologies Emergentes (2ITE)</p>
          </li>
        </ul>

        <ul className="aducation-box">
          <li id="li3">
            <span>2020 - 2022</span>
            <h6>Cycle péparatoire</h6>
            <p>Cycle préparatoire à l'Ecole Nationale Des Sciences Appliquées El Jadida(ENSAJ)</p>
          </li>
        </ul>

        <ul className="aducation-box">
          <li id="li2">
            <span>2019 - 2020</span>
            <h6>1ère année FST Settat</h6>
            <p><strong>Option : </strong> Mathématique, Informatique, Physique (MIP)</p>
          </li>
        </ul>

        <ul className="aducation-box">
          <li id="li1">
            <span>2018 - 2019</span>
            <h6>Baccalauréat scientifique</h6>
            <p><strong>Option : </strong>Science physique</p>
          </li>
        </ul>
      </section>


      <section id='certificats'>
      <section className="Portfolio top" id="portfolio">
          <div className="container">
            <div className="heading text-center ">
            <div className="title">
          <h2>
            <span>
              <Typewriter words={[" Les Certificats "]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
          </h2>
        </div>
            </div>
  
            <div className="content grid">
              {Portfolio_data.map((value, index) => {
                return (
                  <Card
                    key={index}
                    image={value.image}
                    title={value.title}
                  />
                );
              })}
            </div>
          </div>
        </section>

      </section>

      <br/>
      <section id="projects">
      <section className='Resume' id='resume'>
        <div className='container top'>
          <h2>
            <span>
              <Typewriter words={[" Les Projets "]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
          </h2>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4></h4>
                <h1></h1>
              </div>

              <div  className='content'>
                {ProjectData.map((val, id) => {
                  if (val.diff === "left") {
                    return <Card key={id} title={val.title} desc={val.desc} />
                  }
                })}
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4></h4>
                <h1></h1>
              </div>

              <div className='content'>
                {ProjectData.map((val, index) => {
                  if (val.diff === "right") {
                    return <Card key={index} title={val.title} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      </section>
    </>
  );
};

export default Home;
