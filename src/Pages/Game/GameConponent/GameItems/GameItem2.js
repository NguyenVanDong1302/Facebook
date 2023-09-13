import './GameItem.scss';
function GameItem2(item) {
    item = item.item;
    return (
        <div className={`game-item-wrapper all-game-wrapper`}>
            <img src={item.avatar} alt="avatar-game" />
            <div className="all-game__detail">
                <span className='all-game__name'>{item.name}</span>
                <span className="all-game__category">{item.category}</span>
            </div>
        </div>
    );
}

export default GameItem2;
