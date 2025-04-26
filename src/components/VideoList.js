import React, { useState } from 'react';
import VideoCard from './VideoCard';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function VideoList({ searchTerm }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const dummyVideos = [
    {
      title: 'Learn React in 10 Minutes',
      channel: 'CodeAcademy',
      thumbnail: 'https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/Ke90Tje7VS0',
    },
    {
      title: 'Build a YouTube Clone',
      channel: 'Traversy Media',
      thumbnail: 'https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/NT299zIk2JY',
    },
    {
      title: 'React Hooks Tutorial',
      channel: 'Programming with Mosh',
      thumbnail: 'https://i.ytimg.com/vi/f687hBjwFcM/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/f687hBjwFcM',
    },
    {
      title: 'JavaScript Crash Course',
      channel: 'Traversy Media',
      thumbnail: 'https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/hdI2bqOjy3c',
    },
    {
      title: 'Understanding CSS Flexbox',
      channel: 'CSS-Tricks',
      thumbnail: 'https://i.ytimg.com/vi/fYq5PXgSsbE/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/fYq5PXgSsbE',
    },
    {
      title: 'Node.js Tutorial for Beginners',
      channel: 'Techsith',
      thumbnail: 'https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
    },
    {
      title: 'Learn Python in One Hour',
      channel: 'freeCodeCamp.org',
      thumbnail: 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
    },
    {
      title: 'Complete Guide to Vue.js',
      channel: 'Academind',
      thumbnail: 'https://i.ytimg.com/vi/FXpIoQ_rT7s/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/FXpIoQ_rT7s',
    },
    {
      title: 'How to Create a Website in HTML & CSS',
      channel: 'Traversy Media',
      thumbnail: 'https://i.ytimg.com/vi/pQN-pn6p3u8/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/pQN-pn6p3u8',
    },
    {
      title: 'Git and GitHub for Beginners',
      channel: 'freeCodeCamp.org',
      thumbnail: 'https://i.ytimg.com/vi/0fKg7e37bQE/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/0fKg7e37bQE',
    },
    {
      title: 'Introduction to Machine Learning',
      channel: 'Simplilearn',
      thumbnail: 'https://i.ytimg.com/vi/szPDEkwF2Hc/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/szPDEkwF2Hc',
    },
    {
      title: 'Complete Guide to Bootstrap 5',
      channel: 'The Net Ninja',
      thumbnail: 'https://i.ytimg.com/vi/4sosXZsdyZ4/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/4sosXZsdyZ4',
    },
    {
      title: 'Introduction to Databases',
      channel: 'CS50',
      thumbnail: 'https://i.ytimg.com/vi/5fBfGg0pWjM/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/5fBfGg0pWjM',
    },
    {
      title: 'Advanced JavaScript Concepts',
      channel: 'LevelUpTuts',
      thumbnail: 'https://i.ytimg.com/vi/5/7FJopM4gg8/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/5/7FJopM4gg8',
    },
    {
      title: 'CSS Grid Layout Tutorial',
      channel: 'Kevin Powell',
      thumbnail: 'https://i.ytimg.com/vi/4zA0g7tR5Vw/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/4zA0g7tR5Vw',
    },
    {
      title: 'React Native Full Course',
      channel: 'Programming with Mosh',
      thumbnail: 'https://i.ytimg.com/vi/K4yZ1gQxywI/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/K4yZ1gQxywI',
    },
    {
      title: 'What is Cloud Computing?',
      channel: 'Simplilearn',
      thumbnail: 'https://i.ytimg.com/vi/AJdK9Hq_d5A/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/AJdK9Hq_d5A',
    },
    {
      title: 'Complete Angular Tutorial',
      channel: 'Academind',
      thumbnail: 'https://i.ytimg.com/vi/htPYk6QxacQ/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/htPYk6QxacQ',
    },
    {
      title: 'Web Development with Django',
      channel: 'Traversy Media',
      thumbnail: 'https://i.ytimg.com/vi/4ptjFg5vFCw/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/4ptjFg5vFCw',
    },
    {
      title: 'Firebase Tutorial for Beginners',
      channel: 'The Net Ninja',
      thumbnail: 'https://i.ytimg.com/vi/Fj3wRGz9V3M/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/Fj3wRGz9V3M',
    },
    {
      title: 'The Basics of HTTP and Web Servers',
      channel: 'CS50',
      thumbnail: 'https://i.ytimg.com/vi/w6vA9XqPAxI/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/w6vA9XqPAxI',
    },
    {
      title: 'Python Django Full Course',
      channel: 'freeCodeCamp.org',
      thumbnail: 'https://i.ytimg.com/vi/xF9aN71UJMI/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/xF9aN71UJMI',
    },
    {
      title: 'Intro to Artificial Intelligence',
      channel: 'Simplilearn',
      thumbnail: 'https://i.ytimg.com/vi/2p6B3mVgJ6M/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/2p6B3mVgJ6M',
    },
  ];
  
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => setSelectedVideo(null);

  // Filter the videos based on the search term passed as prop
  const filteredVideos = dummyVideos.filter((video) => {
    return video.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div className='mt-0'>
      {/* Video Cards */}
      <div className="d-flex flex-wrap p-3" style={{ marginLeft: '240px', marginTop: '50px' }}>
        {filteredVideos.map((video, index) => (
          <div key={index} onClick={() => handleVideoClick(video)} style={{ cursor: 'pointer' }}>
            <VideoCard {...video} />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={selectedVideo !== null} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedVideo?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedVideo && (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={selectedVideo.videoUrl}
                allowFullScreen
                title="video"
                style={{ width: '100%', height: '400px', border: 'none' }}
              ></iframe>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoList;
