import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { AddNewUser } from "../action/UserAction";
import { useDispatch, connect } from "react-redux";

function AddUserContact(props) {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [location, setLocation] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		// if (name === "" || gen === "" || email === "") {
		// 	alert("Please fill all the fields");
		// }

		let userBio = { name, number, location, id: uuidv4() };
		dispatch(AddNewUser(userBio));
		setName("");
		setNumber("");
		setLocation("");
	};
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Phone number</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter number"
						value={number}
						onChange={(e) => {
							setNumber(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Location</Form.Label>
					<Form.Control
						type="text"
						placeholder="location"
						value={location}
						onChange={(e) => {
							setLocation(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

const mapDispatch = { AddNewUser: AddNewUser };

export default connect(null, mapDispatch)(AddUserContact);