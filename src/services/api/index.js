import {TopstoriesResource,ItemsResource} from './resources';

export default {
    getTopstories: function () {
        return TopstoriesResource.get();
    },
    getNewsItemByid: function (id) {
        return ItemsResource.get({id: id});
    }
}