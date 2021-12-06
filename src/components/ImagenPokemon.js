import React, {useEffect, useState} from "react";

function ImagenPokemon({url}) {

    //.sprites.front_default

    const [imagen, setImagen] = useState([]);

    useEffect(()=>{
        const getUsers = () =>{
            fetch(`${url}`)
                .then(res => res.json())
                .then(res => setImagen(res.sprites.other.dream_world.front_default))
        }
        getUsers()
    },[]);

    return(
      <>
          <img className="img" src={imagen} alt={imagen}/>
      </>
    );
}

export default ImagenPokemon;