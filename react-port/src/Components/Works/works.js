import React, { Component } from 'react'
import './works.css'
class Works extends Component {
    state = {
        conteudo: ['Sistema de Supermercado em Java, construido durante a disciplina de Programação Desktop, no qual o usuario seria capaz de realizar compras sem necessidade de enfrentar filas.',
            'Sistema em Python, construido na disciplina de Segurança e Auditoria de Sistemas, no qual permite identificar possiveis vulnerabilidades em sistemas web',
            'Sistema em construção para a disciplina de Oficina de Integração 2, no qual é um projeto web de locação de imoveis para estudantes',
            'Projeto web em andamento, criando um portifolio em React!',
            'Iniciando uma aplicação WEB, para melhoria no trabalho, na qual sera realizado solicitações,análise e aplicações de controle de atividades envolvidas ao trabalho!',
            'Minha primeira atividade em Web, foi replicar um site, utilizando somente, HTML e CSS']
    }

    render() {
        return (
            <div className="cont-work">
            <h2 className="h2-work">Alguns de meus trabalhos desenvolvidos</h2>
                <div className="flex-container">
                    <div className="flex-item" id="pagfacil">
                        <div className="sob">
                            <p id="conteudo">{this.state.conteudo[0]}</p>
                            <a target="_blank" href="https://github.com/JoaoPirolo/Projeto-Desktop-T01" className="repositorio">Ir para repositório</a>
                        </div>
                    </div>
                    <div className="flex-item" id="dorkeasy">
                        <div className="sob">
                            <p id="conteudo">{this.state.conteudo[1]}</p>
                            <a target="_blank" href="https://github.com/JoaoPirolo/DorksEasy" className="repositorio">Ir para repositório</a>
                        </div>
                    </div>
                    <div className="flex-item" id="aluga">
                        <div className="sob">
                            <p id="conteudo">{this.state.conteudo[2]}</p>
                            <a target="_blank" href="https://github.com/Projeto-OficinaWeb" className="repositorio">Ir para repositório</a>
                        </div>
                    </div>
                    <div className="flex-item" id="portifolio">
                        <div className="sob">
                            <p id="conteudo">{this.state.conteudo[3]}</p>
                            <a target="_blank" href="" className="repositorio">Ir para repositório</a>
                        </div>
                    </div>
                    <div className="flex-item" id="homework">
                        <div className="sob">
                            <p id="conteudo">{this.state.conteudo[4]}</p>
                            <a target="_blank" className="repositorio">Não Possui Repositório No momento</a>
                        </div>
                    </div>
                    <div className="flex-item" id="webt1">
                        <div className="sob">
                            <p id="conteudo">{this.state.conteudo[5]}</p>
                            <a target="_blank" href="https://github.com/JoaoPirolo/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/t01/joao-pirolo" className="repositorio">Ir para repositório</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Works