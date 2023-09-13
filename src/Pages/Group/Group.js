import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ListFeatureGroup } from '~/Components/reuseComponent/List/List';
import SidebarLeft from '~/Components/reuseComponent/Sidebar/SidebarLeft';
import { db } from '~/firebase';

const groups = {};
const groupss  = []
function GroupPage() {
    document.title = 'Nhóm | Facebook ';
    const [listGroup, setListGroup] = useState([]);
    const groupCollection = collection(db, 'group');
    const pages = 'group';
    useEffect(() => {
        const getGroup = async () => {
            const data = await getDocs(groupCollection);
            setListGroup(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getGroup();
    }, []);
    Object.assign(groups, listGroup);
    return (
        <div className="Group-page-wrapper">
            <SidebarLeft data={ListFeatureGroup} />
            <Outlet />
        </div>
    );
};


const newGroup = Object.keys(groups)
// export { groups };
export default GroupPage;
