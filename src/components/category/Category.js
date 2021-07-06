import { withRouter } from 'react-router-dom';

import './category.scss';

const Category = ({ title, imageURL, size, history, UID, match }) => (
  <div
    className={`category ${size}`}
    onClick={() => history.push(`${match.url}${UID}`)}
  >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageURL})` }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='shop-now'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(Category);
