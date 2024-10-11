import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'
import vazio from '../imagens/Empty-cuate.png'


export default class App extends React.Component {
  state = {
    lembretes: []
  };

  onLembreteAdicionado = (lembrete) => {
    this.setState({
      lembretes: [...this.state.lembretes, lembrete]
    });
  };

  onExcluirLembrete = (indice) => {
    this.setState({
      lembretes: this.state.lembretes.filter((_, i) => i !== indice)
    });
  };

  render() {
    return (
      <div className="app-container">
        <div className="tela">
          <h1 className="text-center mb-2">Sua Lista de Lembretes:</h1>
          <h3 className="text-center mb-3">Contém {this.state.lembretes.length} lembretes</h3>
          {this.state.lembretes.length === 0 ? (
            <div className="text-center text-muted empty-lista">
              <img src={vazio} className="empty-imagem" alt="Lista Vazia" />
              <h3 className="mb-3">Ops, parece que sua lista está vazia...</h3>
              <h3 className="mb-3">Escreva abaixo seu primeiro lembrete.</h3>
            </div>
          ) : (
            <LembreteLista lembretes={this.state.lembretes} onExcluir={this.onExcluirLembrete} />
          )}
          <div className="row">
            <div className="col-12 text-center">
              <LembreteEntrada onLembreteAdicionado={this.onLembreteAdicionado} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

