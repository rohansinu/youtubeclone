import React from 'react';
import { FaYoutube } from 'react-icons/fa';

function VideoCard({ title, channel, thumbnail }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={thumbnail} className="card-img-top" alt="video thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted"><FaYoutube /> {channel}</p>
      </div>
    </div>
  );
}

export default VideoCard;
