import { useLocation } from 'react-router-dom';
import ListTag from './ListTag';
import './MenuItems.scss';
import TagItem from '../Tag/Tag';
import { useContext } from 'react';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';

function MenuItems({ data }) {
    const location = useLocation();
    let checkPage = location.pathname.split('/')[1];
    if (checkPage === '') {
        checkPage = 'home'
    }
    const { currentUser } = useContext(AuthContext);
    return (
        <div className={`menu-items ${checkPage + '-page-active'}`}>
            <div className={'menu-item-user'} style={{
                margin: '-5px 8px',
                padding: '0px 10px'
            }}>
                <div className={'menu-item__tag'}>
                    <TagItem key={'user-info'} items={currentUser} />
                </div>
            </div>
            {data.map((item, index) => {
                return (
                    <div className={'menu-item'} key={index}>
                        <div className={'menu-item__tag'}>
                            <span className={item.title ? 'menu-item__title' : 'menu-item__header'}>{item.title}</span>
                            <ListTag items={item.children} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default MenuItems;
