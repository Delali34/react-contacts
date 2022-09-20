import React from "react";
import Contacts from "./Contacts";
import { Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function AllContacts({ userData, handleDelete, editUser }) {
  const { users } = useSelector((store) => store);

 
  return (
    <Container>
      <Row>
        {users.map((user, index) => {
          return (
            <Contacts
              key={index}
              userBio={user}
              handleDelete={handleDelete}
              editUser={editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default AllContacts;