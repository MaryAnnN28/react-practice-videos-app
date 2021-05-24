import React from 'react'
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

console.log(process.env);

class App extends React.Component {

  state = { videos: [] };
  
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  }; 


  render() {

    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  };
}

export default App;