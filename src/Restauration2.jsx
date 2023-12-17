import React from "react";
import "./Restauration2.css";
import card from"./assets/card.png";
import { Link } from 'react-router-dom';

function Restauration2(){
    return (
        <div className="lier-une-carte">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img className="image" alt="Image" src={card}/>
                    <div className="text-wrapper">Enregistrer une Carte</div>
                    <input type="text" className="overlap" placeholder="Nom"  required/>
                    <input type="text" className="div-wrapper" placeholder="Numero de carte resto"  required/>
                    <input type="text" className="overlap-2" placeholder="Prenom"  required/>
                    <div className="overlap-3">
                        <div><Link to="/resto1"className="text-wrapper-4">
                         Enregistrer
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Restauration2;
