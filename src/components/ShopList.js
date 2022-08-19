function ShopList({onCloseShopList, deleteGame, items = []}) {
    return(
        <div className="shop-list-shadow">
        <div className="shop-list">
          <h2>Покупки <img onClick={onCloseShopList} className="delete-button" width={25} height={25} src="/img/delete.png" alt="delete"/></h2>
          <div className="items">
              {items.map((obj) => (
                <div className="list-item">
                  <img width={75} height={105} src={obj.img} alt="list-item" />
                  <div className="about">
                    <p>{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img onClick={() => deleteGame(obj.id)} className="delete-button" width={25} height={25} src="/img/delete.png" alt="delete" />
                </div>))}
          </div>

          {/* <ul className="order-price">
            <li>
              <span>Сума замовлення:</span>
              <b>1000 грн.</b>
            </li>
            <li>
              <span>Комісія:</span>
              
              <b>39 грн.</b>
            </li>
          </ul> */}
          <button>Оформити замовлення</button>
        </div>
      </div>
    )
}

export default ShopList;