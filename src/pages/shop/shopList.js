import React, { useState, useEffect } from 'react';

import firebase from '../../service/firebase';

const ShopList = () => {
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
	return (
		<div className="home wrapper">
			<section className="tab_section">
				<div className="tab_wrap">
					<ul className="d-flex">
						<li>
							<button>빠른배달</button>
						</li>
						<li className="ml-4">
							<button>배달</button>
						</li>
						<li className="ml-4">
							<button>포장</button>
						</li>
					</ul>
				</div>
			</section>

			<section className="sale_section mt-4">
				<h2 className="h4">가장인기있는 모모모 </h2>
				<ul className="sale_list d-flex">
					{goods.map((data) => (
						<li key={data.id}>
							<div className="thumb"></div>

							<span>순위 1</span>

							<div className="txt_box">
								<p>{data.sGoodsName}</p>
								<p> 가격 {data.iSellPrice} 원</p>
								<p>누적판매량 {data.iaccumulate} 개 </p>
							</div>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default ShopList;
