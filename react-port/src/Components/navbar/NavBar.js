import React from 'react';
import './navbar.css';



const NavBar = () => {
  let menu=[
    {titulo:"Home", link:"#home"},
    {titulo:"Perfil", link:"#profile"},
    {titulo:"Habilidades", link:"#skills"},
    {titulo:"Blogs", link:"#blog"},
    {titulo:"Trabalhos", link:"#works"},
    {titulo:"Biografia", link:"#presentation"},
    {titulo:"Contatos", link:"#contact"},
  ];
  let lista = menu.map(function(link,index){
    return(
      <li key={index} className="nav-item active">
              <a className="nav-link" href={link.link}>{link.titulo}<span className="sr-only">(current)</span></a>
            </li>
    );
  });
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg navbar fixed-top ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
         <b> <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
           {lista}
          </ul></b>
        </div>
      </nav>
  </div>
  );

};
export default NavBar;
