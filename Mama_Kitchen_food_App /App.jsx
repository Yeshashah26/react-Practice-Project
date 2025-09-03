import "./styles.css";

const Header = () => {
    return (
        <div className = "header">
            <div className= "logo-container">
                <div className = "logo">
                    <img src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg" alt="LOGO" id="logo-img" />
                </div>
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

const RestaurantCard =() => {
    return (
        <div className="res-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLCuay0d7DVxiecg4zU2bHzj0YK6a9RIz3A&s" id="card-img"/>
            <div className="res-card-content">
                <h3 className="title">Pav Bhaji</h3>
                <div className="rating">Rating</div>
                <div className="delivery-time">15-20 min</div>
            <div className="location">Ahmedabad</div>
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="res-Container">
            <div className="search">
                <input type="text" className="search-textbox"/>
                <button className="search-button">Search</button>
            </div>
            <div class="body-res-card">
            <RestaurantCard />
             {/* <RestaurantCard imgUrl="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqoUnk0kXfwqlL4w2Bsm5huAlspvpnd-hdiGKw07bHgMY_DySkV6_885-GXQETKZH8xLy7dIzS1dbxTGUyidbSo367i3HPIJ_HWn9acD7iQflF0k-W8qbW63QbQ-gycO2meUdFZ=s1360-w1360-h1020-rw" resName="Kovallam Restaurant- The South Indian Kitchen" cuisine="South Indian restaurant" rating="4.6 rating" location="Nehru Nagar, Ahmedabad"/> */}
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />

            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">
            Footer
        </div>
    )
}

function App()  {
    return  <>
        <Header />
        <Body />
        <Footer />
    </>
    }

export default App;