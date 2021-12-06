import React from "react";
import style from "../style/style.css"

function NavBar({brand,setBuscar,buscar,onSearch}) {
    return(
        <>
            <div className="navbar navbar-dark bg-black">
                <div className="container">
                        <a href="#" className="navbar-brand">{brand}</a>

                    <div>
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Buscar Pokemon" value={buscar}
                                   name='buscar'
                                   onChange={(e) => setBuscar(e.target.value)}
                                   onKeyDown={e => {
                                       if (e.keyCode === 13) {
                                           onSearch()
                                       }
                                   }}/>
                            <button className="btn btn-outline-light" type="button" onClick={() => onSearch()}>Button</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NavBar;