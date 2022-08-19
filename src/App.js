import React from 'react';
import axios from 'axios'
import Game from './components/Game'
import Header from './components/Header'
import ShopList from './components/ShopList';


function App() {
  const [gamesList, setGamesList] = React.useState([]);
  const [cartList, setCartList] = React.useState([]);
  const [searchItem, setSearchItem] = React.useState('');

  const onChangeSearch = (event) => {
    setSearchItem(event.target.value);
  }

  const [shopListOpened, setShopListOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://62fc996db9e38585cd41e6cf.mockapi.io/games').then((res) => {
      setGamesList(res.data);
    });
    axios.get('https://62fc996db9e38585cd41e6cf.mockapi.io/cart').then((res) => {
      setCartList(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62fc996db9e38585cd41e6cf.mockapi.io/cart', obj);
    setCartList(prev => [...prev, obj]);
  }

  const onDeleteGame = (id) => {
    // axios.delete(`https://62fc996db9e38585cd41e6cf.mockapi.io/cart/${id}`);
    setCartList((prev) => prev.filter((obj) => obj.id !== id));
  }

  return (
    <div className="main">
      
      {shopListOpened ? <ShopList items={cartList} onCloseShopList={() => setShopListOpened(false)} deleteGame={onDeleteGame} /> : null }

      <Header onClickCart={() => setShopListOpened(true)}/>
      
      <div className="games-main">
        <div className="title">
          <h1>{searchItem ? `Пошук: "${searchItem}"` : "Ігри"}</h1>
          <div className="search">
            <img width={16} height={16} src="/img/search.png" alt="search"/>
              <img onClick={() => setSearchItem('')} className="delete-button clear" width={25} height={25} src="/img/delete.png" alt="clear"/>
            <input onChange={onChangeSearch} value={searchItem} placeholder="Пошук"/>
        </div>
        </div>
        
        <div className="games">
           {gamesList.filter((obj) => obj.title.includes(searchItem)).map((obj) => (
            <Game
            key={obj.title}
            title={obj.title} 
            price={obj.price} 
            img={obj.img}
            onClickPlus={(obj) => onAddToCart(obj)}
            />
           ))}
        </div>
      </div>
    </div>
  );
}

export default App;
  