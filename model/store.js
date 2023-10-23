
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'SUBTRACT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function createStore(reducer) {
  let state = reducer(undefined, {});
  const subscribers = [];

  function dispatch(action) {
    state = reducer(state, action);
    subscribers.forEach(subscriber => subscriber(state));
  }

  function subscribe(subscriber) {
    subscribers.push(subscriber);
    return () => {
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  }

  return { dispatch, subscribe, getState: () => state };
}

export { createStore, counterReducer };
