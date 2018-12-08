import React from 'react';

class TodoList extends React.Component {
    state = {  }
    render() { 
        return <>
            <section>
                <h3>Your Todo List:</h3>
                { this.props.list.length == 0 ? <div>List is empty!</div> : 
                    <ul>
                        {
                            this.props.list.map((item) => {
                                return <li key={item.id}>
                                            {item.value}
                                        </li>
                            })
                        }
                    </ul>
                }
            </section>
        </>;
    }
}

export default TodoList;