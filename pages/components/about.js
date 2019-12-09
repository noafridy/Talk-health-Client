import React, { useState } from 'react';
// export default function About() {
//     const [name, setName] = useState('noa');

//     return (
//         <div>
//             <input type="text" onChange={e => setName(e.target.value)}></input>
//             <p>This is the about page</p>
//             {name}
//         </div>
//     );
// }

export default class About extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'noa'
        }
    }

    componentDidMount() {
        console.log('2');
    }
    render() {
        console.log('1');
        return (<div>
             <h1>Hello, {this.state.name}</h1>
            </div>);
       
    }
}