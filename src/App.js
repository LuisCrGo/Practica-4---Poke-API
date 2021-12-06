import Pokemones from "./components/Pokemones";
import NavBar from './components/NavBar';
import TarjetaInformacion from "./components/TarjetaInformacion";
import PokemonBuscado from "./components/PokemonBuscado";
//import Form from './components/Form';


import React, {useState, useEffect} from "react";


function App() {

  const [buscar,setBuscar] = useState("");

  //visualisar imagen en carta de inf.
  const [pokemon,setPokemon] = useState( []);
  const [pokemones,setPokemones] = useState( []);
  //
    const [tarjeta,setTargeta] = useState(false);

    const [imagenPokemon,setImagenBuscado] = useState([]);

  const [pokemonBuscado,setPokemonBuscado] = useState( {});

  const [busqueda,setBusqueda]= useState( false);


    const handleClick = (nombre) =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
            .then(res => res.json())
            .then(res => {
                const infor = {
                    nombre: res.name,
                    img: res.sprites.other.dream_world.front_default,
                    experiencia:res.base_experience,
                    hp: res.stats[0].base_stat,
                    ataque: res.stats[1].base_stat,
                    defensa: res.stats[2].base_stat,
                    especial: res.stats[3].base_stat,
                }
                setPokemon([infor]);
                setTargeta(true);
            })

    }

    const onSearch = () => {
        if(buscar === ""){
            setBusqueda(false)
            setPokemonBuscado([])
        }else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${buscar}`)
                .then(res => res.json())
                .then(res => {
                    setBusqueda(true)
                    setPokemonBuscado(res)
                    setImagenBuscado(res.sprites.other.dream_world.front_default)
                })
        }
    }

    const getPokemon = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=21')
            .then(res => res.json())
            .then(res => setPokemones(res.results))
    }

    useEffect(()=>{

        getPokemon()
    },[]);


    return (
    <>
      <NavBar brand={"Api pokemon"} setBuscar={setBuscar} buscar={buscar} onSearch={onSearch}/>

        <div className="container">
            <div className="row">
                <div className="col-7">
                        <div>
                            <h2 style={{textAlign: 'center'}}>pokemones</h2>
                        </div>
                    {busqueda ?
                       <PokemonBuscado pokemonBuscado={pokemonBuscado} imagen={imagenPokemon} handleClick={handleClick}/>
                        :
                        <Pokemones pokemones={pokemones}  handleClick={handleClick}/>
                    }
                </div>
                <div className="col-5 ">
                    <h2 style={{textAlign: 'center'}}>Info</h2>
                    <div className="d-flex justify-content-center">
                        {
                            tarjeta ?
                                <TarjetaInformacion pokemon={pokemon} setTargeta={setTargeta}/>
                                :
                                undefined
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}


export default App;
