import React, {useEffect, useState} from 'react';
import HomeTitle from "../components/HomeTitle";
import ContinentsTable from "../components/ContinentsTable";
import Footer from "../components/Footer";
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import {useIndexedDB} from 'react-indexed-db';
// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

// GraphQL Query
const LIST_COUNTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

const Continents = () => {
    let fromDB = useIndexedDB('continents');
    const [continents, setContinents] = useState([]);
    useEffect(() => {
        (async () => {
            // Fetching data from Indexed DB for offline
            let temp = await fromDB.getAll();
            if (temp.length && !navigator.onLine) {
                setContinents(temp)
            };
        })()
    }, []);

    // Appliying Query and Fetching Data
    const {data, loading, error} = useQuery(LIST_COUNTINENTS, {client});
    if (!continents.length && data?.continents.length) {
        // Inserting Data into DB for initial load
        data?.continents?.forEach(async a => await fromDB.add({name: a.name, code: a.code}))
    }
    if (loading) {
        return <p>Loading...</p>;
    } else if (error && !continents) {
        return <p>{error.message}.</p>;
    } else {
        return (
            <div>
                <HomeTitle title={"Continents"} offline={!navigator.onLine}/>
                <div className="container">
                    <ContinentsTable continents={data?.continents || continents}/>
                </div>
                <Footer/>
            </div>
        );
    }

};

export default Continents;
