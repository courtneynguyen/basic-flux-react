import AppDispatcher from './Dispatcher';
import ActionType from './ActionType';

export default class ActionCreator{
	static incrementCount(value){
		AppDispatcher.dispatch({
			actionType: ActionType.INCREMENT,
			payload: value
		});
	}
}
