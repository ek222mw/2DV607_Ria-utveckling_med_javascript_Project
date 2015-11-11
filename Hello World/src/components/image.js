var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux');
    

var Image = React.createClass({
   
    render: function(){
        return (
            <div>
                <h2>Image</h2>
                <p>
                   <img src="src/pic/cc_mini.jpg" alt="Smiley face" height="42" width="42"/>
                </p>
            </div>
        );
    }
});



module.exports = Image;