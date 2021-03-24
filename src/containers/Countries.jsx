import React from 'react';
import HomeTitle from "../components/HomeTitle";
import Footer from "../components/Footer";
import {useHistory, useParams} from 'react-router-dom';
import CountriesTable from "../components/CountriesTable";
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';


// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});


const Countries = () => {
    const history = useHistory();
    const {code} = useParams();
    //GraphQL Query
    const LIST_COUNTRIES = gql`
  {
    continent(code:"${code}") {
      name
      countries{
      name
      code
      capital
    }
    }
  }
`;
    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
    if (loading || error) {
        return <p>{error ? navigator.onLine ? error.message : history.push('/') : 'Loading...'}</p>;
    } else {
        return (
            <div>
                <HomeTitle title={data?.continent?.name||"Countries"} back={true}/>
                <div className="container">
                    <CountriesTable countries={data?.continent?.countries || []}/>
                </div>
                <Footer/>
            </div>
        );
    }
};

export default Countries;
