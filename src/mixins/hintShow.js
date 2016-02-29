export default  {
    getInitialState() {
        return {
            hintShowing: false
        }
    },

    hintShow: function() {
        this.setState({
            hintShowing: !this.state.hintShowing
        })
    }
}
