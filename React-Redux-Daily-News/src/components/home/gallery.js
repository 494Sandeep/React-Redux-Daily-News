import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
const setting = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}
const renderGallery = ({ gallery }) => {
    if (gallery) {
        return (
            <Slider {...setting}>
                {gallery.map((item) => {
                    return (
                        <div className="outline-none" key={item.id}>
                            <Link to={`/galleries/${item.id}`}  className="gallery_item">
                                <div className="image" style={{ background: `url(/images/galleries/${item.images[0].img}) no-repeat` }}>
                                    <h3>{item.artist}</h3>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}
const Gallery = (props) => {
    return (
        <div className="awesome_gallery">
            <h2>Awesome Gallery</h2>
            {renderGallery(props)}
        </div>
    )
}
export default Gallery;
