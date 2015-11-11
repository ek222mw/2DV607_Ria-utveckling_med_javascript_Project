var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrapper = require('./components/wrapper');
    Home = require('./components/home'),
	Image = require('./components/image');
	
	
module.exports = (
    <Route path='/' component={Wrapper}>
        <IndexRoute component={Home}/>
		<Route path='/image' component={Image}/>
    </Route>
);