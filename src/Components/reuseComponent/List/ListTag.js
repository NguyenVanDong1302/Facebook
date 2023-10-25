import { Link, NavLink, useLocation } from 'react-router-dom';
import TagItem from '../Tag/Tag';
import { v4 as uuid } from 'uuid';
import './MenuItems.scss';

function ListTag({ items }) {
    const location = useLocation();
    let linkActive = location.pathname.split('/')[2];
    if (linkActive === undefined) {
        linkActive = 'home';
    }
    let Comp = 'span';
    return (
        <div>
            {items.map((item, index) => {
                if (item.to) {
                    Comp = Link;
                }
                return (
                    <Comp
                        to={item.to}
                        className={item.to === location.pathname ? linkActive + '-active tag-active' : undefined}
                        key={uuid()}
                    >
                        <TagItem key={item.id} items={item} />
                    </Comp>
                );
            })}
        </div>
    );
}

export default ListTag;
