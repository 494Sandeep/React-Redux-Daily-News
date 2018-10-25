import React from 'react'
import { Link } from 'react-router-dom'
const Latest = (props) => {
    const latestShow = ({ latest }) => {
        if (latest) {
            return latest.map((item) => {
                return (
                    <div key={item.id} className="item">
                        <Link to={`/news/${item.id}`}>
                            <div className="image_cover"
                                style={{ background: `url(/images/articles/${item.img}) no-repeat` }}>
                                <div className="description">
                                    <span>{item.category}</span>
                                    <div>{item.title}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
    }
    return (
        <div className="home_latest">
            {latestShow(props)}
        </div>
    )
}
export default Latest;
