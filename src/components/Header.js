import React from 'react';
function Header(props) {
    return(
        <header>
        <div className="header-left">
          <img width={55} height={55} src="/img/logo.png" alt="img"/>
          <div>
            <h3>StarGames</h3>
            <p>Інтернет магазин комп'ютерних ігор</p>
          </div>
        </div>
        <ul className="header-right">
            <li onClick={props.onClickCart} className="cart">
            <img width={30} height={30} src="/img/cart.png" alt="img"/>
            </li>
            <li>
              <img width={30} height={30} src="/img/user.png" alt="img"/>
            </li>
        </ul>
      </header>
    )
}

export default Header;