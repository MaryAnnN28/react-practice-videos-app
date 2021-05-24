import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

console.log(process.env);

class App extends React.Component {

  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('puppies')
  }

  
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0] // takes first video in results as default video
    });
  };
  

  onVideoSelect = video => {
    this.setState({ selectedVideo: video }); 
  };

  render() {

    return (
      <div>
          <NavBar />
        <div className="ui container" style={{ marginTop: '30px' }}>
          
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    );
  };
}

export default App;
