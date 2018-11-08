import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar/NavBar';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/profile';
import Skill from './Components/Skill/my-skills';
import Blog from './Components/Blog/blog';
import Forms from './Components/Forms/forms';
import Works from './Components/Works/works';
import Biography from './Components/Biography/bio';
import Footer from './Components/Footer/footer';


class App extends Component {
  render() {
    return (

      <div className="container-fluid">
        <Home />
        <NavBar />
        <section id="profile">
          <Profile />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="blog" >
          <Blog />
        </section>
        <section id="works">
          <Works />
        </section>
        <Biography />
        <section id="contact">
          <Forms />
        </section>
        <div id="midia-social" className="container-fluid mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <div className="links">
          <h5>Links para entrar em contato!</h5>
          <div className="cont-link">
          <ul id="redes-sociais">
            <li className="rds">
              <a className="ancor" target="_blank" href="https://www.facebook.com/jaoopirolo"><img src="https://cdn.icon-icons.com/icons2/642/PNG/32/facebook_icon-icons.com_59205.png" alt="icone facebook" /></a>
            </li>
            <li className="rds">
              <a className="ancor" target="_blank" href="https://www.instagram.com/jaopirolo"><img src="https://cdn.icon-icons.com/icons2/836/PNG/32/Instagram_icon-icons.com_66804.png" alt="icone instagram" /></a>
            </li>
            <li className="rds">
              <a className="ancor" target="_blank" href="https://www.linkedin.com/in/joao-pirolo"><img src="https://cdn.icon-icons.com/icons2/99/PNG/32/linkedin_socialnetwork_17441.png" alt="icone linkedin" /></a>
            </li>
            <li className="rds">
              <a className="ancor" target="_blank" href="https://github.com/JoaoPirolo"><img src="https://cdn.icon-icons.com/icons2/673/PNG/32/github_icon-icons.com_60477.png" alt="icone github" /></a>
            </li>
          </ul>
          </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
