import {FC} from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../config/route';
import classes from './not-found-page.module.css';

const mainPageImage = 'https://i.pinimg.com/736x/fa/26/33/fa26336df49cf5273b20b15c215578df.jpg';

const NotFoundPage: FC = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">404 Not Found</h1>
    </header>

    <div className="sign-in user-page__content">
      <div
        className={classes.imageBox}
      >
        <Link
          to={RoutePaths.Main}
          className={classes.mainPageLink}
        >
          Main page
        </Link>
        <img src={mainPageImage} width={'100%'}/>
      </div>
    </div>

    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default NotFoundPage;
