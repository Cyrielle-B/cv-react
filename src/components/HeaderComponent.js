import React from "react";

class HeaderComponent extends React.Component{

    render() {
        return (
            <header>
                <div className="row justify-content-evenly">
                    <div className="col-5 presentation">
                        <div className="renseignements">
                            <div>
                                <h2>Cyrielle BARJON</h2>
                                <h3>Développeur web junior</h3>
                                <div>
                                    <p><i className="bi bi-telephone"> </i> 06.34.08.96.71 </p>
                                    <p><i className="bi bi-envelope-open"> </i> cyrielle.barjon@gmail.com</p>
                                    <p><i className="bi bi-geo-alt"> </i> 1 rue de la font de Santa Llucia - 66540 Baho
                                    </p>
                                </div>
                                <a href="https://www.linkedin.com/in/cyrielle-barjon/" target="_blank"><i
                                    className="bi bi-linkedin"> </i></a>
                                <a href="https://github.com/Cyrielle-B" target="_blank"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 blocabout">
                        <img className="photo" src="/photo.jpg" alt=""/>
                        <h3>A propos</h3>
                        <p className="aboutme">Après une longue expérience dans le secrétariat médical, j'ai ressenti le
                            besoin de me renouveller professionnellement.
                        </p>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent