
const React = require('react');
const PropTypes = require('prop-types');

// 必须使用 React.createClass
const App = React.createClass({
    statics:{},
    propTypes:{},
    getInitialState() {
        return {};
    },
    getDefaultProps() {
        return {};
    },
    componentDidMount() {},
    componentWillUnmount() {},
    render() {
        return <div>ok</div>;
    }
});

module.exports = App;
