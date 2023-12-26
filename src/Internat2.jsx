import React from "react";
import "./Internat2.css";
import notif from './assets/notif.png';
import bola from './assets/bola.png';
import porte from './assets/porte.png';
import fenetre from './assets/fenetre.png';
import lavabo from './assets/lavabo.png';
import autres from './assets/autres.png';
import { Link } from 'react-router-dom';

function Internat2() {
    return (
        <div className="dposer-une-plainte">
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
                <div className="overlap">
                    <div className="div-wrapper">
                       <input type="text" className="text-wrapper-3" placeholder="Numero du Pavillon"  required/>
                    </div>
                    <div className="overlap-2">
                       <input type="text" className="text-wrapper-4" placeholder="Degre d'urgence"  required/>
                    </div>
                    <div className="overlap-3">
                       <input type="text" className="text-wrapper-5" placeholder="Numero de la chambre"  required/>
                    </div>
                    <div className="overlap-4">
                       <input type="text" className="text-wrapper-6" placeholder="Nom et Prenom"  required/> 
                    </div>
                </div>
                
                <Link to="/inter4"className="text-wrapper-7">
                changer une lampe
                </Link>
                <div className="overlap-5">
                <Link to="/inter5"className="text-wrapper-8">
                Reparer la porte
                </Link>
                <Link to="/inter6"className="text-wrapper-9">
                Reparer la fenetre
                </Link>
                </div>
                <Link to="/inter7"className="text-wrapper-10">
                Probleme d'eau
                </Link>
                <img
                    className="continue-une-ligne"
                    alt="Continue une ligne"
                    src={bola}
                />
                <img className="image" alt="Image" src={porte} />
                <img className="imgAge" alt="Image" src={fenetre} />
                <img className="img" alt="Image" src={lavabo} />
                <div className="overlap-6">
                    <img className="image-2" alt="Image" src={autres} />
                    <Link to="/inter8"className="text-wrapper-11">
                     Autres
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Internat2;

