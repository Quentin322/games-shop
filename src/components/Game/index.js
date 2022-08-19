import React from 'react';
import styles from './Game.module.scss';

function Game({title, img, price, onClickPlus}) {
  const [gameAdd, setGameAdd] = React.useState(false);

  const onPlus = () => {
    onClickPlus({title, img, price});
    setGameAdd(!gameAdd);
  };

    return(
        <div className={styles.game}>
            <img width={186} height={262} src={img} alt="img"/>
            <p className={styles.game_title}>{title}</p>
            <div className={styles.full_game_info}>
              <div className={styles.game_info}>
                <span>Ціна:</span>
                <b>{price} грн.</b>
              </div>
              <img className={styles.plus}  onClick={onPlus} width={22} height={22} src={gameAdd ? "/img/check-mark.png" : "/img/plus.png"} alt="plus"/>
            </div>
          </div>
    );
}

export default Game;