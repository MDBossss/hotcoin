import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../post/Post";
import Loading from "../loading/Loading";
import axios from "axios";

const Posts = ({ keyword }) => {
	const [articles, setArticles] = useState([]);
	const [status, setStatus] = useState("failed");
	const [starVisible, setStarVisible] = useState(true);


	const options = {
		method: "GET",
		url: "https://api.newscatcherapi.com/v2/search",
		params: { q: keyword, lang: "en", sort_by: "relevancy", page: "1" },
		headers: {
			"x-api-key": process.env.REACT_APP_NEWS_API,
		},
	};

	useEffect(() => {
		axios
			.request(options)
			.then((response) => {
				setArticles(response.data.articles);
				setStatus(response.data.status);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [keyword]);

	return (
		<>
			{status === "ok" ? (
				articles?.map((article, index) => (
					<Post
						key={index}
						starVisible={starVisible}
						article={article}
						author={article.author}
						description={article.summary}
						sourceName={article.clean_url}
						title={article.title}
						url={article.link}
						imageUrl={article.media}
					/>
				))
			) : (
				<Loading />
			)}
		</>
	);
};

export default Posts;
