import React from 'react'

const LembreteLista = ({lembretes, onExcluir}) => {
  return (
    <div className='container'>
        <div className='row mb-3 justify-content-center'>
        {lembretes.map((lembrete, indice) => (
                <div className='col-10 mb-3' key={indice}>
                    <div className="lembrete-card">
                        <span>{lembrete}</span>
                        <i class="fa-regular fa-trash-can" onClick={() => onExcluir(indice)} style={{ cursor: 'pointer'}}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
 }
 export default LembreteLista


