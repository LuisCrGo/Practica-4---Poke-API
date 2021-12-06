import React from "react";


function PokemonBuscado({pokemonBuscado,imagen, handleClick}){

    return(
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 row">
                    <div className="col">
                        <div className="card h-100">
                            <img  src={imagen} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title" >{pokemonBuscado.name}</h5>
                                <p className="card-text">Description pokemon</p>
                            </div>
                            <div className="card-footer ">
                                <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="submit" className="btn btn-outline-dark" onClick={() =>handleClick(pokemonBuscado.name)}>Más inf.</button>
                                </div>
                                </div>
                        </div>
                    </div>

            </div>
        </>
    );
}

export default PokemonBuscado;