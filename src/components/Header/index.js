import React,{useEffect , useState} from 'react'
import './style.css';

 function Header() {


const [search , setSearch]=useState(false);

const openSearch =()=>{
    setSearch(true)
}

    const submitSearch =(e)=>{
        e.preventDefault();
        alert("harshad");   
    }
    const searchClass = search?'searchInput active':'searchInput';
    
    return (
        <header className="header">
            <nav className="navbarMenu">
                   <li><a href="#">Home</a></li>
                   <li><a href="#">Post</a></li>
                   <li><a href="#">About Us</a></li>
                   <li><a href="#">Contcat Us</a></li>
                    
            </nav>
            
            <div className="social">
                <li><a href=""> f</a></li>
                <li><a href="">t</a></li>
                <li><a href="">I</a></li>
                <li><a href="">W</a></li>
            
            <li className="search">
                <form onSubmit={submitSearch}>
                <input type="text" placeholder="search" className={searchClass}/>
                <img className="searchIcon" onClick ={openSearch} src="" alt="search" />
                </form>
                
            </li>
            </div>
            
        </header>
        
    )
}
export default Header;

