import {
    AddIcon,
    AssetIcon,
    BarbuteHelmIcon,
    CameraIcon,
    CardsIcon,
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
    JoyStickIcon,
    MapIcon,
    MusicalIcon,
    NewFeedIcon,
    PenIcon,
    PlaystationIcon2,
    PuzzleIcon,
    RepairToolsIcon,
    RunIcon,
    RunningIcon,
    SavedIcon,
    SeeMoreIcon,
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
} from '~/Asset';
import { NotificationIcon } from '~/Asset/HeaderRight';
import AvatarImage from '../Avatar/Avatar';
import Button from '../Button/Button';
import { IconDatingColorFul, IconFriendColorFul, IconGroupColorFul, IconWatchColorFul } from '~/Asset/IconNews/Icon2';
import { IconLive, IconSaved } from '~/Asset/IconNews/Icon03';
import { IconIndexWatch, IconReels } from '~/Asset/IconNews/Icon04';
import { Icon07Car, Icon07MarketPlace } from '~/Asset/IconNews/Icon07';
import { Icon09MailBox } from '~/Asset/IconNews/Icon09';
import { GroupIcon08, Icon08Cart, SmartPhoneIcon08 } from '~/Asset/IconNews/Icon08';
import { TagIcon10 } from '~/Asset/IconNews/Icon10';
import { HomeIcon11, Icon11Heart, NotificationIcon11, PlaystationIcon11, SaveIcon11 } from '~/Asset/IconNews/Icon11';
import { FeedIcon12 } from '~/Asset/IconNews/Icon12';
import { ComPassIcon13 } from '~/Asset/IconNews/Icon13';
import { PlayStationIcon14 } from '~/Asset/IconNews/Icon14';
import { UserIcon15 } from '~/Asset/IconNews/Icon15';

// const { currentUser } = useContext(AuthContext);

export const ListFeatureFriends = [
    {
        children: [
            {
                title: 'Trang chủ',
                imageNew: IconFriendColorFul,
                id: 1,
            },
            {
                title: 'Bạn bè',
                image: IconWatchColorFul,
                id: 2,
                to: '/friends/list',
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
];
export const ListFeatureUser1 = [
    {
        children: [
            {
                title: 'Bạn bè',
                imageNew: IconFriendColorFul,
                id: 1,
                to: 'friends',
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
                icon: Icon07MarketPlace,
                to: '/market',
            },
            {
                title: 'Thông báo',
                icon: <NotificationIcon />,
                to: '/market/notification',
            },
            {
                title: 'Hộp thư',
                icon: Icon09MailBox,
                to: '/market/mailbox',
            },
            {
                title: 'Đang mua',
                icon: Icon08Cart,
            },
            {
                title: 'Bán hàng',
                icon: TagIcon10,
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
                icon: Icon07Car,
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
                icon: Icon11Heart,
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
                icon: TagIcon10,
            },
            {
                title: 'Sản phẩm miễn phí',
                icon: TagIcon10,
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
                icon: TagIcon10,
            },
            {
                title: 'Đồ chơi & trò chơi',
                icon: PlaystationIcon11,
            },
            {
                title: 'Đồ dùng cho thú cưng',
                icon: <FootprintIcon />,
            },
            {
                title: 'Đồ gia dụng',
                icon: HomeIcon11,
            },
            {
                title: 'Đồ may mặc',
                icon: <ShirtIcon />,
            },
            {
                title: 'Đồ điện tử',
                icon: SmartPhoneIcon08,
            },
            {
                title: 'Nhóm mua và bán',
                icon: GroupIcon08,
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
                icon: FeedIcon12,
                to: '/group',
            },
            {
                title: 'Khám phá',
                icon: ComPassIcon13,
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
                icon: PlayStationIcon14,
                to: '/gaming',
            },
            {
                title: 'Hoạt động trong game',
                icon: UserIcon15,
            },
            {
                title: 'Thông báo',
                icon: NotificationIcon11,
            },
        ],
    },
    {
        title: 'Game của tôi',
        children: [
            {
                title: 'Lưu game',
                icon: SaveIcon11,
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
