import React from 'react';

const Board = () => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>상품명</th>
					<th>상품상태</th>
					<th>매장판매가</th>
					<th></th>
				</tr>
			</thead>

			{/*<tbody>
				{users.map((data) => {
					return (
						<tr data-id={data.id}>
							<td>
								{data.id}
								<span> {data.sGoodsName} </span>
							</td>
							<td> {data.sDataStatus}</td>
							<td> {data.iSellPrice}원</td>
							<td>
								<Link
									to={`/board/view/${data.id}`}
									className="btn btn-primary "
								>
									수정
								</Link>
								<button
									type="button"
									onClick={() => removeUser(data.id)}
									class="btn btn-primary button-del"
								>
									삭제
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>*/}
		</table>
	);
};

export default Board;
