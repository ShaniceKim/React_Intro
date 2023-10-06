import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const linkStyle = {
  fontSize: '14px', // 원하는 글꼴 크기로 설정
  textDecoration: 'none', // 밑줄 제거
  color: 'black', // 링크 텍스트 색상 설정 (원하는 색상으로 변경)
};

const Layout = () => {
  return (
    <div>
      <header
        style={{
          background: 'white',
          padding: '16px',
          fontSize: '17px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <img
            src="/img/your-emotion.jpeg"
            alt=""
            style={{
              width: '180px',
              height: '150px',
              marginRight: '10px',
            }}
          /> */}
        </div>
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
