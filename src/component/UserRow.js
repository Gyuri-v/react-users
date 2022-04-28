import axios from 'axios';
import { Link } from 'react-router-dom';

function UserRow({ users, onRemove }) {
  return (
    <tr>
      <td>{users.id}</td>
      <td>{users.userid}</td>
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
