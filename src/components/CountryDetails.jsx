import React from 'react';

const CountryDetails = ({country}) => {
    return (
        <div>
            <div className={"table-responsive-sm mb-5 mb-100"}>
                <table className="table  table-bordered">
                    <tbody>
                    <tr>
                        <th scope="col" className={"w-50"} >Code</th>
                        <td>{country?.code}</td>
                    </tr>
                    <tr>
                        <th scope="col">Name</th>
                        <td>{country?.name}</td>
                    </tr>
                    <tr>
                        <th scope="col" >Native</th>
                        <td>{country?.native}</td>
                    </tr>
                    <tr>
                        <th scope="col" >Phone</th>
                        <td>{country?.phone}</td>
                    </tr>
                    <tr>
                        <th scope="col">Continent</th>
                        <td>{country?.currency}</td>
                    </tr>                  <tr>
                        <th scope="col" >Capital</th>
                        <td>{country?.capital}</td>
                    </tr>
                    <tr>
                        <th scope="col">Language</th>
                        <td>{country?.languages?.map(a=>a?.name).join()}</td>
                    </tr>
                    <tr>
                        <th scope="col" >Emoji</th>
                        <td>{country?.emoji}</td>
                    </tr>
                    <tr>
                        <th scope="col" >EmojiU</th>
                        <td>{country?.emojiU}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CountryDetails;
