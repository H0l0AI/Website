import {
    action, autorun, observable, toJS,
} from 'mobx';

export default class PageStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable value = '';
    @action.bound setValue(valueToSet){
        this.value=valueToSet
    }
}