
import React from "react";
import { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserContact from "./EditUserContact";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../action/UserAction";

function Contacts({ handleDelete, userBio, editUser }) {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	const dispatch = useDispatch();


	const deleteUser = () => {
		// handleDelete(userInfo.id);
		// delete userInfo.id;
		dispatch(DeleteUser(userBio.id));
	  };

	
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Contact Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<EditUserContact
            hide={handleClose}
            userBio={userBio}
            editUser={editUser}
          />
				</Modal.Body>
			</Modal>
			<Col md={3} style={{ width: "12rem", marginBottom: "10px" }}>
				<Card>
					<Card.Body>
						<Card.Title>Name:{userBio.name}</Card.Title>
						<Card.Subtitle className="mb-2 ">
							Phone Number:{userBio.number}
						</Card.Subtitle>
						<Card.Text>location:{userBio.location}</Card.Text>
						<Button href="#" size="sm" variant="primary" onClick={handleShow}>
							Edit
						</Button>
						<Button href="#" size="sm" variant="danger" onClick={deleteUser}>
							Delete
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

export default Contacts;