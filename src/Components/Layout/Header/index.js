import { PersonalBanner } from '~/Pages/PersonalPage/PersonalPageContent/PersonalPageLayout/PersonalBanner/PersonalBanner';
import HeaderCenter from './headerComponent/headerCenter';
import HeaderLeft from './headerComponent/headerLeft';
import HeaderRight from './headerComponent/headerRight';
import { PersonalInformation } from '~/Pages/PersonalPage/PersonalPageContent/PersonalPageLayout/PersonalInfomation/PersonalInformation';
import './Header.scss'

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