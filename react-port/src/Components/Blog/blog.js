import React from 'react'
import './blog.css'


const Blog = () => {
    return (
        <div className="card-blogs">
        <h2 className="h2-blog">Blogs</h2>
        <p className="p-b">Listei alguns blogs com conteúdos que vem me ajudando muito</p>
        <div className="card-group">
            <div className="card">
                <img className="card-img-top" src="https://cdn-images-1.medium.com/max/1000/1*IQBkptZIqtox1W8GFvvB4w.jpeg" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">Café com Código</h4>
                    <p className="card-text">Este é um blog com conteúdos voltados ao desenvolvimento web, e me ajudou muito entender sobre o DOM.</p>
                    <a target="_blank" href="https://cafecomcodigofonte.wordpress.com" className="caminho">Ir para site</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="http://blog.viewmaniac.com/wp-content/uploads/2017/11/Home-Recording-Must-Haves.jpeg" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">'Eu sou Dev'</h4>
                    <p className="card-text">Este é um blog de conteúdos diversos voltado a programção, e tenho aproveitado alguns materiais para meu TCC.</p>
                    <a target="_blank" href="https://www.eusoudev.com.br" className="caminho">Ir para site</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://cdn-images-1.medium.com/max/800/1*FC6Sl0qtZNUjkQ3sdHch6Q@2x.png" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">UXPin Blog</h4>
                    <p className="card-text">Este é um blog muito bacana com conteúdos direcionados a UX e UI, e cada vez mais esta área vem me chamando atenção.</p>
                    <a target="_blank" href="https://www.uxpin.com/studio/blog" className="caminho">Ir para site</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Blog