import React from 'react'
import { Link } from 'react-router-dom'
const OtherNews = (props) => {
    const otherNews = ({ other }) => {
        if (other) {
            return other.map((item) => {
                return (
                    <div key={item.id}>
                        <Link to={`/news/${item.id}`} className="item">
                            <div className="left" style={{ background: `url(/images/articles/${item.img}) no-repeat` }}>
                            </div>
                            <div className="right">
                                <h3>{item.title}</h3>
                                <div className="category_tag">
                                    {item.category}
                                </div>
                                <div className="tag">
                                    <span>
                                        <i className="fa fa-eye"></i>
                                        {item.views}
                                    </span>
                                    <span>
                                        <i className="fa fa-thumbs-up"></i>
                                        {item.likes[0]}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
    }
    return (
        <div className="other_news">
            <h3>Other NEWS</h3>
            {otherNews(props)}
        </div>
    )
}
export default OtherNews;