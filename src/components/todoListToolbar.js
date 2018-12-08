import React from 'react';

class Main extends React.Component {
    state = {  }
    render() { 
        return <section>
            {`Your List includes ${this.props.list.length} items`}
        </section>;
    }
}

export default Main;