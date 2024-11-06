import React, { useState } from 'react';
import './App.css';

const restaurants = [
  {
    id: 1,
    name: 'Pizza House',
    image: 'https://th.bing.com/th?id=OIP.CCv_T02Us8GbVDYtnOBbTwHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', // Placeholder for restaurant image
    menu: [
      { id: 1, name: 'Margherita', price: 8, image: 'https://www.bing.com/images/search?view=detailV2&ccid=sGcYBgJK&id=7560E9F2CA20BB7A38CE36F691188F534B60F25F&thid=OIP.sGcYBgJKkHKsm0viI4bNPQHaLF&mediaurl=https%3a%2f%2fhomemadehooplah.com%2fwp-content%2fuploads%2f2022%2f05%2fClassic-Margherita-Pizza-1-1200.jpg&exph=1797&expw=1200&q=Margarita+pizza&simid=608025520143601328&FORM=IRPRST&ck=D03F1EDA3EFDFF948F039E864315984B&selectedIndex=2&itb=0' },
      { id: 2, name: 'Pepperoni', price: 10, image: 'https://www.bing.com/images/search?view=detailV2&ccid=3Z4gvi7m&id=6D5C9EB77AE8A2919DE43BA628DAB48F814D835B&thid=OIP.3Z4gvi7mZEpin_3jIwLHHgHaE7&mediaurl=https%3a%2f%2fwww.simplyrecipes.com%2fthmb%2frLl58QZmVP4C3zSlpkKBo72EUws%3d%2f2000x1333%2ffilters%3afill(auto%2c1)%2f__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg&exph=1333&expw=2000&q=pepperoni+pizza&simid=608014494938332172&FORM=IRPRST&ck=6D9F3DEB446D9EFD0D48907989A65567&selectedIndex=0&itb=0' },
      { id: 3, name: 'BBQ Chicken', price: 12, image: 'https://www.bing.com/images/search?view=detailV2&ccid=ncM6zOnu&id=83D6E7C1798E5F5A7B70D41749A8547707BBFFDB&thid=OIP.ncM6zOnunHOlN99ejgtRbgHaKX&mediaurl=https%3a%2f%2fwww.iheartnaptime.net%2fwp-content%2fuploads%2f2019%2f05%2fbbq-chicken-pizza-857x1200.jpg&exph=1200&expw=857&q=bbq+chicken+pizza&simid=607990271393554705&FORM=IRPRST&ck=E93EC84D0C295F095C872CF4BCD87895&selectedIndex=2&itb=0' },
      { id: 4, name: 'Veggie Supreme', price: 9, image: 'https://www.bing.com/images/search?view=detailV2&ccid=uOs7%2bDko&id=31E05D77D7AD2CA7BA8DAA77D3820A77E475281B&thid=OIP.uOs7-DkoghZZ10Nw-OXeCgHaE8&mediaurl=https%3a%2f%2fvegannook.com%2fsites%2fdefault%2ffiles%2frecipe_images%2fveggie_supreme.jpg&exph=535&expw=800&q=veggie+supreme+pizza&simid=607995725976708698&FORM=IRPRST&ck=4B8E50F2A2368F9EC58C3186C033A5D3&selectedIndex=1&itb=0' },
    ],
  },
  {
    id: 2,
    name: 'Burger Joint',
    image: 'https://via.placeholder.com/150?text=Burger+Joint', // Placeholder for restaurant image
    menu: [
      { id: 1, name: 'Cheeseburger', price: 5, image: 'https://via.placeholder.com/100?text=Cheeseburger' },
      { id: 2, name: 'Veggie Burger', price: 6, image: 'https://via.placeholder.com/100?text=Veggie+Burger' },
      { id: 3, name: 'Chicken Burger', price: 7, image: 'https://via.placeholder.com/100?text=Chicken+Burger' },
      { id: 4, name: 'Fish Burger', price: 7, image: 'https://via.placeholder.com/100?text=Fish+Burger' },
    ],
  },
];

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setCart([]); // clear cart when switching restaurants
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    setCart([]);
  };

  return (
    <div className="container">
      <h1 className="title">Simple Food Delivery</h1>
      {!selectedRestaurant ? (
        <>
          <h2 className="subtitle">Select a Restaurant</h2>
          <div className="restaurant-list">
            {restaurants.map((restaurant) => (
              <div className="restaurant-card" key={restaurant.id}>
                <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                <button className="restaurant-button" onClick={() => handleRestaurantSelect(restaurant)}>
                  {restaurant.name}
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="subtitle">{selectedRestaurant.name}</h2>
          <button className="back-button" onClick={() => setSelectedRestaurant(null)}>Back to Restaurants</button>
          <div className="menu-list">
            {selectedRestaurant.menu.map((item) => (
              <div className="menu-card" key={item.id}>
                <img src={item.image} alt={item.name} className="menu-image" />
                <p>{item.name} - ${item.price}</p>
                <button className="add-button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>

          <h3 className="subtitle">Your Cart</h3>
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul className="cart-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && <button className="order-button" onClick={handlePlaceOrder}>Place Order</button>}
        </>
      )}
    </div>
  );
}

export default App;
