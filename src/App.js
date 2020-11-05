import React, {useState} from 'react'
import UserTable from './components/UserTable'
import UserForm from './components/UserForm'
import EditUserForm from './components/EditUserForm'
import {Layout, Row, Col} from 'antd'
import 'antd/dist/antd.css';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const { Header, Footer, Content } = Layout;

  const dataSource = [
    {
      id: uuidv4(),
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      id: uuidv4(),
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      id: uuidv4(),
      name: 'Peter',
      age: 54,
      address: '32 Downing Street',
    },
  ];

  const [users, setUsers] = useState(dataSource);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', age: null, address: null
  });

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  const editUser = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, age: user.age, address: user.address
    })
  }

  const updateUser = (user) => {
    setEditing(false);
    setUsers(users.map(val => { 
      return val.id === user.id ? user : val 
    }))
  }

  const deleteUser = (id) => {
    const usersFiltered = users.filter((item, i)=>{ return item.id !== id });
    setUsers(usersFiltered);
  }

  return (
    <Layout>
      <Header>
        <h1 style={{color: 'white'}}>My First Crud</h1>
      </Header>
      <Content>
        <br />
        <br />
        <Row justify="space-around">
          <Col xs={20} sm={14} md={12} lg={8}>
            { editing?(
              <div>
                <h2>Edit User</h2>
                <EditUserForm setEditing={setEditing} updateUser={updateUser} currentUser={currentUser} />
              </div>
            ):(
              <div>
                <h2>Add User</h2>
                <UserForm addUser={addUser} />
              </div>
            )}
          </Col>
          <Col xs={20} sm={20} md={16} lg={12}>
            <h2>View Users</h2>
            <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
          </Col>
        </Row>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
