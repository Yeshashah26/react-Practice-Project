const Header = () => {
    return (
        <div className = "header">
            <div className= "logo-container">
                <div className = "logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbyW_eHTqPgkPaLzENSxarujqmHQhevJsgw&s" alt="LOGO" id="logo-img" />
                </div>
            </div>
            <div className="search">
                <input type="text" className="search-textbox"/>
                <button className="search-button">Search</button>
            </div>
            <div className = "nav-Items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;