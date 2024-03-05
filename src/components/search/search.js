import React from 'react';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.initialQuery || ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSearch() {
    const { onSearch } = this.props;
    const { query } = this.state;
    if (onSearch) {
      onSearch(query);
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <input
          type="text"
          value={query}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchComponent;
