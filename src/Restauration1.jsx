import React from "react";
import "./Restauration1.css";
import logo from './assets/Logo.png';
import atm from'./assets/atm_card.png';
import card from'./assets/black card.png';
import notif from './assets/notif.png';
import exchange from'./assets/exchange.png';
import recharge from'./assets/recharge.png';
import { Link } from 'react-router-dom';

function Restauration1() {
    return (
        <div className="restauration">
            <div className="div">
                <img className="element" alt="Element" src={logo} />
                <div className="overlap">
                    <div className="rectangle" />
                    <div >
                    <Link to="/home"className="text-wrapper">
                     Acceuil
                    </Link>
                    </div>
                    <div>
                    <Link to="/"className="text-wrapper-2">
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
                    <div className="overlap-2">
                        <div className="overlap-3">
                            <div className="text-wrapper-3">Tout Afficher</div>
                            <p className="p">Suivez les crédits et les débits. Vous trouverez ici votre activité récente</p>
                        </div>
                        <div className="text-wrapper-4">Activités récentes</div>
                    </div>
                    <div className="overlap-4">
                        <div className="text-wrapper-5">
                        <Link to="/resto2"className="text-wrapper-5">
                         Lier une carte
                        </Link>
                        </div>
                        <img
                            className="png-transparent"
                            alt="Png transparent"
                            src={card}
                        />
                    </div>
                    <div className="overlap-5">
                        <div className="text-wrapper-6">Solde</div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-7">0,00 DH</div>
                        </div>
                        <div className="text-wrapper-8">Disponible</div>
                    </div>
                </div>
                <img
                    className="saved-silhouette-PNG"
                    alt="Saved silhouette PNG"
                    src={exchange}
                />
                <div>
                 <Link to="/resto4"className="text-wrapper-9">
                  Envoyer
                </Link></div>
                <img
                    className="atm-card-clipart-hd"
                    alt="Atm card clipart hd"
                    src={atm}
                />
                <div>
                <Link to="/resto5"className="text-wrapper-10">
                Demande d une carte provisoire
                </Link>
                </div>
                <img className="image" alt="Image" src={recharge} />
                <div>
                <Link to="/resto3"className="text-wrapper-11">
                Recharger votre carte
                </Link>
                </div>
            </div>
        </div>
    );
 }

 export default Restauration1;
