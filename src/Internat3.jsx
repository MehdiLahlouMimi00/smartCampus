import React from "react";
import "./Internat3.css";
import notif from './assets/notif.png';
import { Link } from 'react-router-dom';

function Internat3() {
    return (
        <div className="suivre-une-plainte">
            <div className="div">
            <div className="overlap">
                    <div className="rectangle" />
                    <div >
                    <Link to="/home"className="text-wrapper-2">
                     Acceuil
                    </Link>
                    </div>
                    <div>
                    <Link to="/"className="text-wrapper">
                     Deconnexion
                    </Link>
                    </div>
                    <img
                        className="belle-clipart-vector"
                        alt="Belle clipart vector"
                        src={notif}
                    />
                </div>
                <div className="overlap-group">
                    <div className="div-wrapper">
                       <input type="text" className="text-wrapper-3" placeholder="Numero du Pavillon"  required/>
                    </div>
                    <div className="overlap-2">
                        <input type="text" className="text-wrapper-4" placeholder="Numero de Reclamation"  required/>
                    </div>
                    <div className="overlap-3">
                        <input type="text" className="text-wrapper-5" placeholder="Numero de la chambre"  required/>
                    </div>
                    <div className="overlap-4">
                       <input type="text" className="text-wrapper-6" placeholder="Nom et Prenom"  required/>
                    </div>
                    <div className="overlap-5">
                        <div className="rectangle-2" />
                        <div className="text-wrapper-7">Entrer</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Internat3;;
