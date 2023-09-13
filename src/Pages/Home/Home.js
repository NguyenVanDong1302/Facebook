import SidebarLeft from '~/Components/reuseComponent/Sidebar/SidebarLeft';
import './HomePageContent.scss';
import { ListFeatureUser1 } from '~/Components/reuseComponent/List/List';
import SidebarRight from '~/Components/reuseComponent/Sidebar/SidebarRight';
import PostsStory from './HomeContentItems/PostStory/PostsStory';
import PostsNews from './HomeContentItems/PostsNews/PostsNews';
import AddPosts from '~/Components/reuseComponent/PostsItem/AddPost/AddPostsComponent/AddPosts/AddPost';
import ModalAdd from '~/Components/reuseComponent/PostsItem/AddPost/ModalAdd';
function HomePage() {
    document.title = 'Facebook';
    return (
        <div className="home-page-wrapper">
            <SidebarLeft data={ListFeatureUser1} />
            <div className="home-page-content">
                <div className="home-page-content__items">
                    <PostsStory />
                    {/* <AddPosts /> */}
                    <ModalAdd />
                    <PostsNews />
                </div>
            </div>
            <SidebarRight />
        </div>
    );
}

export default HomePage;
