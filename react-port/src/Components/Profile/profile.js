import React, { Component, Fragment } from 'react'
import './profile.css'

class Perfil extends Component {
    state = {
        interesses: ['Desenvolvimento Web', 'UX,UI', 'Processamento de Dados', 'Redes de Computadores', 'Telecomunicações', 'Gestão de Projetos', 'Processos, Métricas, Estimativas de Software', 'Empreendedorismo'],
        idiomas: ['Inglês Básico(Leitura,Compreensão)', 'Espanhol Básico(Leitura,Compreensão)'],
        formacao: ['2009 - Ensino Médio - UTFPR - Tecnico em Eletrotécnica', '2013 (ATÉ A TRANSFERENCIA) - UTFPR - Tecnologia Em Análise e Desenvolvimento de Sistemas', '2016 - UTFPR - Bacharelado em Engenharia de Software'],
        atividades: ['Trabalho na empresa Serede SA, desde o ano de 2014, como Operador de Distribuição Geral']
    }

    render() {
        return <Fragment>
            <div className="profile">
                <div className="itens">
                    <div className="h2-profile">Meu Perfil</div>
                    <div className="my-photo">
                    </div>
                    <p className="bio">Tenho 24 anos, sou da cidade de Cornélio Procópio-PR,<br />trabalho como Operador de Distribuição Geral na Serede SA.</p>
                    <a href="https://drive.google.com/file/d/12sYECAI6ePz2ENfY48Ai_lCt-suF3j--/view?usp=sharing" target="_blank"  rel="noopener noreferrer" className="sr-4" download="cv-joao-pirolo">
                        <button type="button" className="load" content="../assets/cv-joao-pirolo.pdf">Download Curriculo</button>
                    </a>
                </div>

            <div className="lista">
                <h3 className="h3">Interesses</h3>
                <ul>
                    {this.state.interesses.map(
                        (item, index) => {
                            return <li key={index}>{item}</li>
                        }
                    )}
                </ul>
                <h3 className="h3">Idiomas</h3>
                <ul>
                    {this.state.idiomas.map(
                        (item, index) => {
                            return <li key={index}>{item}</li>
                        }
                    )}
                </ul>
                <h3 className="h3">Formação</h3>
                <ul>
                    {this.state.formacao.map(
                        (item, index) => {
                            return <li key={index}>{item}</li>
                        }
                    )}
                </ul>
                <h3 className="h3">Atividades Desenvolvidas</h3>
                <ul>
                    {this.state.atividades.map(
                        (item, index) => {
                            return <li key={index}>{item}</li>
                        }
                    )}
                </ul>
            </div>
            </div >
        </Fragment >
    }
}


export default Perfil