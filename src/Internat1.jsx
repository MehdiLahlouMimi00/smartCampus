import React from "react";
import "./Internat1.css";
import notif from './assets/notif.png';
import Handy from './assets/Handy.png';
import { Link } from 'react-router-dom';

export const Internat1 = () => {
    return (
        <div className="internat">
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
                    <div className="overlap-2">
                        <div className="text-wrapper-3">Tout Afficher</div>
                        <div className="text-wrapper-4">Plaintes antérieures</div>
                        <p className="appuyez-sur-ce">
                            Appuyez sur ce bouton pour accéder à l&#39;historique de vos plaintes antérieures et suivre le suivi de
                            résolution de chaque incident signalé.
                        </p>
                    </div>
                    <div className="div-wrapper">
                    <div >
                      <Link to="/inter2"className="text-wrapper-5">
                       Déposer une plainte
                      </Link>
                    </div>
                    </div>
                    <div className="overlap-3">
                      <Link to="/inter3"className="text-wrapper-5">
                       Suivre une plainte
                      </Link>
                    </div>
                </div>
                <img
                    className="handy-man-service"
                    alt="Handy man service"
                    src={Handy}
                />
            </div>
        </div>
    );
}
export default Internat1;
