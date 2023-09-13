import './GameItem.scss';
function GameItem(item) {
    item = item.item;
    return (
        <div className={`game-item-wrapper ${item.toppick === true ? 'game-toppick' : ''}`}>
            {item.toppick === true ? (
                <img className="game-topPick__banner" src={item.banner} alt="banner" />
            ) : undefined}
            <div className="game-topPick-content">
                {item.toppick === true ? (
                    <>
                        <img className="game-topPick-content__banner" src={item.banner} alt="banner" />
                        <div className="game-topPick__title">
                            <div className="game-topPick__name">{item.name}</div>
                            <div className="game-topPick__category ">{item.category}</div>
                        </div>
                    </>
                ) : undefined}
            </div>
        </div>
    );
}

export default GameItem;
