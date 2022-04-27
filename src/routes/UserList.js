import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserRow from '../component/UserRow';

function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    fetch(`http://localhost:3001/users`)
      .then((response) => {
        console.log('getUser');
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const onRemove = function (uid) {
    fetch(`http://localhost:3001/users/${uid}`, { method: 'delete' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fetch(`http://localhost:3001/users`)
          .then((response) => {
            console.log('getUser');
            return response.json();
          })
          .then((data) => {
            console.log(data);
          });
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h2 className="container-title">User List</h2>
      <div className="contents">
        <div className="btn-wrap">
          <Link to="/user_create" className="btn btn-create">
            회원 추가
          </Link>
        </div>
        <div className="list-wrap">
          <table>
            <colgroup>
              <col width="10%" />
              <col width="15%" />
              <col width="20%" />
              <col width="30%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th>No.</th>
                <th>ID</th>
                <th>이름</th>
                <th>이메일</th>
                <th>확인</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users) => (
                <UserRow users={users} key={users.id} onRemove={onRemove} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserList;
