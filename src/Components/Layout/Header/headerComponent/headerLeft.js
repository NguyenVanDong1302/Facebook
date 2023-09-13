import { Logo } from '~/Asset';
import Input from '~/Components/reuseComponent/Input/FormInput';
import Tippy from '@tippyjs/react/headless';

function HeaderLeft() {
    return (
        <div className="header-left">
            <Tippy content="Trang chủ">
                <Logo />
            </Tippy>
            <Input />
        </div>
    );
}

export default HeaderLeft;
