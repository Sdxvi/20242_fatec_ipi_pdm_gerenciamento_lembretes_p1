import React from 'react'

const LembreteLista = ({lembretes}) => {
  return (
    <div className='container'>
        <div className='row mb-3 text-center justify-content-center'>
        {lembretes.map((lembrete, indice) => (
                <div className='col-lg-4 col-md-6 col-sm-12 mb-3' key={indice}>
                    
                    <div className="card border-dark p-3" 
                    style={{
                        fontFamily: 'Comic Sans MS',
                        background: '#E1DBFF',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adiciona sombra
                        borderRadius: '10px' // Bordas arredondadas para suavizar o visual
                    }}>
                        {lembrete}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
 }
 export default LembreteLista


