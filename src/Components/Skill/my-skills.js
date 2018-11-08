import React, { Component, Fragment } from 'react'
import './my-skills.css'

class Habilidades extends Component {
    state = {
        skill: ['Excel Avançado', 'Redes','Instalações Elétricas','Desenho Técnico','Painéis Elétricos','Motores', 'Telecom', 'Padrões de Projeto', 'Gestão de Pessoas', 'Metricas e Estimativas', 'Linguagem C', 'Hibernate', 'JasperReport', 'JDBC', 'Linguagem Java', 'JUnit', 'Mockito', 'Selenium', 'MYSQL', 'POSTGRESQL', 'XAMPP', 'HTML5', 'CSS3', 'JavaScript', 'SASS', 'ReactJS', 'BootStrap', 'Gulp', 'Git']
    }

    render() {
        return <Fragment>
            <div className="skill-cont">
            <h2 className="skill-h2">Minhas Habilidades e Conhecimentos</h2> 
                <div className="container">
                    {this.state.skill.map(
                        (item, index) => {
                            return <p className="skill" key={index}>{item}</p>
                        }
                    )}
                </div>
                </div>
            
        </Fragment>
    }
}

export default Habilidades

