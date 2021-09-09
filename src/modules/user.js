/* 액션 타입 만들기 */
const LOGIN = 'loginStatus/LOGIN';
/* 액션 생성함수 만들기 */
export const loginStatus = () => ({ type: LOGIN });

/* 초기 상태 선언 */
const initialState = {
	login: false,
};

function user(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN':
			return {
				login: true,
			};
		default:
			return state;
	}
}

export default user;
