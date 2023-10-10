import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const linkStyle = {
  fontSize: '14px',
  textDecoration: 'none',
  color: 'black',
};
const headerStyle = {
  background: '#d4ebf8', // 밝은 파란색
  padding: '16px',
  fontSize: '17px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Layout = () => {
  return (
    <div>
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>Mood Canvas</div>
        <nav>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <li style={{ marginRight: '10px' }}>
              <Link to="/signin" style={linkStyle}>
                로그인
              </Link>
            </li>
            <li style={{ marginRight: '10px' }}>
              <Link to="/signup" style={linkStyle}>
                회원가입
              </Link>
            </li>
            <li>
              <Link to="/mypage" style={linkStyle}>
                감정기록
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
