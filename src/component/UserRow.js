import axios from 'axios';
import { Link } from 'react-router-dom';

function UserRow({ users, onRemove }) {
  const onDeleteUser = function (id) {
    // console.log(`http://localhost:3001/users/${id}`);
    // if (window.confirm('정말로 삭제하시겠습니까?')) {
    // axios
    //   .delete(`http://localhost:3001/users/${id}`)
    //   .then((response) => alert('삭제가 완료되었습니다.'));
    // fetch(`http://localhost:3001/users/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // }).then((response) => {
    //   if (response.ok) {
    //     // navigate('/');
    //   }
    // });
  };

  return (
    <tr>
      <td>{users.id}</td>
      <td>{users.userId}</td>
      <td>{users.name}</td>
      <td>{users.email}</td>
      <td>
        <Link to={`/user_update/${users.id}`} className="btn btn-modify">
          정보 수정
        </Link>
        <button
          type="button"
          className="btn btn-del"
          onClick={() => onRemove(users.id)}
        >
          정보 삭제
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
