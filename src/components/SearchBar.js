import React, { useState } from 'react';

function SearchBar({ onFormSubmit }) {

  const [term, setTerm] = useState('');


  const handleTermChange = (e) =>{
    e.preventDefault();
    const value = e.target.value;
    setTerm(value);
    onFormSubmit(value);
  }

  // const handleSubmit =(e)=>{
  //   e.preventDefault(); 
  //   console.log('term',term)
  //   onFormSubmit(term)
  // }
  return (
    <form   className="d-flex justify-content-center align-items-center w-100">
      <input
        type="text"
        value={term}
        onChange={handleTermChange}
        className="form-control w-50 mr-2"
        placeholder="Search videos..."
      />
      {/* <button type="submit" className="btn btn-danger">
        Search
      </button> */}
    </form>
  );
}

export default SearchBar;
