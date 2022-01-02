import React, { useRef, useState, useEffect } from 'react';

import firebase from '../../service/firebase';

function Crud() {
	//goods state
	const [goods, setGoods] = useState([]);

	//firebase DB
	const dbRef = firebase.database().ref('/goods');

	//read
	useEffect(() => {
		dbRef.on('value', (snapshot) => {
			const datas = snapshot.val();
			const goodsData = [];
			for (let id in datas) {
				goodsData.push({ ...datas[id], id });
			}

			setGoods(goodsData);
		});
	}, []);

	console.log(goods);

	//id 상태값
	const nextId = useRef(goods.length);

	//input  state
	const [inputs, setInputs] = useState({
		sGoodsName: '',
		iSellPrice: '',
	});

	//input값 넘기기
	const onChange = (e) => {
		///불변성 을 지키키위함.
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	// 상품추가
	const onCreate = () => {
		const obj = {
			id: nextId.current,
			sGoodsName: inputs.sGoodsName,
			iSellPrice: Number(inputs.iSellPrice),
			likeCount: 0,
			sSellStatus: true,
			iaccumulate: 0,
		};
		// setGoods([...goods, obj]); // 방법1

		setGoods(goods.concat(obj)); // 방법2

		dbRef
			.push()
			.set(obj)
			.then(() => console.log('Data updated.'));

		setInputs({
			sGoodsName: '',
			iSellPrice: '',
		});
		nextId.current += 1;
	};

	//상품 업데이트

	//input  state
	const [editInputs, editSetInputs] = useState({
		id: '',
		sGoodsName: '',
		iSellPrice: '',
	});

	//상품 토글
	const onToggle = (e, id) => {
		e.target.classList.toggle('active');
	};

	//상품 좋아요
	const onLike = (id) => {
		setGoods(
			goods.map((item) =>
				item.id === id ? { ...item, likeCount: (item.likeCount += 1) } : item
			)
		);
	};

	//상품 수정
	const onEdit = (id) => {
		//fncSandId(id);

		const thisId = id;
		firebase
			.database()
			.ref(`/goods/${id}`)
			.on('value', (snapshot) => {
				const data = snapshot.val();
				console.log('data', data);

				editSetInputs({
					...editInputs,
					id: thisId,
					sGoodsName: data.sGoodsName,
					iSellPrice: data.iSellPrice,
				});
			});
	};

	//input값 넘기기
	const onEditChange = (e) => {
		editSetInputs({
			...editInputs,
			[e.target.name]: e.target.value,
		});
	};

	const onEditSucess = (id) => {
		firebase.database().ref(`/goods/${id}`).update(editInputs);
	};

	//상품 삭제
	const onDelect = (id) => {
		// item.id !== id 제외한 값만 새로운 배열을 만듬
		// = item.id 가 id 인 것을 제거함
		console.log(id);
		const resultArray = goods.filter((item) => item.id !== id);
		console.log(resultArray);
		setGoods(resultArray);
		//데이터 처리하는 로직
		firebase.database().ref(`/goods/${id}`).remove();
	};

	return (
		<>
			<div className="text-center py-5">
				<h2>React Firebase Database CRUD</h2>
			</div>
			<div className="row container">
				<div className="col-4 ">
					<h4 className="f3 mb-4">입력폼</h4>
					<div>
						<input
							name="sGoodsName"
							value={inputs.sGoodsName}
							placeholder="상품명"
							onChange={onChange}
						/>
					</div>
					<div>
						<input
							name="iSellPrice"
							value={inputs.iSellPrice}
							placeholder="판매가격"
							onChange={onChange}
						/>
					</div>
					<button onClick={onCreate} className="button mt-4">
						등록
					</button>
				</div>

				<div className="col-8">
					<h4 className="f3 mb-4">상품리스트</h4>

					<ul className="goods_list">
						{goods.map((item) => (
							<li key={item.id}>
								{/*<span className="mr-2">[{item.id}]</span>*/}

								<span
									className="title mr-2 text-primary"
									onClick={(e) => onToggle(e, item.id)}
								>
									{item.sGoodsName}
								</span>
								<span className="mr-4">가격: {item.iSellPrice}</span>
								<button onClick={() => onLike(item.id)}>
									❤ {item.likeCount}
								</button>

								<button
									onClick={() => onEdit(item.id)}
									className="button sm ml-4"
								>
									수정
								</button>

								<button
									onClick={() => onDelect(item.id)}
									className="button sm ml-1"
								>
									삭제
								</button>
							</li>
						))}
					</ul>

					{/* 수정폼 */}

					<div className="mt-4">
						<h4 className="f3 mb-2">수정폼</h4>
						<div>
							<input
								name="sGoodsName"
								value={editInputs.sGoodsName}
								placeholder="상품명"
								onChange={onEditChange}
							/>
						</div>
						<div>
							<input
								name="iSellPrice"
								value={editInputs.iSellPrice}
								placeholder="판매가격"
								onChange={onEditChange}
							/>
						</div>
						<button
							onClick={() => onEditSucess(editInputs.id)}
							className="button mt-4"
						>
							수정완료
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Crud;
