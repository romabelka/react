import React, { Component } from 'react'

export default function (CustomComponent) {
    return class extends Component {
        state = {
            hintShowing: false
        }

        render() {
            return <CustomComponent
                {...this.state}
                {...{hintShow: this.hintShow}}
                {...this.props}
                />
        }

        hintShow = () => {
            this.setState({
                hintShowing: !this.state.hintShowing
            })
        }
    }
}
