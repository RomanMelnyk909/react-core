import { useState } from "react";
import Input from "../Input";
import UserCard from "../UserCard/UserCard";
import './registrationForm.css';

const RegistrationForm = () => {

	const [users, setUsers] = useState([]);

	const [name, setName] = useState();
	const [surname, setSurname] = useState();
	const [email, setEmail] = useState();

	const onAddUser = () => {
		const user = {
			name,
			surname,
			email,
		};

		setUsers([...users, user]);
		setName('');
		setSurname('');
		setEmail('');
	}


	const onGetName = (value) => {
		setName(value)
	};

	const onGetSurname = (value) => {
		setSurname(value)
	}

	const onGetEmail = (value) => {
		setEmail(value)
	}

	return (
		<div className="common">
			<Input label="Name: " placeholder="Enter Your Name" onChangeFunction={onGetName} value={name} />
			<Input label="Surname: " placeholder="Enter Your Surname" onChangeFunction={onGetSurname} value={surname} />
			<Input label="Email: " placeholder="Enter Your Email" onChangeFunction={onGetEmail} value={email} />
			<button type="button" onClick={onAddUser}>Add User</button>
			<div className="users-list">
				{ users.map((user, index) => {
					const { name, surname, email } = user;
					return (<UserCard key={index} name={name} surname={surname} email={email} />)
				}) }
			</div>
		</div>
	);
};

export default RegistrationForm;
