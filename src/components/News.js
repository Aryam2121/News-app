import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './spinner'; 


const News = (props) => {
    const { setProgress, apiKey, country, category, pageSize } = props;
   
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

   const updateNews = async () => {
    setProgress(10);
    const url = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&country=${country}&topic=${category}&page=${page}&max=${pageSize}`;
    
    setLoading(true);
    try {
        const response = await fetch(url);
        const data = await response.json();
        setProgress(70);

        if (response.ok) {
            setArticles(data.articles);
            setTotalResults(data.totalArticles); // GNews me 'totalArticles' aata hai
            setLoading(false);
        } else {
            console.error('Error fetching news data:', data);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

    setProgress(100);
};

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(category)} - NewsDose`;
        updateNews(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

   const fetchMoreData = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&country=${country}&topic=${category}&page=${page + 1}&max=${pageSize}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            setArticles(articles.concat(data.articles));
            setTotalResults(data.totalArticles);
            setPage((prevPage) => prevPage + 1);
        } else {
            console.error('Error fetching more news data:', data);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
                NewsDose - Top {capitalizeFirstLetter(category)} Headlines
            </h1>
            {loading && <Spinner />} {/* Display spinner while loading */}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />} 
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title || ""}
                                    description={element.description || ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
    apiKey: PropTypes.string.isRequired,
};

export default News;
