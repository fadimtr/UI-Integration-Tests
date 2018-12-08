import React from 'react';
import { inject, observer } from 'mobx-react';
import TodoList from '../components/todoList';
import TodoListToolbar from '../components/todoListToolbar';
import AddListItem from '../components/addListItem';

@inject('Store') @observer
class MainContainer extends React.Component {
    render() { 
        return <section className='main-container'>
            <TodoListToolbar list={this.props.Store.list}/>
            <TodoList list={this.props.Store.list} addItem={this.props.Store.addListItem}/>
            <AddListItem addItem={this.props.Store.addListItem}/>
        </section>;
    }
}

export default MainContainer;