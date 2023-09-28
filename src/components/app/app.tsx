import {FC} from 'react';
import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  title: string;
  genre: string;
  year: string;
}

const App: FC<AppProps> = ({title, genre, year}) => (
  <MainPage
    title={title}
    genre={genre}
    year={year}
  />
);

export default App;
