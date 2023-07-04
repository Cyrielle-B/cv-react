import React from "react";

class ExpProComponent extends React.Component{

    render() {
        return (
                <div className="border">
                    <h3>Expérience professionnelle</h3>
                    <h5>Développeur Web - stage</h5>
                    <h6>Mind-and-go Projet Datacup
                    <p>02 mai - 27 juin 2023</p>
                    <ul>
                        <li className="liste">Intégration HTML - CSS</li>
                        <li className="liste">Responsive design</li>
                        <li className="liste">Angular</li>
                        <li className="liste">Git</li>
                    </ul>
            
                    <h5>Secrétaire médicale</h5>
                    <p>2005 - 2022</p>
                    <ul>
                        <li className="liste">Accueil physique et téléphonique</li>
                        <li className="liste">Prise de rendez vous</li>
                        <li className="liste">Gestion du planning des rendez vous</li>
                        <li className="liste">Traitement et mise à jour des dossiers patient</li>
                        <li className="liste">Frappe de comptes rendus médicaux</li>
                        <li className="liste">Télétransmission, traitement des relances et impayés</li>
                    </ul>
                </div>
        );
    }
}

export default ExpProComponent
