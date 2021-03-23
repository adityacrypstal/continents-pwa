import React from 'react';
import {useHistory} from 'react-router-dom';
const HomeTitle = ({title,back,offline=false}) => {
    const history= useHistory();
    return (
        <div >
            <div className="jumbotron">
                <h1 className="display-4">{title}</h1><h5>{offline&&' (You are Offline)'}</h5>
                <p className="lead">This is a simple continents directory made with <a href="https://github.com/trevorblades"> <i>trevorblades</i> </a>GraphQL API.</p>
                {back&&<button type="button" className="btn btn-secondary" onClick={()=>history.goBack()}>Go Back</button>}
            </div>
        </div>
    );
};

export default HomeTitle;
