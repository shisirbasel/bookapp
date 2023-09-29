import React from 'react'

const Header = () => {
  return (
    <div className="header-1">
        <a href="home" className="logo"><i className="fas fa-book"></i>Bookrade</a>

        <form action="" className="search-form">
            <input type="search" placeholder = "search" id="search-box"/>
            <label for="search-box" className="fas fa-search"></label>
        </form>

        <div classNameName="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="liked" className="fas fa-heart"></a>
            <a href="message" className="fas fa-message"></a>
            <div id="login-btn" className="fas fa-user"></div>
        </div>
    </div>
  )
}

export default Header