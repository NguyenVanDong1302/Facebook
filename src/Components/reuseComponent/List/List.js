import {
    AddIcon,
    AssetIcon,
    BarbuteHelmIcon,
    BuyingIcon,
    CameraIcon,
    CardsIcon,
    CarIcon,
    CastleIcon,
    ChessPieceIcon,
    CommentQuestionsExclamationIcon,
    CrosswordIcon,
    DiceIcon,
    DiscoverIcon,
    EightBallIcon,
    FlagIcon,
    FootprintIcon,
    GameIcon2,
    GroupIcon,
    GunIcon,
    HeartIcon,
    HouseIcon2,
    JoyStickIcon,
    MailBoxIcon,
    MapIcon,
    MarketPlaceIcon2,
    MusicalIcon,
    NewFeedIcon,
    PenIcon,
    PhoneIcon,
    PlaystationIcon,
    PlaystationIcon2,
    PuzzleIcon,
    RepairToolsIcon,
    RunIcon,
    RunningIcon,
    SavedIcon,
    SeeMoreIcon,
    SellIcon,
    ShapesIcon,
    ShirtIcon,
    ShovelIcon,
    SimulationIcon,
    SolitaireIcon,
    SquareRulerIcon,
    SquareTwoDotsIcon,
    StopVideoIcon,
    StopwatchIcon,
    SwordIcon,
    TagPriceFreeIcon,
    TagPriceIcon,

} from '~/Asset';
import { NotificationIcon } from '~/Asset/HeaderRight';
import AvatarImage from '../Avatar/Avatar';
import Button from '../Button/Button';
import { IconDatingColorFul, IconFriendColorFul, IconGroupColorFul, IconWatchColorFul } from '~/Asset/IconNews/Icon2';
import { IconLive, IconSaved } from '~/Asset/IconNews/Icon03';
import { IconIndexWatch, IconReels } from '~/Asset/IconNews/Icon04';

// const { currentUser } = useContext(AuthContext);
export const ListFeatureUser1 = [
    {
        children: [
            {
                title: 'Bạn bè',
                imageNew: IconFriendColorFul,
                id: 1,
            },
            {
                title: 'Watch',
                image: IconWatchColorFul,
                id: 2,
            },
            {
                title: 'Nhóm',
                image: IconGroupColorFul,
                id: 3,
            },
            {
                title: 'Hẹn Hò',
                image: IconDatingColorFul,
                id: 4,
            },
        ],
    },
    {
        title: 'Lối tắt của bạn',
        children: [
            {
                title: 'Động phím cơ',
                image: (
                    <AvatarImage
                        className="avatar__shortcut"
                        src="https://firebasestorage.googleapis.com/v0/b/facebook-ui-6f536.appspot.com/o/image%2Fgroup%2Fdong%20phim%20co.jpg?alt=media&token=65793640-abf2-4c6c-969a-8b062af6de04"
                        type="group"
                    />
                ),
            },
            {
                title: 'Việc Làm & Thực Tập Ngành IT (Developer/Tester)',
                image: (
                    <AvatarImage
                        className="avatar__shortcut"
                        src="https://firebasestorage.googleapis.com/v0/b/facebook-ui-6f536.appspot.com/o/image%2Fgroup%2F271848083_115463984341696_4436017631364347794_n.jpg?alt=media&token=9341408c-e8a5-4a2f-a782-f71d65ab5031"
                        type="group"
                    />
                ),
            },
            {
                title: 'Tuyển Dụng Thực Tập IT',
                image: (
                    <AvatarImage
                        className="avatar__shortcut"
                        src="https://firebasestorage.googleapis.com/v0/b/facebook-ui-6f536.appspot.com/o/image%2Fgroup%2F254624638_1981231418700067_1333473650235194706_n.jpg?alt=media&token=84526289-88c5-49e4-a90f-ae5bef583d63"
                        type="group"
                    />
                ),
            },
        ],
    },
];

export const ListFeatureWatch = [
    {
        titleHeader: 'Watch',
        placeholder: 'video',
        header: true,
        children: [
            {
                title: 'Trang chủ',
                icon: IconIndexWatch,
                to: '/watch',
            },
            {
                title: 'Trực tiếp',
                icon: IconLive,
                to: '/watch/live',
            },
            {
                title: 'Chương trình',
                icon: IconReels,
                to: '/watch/broadcasts',
            },
            {
                title: 'Video đã lưu',
                icon: IconSaved,
                to: '/watch/saved',
            },
        ],
    },
];

export const ListFeatureMarket = [
    {
        titleHeader: 'Watch',
        placeholder: 'video',
        header: true,
        children: [
            {
                title: 'Lướt xem tất cả',
                icon: <MarketPlaceIcon2 />,
                to: '/market',
            },
            {
                title: 'Thông báo',
                icon: <NotificationIcon />,
                to: '/market/notification',
            },
            {
                title: 'Hộp thư',
                icon: <MailBoxIcon />,
                to: '/market/mailbox',
            },
            {
                title: 'Đang mua',
                icon: <BuyingIcon />,
            },
            {
                title: 'Bán hàng',
                icon: <SellIcon />,
            },
            {
                button: <Button title="Tạo bài niêm yết mới" centerIcon={<AddIcon />} />,
            },
        ],
    },
    {
        title: 'Bộ lọc',
        children: [
            {
                titleLink: 'Hà Nội  ·  Trong vòng 40km',
            },
        ],
    },
    {
        title: 'Hạng mục',
        children: [
            {
                title: 'Xe cộ',
                icon: <CarIcon />,
            },
            {
                title: 'Tài sản cho thuê',
                icon: <AssetIcon />,
            },
            {
                title: 'Bán nhà',
                icon: <AssetIcon />,
            },
            {
                title: 'Dụng cụ sửa chữa nhà cửa',
                icon: <RepairToolsIcon />,
            },
            {
                title: 'Gia đình',
                icon: <HeartIcon />,
            },
            {
                title: 'Giải trí',
                icon: <CameraIcon />,
            },
            {
                title: 'Làm vườn & hoạt động ngoài trời',
                icon: <ShovelIcon />,
            },
            {
                title: 'Nhạc cụ',
                icon: <MusicalIcon />,
            },
            {
                title: 'Rao vặt',
                icon: <TagPriceIcon />,
            },
            {
                title: 'Sản phẩm miễn phí',
                icon: <TagPriceFreeIcon />,
            },
            {
                title: 'Sản phẩm thể thao',
                icon: <RunIcon />,
            },
            {
                title: 'Sở thích',
                icon: <PenIcon />,
            },
            {
                title: 'Văn phòng phẩm',
                icon: <TagPriceIcon />,
            },
            {
                title: 'Đồ chơi & trò chơi',
                icon: <PlaystationIcon />,
            },
            {
                title: 'Đồ dùng cho thú cưng',
                icon: <FootprintIcon />,
            },
            {
                title: 'Đồ gia dụng',
                icon: <HouseIcon2 />,
            },
            {
                title: 'Đồ may mặc',
                icon: <ShirtIcon />,
            },
            {
                title: 'Đồ điện tử',
                icon: <PhoneIcon />,
            },
            {
                title: 'Nhóm mua và bán',
                icon: <GroupIcon />,
            },
        ],
    },
];

export const ListFeatureGroup = [
    {
        titleHeader: 'Nhóm',
        placeholder: 'nhóm',
        header: true,
        children: [
            {
                title: 'Bảng feed của bạn',
                icon: <NewFeedIcon />,
                to: '/group',
            },
            {
                title: 'Khám phá',
                icon: <DiscoverIcon />,
                to: '/group/discover',
            },
            {
                button: <Button title="Tạo nhóm mới" icon={<AddIcon />} />,
            },
        ],
    },
    {
        title: 'Nhóm của bạn đã tham gia',
        children: [
            {
                title: 'Tuyển Dụng Lập Trình Viên - Việc Làm IT',
                image: (
                    <AvatarImage
                        src="https://raw.githubusercontent.com/NguyenVanDong1302/facebook-ui/main/src/Asset/Image/group2.jpg"
                        className="avatar__group"
                    />
                ),
                describe: '1 ngày trước',
                iconS: <SeeMoreIcon />,
            },
            {
                title: 'MUA BÁN ĐIỆN THOẠI CŨ',
                image: (
                    <AvatarImage
                        src="https://raw.githubusercontent.com/NguyenVanDong1302/facebook-ui/main/src/Asset/Image/group2.jpg"
                        className="avatar__group"
                    />
                ),
                describe: '45 phút trước',
                iconS: <SeeMoreIcon />,
            },
            {
                title: 'Mua bán điện thoại cũ tại Hà Nội',
                image: (
                    <AvatarImage
                        src="https://raw.githubusercontent.com/NguyenVanDong1302/facebook-ui/main/src/Asset/Image/group2.jpg"
                        className="avatar__group"
                    />
                ),
                describe: '41 phút trước',
                iconS: <SeeMoreIcon />,
            },
            {
                title: 'Fresher IT & Thực Tập Sinh (Hà Nội) - Share CV, Share job',
                image: (
                    <AvatarImage
                        src="https://raw.githubusercontent.com/NguyenVanDong1302/facebook-ui/main/src/Asset/Image/group2.jpg"
                        className="avatar__group"
                    />
                ),
                describe: '35 phút trước',
                iconS: <SeeMoreIcon />,
            },
        ],
    },
];

export const ListFeatureGame = [
    {
        titleHeader: 'Nhóm',
        placeholder: 'nhóm',
        header: true,
        children: [
            {
                title: 'Chơi game',
                icon: <PlaystationIcon2 />,
                to: '/gaming',
            },
            {
                title: 'Dành cho bạn',
                icon: <GameIcon2 />,
            },
            {
                title: 'Video',
                icon: <StopVideoIcon />,
            },
            {
                title: 'Thông báo',
                icon: <NotificationIcon />,
            },
        ],
    },
    {
        title: 'Game của tôi',
        children: [
            {
                title: 'Lưu game',
                icon: <SavedIcon />,
            },
        ],
    },
    {
        title: 'Hạng mục',
        children: [
            {
                title: 'Hành động',
                icon: <GunIcon />,
            },
            {
                title: 'Phiêu lưu',
                icon: <MapIcon />,
            },
            {
                title: 'Arcade',
                icon: <JoyStickIcon />,
            },
            {
                title: 'Chiến đấu',
                icon: <SwordIcon />,
            },
            {
                title: 'Dùng bàn',
                icon: <ChessPieceIcon />,
            },
            {
                title: 'Xây dựng',
                icon: <CastleIcon />,
            },
            {
                title: 'Đánh bài',
                icon: <CardsIcon />,
            },
            {
                title: 'Sòng bạc',
                icon: <DiceIcon />,
            },
            {
                title: 'Thiết kế',
                icon: <SquareRulerIcon />,
            },
            {
                title: 'Xếp hình',
                icon: <ShapesIcon />,
            },
            {
                title: 'Hợp nhất',
                icon: <SquareTwoDotsIcon />,
            },
            {
                title: 'Câu đố',
                icon: <PuzzleIcon />,
            },
            {
                title: 'Chơi nhanh',
                icon: <StopwatchIcon />,
            },
            {
                title: 'Xếp hình',
                icon: <ShapesIcon />,
            },
            {
                title: 'Đố vui',
                icon: <CommentQuestionsExclamationIcon />,
            },
            {
                title: 'Đua xe',
                icon: <FlagIcon />,
            },
            {
                title: 'Nhập vai',
                icon: <BarbuteHelmIcon />,
            },
            {
                title: 'Chạy thi',
                icon: <RunningIcon />,
            },
            {
                title: 'Mô phỏng',
                icon: <SimulationIcon />,
            },
            {
                title: 'Solitaire',
                icon: <SolitaireIcon />,
            },
            {
                title: 'Thể thao',
                icon: <EightBallIcon />,
            },
            {
                title: 'Solitaire',
                icon: <SolitaireIcon />,
            },
            {
                title: 'Từ vựng',
                icon: <CrosswordIcon />,
            },
        ],
    },
];

export const ListFriends = (children) => {
    return [{ title: 'Người liên hệ', children }];
};
