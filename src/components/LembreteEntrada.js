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
        this.props.onLembreteAdicionado(this.state.lembrete)
        this.setState({ lembrete: '' })
    }
    
    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-8">
                            <input 
                            value={this.state.lembrete} 
                            type="text" 
                            class="form-control mb-3" 
                            onChange={this.onLembreteEscrito} 
                            placeholder="Digite aqui seu lembrete..."
                            required/>
                        </div>
                        <div className="col-md-12 col-lg-2">
                            <button type="submit" class="btn btn-outline-secondary w-100">OK</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}