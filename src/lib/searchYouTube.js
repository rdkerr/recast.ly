var searchYouTube = (options, callback = () => {}) => {
  // TODO
  $.get( 'https://www.googleapis.com/youtube/v3/search',
    {key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video'
    }, (data) => callback(data.items));

};

export default searchYouTube;

