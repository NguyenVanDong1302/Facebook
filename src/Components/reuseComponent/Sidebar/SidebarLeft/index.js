// import classNames from 'classnames/bind';
import MenuItems from '../../List/MenuItems';
// import styles from './SidebarLeft.module.scss';
import Input from '../../Input/FormInput';
import '~/Components/reuseComponent/Tag/Tag.scss';
import { SettingIcon } from '~/Asset';
import './SidebarLeft.scss';
import { useLocation } from 'react-router-dom';
import { IconSetting } from '~/Asset/IconNews/Icon05';

// const cx = classNames.bind(styles);
function SidebarLeft({ data }) {
    let items = data[0];
    const location = useLocation();
    let checkPage = location.pathname.split('/')[1];
    if (checkPage === '') {
        checkPage = 'home';
    }

    return (
        <div className={`sidebar-left-wrapper`}>
            <div className={`sidebar-left-items ${checkPage + '-sidebar-left-items'}`}>
                {items?.header ? (
                    <div className="sidebar-left-header">
                        <div className="sidebar-left__header">
                            <h1 className="sidebar-left__title-header">{items.titleHeader}</h1>
                            <span className="tag__icon sidebar-left__icon-header">{IconSetting}</span>
                        </div>
                        <div className="sidebar-left-search">
                            <Input placeholder={'Tìm kiếm ' + items.placeholder} />
                        </div>
                    </div>
                ) : undefined}
                <MenuItems data={data} />
            </div>
        </div>
    );
}

export default SidebarLeft;
