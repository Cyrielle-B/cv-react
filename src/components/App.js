import React, {Fragment} from "react";
import HeaderComponent from "./HeaderComponent";
import ExpProComponent from "./ExpProComponent";
import FormationComponent from "./FormationComponent";
import CompetencesComponent from "./CompetencesComponent";
import SoftComponent from "./SoftComponent";


class App extends React.Component{

    render() {
        return (
            <Fragment>
                <HeaderComponent/>
                <div className="row justify-content-evenly">
                    <div className="col-5">
                        <ExpProComponent/>
                        <FormationComponent/>
                    </div>
                    <div className="col-5">
                        <CompetencesComponent/>
                        <SoftComponent/>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default App