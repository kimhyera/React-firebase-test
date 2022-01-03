import React, { useState, useEffect } from 'react';

const GoodsList = () => {
  const aGoodsList = fetch('/linkage/pos_v2/contents/setGoods/goods/data/listData.php');
  //goods state
  const [goods, setGoods] = useState([]);

  //read

  useEffect(() => {
    //패치
    fetch('/linkage/pos_v2/contents/setGoods/goods/data/listData.php', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: `iPageNo=${1}&iPageSize=${8}&sStCode=S000001&sShopType=${1}&sFindType=${1}`,
    })
      .then((response) => {
        //응답을 json 형태로 파싱한다
        return response.json();
      })
      .then((datas) => {
        const OUT_ROW1 = datas[0].OUT_ROW1;
        console.log(OUT_ROW1);

        setGoods(OUT_ROW1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home wrapper">
      <section className="sale_section mt-4">
        <h2 className="h4">상품리스트</h2>

        <table className="table-custom text-center">
          <thead>
            <tr>
              <th>상품명</th>
              <th>상품상태</th>
              <th>매장판매상태</th>
              <th>온라인판매상태</th>
              <th>매장판매가</th>
              <th>
                <br />
              </th>
            </tr>
          </thead>
          <tbody id="product-list">
            {goods.map((data) => (
              <tr data-id={data.iStGoodsNo} key={data.iStGoodsNo}>
                <td>
                  [{data.iStGoodsNo}] <br />
                  <span className="product-name"> {data.sGoodsName}</span>
                </td>
                <td>{data.sDataStatus === '1' ? '정상' : '판매안함'}</td>
                <td>{data.sSellStatus === '1' ? '판매중' : '판매안함'}</td>
                <td>{data.sOrdStatus === '1' ? '판매중' : '판매안함'}</td>
                <td>{data.iSellPrice}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default GoodsList;
