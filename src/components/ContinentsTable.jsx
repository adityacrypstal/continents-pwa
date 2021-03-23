import React from 'react';
import {useHistory} from "react-router-dom";

const ContinentsTable = ({continents}) => {
    const history = useHistory();
    return (
        <div className={"table-responsive-sm "}>
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Continent</th>
                    <th scope="col">Code</th>
                </tr>
                </thead>
                <tbody>
                {continents.map((x,i) => <tr onClick={() => history.push(`/countries/${x.code}`)} key={x.code}>
                    <th scope="row">{i+1}</th>
                    <td>{x.name}</td>
                    <td>{x.code}</td>
                </tr>)}

                </tbody>
            </table>
        </div>
    );
};

export default ContinentsTable;
