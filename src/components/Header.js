import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
    
    }
    
    render() {
        return (
           <nav className="navbar">
               <div id='logo'>
                  <h1>{this.props.name ? "Logo" : ""}</h1>
               </div>
               <div className="links">
                   <ul>
                       <li><a href="/">Home</a></li>
                       <li><a href="/">About</a></li>
                       <li><a href="/">Services</a></li>
                       <li><a href="/">Contact us</a></li>
                   </ul>
               </div>
               {this.props.searchbar ? <div className="searchbar">
                   <input type="search" placeholder="Search..."/>
               </div> : ""}
           </nav>
        )
    }
}

export default Header;