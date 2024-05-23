import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import React, { useState, useEffect } from 'react';

const Stream:React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');

  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:5000/video_feed');
    ws.binaryType = 'arraybuffer';

    ws.onmessage = (event) => {
      const arrayBuffer = event.data;
      const uint8Array = new Uint8Array(arrayBuffer);
      const blob = new Blob([uint8Array], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);

      setVideoUrl(imageUrl);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []); // Run only once on component mount
  return (
    <div className="text-white text-lg">
      <div className="my-10 flex flex-col items-center">
        <Link className="mb-10" to="/">
          BACK
        </Link>
        {/* <Webcam className="w-8/12" /> */}
        <img id="video-frame" src={videoUrl} alt="Loading Live Inference" />
      </div>
    </div>
  );
};

export default Stream;
