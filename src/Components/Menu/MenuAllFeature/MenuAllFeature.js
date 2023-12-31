import PopperWrapper from '../../reuseComponent/Popper/Popperwrapper';
import InputSearch from '../../reuseComponent/Input/FormInput';
import Tippy from '@tippyjs/react/headless';
import ItemAllFeature from './ItemAllFeature';
import './MenuAllFeature.scss';
import { v4 as uuid } from 'uuid';

function MenuAllFeature({ children, items = [], items2 = [] }) {
    const RenderResult = (attrs) => (
        <div className={'menu-items-wrapper'} tabIndex="-1" {...attrs}>
            <div className={'header-feature-main'}>
                <span>Menu</span>
            </div>
            <div className={'feature-content'}>
                <PopperWrapper className={'list-items'}>
                    <InputSearch placeholder="Tìm kiếm trong menu" className={'search-input'} />
                    {items.map((item) => (
                        <ItemAllFeature className={'Item-all-feature'} clItem="menu-item" data={item} key={uuid()} />
                    ))}
                </PopperWrapper>
                <PopperWrapper className={'create-posts'}>
                    {items2.map((item) => (
                        <ItemAllFeature
                            className={'Item-all-feature'}
                            classOfIconL="icon-feature-user"
                            data={item}
                            key={uuid()}
                        />
                    ))}
                </PopperWrapper>
            </div>
        </div>
    );

    return (
        <Tippy
            // visible
            interactive
            trigger="click"
            placement="bottom-end"
            // delay= '0, 500'
            // hideOnClick = 'false'
            render={RenderResult}
            onHide={(instance) => {
                requestAnimationFrame(instance.unmount);
            }}
        >
            {children}
        </Tippy>
    );
}

export default MenuAllFeature;
