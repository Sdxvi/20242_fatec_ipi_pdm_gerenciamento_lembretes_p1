import React from 'react'

const LembreteLista = () => {
  return (
    <div className='container'>
        <div className='row mb-3 text-center'>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                <div className="card border-dark p-3" style={{fontFamily:'Comic Sans MS', background:'#E1DBFF'}}> 
                    Preparar aula de programação
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                <div className="card border-dark p-3" style={{fontFamily:'Comic Sans MS', background:'#E1DBFF'}}>
                    Fazer feira
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                <div className="card border-dark p-3" style={{fontFamily:'Comic Sans MS', background:'#E1DBFF'}}>
                    Preparar marmitas
                </div>
            </div>
        </div>
    </div>
  )
}

export default LembreteLista