import React,{useEffect,useState} from "react";
import axios from "axios";
import Header from "./components/Header"
import VideoList from './components/VideoList';
import SideBar from './components/SideBar';

function App() {

  const [searchTerm ,setSearchTerm ] = useState('')

  const handleSearchTermSubmit=(term)=>{
    console.log('Searching for:', term);
    setSearchTerm(term);
  }

  
  return (
    <div>
      <Header onSearchTermChange={handleSearchTermSubmit} />
      <SideBar />
      <VideoList searchTerm={searchTerm} />
     
    </div>
  );
}

export default App;
