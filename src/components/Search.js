/* eslint-disable react/prop-types */
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

const searchHandler = (query) => query.replace('#', 'sharp');

const Search = (props) => {
  const [search, setSearch] = useState('');
  const onSubmit = (e) => {
    props.history.push(`/chord/${searchHandler(search)}`);
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Search"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default withRouter(Search);
