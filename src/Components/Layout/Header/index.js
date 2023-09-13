import HeaderCenter from './headerComponent/headerCenter';
import HeaderLeft from './headerComponent/headerLeft';
import HeaderRight from './headerComponent/headerRight';

function Header() {
    return (
        <div className="mainHeader">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </div>
    );
}

export default Header;
