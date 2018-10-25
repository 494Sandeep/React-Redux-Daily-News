import React from 'react'
import LikesCounter from '../container/likes'

const renderNews = ({ news }) => {
    if (news) {
        return (
            news.map((item) => {
                return (
                    <div key={item.id} >
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {item.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {item.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                           <h2>{item.title}</h2>
                           <span>Article By : <strong>{item.author}</strong> </span>
                        </div>
                        <img src={`/images/articles/${item.img}`}  alt={item.img}/>
                        <div className="body">
                            {item.body}
                        </div>
                        <div>
                           <LikesCounter likes={item.likes[0]} dislikes={item.likes[1]} 
                                         itemId = {item.id} section="articles"
                                         type ="HANDLE_LIKES_ARTICLES"/>
                        </div>
                    </div>
                )
            })
        )
    }
}
const NewsComponent = (props) => {
    return (
        <div className="news_container">
            {renderNews(props)}
        </div>
    )
}
export default NewsComponent;