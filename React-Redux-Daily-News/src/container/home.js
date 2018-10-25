import React, { Component } from 'react'
import { connect } from 'react-redux'
import { latestNews, otherNews , getGAllery } from '../actions'
import { bindActionCreators } from 'redux'
//component 
import Latest from '../components/home/latest'
import OtherNews from '../components/home/otherNews'
import Gallery from '../components/home/gallery'
class Home extends Component {
    componentWillMount = () => {
        this.props.latestNews();
        this.props.otherNews();
        this.props.getGAllery();
    }


    render() {
        return (
            <div>
                <Latest latest={this.props.articles.latest} />
                <OtherNews other={this.props.articles.other} />
                <Gallery gallery={this.props.gallery.showGallery}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        articles: state.articles,
        gallery: state.gallery
    }
}
function mapDispatchToProps(dispatch) {
    return (bindActionCreators({ latestNews, otherNews, getGAllery }, dispatch))
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);