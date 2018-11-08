
import React from 'react'
import './forms.css'

const Form = () => {
    return (
        <form className="formulario" action="https://formspree.io/jc_pirolo@hotmail.com" method="POST">
            <div className="flex-itemm">
                <h1 className="h1-contato">Formulário para Contato</h1>
                <div className="row">
                    <div class="col">
                    <b> <input type="text" class="form-control" placeholder="Primeiro nome" /></b>
                    </div>
                    <div class="col mb-1">
                    <b> <input type="text" class="form-control" placeholder="Segundo nome" /></b>
                    </div>
                </div>
                <input class="form-control" placeholder="Email" type="email" />
               <b><input className="form-control mt-1" type="text" name="your-subject" size="32" placeholder="Assunto" /></b>
               <b><textarea className="form-control mt-1" name="your-message" cols="23" rows="3" placeholder="Mensagem"></textarea></b>
                <button type="submit" className="mt-1 btn btn-black btn-lg full-width">Enviar Mensagem</button>
            </div>
        </form>
    );
}

export default Form