import { NavLink } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <h1>404</h1>
    <p>Page not found</p>
    <NavLink to="/">Back to Home</NavLink>
  </div>
);

export default PageNotFound;
