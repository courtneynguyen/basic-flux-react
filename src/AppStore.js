import AppDispatcher from './Dispatcher';
import ActionType from './ActionType';
import {EventEmitter} from 'fbemitter';

var emitter = new EventEmitter();
var _cart = 0;

function increment(payload){
	_cart += 1;
	console.log(_cart);
}

export default class AppStore extends EventEmitter{
	static getCount(){
		return _cart;
	}

	static emitChange(action) {
		emitter.emit('change');
	};

	static addChangeListener(callback) {
		emitter.addListener('change', callback);
	}
}

AppDispatcher.register((payload) => {
	var action = payload;
	console.log('get here', action);
	switch(action.actionType){
		case ActionType.INCREMENT:
		increment(action.payload);
		break;
	}
	AppStore.emitChange();
	return true;
});
