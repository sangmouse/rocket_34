import React, { useEffect, useState } from 'react'
import s from 'styles/users2.module.scss'
import axios from 'axios'

interface User {
  id: number;
  name: string;
}

export default function Users2(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    const response = await axios.get('http://localhost:3000/users');
    setUsers(response.data);
  }

  const handleDelete = async (id: number) => {
    const response = await axios.delete(`http://localhost:3000/users/${id}`);
    if (response.status === 200) {
      setUsers(users.filter(user => user.id !== id));
    }
  }

  const handleCreateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username) {
      alert('Please enter a name to create a new user');
      return;
    }
    const response = await axios.post('http://localhost:3000/users', { name: username });
    if (response.status === 201) {
      const newUser = response.data;
      setUsers([...users, newUser]);
      setUsername('');
    }
  }

  const handleEditUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username) {
      alert('Please enter a name to edit the user');
      return;
    }
    const response = await axios.put(`http://localhost:3000/users/${editingUser?.id}`, { name: username });
    if (response.status === 200) {
      const updatedUser = response.data;
      setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
      setEditingUser(null);
      setUsername('');
    }
  }

  return (
    <div>
      <h1>Users List page</h1>
      <div className={s["users-form"]}>
        <form onSubmit={editingUser ? handleEditUser : handleCreateUser}>
          <label htmlFor="username">Username</label>
          <input type="text"
            name='username'
            id='username'
            placeholder='Your user name'
            className={s["users-form__textbox"]}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            defaultValue={editingUser?.name} />
          <button type="submit">{editingUser ? 'Edit user' : 'Create new user'}</button>
        </form>
      </div>
      <br />
      <br />
      <table className={s.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button className={`${s.btn} ${s.btn__edit}`} onClick={() => {
                  setEditingUser(user);
                  setUsername(user.name);
                }}>Edit</button>
              </td>
              <td>
                <button className={`${s.btn} ${s.btn__delete}`} onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}