import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectedNews, clearSelectedNews } from '../actions'
import { bindActionCreators } from 'redux'
//component 
import NewsComponent from '../components/news'

class News extends Component {
    componentWillMount = () => {
        this.props.selectedNews(this.props.match.params.id);
    }
    componentWillUnmount = () => {
        this.props.clearSelectedNews();
    }
    render() {
        return (
            <div>
                <NewsComponent news={this.props.articles.selected}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}
function mapDispatchToProps(dispatch) {
    return (bindActionCreators({ selectedNews, clearSelectedNews }, dispatch))
}
export default connect(mapStateToProps, mapDispatchToProps)(News);