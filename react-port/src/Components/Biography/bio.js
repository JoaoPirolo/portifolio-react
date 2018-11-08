import React, { Component } from 'react';
import './bio.css';

class Biography extends Component {
    state = {
        description: ['Em 2009, meu ciclo se iniciou na UTFPR, na época, foi para cursar o ensino médio em nível técnico, acabei saindo no ultimo ano, por força maior, porém 1 ano depois la estava eu iniciando dessa vez em nível de graduação em Analise e Desenvolvimento de Sistemas, cursei por 2 anos e quando me surgiu a oportunidade de transferir para Engenharia de Software, uma galera disse que eu era doido, pois teria que ficar mais um ano por conta da diferença de disciplinas, porém gosto de desafios e aqui estou, e não me arrependo, pois estes anos que fiquei estudando consegui absorver muita coisa, que com certeza podem ser o meu diferencial',
            'Meu primeiro contato real foi quando iniciei os estudos no ensino médio, porém até então minha maior curiosidade era a área de elétrica, tanto que iniciei trabalhando em uma empresa como instalador de painéis elétricos, e tudo que via na teoria, ali pude executar na prática. Tudo mudou quando comecei a trabalhar na empresa Telecom, nesta comecei ter contato com redes, dados, e assim minha curiosidade em querer aprender foi ficando maior, tanto que acredito que meu equilíbrio para conciliar o trabalho e o estudo são pelo real fascínio pela área.']

    }

    render() {
        return (
            <section id="presentation">
            <div className="div-cont-about">
                <div className="content">
                <h2 className="h2-bio">Biografia</h2>
                   <p id="description">{this.state.description[0]}</p>
                    <h2 className="h2-bio">Meu contato com a Profissão!</h2>
                    <p id="description">{this.state.description[1]}</p>
                </div>
            </div>
            </section>
        );
    }
}
export default Biography