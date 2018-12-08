import React from 'react';

class AddListItem extends React.Component {

    state = { itemText : ''}

    addItem = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({ itemText : ''});
    }

    render() { 
        return <section>
            <form onSubmit={this.addItem} autoComplete='off'>
                <input  placeholder='New Item..' 
                        type='text' 
                        id='item' 
                        value={this.state.itemText} onChange={(e) => this.setState({ itemText : e.target.value})}
                />
            </form>
        </section>;
    }
}

export default AddListItem;