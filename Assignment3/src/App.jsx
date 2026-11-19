
import React from 'react';

// Non-React Component
function Hello() {
    return (
        <h2>Hello, Welcome to React!</h2>
    );
}

function App() {
    return (
        <div>
            <h1>Non-React Component</h1>
            <Hello />
        </div>
    );
}

export default App;
