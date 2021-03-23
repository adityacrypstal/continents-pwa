import React from 'react';
import {useHistory} from 'react-router-dom';
const CountriesTable = ({countries}) => {
    const history = useHistory();
    return (
        <div>
            <div className={"table-responsive-sm mb-100"}>
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Country</th>
                        <th scope="col">Code</th>
                        <th scope="col">Capital</th>
                    </tr>
                    </thead>
                    <tbody>
                    {countries.map((x,i) => <tr onClick={() => history.push(`/country/${x.code}`)} key={x.code}>
                        <th scope="row">{i+1}</th>
                        <td>{x.name}</td>
                        <td>{x.code}</td>
                        <td>{x.capital}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CountriesTable;
