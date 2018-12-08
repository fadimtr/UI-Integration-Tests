import { observable, action } from 'mobx';

class ListStore {

  @observable list = [];

  @action addListItem = (item) => {
    const newItem = {
      value : item,
      id: this.list.length
    };

    this.list = this.list.slice();
    this.list.push(newItem);
  }

}

export default new ListStore();