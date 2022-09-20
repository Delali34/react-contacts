import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import AllContacts from "./components/AllContacts";
import AddUserContact from "./components/AddUserContact";

function App() {
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