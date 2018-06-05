if (process.env.NODE_ENV !== 'production') {
    require('./index.html')
}
require('./index.scss');

// react 入口
require('./entry.jsx');