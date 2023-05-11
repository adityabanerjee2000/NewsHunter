import React, {useEffect,useState} from "react"; //React Hooks
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  


  const updateNews = async () =>
  {
    // console.log("cdm");
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category
=${props.category
}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    // console.log(parseData);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  }

  useEffect(() => {
    // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsHunter`;
    updateNews();
    // eslint-disable-next-line
  }, [])
  

  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
   
  
  //     setPage(page+1);
  //     updateNews();
  // };



  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category
=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat( parseData.articles));
    setTotalResults(parseData.totalResults)
    // console.log(parseData);
    
  };


    // console.log("Render Method");
    return (
        <>
          <h1 className="text-danger text-center" style={{margin: "35px 0px", marginTop: "90px"}}>NewsHunter -Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
              <div className="container">
              <div className="row">
                {articles.map((element) => {
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title ? element.title : ""}
                          description={
                            element.description ? element.description : ""
                          }
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    );
                  })}
              </div>
              </div>
          </InfiniteScroll>
        </>
    );
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category
: 'general',
}

News.propTypes = {

  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string

}

export default News;














// async componentDidMount() {
//   // console.log("cdm");
//   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category
// =${props.category
// }&apiKey=c1a88cfcf0384f36b3ec5c0ffb2e52b3&page=1&pageSize=${props.pageSize}`;
  // this.setState({ loading: true });
  // let data = await fetch(url);
  // fetch api returns a promise
  // async function in its own body wait for resolving few promises
  // async function is wait for resolve the promise (line 22 is a pomise here)
  // let parseData = await data.json();
  // console.log(parseData);
//   this.setState({
//     articles: parseData.articles,
//     totalResults: parseData.totalResults,
//     loading: false,
//   });
// }




// handlePrevClick = async () => {
  // console.log("Previous");
//     this.setState({ loading: true });
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category
// =${props.category
// }&apiKey=c1a88cfcf0384f36b3ec5c0ffb2e52b3&page=${
//       this.state.page - 1
//     }&pageSize=${props.pageSize}`;

//     let data = await fetch(url);
//     let parseData = await data.json();
//     console.log(parseData);
//     this.setState({
//       page: this.state.page - 1,
//       articles: parseData.articles,
//       loading: false,
//     });
    // this.setState({page: this.state.page - 1});
    // this.updateNews();
// };




// handleNextClick = async () => {
  // console.log("Next");

//     if (
//       !(
//         this.state.page + 1 >
//         Math.ceil(this.state.totalResults / props.pageSize)
//       )
//     ) {
//       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category
// =${props.category
// }&apiKey=c1a88cfcf0384f36b3ec5c0ffb2e52b3&page=${
//         this.state.page + 1
//       }&pageSize=${props.pageSize}`;
//       this.setState({ loading: true });
//       let data = await fetch(url);
//       let parseData = await data.json();
//       this.setState({
//         page: this.state.page + 1,
//         articles: parseData.articles,
//         loading: false,
//       });
//     }
    // this.setState({page: this.state.page + 1});
    // this.updateNews();
// };
