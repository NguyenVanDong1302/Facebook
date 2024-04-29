import React, { useEffect, useState } from 'react';
import VideoThumbnail from 'react-video-thumbnail';
import './Thumbnail.scss'

const Video = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    const [render, setRender] = useState(<></>)
    const handleVideoSelection = (event) => {
        const file = event.target.files[0];
        if (file && file.type.includes('video')) {
            const videoUrl = URL.createObjectURL(file);
            // setRender(
            //     <VideoThumbnail
            //         videoUrl={videoUrl ?? ""}
            //         thumbnailWidth={480}
            //         thumbnailHeight={270}
            //     />
            // )
            setThumbnailUrl(videoUrl);
        }
    };

    return (
        <div>
            <input type="file" accept="video/*" onChange={handleVideoSelection} />
        <div className='thumbnail-wrapper'>
                <VideoThumbnail
                    videoUrl={thumbnailUrl ?? 'https://firebasestorage.googleapis.com/v0/b/facebook-ui-6f536.appspot.com/o/Snapsave.app_317065541_595802285730982_6316232474210585049_n.mp4?alt=media&token=70f3acf9-0eef-4086-9b57-0f8395f7f061'}
                />
        </div>
        </div>
    );
};

export default Video;