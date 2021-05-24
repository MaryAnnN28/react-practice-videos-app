import React from 'react';


class SearchBar extends React.Component {
  state = { term: '' };
  
  onInputChange = event => {
    this.setState({ term: event.target.value }); 
  };
  
  onFormSubmit = event => {
    event.preventDefault();
    
    this.props.onFormSubmit(this.state.term);
  }


  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui fluid icon input">
            <input
              type="text"
              value={this.state.term}
              placeholder="Search for videos..."
              onChange={this.onInputChange} />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar; 