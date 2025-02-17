import SidebarLeft from '~/Components/reuseComponent/Sidebar/SidebarLeft';
import './HomePageContent.scss';
import { ListFeatureUser1 } from '~/Components/reuseComponent/List/List';
import PostsStory from './HomeContentItems/PostStory/PostsStory';
import PostsNews from './HomeContentItems/PostsNews/PostsNews';
import AddPosts from '~/Components/reuseComponent/PostsItem/AddPost/AddPostsComponent/AddPosts/AddPost';
import ModalAdd from '~/Components/reuseComponent/PostsItem/AddPost/ModalAdd';
import SidebarRight from '~/Components/reuseComponent/Sidebar/SidebarRight/SidebarRight';
import IsLoading from '~/Components/reuseComponent/Loading/Loading';
import Loader from './HomeContentItems/PostsNews/Loader';
function HomePage() {
    document.title = 'Facebook';
    return (
        <div className="home-page-wrapper">
            <SidebarLeft data={ListFeatureUser1} />
            <div className="home-page-content">
                <div className="home-page-content__items d-flex">
                    <PostsStory />
                    <ModalAdd />
                    <PostsNews />
                </div>
            </div>
            <SidebarRight />
            
        </div>
    );
}

export default HomePage;
