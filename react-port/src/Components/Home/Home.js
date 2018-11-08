import React, { Component } from 'react';
import './Home.css';

class Biography extends Component {
    state = {
        pres: ['Me chamo João Carlos Pirolo Filho, aqui nesta página falarei um pouco sobre quem sou, algumas de minhas habilidades, e deixar um pouco do que sei aqui! Caso queira mais informações, é só entrar em contato, ficarei feliz em atender!']

    }

    render() {
        return (
            <section id="home">
            <div className="div-home">
                <div className="cont-div">
                <h2 className="h2-home">Seja Bem Vindo!</h2>
                   <p id="desc">{this.state.pres}</p>
                </div>
            </div>
            </section>
        );
    }
}
export default Biography
