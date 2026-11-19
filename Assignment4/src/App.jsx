import React, { useState } from 'react';
import RCB from './RCB';

function App() {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>IPL Teams</h1>

            <button onClick={() => setShow(true)}>
                RCB
            </button>

            {show && (
                <div>
                    <h2>Royal Challengers Bengaluru Players</h2>

                    <table border="1" cellPadding="10">
                        <thead>
                            <tr>
                                <th>Sl.No</th>
                                <th>Player Name</th>
                            </tr>
                        </thead>

                        <tbody>
                            {RCB.map((player, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{player}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default App;
