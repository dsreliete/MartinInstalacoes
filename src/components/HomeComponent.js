import React  from 'react';
import { Jumbotron } from 'reactstrap';


function Home(props) {
    return(
    <Jumbotron fluid>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1> {props.text} blabla</h1>
                    <h2>Wiskas sache</h2>
                </div>
            </div>
        </div>
    </Jumbotron>
    );
}

export default Home;