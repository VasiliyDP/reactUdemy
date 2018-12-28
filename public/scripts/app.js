'use strict';

// JSX
var app = {
    title: 'Here is app'
    // subtitle: 'App from courses',
    // options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here is your options' : 'No options'
    )
);
// ==============================

var user = {
    name: 'Vasiliy',
    age: 28,
    location: 'Kiev'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Sanek'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ) || 'Sosunok ti',
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
