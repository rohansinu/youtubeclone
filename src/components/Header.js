import React ,{useState} from "react";
import SearchBar from "./SearchBar"; // Import your SearchBar inside Header

function Header({ onSearchTermChange }) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    console.log('Searching for:', term); 
    setSearchTerm(term);  
    onSearchTermChange(searchTerm);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 fixed-top">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          style={{ height: "30px" }}
        />
      </a>

      <div className="collapse navbar-collapse justify-content-center">
        <SearchBar onFormSubmit={handleSearch} />
      </div>

      {/* Right side icons can go here if you want */}
      <div className="ml-auto d-flex align-items-center">
     
      </div>
         {/* Optional: Display the search term or search results */}
         <div>{searchTerm && <p>Searching for: {searchTerm}</p>}</div>{" "}
    </nav>
  );
}

export default Header;
