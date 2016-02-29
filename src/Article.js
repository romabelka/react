import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from './HOC/toggleOpen'
import hintShow from './HOC/hintShow'
import CSSTransition from 'react-addons-css-transition-group'
require('./style.css')

class Article extends Component {

    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        hintShowing: PropTypes.bool,
        hintShow: PropTypes.func,
        hintShowingMixin: PropTypes.bool,
        hintShowMixin: PropTypes.func
    };

    componentDidMount() {
        console.log('---', this.refs.container);
    }

    render() {
        return (
            <div ref="container">
                {this.getTitle()}
                {this.getHint()}
                <a href = "#" onClick = {this.select.bind(this)}>select</a>
                <CSSTransition transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getTitle() {
        const { title } = this.props.article
        const selected = this.props.selected ? "selected" : null;
        return  (
            <h3 className = {selected} onClick={this.props.toggleOpen} onMouseOver={this.props.hintShow} onMouseOut={this.props.hintShow}>
                {title}
            </h3>
        )
    }

    getHint() {
        const { body } = this.props.article;
        var divClass = "hint";
        if (!this.props.hintShowing) divClass += " hiding";
        return  (
            <div className = {divClass}>
                {body}
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null
        const {article} = this.props
        return (
            <div key="article">
                <p>{article.body}</p>
                <CommentList comments = {article.comments || []} />
            </div>
        )
    }

    select(ev) {
        ev.preventDefault()
        this.props.select()
    }

    click (event) {
        this.props.click();
    }
}

export default hintShow (toggleOpen(Article))