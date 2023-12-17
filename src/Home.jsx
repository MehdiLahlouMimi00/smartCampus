import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from './assets/Logo.png';
import resto from'./assets/Resto.png';
import zlafa from'./assets/Zlafa.png';
import { Link } from 'react-router-dom';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    resto,
    zlafa // Ajoutez d'autres noms de fichiers d'image
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculer le prochain index d'image (en boucle)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10000 millisecondes = 10 secondes

    // Nettoyer l'intervalle lorsqu'un composant est démonté
    return () => clearInterval(intervalId);
  }, []); // La dépendance vide signifie que cet effet ne s'exécutera qu'une fois au montage du composant

  return (
    
    <div className="home-page">
      <div className="div">
        <div className="content">
          <div className="overlap-group">
            <div className="text-wrapper">CampusConnected</div>
            <p className="explorez-un-campus">
              Explorez un campus connecté et simplifié grâce à<br /> notre plateforme en ligne pour une expérience
              étudiante moderne et sécurisée
            </p>
          </div>
        </div>
        <img className="IMG" alt="Img" src={images[currentImageIndex]} />
        <div className="top-nav">
          <div ><Link to="/resto1" className="restauration">
           Resto
          </Link></div>
          <div >
          <Link to="/resto1" className="internat">
           Internat
          </Link>
          </div>
          <div><Link to="/"  className="deconnexion">
           Deconnexion
          </Link>
          </div>
        </div>
        <img className="element" alt="Element" src={logo} />
      </div>
    </div>
  );
}

export default Home;
