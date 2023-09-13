import AvatarImage from '../Avatar/Avatar';
import './Tag.scss';

function TagItem({ items = [] }) {
    const RenderIcon = () => {
        if (items.image || items.img || items.photoURL) {
            return (
                <span className={'tag__image'}>
                    {items.image || <AvatarImage src={items.img || items.photoURL} type={items.type} />}
                </span>
            );
        } else if (items.icon) {
            return <span className={'tag__icon'}>{items.icon}</span>;
        } else if (items.button) {
            return items.button;
        } else if (items.imageNew) {
            console.log(17, items.imageNew);
            return items.imageNew;
        }
    };
    return (
        <div className={`tag-wrapper ${items.button || items.titleLink ? 'tag-wrapper-button hoverBgNone' : ''}`}>
            <div className="tag__content__left">
                {RenderIcon()}
                <div className={`tag__center ${items.describe ? 'tag__center-describe' : ''}`}>
                    {items.title || items.name || items.displayName ? (
                        <span className={'tag__title'}>{items.title || items.name || items.displayName}</span>
                    ) : undefined}
                    {items.titleLink ? <span className={'tag__title-link'}>{items.titleLink}</span> : undefined}
                    {items.describe ? (
                        <span className="tag__center__describe">{'Lần hoạt động gần nhất: ' + items.describe}</span>
                    ) : undefined}
                </div>
            </div>
            {items.iconS ? <span className="tag__icon-see-more">{items.iconS}</span> : undefined}
        </div>
    );
}

export default TagItem;
