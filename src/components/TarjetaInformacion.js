import React from "react";


function TarjetaInformacion({pokemon, setTargeta}) {

    const handleClick = () =>{
            setTargeta(false);
    }

    return(
     <>
         <div className="d-flex justify-content-center scroll2">
             <div className="card">
                 {pokemon.map((info, index) => (
                     <div key={index} style={{width: "18rem"}}>
                         <img className="card-img-top" src={info.img} alt=""/>
                         <div className="card-body">
                             <h6 className="text-capitalize">nombre:</h6>
                             <p className="card-text text-black">{info.nombre}</p>

                             <h6 className="text-capitalize">experiencia:</h6>
                             <div className="progress card-text margin-bottom ">
                                 <div className="progress-bar bg-success" role="progressbar"
                                      style={{width: info.experiencia}}
                                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{info.experiencia}</div>
                             </div>

                             <h6 className="text-capitalize">hp:</h6>
                             <div className="progress card-text margin-bottom ">
                                 <div className="progress-bar bg-danger" role="progressbar" style={{width: info.hp}}
                                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{info.hp}</div>
                             </div>

                             <h6 className="text-capitalize">ataque especial:</h6>
                             <div className="progress margin-bottom card-text fw-bold ">
                                 <div className="progress-bar bg-warning" role="progressbar"
                                      style={{width: info.especial}}
                                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{info.especial}</div>
                             </div>

                             <h6 className="text-capitalize">ataque:</h6>
                             <div className="progress margin-bottom">
                                 <div className="progress-bar bg-danger" role="progressbar" style={{width: info.ataque}}
                                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{info.ataque}
                                 </div>
                             </div>
                             <h6 className="text-capitalize">defenza:</h6>
                             <div className="progress margin-bottom card-text ">
                                 <div className="progress-bar bg-info" role="progressbar" style={{width: info.defensa}}
                                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{info.defensa}</div>
                             </div>
                         </div>
                         <div className="d-grid gap-2 col-6 mx-auto">
                             <button type="button" className="btn btn-outline-dark"
                                     onClick={() => handleClick()}>Close
                             </button>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     </>
    );
}

export default TarjetaInformacion;
