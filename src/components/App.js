import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

export default class App extends React.Component {

  state = {
      lembretes: []
  }

  onLembreteAdicionado = (lembrete) => {
    this.state.lembretes.push(lembrete)
    console.log(this.state.lembretes)
  }

  render () {
    return (
        <div className='container p-4 border mt-2'>
          <LembreteLista/>
            <div className='row'>
                <div className='col-12 text-center'>
                    <LembreteEntrada onLembreteAdicionado={this.onLembreteAdicionado}/>
                </div>
            </div>
        </div>
    )
  }
}

