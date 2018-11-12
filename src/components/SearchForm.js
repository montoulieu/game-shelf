import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  inputRef = React.createRef();
  categoryRef = React.createRef();

  search = event => {
    event.preventDefault();
    // console.log(this.inputRef.current.value);
    const query = this.inputRef.current.value;
    this.props.fetchSearchData(query);
    this.props.history.push('/search');
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0 mx-auto" onSubmit={this.search}>
        <select className="form-control mr-2" name="consoles" ref={this.categoryRef}>
          <option value="all">All Consoles</option>
        </select>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for a game..."
          aria-label="Search"
          ref={this.inputRef}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
  }
}

export default withRouter(SearchForm);

