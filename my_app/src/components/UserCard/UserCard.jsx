import './userCard.css'

const UserCard = ({ name, surname, email }) => {

	return (
		<div className='common-user-card'>
			<div>{ `Name : ${name}` }</div>
			<div>{ `Surname : ${surname}` }</div>
			<div>{ `Email : ${email}` }</div>
		</div>
	)
};

export default UserCard;
