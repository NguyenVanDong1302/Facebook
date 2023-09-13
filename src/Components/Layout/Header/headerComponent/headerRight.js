import { MenuIcon, MessengerIcon, NotificationIcon } from '~/Asset/HeaderRight';
import AvatarImage from '~/Components/reuseComponent/Avatar/Avatar';
import * as React from 'react';

import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase';
import MenuAllFeature from '~/Components/Menu/MenuAllFeature/MenuAllFeature';
import { MainMenuFeaterUser, MenuCreate } from '~/Components/Menu/ListMenu';
import { AuthContext } from '~/Pages/Messages/context/AuthContext';

function HeaderRight() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
        const { currentUser } = React.useContext(AuthContext);
    return (
        <div className="header-right">
            <ul>
                <MenuAllFeature items={MainMenuFeaterUser()} items2={MenuCreate()}>
                    <li className="">
                        <div className="header-right-item active">
                            <MenuIcon />
                        </div>
                    </li>
                </MenuAllFeature>
                <li>
                    <Link to="/messages">
                        <div className="header-right-item">
                            <MessengerIcon />
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="header-right-item">
                        <NotificationIcon />
                    </div>
                </li>
                <li>
                    <div className="">
                        <AvatarImage src={currentUser?.photoURL} />
                    </div>
                </li>
                <li>
                    <button onClick={() => signOut(auth)}>Logout</button>
                </li>
            </ul>
        </div>
    );
}

export default HeaderRight;
