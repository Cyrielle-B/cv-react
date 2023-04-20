import React from "react";

class CompetencesComponent extends React.Component{

    render() {
        return (
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
                            <li className="liste">Bootstrap</li>
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
        );
    }
}

export default CompetencesComponent