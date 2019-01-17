import YOUTUBE_API_KEY from '../../src/config/youtube.js';

var searchYouTube = ({key=YOUTUBE_API_KEY, query, max}, callback = () => {}) => {
  // TODO
  return $.get( 'https://www.googleapis.com/youtube/v3/search',
    {key: key,
      q: query,
      maxResults: max,
      part: 'snippet',
      type: 'video'
    }, (data) => callback(data.items));

};

export default searchYouTube;

