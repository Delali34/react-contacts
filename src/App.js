import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import AllContacts from "./components/AllContacts";
import AddUserContact from "./components/AddUserContact";
import {db} from './firebase/config';
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import {AddNewUser} from './action/UserAction'
import {useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const readData = async()=> {
    const q = query(collection(db, "contacts"), orderBy('name', 'asc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
          users.push(doc.data());
      });
      
      dispatch(AddNewUser(users));
      console.log(users);
    });
  };
   readData();
  }, []);


  const [users, setUsers] = useState([]);
  const addNewUser = (user) => {
    user.id = Math.random();
    setUsers([...users, user]);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <Container>
      <Row>
        <Col>
          <AddUserContact newUser={addNewUser} />
        </Col>
        <Col>
          <AllContacts
            userData={users}
            handleDelete={handleDelete}
            editUser={editUser}
          />
        </Col>
      </Row>
    </Container>
  );
  }

export default App;