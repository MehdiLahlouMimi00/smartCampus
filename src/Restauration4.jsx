import React from "react";
import "./Restauration4.css";
import exchange from'./assets/exchange.png';
import { Link } from 'react-router-dom';

function Restauration4() {
    return (
        <div className="envoyer">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="frame">
                        <div className="rectangle" />
                    </div>
                    <div className="div" />
                    <div className="envoyer-a-un-ami">Envoyer a un ami</div>
                    <input type="text" className="rectangle-2"  placeholder="Nom de beneficaire" required/>
                    <input type="text" className="rectangle-3"  placeholder="Numero de carte resto" required/>
                    <input type="text" className="rectangle-4"  placeholder="Prenom de beneficaire" required/>
                    <div className="rectangle-5" />
                    <div>
                    <Link to="/resto1"className="text-wrapper-4">
                    Envoyer
                    </Link>
                    </div>
                    <img
                        className="saved-silhouette-PNG"
                        alt="Saved silhouette PNG"
                        src={exchange}
                    />
                </div>
            </div>
        </div>
    );
}
export default Restauration4;