import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SelectedGallary, ClearSelectedGallery } from '../actions'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
import LikesCounter from './likes'
const setting = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}
//render Gallery
const renderGalleryItem = (props) => {
    if (props) {
        const gallery = props[0];
        return (
            <div className="gallery_item">
                <h3> The Best of  {gallery.artist}</h3>
                <Slider {...setting}>
                    {gallery.images.map((item, index) => {
                        return (
                            <div key={index} className="outline-none">
                                <div className="image"
                                    style={{ background: `url(/images/galleries/${item.img}) no-repeat` }}>
                                </div>
                                <div className="description">
                                    {item.desc}
                                </div>
                                <div>
                                    <LikesCounter likes={gallery.likes[0]} dislikes={gallery.likes[1]}
                                        itemId={gallery.id} section="galleries"
                                        type="HANDLE_LIKES_GALLERY" />
                                </div>
                            </div>
                        )
                    })}
                </Slider>

            </div>
        )
    }
}
// GalleryItem Class Component 
class GalleryItem extends Component {
    componentDidMount = () => {
        this.props.SelectedGallary(this.props.match.params.id);
    }
    render() {
        return (
            <div className="gallery_container">
                {renderGalleryItem(this.props.gallery.selected)}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        gallery: state.gallery
    }
}
function mapDispatchTProps(dispatch) {
    return bindActionCreators({ SelectedGallary, ClearSelectedGallery }, dispatch)
}
export default connect(mapStateToProps, mapDispatchTProps)(GalleryItem);