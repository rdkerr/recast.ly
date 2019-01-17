import exampleVideoData from '../../src/data/exampleVideoData.js';
import VideoPlayer from '../components/VideoPlayer.js';
import VideoList from '../components/VideoList.js';
import searchYouTube from '../../src/lib/searchYouTube.js';
import Search from '../components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.componentDidMount();
    // this.onSearch('');
    this.state = {
      playing: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  onListItemClick(video) {
    this.setState({
      playing: video
    });
  }

  onSearch(search){
    this.props.searchYouTube({query: search}, (data) => this.setState({
      playing: data[0],
      videoList: data
    }));
  }

  componentDidMount() {
    this.onSearch('');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search onInput={this.onSearch.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.playing} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList onClick={this.onListItemClick.bind(this)} videos={this.state.videoList} /></h5></div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
