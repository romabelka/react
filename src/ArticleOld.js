import React, { Component } from 'react'
import CommentList from './CommentList'
import toggleOpen from './mixins/toggleOpen'
import hintShow from './mixins/hintShow'

const Article = React.createClass({
    mixins: [toggleOpen, hintShow],

    componentDidMount() {
        console.log('---', this.refs.container);
    },

    render() {
        return (
            <div ref="container">
                {this.getTitle()}
                <a href = "#" onClick = {this.select}>select</a>
                {this.getHint()}
                {this.getBody()}
            </div>
        )
    },

    getTitle() {
        const { title } = this.props.article
        const selectedStyle = this.props.selected ? {color: 'red'} : null;
        return  (
            <h3 style = {selectedStyle} onClick={this.toggleOpen} onMouseOver={this.hintShow} onMouseOut={this.hintShow}>
                {title}
            </h3>
        )
    },

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return (
            <div>
                <p>{article.body}</p>
                <CommentList comments = {article.comments || []} />
            </div>
        )
    },



    getHint() {
        const { body } = this.props.article;
        var divClass = "hint";
        if (!this.state.hintShowing) divClass += " hiding";
        console.log (this.state.hintShowing);
        return  (
            <div className = {divClass}>
                {body}
            </div>
        )
    },

    select(ev) {
        ev.preventDefault()
        this.props.select()
    }
})

export default Article