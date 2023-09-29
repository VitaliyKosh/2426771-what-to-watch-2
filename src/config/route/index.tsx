import MainPage from '../../pages/main-page/main-page';
import { RouteProps } from 'react-router-dom';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginOnlyRoute from '../../components/login-only-route/login-only-route';

export enum RoutePaths {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Page404 = '*'
}

type RouteConfigProps = {
  title: string;
  genre: string;
  year: string;
}

export const getRouteConfig = (props: RouteConfigProps): Record<RoutePaths, RouteProps> => ({
  [RoutePaths.Main]: {
    element: <MainPage title={props.title} genre={props.genre} year={props.year}/>
  },
  [RoutePaths.SignIn]: {
    element: <SignInPage/>
  },
  [RoutePaths.MyList]: {
    element: (
      <LoginOnlyRoute>
        <MyListPage/>
      </LoginOnlyRoute>
    )
  },
  [RoutePaths.Film]: {
    element: <FilmPage/>
  },
  [RoutePaths.AddReview]: {
    element: <AddReviewPage/>
  },
  [RoutePaths.Player]: {
    element: <PlayerPage/>
  },
  [RoutePaths.Page404]: {
    element: <NotFoundPage/>
  }
});
