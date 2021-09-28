import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: 'Título de la aplicación',
            subHeader: 'Subtítulo de la aplicación',
            content: 'Contenido'
        };
    }

    render() {
        return (
            <div className="container py-2">
                <h1>{this.state.header}</h1>
                <h2>{this.state.subHeader}</h2>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default Layout;