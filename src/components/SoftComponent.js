import React from "react";

class SoftComponent extends React.Component{

    render() {
        return (
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
        );
    }
}

export default SoftComponent