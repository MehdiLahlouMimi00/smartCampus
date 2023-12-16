import React from "react";
import "./Restauration3.css";
import recharge from "./assets/recharge.png"
import { Link } from 'react-router-dom';

function Restauration3(){
    return (
        <div className="recharger">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <input type="text" className="rectangle"  required/>
                    <div className="overlap">
                        <input type="text" className="div"   required/>
                        <p className="text-wrapper">Numero de carte de paiement</p>
                    </div>
                    <div className="text-wrapper-2">Recharger votre Carte</div>
                    <input type="text" className="div-wrapper" placeholder="01"  required/>
                    <p className="p">Nom du porteur de la carte</p>
                    <div className="overlap-2">
                        <div>
                        <Link to="/resto1"className="text-wrapper-4">
                        Valider
                       </Link>  
                        </div>
                    </div>
                    <img className="image" alt="Image" src={recharge} />
                    <input type="text" className="overlap-3" placeholder="2023"  required/>
                    <div className="text-wrapper-5">Date d’expiration</div>
                    <input type="text" className="rectangle-2"   required/>
                    <div className="text-wrapper-6">Code de verification</div>
                    <div>
                    <Link to="/resto1"className="text-wrapper-7">
                    Annuler
                    </Link>
                    </div>
                    <div className="ellipse" />
                </div>
            </div>
        </div>
    );
}
export default Restauration3 ;