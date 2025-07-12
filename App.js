// const heading = React.createElement('h1', { id: 'heading', xyz: 'abs' }, 'Hello, Rohit!')

const parent = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: 'child', key: 'child1' },
        [React.createElement('h1', {key: 1}, 'I am god.'),
        React.createElement('h2', {key: 2}, 'I am a child of god.')
        ]
    ),
    React.createElement('div', { id: 'child2', key: 'child2' },
        [React.createElement('h1', {key: 1}, 'I am god.'),
        React.createElement('h2', {key: 2}, 'I am a child of god.')
        ]
    ),
    ]
);

const parent2 = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: 'child', key: 'child1' },
        [React.createElement('h1', {key: 1}, 'I am god.'),
        React.createElement('h2', {key: 2}, 'I am a child of god.')
        ]
    ),
    React.createElement('div', { id: 'child2', key: 'child2' },
        [React.createElement('h1', {key: 1}, 'I am god.'),
        React.createElement('h2', {key: 2}, 'I am a child of god.')
        ]
    ),
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));


root.render(parent);
root2.render(parent2);
console.log(parent);