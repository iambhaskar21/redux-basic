import { legacy_createStore as createStore } from 'redux';
const reducerFn = (state = { counter: 10 }, action) => {
    if (action.type === 'INC') {
        return {
            counter: state.counter + 1
        }
    }
    else if (action.type === 'DEC') {
        return {
            counter: state.counter - 1
        }
    }
    else if (action.type === 'ADD_10') {
        return {
            counter: state.counter + action.payload
        }
    }
    return state
}
export const store = createStore(reducerFn)