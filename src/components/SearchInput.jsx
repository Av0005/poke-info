// SearchInput.jsx
import React, { useState } from 'react';
import {useNavigate}  from 'react-router-dom';
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import './SearchInput.css';
const SearchInput = () => {

  const [search, setSearch] = useState('ditto');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  return (
    <div id="main" className="main">
      <h1>Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>

      <div className="search-error">
        {error}
      </div>

      <div>
        <button
          onClick={() => {
            if (search === 'ditto') {
              navigate(`/search?query=${search}`);
            } else {
              setError('No Data Found!')
            }
          }}
        >
          Submit
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};



export default SearchInput;
