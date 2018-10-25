import React, { Component } from 'react'
import { handleLikes } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LikesCounter extends Component {
    addLikes = (action) => {
        const newLikes = (action === 'ADD') ? [this.props.likes + 1, this.props.dislikes]
            : [this.props.likes, this.props.dislikes + 1];

        this.props.handleLikes(newLikes,
            this.props.itemId,
            this.props.section,
            this.props.type);
    }

    render() {
        return (
            <div className="likeCounter_wrapper">
                <h3>How do you feel about this ?</h3>
                <div className="addlike_container">
                    <div className="btn likes" onClick={() => this.addLikes('ADD')}>
                        <div className="hits">{this.props.likes}</div>
                        <div className="icon" >
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn dislikes" onClick={() => this.addLikes('REMOVE')}>
                        <div className="hits">{this.props.dislikes}</div>
                        <div className="icon" >
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
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
    return (bindActionCreators({ handleLikes }, dispatch))
}
export default connect(mapStateToProps, mapDispatchToProps)(LikesCounter);
