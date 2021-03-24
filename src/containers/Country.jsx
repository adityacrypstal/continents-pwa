import React from 'react';
import HomeTitle from "../components/HomeTitle";
import Footer from "../components/Footer";
import CountryDetails from "../components/CountryDetails";
import {useParams,useHistory} from "react-router-dom";
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

const Country = () => {
    const history = useHistory();
    const {code} = useParams();
    //GraphQL Query
    const GET_COUNTRY = gql`
  {
    country(code:"${code}"){
   		name
    	code
    	capital
    	native
    	phone
    	capital
    	currency
    	languages{
        name
      }
    	emoji
    	emojiU
    }
}
`;
    const {data, loading, error} = useQuery(GET_COUNTRY, {client});
    if (loading || error) {
        return <p>{error ? navigator.onLine ? error.message : history.push('/') : 'Loading...'}</p>;
    } else {
        return (
            <div>
                <HomeTitle title={data?.country?.name || "Country"} back={true}/>
                <div className="container">
                    <CountryDetails country={data?.country}/>
                </div>
                <Footer/>
            </div>
        );
    }
};

export default Country;
