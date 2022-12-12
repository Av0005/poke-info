// SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {useNavigate}  from 'react-router-dom';
import axios from 'axios';
import './Search.css'

const SearchResults = () => {

   const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  const [error, setError] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  useEffect(() => {
    const searchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/` + query
        ); 
          setSearchResults(data);
        } catch (error) {
          setError(error.response?.data?.message);
        }
      };
      searchProduct();
    }, [query]);
    
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <button className="back-btn" onClick={()=> navigate('/')}>Back</button>
        {searchResults.sprites && (
          <div className="card">
            <img
              src={searchResults.sprites.front_default}
              width="150"
              alt="John"
            />

            <div className="card-img">
              <h1>{searchResults.name}</h1>
            </div>

            <div className="user-data">
              <table id="users">
                <tr>
                  <th>Abilities</th>
                </tr>

                {searchResults.abilities.map((ability) => {
                  return (
                    <tr>
                      <td>{ability.ability.name}</td>
                    </tr>
                  );
                })}
              </table>

              <table id="users">
                <tr>
                  <th>Held Items</th>
                </tr>

                {searchResults.held_items.map((item) => {
                  return (
                    <tr>
                      <td>{item.item.name}</td>
                    </tr>
                  );
                })}
              </table>
            </div>

            <div className="user-stat">
              <table id="users">
                <tr>
                  <th>Stats</th>
                </tr>

                {searchResults.stats.map((stat) => {
                  return (
                    <tr>
                      <td>{stat.stat.name}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        )}
      </div>
    );        
}
          
export default SearchResults;
          