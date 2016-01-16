var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrapper = require('./components/wrapper'),
    Home = require('./components/home'),
	Quiz = require('./components/quiz');
	
module.exports = (
    <Route path='/' component={Wrapper}>
        <IndexRoute component={Home}/>
		<Route path="/quiz" component={Quiz}/>
    </Route>
);