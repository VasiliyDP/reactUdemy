// JSX
var app = {
    title: 'Here is app',
    // subtitle: 'App from courses',
    // options: ['One', 'Two']
};
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'Here is your options' : 'No options'}</p>
    </div>
);
// ==============================

var user = {
    name: 'Vasiliy',
    age: 28,
    location: 'Kiev' 
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Sanek'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p> || 'Sosunok ti'}
        {getLocation(user.location)}
    </div>
);



var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);