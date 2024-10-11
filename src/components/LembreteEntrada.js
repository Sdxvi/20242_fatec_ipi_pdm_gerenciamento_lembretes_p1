import React, { Component } from 'react'

export default class LembreteEntrada extends Component {
    state = { 
        lembrete: '' 
    } 
    
    onLembreteEscrito = (event) => { 
        this.setState({lembrete: event.target.value})
    } 

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.lembrete)
        this.props.onLembreteAdicionado(this.state.lembrete)
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-11">
                            <input 
                            value={this.state.lembrete} 
                            type="text" 
                            class="form-control mb-3" 
                            onChange={this.onLembreteEscrito} 
                            placeholder="Digite aqui seu lembrete..."/>
                        </div>
                        <div className="col-sm-12 col-lg-1">
                            <button type="submit" class="btn btn-outline-secondary w-100">OK</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}