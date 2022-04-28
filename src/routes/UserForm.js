import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = useRef(null);
  const userPassword = useRef(null);
  const userName = useRef(null);
  const userEmail = useRef(null);

  const [currentUserId, setCurrentUserId] = useState('');
  const [currentUserPassword, setCurrentUserPassword] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUserEmail, setCurrentUserEmail] = useState('');

  const getCurrentUser = async () => {
    fetch(`http://localhost:3001/users?id=${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setCurrentUserId(data[0].userid);
        setCurrentUserPassword(data[0].password);
        setCurrentUserName(data[0].name);
        setCurrentUserEmail(data[0].email);
        console.log(data);
      });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  function onChangeId(event) {
    setCurrentUserId(event.target.value);
  }
  function onChangePassword(event) {
    setCurrentUserPassword(event.target.value);
  }
  function onChangeName(event) {
    setCurrentUserName(event.target.value);
  }
  function onChangeEmail(event) {
    setCurrentUserEmail(event.target.value);
  }

  function onCreateUser(event) {
    event.preventDefault();

    fetch(`http://localhost:3001/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        userid: userId.current.value,
        password: userPassword.current.value,
        name: userName.current.value,
        email: userEmail.current.value,
      }),
    }).then((response) => {
      if (response.ok) {
        alert('사용자 생성이 완료되었습니다.');
        navigate('/');
      }
    });
  }

  function onUpdateUser(event) {
    event.preventDefault();

    fetch(`http://localhost:3001/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        userid: userId.current.value,
        password: userPassword.current.value,
        name: userName.current.value,
        email: userEmail.current.value,
      }),
    }).then((response) => {
      if (response.ok) {
        alert('사용자 정보 수정이 완료되었습니다.');
        navigate('/');
      }
    });
  }

  return (
    <div className="container">
      <h2 className="container-title">
        {id === undefined ? 'Create User' : 'Update User'}
      </h2>
      <div className="contents contents-userform">
        <form
          action=""
          onSubmit={id === undefined ? onCreateUser : onUpdateUser}
        >
          <ul>
            <li>
              <input
                type="text"
                name="userid"
                placeholder="아이디"
                ref={userId}
                value={currentUserId}
                onChange={onChangeId}
              />
            </li>
            <li>
              <input
                type="password"
                name="userpassword"
                placeholder="패스워드"
                ref={userPassword}
                value={currentUserPassword}
                onChange={onChangePassword}
              />
            </li>
            <li>
              <input
                type="text"
                name="username"
                placeholder="이름"
                ref={userName}
                value={currentUserName}
                onChange={onChangeName}
              />
            </li>
            <li>
              <input
                type="email"
                name="useremail"
                placeholder="이메일"
                ref={userEmail}
                value={currentUserEmail}
                onChange={onChangeEmail}
              />
            </li>
          </ul>
          <button type="submit">완료</button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
