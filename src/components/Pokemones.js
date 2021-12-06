import React from 'react';
import ImagenPokemon from "./ImagenPokemon";
import style from '../style/style.css'

function Pokemones({pokemones,handleClick}){

    return(
      <>

          <div className="container scroll">
              <div className="row row-cols-1 row-cols-md-3 g-4 row">
                  {pokemones.map((pokemos, index) => (
                      <div className="col" key={index}>
                          <div className="card h-100">
                              <ImagenPokemon   url={pokemos.url}/>
                              <div className="card-body">
                                  <h5 className="card-title" >{pokemos.name}</h5>
                                  <p className="card-text">Click en "Más inf." para ver su descripción</p>
                              </div>
                              <div className="card-footer">
                                  <button type="submit" className="btn btn-outline-dark" onClick={()=> handleClick(pokemos.name)}>Más inf.</button>
                              </div>

                          </div>
                      </div>
                  ))
                  }
              </div>
          </div>
      </>
    );
}

export default Pokemones;