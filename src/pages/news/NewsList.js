import React from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from './usePromise';

const NewsList = ({ category }) => {
	const [loading, response, error] = usePromise(() => {
		const query = category === 'all' ? '' : `&category=${category}`;
		return axios.get(
			`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
		);
	}, [category]);

	// 대기중일 때
	if (loading) {
		return <div>대기중...</div>;
	}
	// 아직 response 값이 설정되지 않았을 때
	if (!response) {
		return null;
	}

	// 에러가 발생했을 때
	if (error) {
		return <div>에러 발생!</div>;
	}

	// response 값이 유효할 때
	const { articles } = response.data;
	return (
		<div className="row">
			{articles.map((article) => (
				<NewsItem key={article.url} article={article} />
			))}
		</div>
	);
};

export default NewsList;
