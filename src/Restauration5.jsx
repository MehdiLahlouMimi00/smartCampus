import React from "react";
import "./Restauration5.css";
import atm from'./assets/atm_card.png';
import { Link } from 'react-router-dom';

function Restauration5() {
    return (
        <div className="demander">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="text-wrapper">Demande d’une carte provisoire</div>
                    <input type="text" className="overlap" placeholder="Prenom"  required/>
                    <input type="text" className="div-wrapper" placeholder="Raison"  required/>
                    <input type="text" className="overlap-2" placeholder="Num de telephone"  required/>
                    <div className="overlap-3">
                        <div>
                        <Link to="/resto1"className="text-wrapper-3">
                         Enregistrer
                        </Link>
                        </div>
                    </div>
                    <img
                        className="atm-card-clipart-hd"
                        alt="Atm card clipart hd"
                        src={atm}
                    />
                    <input type="text" className="overlap-4" placeholder="Nom"  required/>
                </div>
            </div>
        </div>
    );
}
export default Restauration5 ;