import {
    AdCenterColorIcon,
    EventColorIcon,
    FeelColorIcon,
    GameColorIcon,
    LiveColorIcon,
    MostRecentColorIcon,
    ScienceColorIcon,
    SosColorIcon,
    StartColorIcon,
    StoryColorIcon,
} from '~/Asset/IconColor';
import { Icon04Footage } from '~/Asset/IconNews/Icon04';
import { Icon07Event, Icon07Page, Icon07Post } from '~/Asset/IconNews/Icon07';
import { GroupIcon08, Icon08Cart, Icon08Notification, Icon08Story } from '~/Asset/IconNews/Icon08';
import { IconGroupColorFul } from '~/Asset/IconNews/Icon2';
import { IconImgChart, IconImgHeart, IconImgMarketPlace, IconImgMessKid, IconImgNews, IconImgPages, IconImgPlayGame, IconImgRecentlyAds, IconImgSaved, IconImgWatch } from '~/Asset/IconNews/IconImg';

export const MainMenuFeaterUser = () => {
    return [
        {
            title: 'Xã hội',
            children: [
                {
                    title: 'Sự kiện',
                    detail: 'Tổ chức hoặc tìm sự kiện cũng những hoạt động khác trên mạng và ở quanh đây',
                    icon: <EventColorIcon />,
                },
                {
                    title: 'Bạn bè',
                    detail: 'Tìm kiếm bạn bè hoặc những người có thể biết',
                    // icon: { IconFriendColorFul },
                },
                {
                    title: 'Nhóm',
                    detail: 'Kết nối với những người chung sở thích',
                    icon: IconGroupColorFul,
                },
                {
                    title: 'Bảng tin',
                    detail: 'Xem bài viết phù hợp của những người và Trang bạn theo dõi',
                    icon: IconImgNews,
                },
                {
                    title: 'Yêu thích',
                    detail: 'View posts by Favorites',
                    icon: <StartColorIcon />,
                },
                {
                    title: 'Gần đây nhất',
                    detail: 'Xem bài viết gần nhất từ bạn bè, nhóm, Trang và hơn thế nữa',
                    icon: <MostRecentColorIcon />,
                },
                {
                    title: 'Trang',
                    detail: 'Khám phá và kết nôi với các doanh nghiệp trên Facebook',
                    icon: IconImgPages,
                },
            ],
        },
        {
            title: 'Giải trí',
            children: [
                {
                    title: 'Video chơi game',
                    detail: 'Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích',
                    icon: <GameColorIcon />,
                },
                {
                    title: 'Chơi game',
                    detail: 'Chơi game bạn yêu thích',
                    icon: IconImgPlayGame,
                },
                {
                    title: 'Watch',
                    detail: 'Đích đến của video phù hợp vơi sở thích và quan hệ kết nối của bạn',
                    icon: IconImgWatch,
                },
                {
                    title: 'Video trực tiếp',
                    detail: 'Xem video trực tiếp phổ biến từ khắp thế giới',
                    icon: <LiveColorIcon />,
                },
            ],
        },
        {
            title: 'Mua sắm',
            children: [
                {
                    title: 'Đơn đặt hàng và thanh toán',
                    detail: 'Một cách dễ dàng, bảo mật để thanh toán trên các ứng dụng bạn đang dùng',
                    icon: <ScienceColorIcon />,
                },
                {
                    title: 'Marketplace',
                    detail: 'Mua bán trong cộng đồng của bạn',
                    icon: IconImgMarketPlace,
                },
            ],
        },
        {
            title: 'Cá nhân',
            children: [
                {
                    title: 'Hoạt động quảng cáo gần đây',
                    detail: 'Xem toàn bộ quảng cáo mà bạn đã tương tác trên Facebook',
                    icon: IconImgRecentlyAds,
                },
                {
                    title: 'Kỷ niệm',
                    detail: 'Lướt xem ảnh, video và bài viết cũ của bạn trên Facebook',
                    icon: <StoryColorIcon />,
                },
                {
                    title: 'Đã lưu',
                    detail: 'Tìm bài viết, ảnh và video mà bạn đã lưu để xem sau.',
                    icon: IconImgSaved,
                },
            ],
        },
        {
            title: 'Chuyên nghiệp',
            children: [
                {
                    title: 'Trình quản lý quảng cáo',
                    detail: 'Tạo, quản lý và theo dõi hiệu quả quảng cáo',
                    icon: IconImgChart,
                },
                {
                    title: 'Trung tâm quảng cáo',
                    detail: 'Dùng các tính năng đơn giản hơn để quản lý mọi quảng cáo bạn tạo trên Trang',
                    icon: <AdCenterColorIcon />,
                },
            ],
        },
        {
            title: 'Nguồn lực cho cộng đồng',
            children: [
                {
                    title: 'Trung tâm khoa học khí hậu',
                    detail: 'Tìm hiểu về vấn đề biến đổi khí hậu và tác động của các hiện tượng này',
                    icon: <ScienceColorIcon />,
                },
                {
                    title: 'Ứng phó khẩn cấp',
                    detail: 'Tìm thông tin mới nhất về các cuộc khủng hoảng đang diễn ra trên thế giới',
                    icon: <SosColorIcon />,
                },
                {
                    title: 'Sức khoẻ và cảm xúc',
                    icon: <FeelColorIcon />,
                },
                {
                    title: 'Chiến dịch gây quỹ',
                    detail: 'Quyên góp và gây quỹ cho tổ chức phi lợi nhuận và mục đích cá nhân',
                    icon: IconImgHeart,
                },
            ],
        },
        {
            title: 'Sản phẩm khác của Meta',
            children: [
                {
                    title: 'Messenger nhí',
                    detail: 'Cho phép bé nhắn tin với bạn thân và gia đình',
                    icon: IconImgMessKid,
                },
            ],
        },
    ];
};

export const MenuCreate = () => {
    return [
        {
            children: [
                {
                    title: 'Đăng',
                    icon: Icon07Post,
                },
                {
                    title: 'Tin',
                    icon: Icon08Story,
                },
                {
                    title: 'Thước phim',
                    icon: Icon04Footage,
                },
            ],
        },
        {
            children: [
                {
                    title: 'Trang',
                    icon: Icon07Page,
                },
                {
                    title: 'Quảng cáo',
                    icon: Icon08Notification,
                },
                {
                    title: 'Nhóm',
                    icon: GroupIcon08,
                },
                {
                    title: 'Sự kiện',
                    icon: Icon07Event,
                },
                {
                    title: 'Bài niêm yết trên Marketplace',
                    icon: Icon08Cart,
                },
            ],
        },
    ];
};
