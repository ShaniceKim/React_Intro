import { Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<MyPage />} />
    </Routes>
  );
};

export default App;
