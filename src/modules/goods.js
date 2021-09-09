/* 액션 타입 만들기 */
const LIKE = 'goods/LIKE'; // 좋아요 // 버튼 클릭하여 ++
/* 액션 생성함수 만들기 */
export const like = () => ({ type: LIKE });

/* 초기 상태 선언 */

const initialState = [
	{
		iSellPrice: 100,
		iaccumulate: 750,
		id: 0,
		likeCount: 0,
		sGoodsName: '불고기 피자',
		sSellStatus: 1,
	},
	{
		iSellPrice: 100,
		iaccumulate: 750,
		id: 0,
		likeCount: 2,
		sGoodsName: '불고기 피자2',
		sSellStatus: 1,
	},
];

function goods(state = initialState, action) {
	switch (action.type) {
		case 'LIKE':
			return console.log('좋아요!!');

		default:
			return state;
	}
}

export default goods;

//...state,
//goods: state.goods.map((item) => {
//	item.id === action.id
//		? { ...item, likeCount: item.likeCount + 1 }
//		: item;
//}),
