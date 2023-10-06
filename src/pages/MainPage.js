import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>홈</h1>
      <p> Main Page</p>
      <Link to="/about">마이페이지</Link>
    </div>
  );
};
export default MainPage;
