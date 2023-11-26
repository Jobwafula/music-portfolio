import React from 'react';

import SocialMedia from './component/SocialMedia';

// import SpotifyPlaylist from './component/SpotifyPlaylist';
import Footer from './component/Footer';
import Header from './component/Header';
import YouTubePlaylist from './component/YouTubePlayList';
import BoomplayPlaylist from './component/BoomPlayPlayList';
import SpotifyPlaylist from './component/SpotifyPlayList';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <SocialMedia />
      <div className="container mx-auto">
        {/* <YouTubePlaylist /> */}
        <YouTubePlaylist />
        {/* <BoomplayPlaylist /> */}
        <BoomplayPlaylist />
        {/* <SpotifyPlaylist /> */}
        <SpotifyPlaylist />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
