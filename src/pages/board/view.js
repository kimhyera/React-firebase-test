import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GoodsContext } from '../../store/goodsContext';

const EditUser = (props) => {
	console.log(props);
	const { editUser, users } = useContext(GoodsContext);
	const [selectedUser, setSelectedUser] = useState({});
	const history = useHistory();
	const currentUserId = props.match.params.id;

	useEffect(() => {
		const userId = currentUserId;
		const selectedUser = users.find((user) => user.id === userId);
		setSelectedUser(selectedUser);
	}, [currentUserId, users]);

	const onChange = (e) => {
		setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		editUser(selectedUser);
		history.push('/');
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<span>상품명:</span>
				<input
					type="text"
					value={selectedUser.sGoodsName}
					onChange={onChange}
					name="name"
					placeholder="Enter user"
					required
				/>
			</div>
			<div>
				<span>판매상태:</span>
				<input
					name="name"
					onChange={onChange}
					value={selectedUser.sDataStatus}
					type="text"
				/>
			</div>
			<div>
				<span>판매가:</span>
				<input
					name="name"
					onChange={onChange}
					value={selectedUser.iSellPrice}
					type="text"
				/>
			</div>
			<div style={{ marginTop: '5px' }}>
				<button type="submit" color="warning">
					Update
				</button>
				<div color="danger">
					<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
						Cancel
					</Link>
				</div>
			</div>
		</form>
	);
};

export default EditUser;
