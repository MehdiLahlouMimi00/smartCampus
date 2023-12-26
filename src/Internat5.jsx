import React from "react";
import "./Internat5.css";
import bola from './assets/bola.png';


function Internat5() {
    return (
        <div className="Reparer-la-porte">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img
                        className="continue-une-ligne"
                        alt="Continue une ligne"
                        src={bola}
                    />
                    <div className="text-wrapper">Deposer une plainte</div>
                    <div className="overlap">
                        <div className="div">Envoyer</div>
                    </div>
                    <div className="nom-et-pr-nom-num-ro-wrapper">
                        <p className="nom-et-pr-nom-num-ro">
                            <span className="span">
                                Nom et Prénom: <br />
                                <br />
                                Numéro de pavillon:
                                <br />
                                <br />
                                Numéro de chambre:
                                <br />
                                <br />
                                Degré d’urgence:
                                <br />
                                <br />
                                Probleme reclame:{" "}
                            </span>
                            <span className="text-wrapper-2">Reparer la porte</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Internat5;