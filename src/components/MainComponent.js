import React from "react";

class MainComponent extends React.Component{

    render() {
        return (
            <div className="row justify-content-evenly">
                <div className="col-5">
                    <div className="border">
                        <h3>Expérience professionnelle</h3>
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
                    <div className="border">
                        <h3>Compétences</h3>
                        <div className="row justify-content-evenly">
                            <div className="col-4">
                                <ul className="competences">
                                    <li className="liste">HTML - CSS</li>
                                    <li className="liste">PHP</li>
                                    <li className="liste">Git</li>
                                    <li className="liste">Javascript</li>
                                    <li className="liste">Wordpress</li>
                                    <li className="liste">Boostrap</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul>
                                    <li className="liste">React</li>
                                    <li className="liste">Symphony</li>
                                    <li className="liste">SQL</li>
                                    <li className="liste">Webpack</li>
                                    <li className="liste">Serveur</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="border">
                        <h3>Formations</h3>
                        <h5>L'Idem Creative art schools</h5>
                        <p className="formation">Projet pro Développement web janvier - juin 2023</p>

                            <h5>Lycée Aristide Maillol</h5>
                            <p className="formation">Baccalauréat STT - 2002</p>
                    </div>

                    <div className="border">
                        <h3>Soft skills</h3>
                        <ul className="skills">
                            <li className="liste">Capacité d'adaptation</li>
                            <li className="liste">Ponctuelle</li>
                            <li className="liste">Travail en équipe</li>
                            <li className="liste">Empathique</li>
                            <li className="liste">Rigoureuse</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainComponent