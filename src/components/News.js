import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
      }
    articles = [
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Mohammad Haris",
            "title": "FPIs Cautious on Equities; Take Out Rs 3,776 Crore in February So Far on Spike in US Bond Yields - News18",
            "description": "Foreign Portfolio Investors (FPIs) pull out a net sum of Rs 3,776 crore from the Indian equities this month (till February 16)",
            "url": "https://www.news18.com/business/fpis-cautious-on-equities-take-out-rs-3776-crore-in-february-so-far-on-spike-in-us-bond-yields-8783749.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/09/image-1200x900-48-169502325116x9.png",
            "publishedAt": "2024-02-18T09:40:44Z",
            "content": "Foreign investors adopted a cautious approach offloading Indian equities worth close to Rs 3,776 crore so far this month owing to a spike in the US bond yields and uncertainty over the interest rate … [+2506 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Mohammad Haris",
            "title": "Gold Rate Falls Today In India: Check 24 Carat Gold Price In Your City On February 18 - News18",
            "description": "Gold rate today in India: On February 18, there were fall in retail gold prices across various cities in spot market",
            "url": "https://www.news18.com/business/gold-rate-falls-today-in-india-check-24-carat-gold-price-in-your-city-on-february-18-8783649.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/10/untitled-design-8-2023-10-2570de316084e89c2406b18d471deb3f-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2024-02-18T08:11:05Z",
            "content": "Gold Rate Today In India: As of February 18, 2024, gold prices remained unchanged in India. The average rate for 10 grams remained around Rs 62,400. To provide a broader perspective, the average pric… [+2346 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Mansi Verma",
            "title": "UPI would not have been built if not for Mumbai: NPCI’s Dilip Asbe - Moneycontrol",
            "description": "This comes at a time when entrepreneurs in the financial capital of the country are uniting together to boost and promote the tech ecosystem in the city.",
            "url": "https://www.moneycontrol.com/news/technology/upi-would-not-have-been-built-if-not-for-mumbai-npcis-dilip-asbe-12297261.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2018/08/Dilip-Asbe_NPCI_COO-653x435-770x432.jpg",
            "publishedAt": "2024-02-18T08:02:20Z",
            "content": "The Unified Payment Interface (UPI) could not have been built if the National Payments Corporation of India (NPCI) had not built the product out of Mumbai, according to Dilip Asbe, managing director … [+1919 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Regulator directs 7 airlines to ensure on-time luggage delivery at airports - Mint",
            "description": "BCAS has directed major airlines to streamline baggage handling procedures to ensure timely delivery of customer baggage, following concerns of punctuality and complaints",
            "url": "https://www.livemint.com/news/bcas-directs-air-india-indigo-spicejet-vistara-air-india-express-akasa-to-ensure-on-time-delivery-of-baggage-at-airport-11708237165117.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/18/1600x900/2-0-1469492915-28AirportFog5-0_1679923828308_1708237889433.jpg",
            "publishedAt": "2024-02-18T07:25:51Z",
            "content": "The Bureau of Civil Aviation Security (BCAS) has directed initiative to streamline baggage handling procedures across major airlines operating in the country. In a letter issued to seven prominent ai… [+2997 chars]"
        }]

        capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94652af21b3e4ddf86779dcb1fb01d53&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

    }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94652af21b3e4ddf86779dcb1fb01d53&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        this.updateNews();
    }

     handlePrevClick = async () =>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94652af21b3e4ddf86779dcb1fb01d53&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })

        this.setState({ page: this.state.page - 1});
        this.updateNews();
    }

    handleNextClick = async () =>{
    //     if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    //     }else{
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94652af21b3e4ddf86779dcb1fb01d53&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);

    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }
    this.setState({ page: this.state.page + 1})
    this.updateNews();
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: '35px 0'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title} description={element.description ? element.description.slice(0, 88) : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                            source={element.source.name}
                            />

                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
