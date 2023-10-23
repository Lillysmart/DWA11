
import { createStore, counterReducer } from '/model/store.js';

const store = createStore(counterReducer);

const countDisplay = document.querySelector('.counter__value');
const incrementButton = document.querySelector('.counter__button[data-key="add"]');
const decrementButton = document.querySelector('.counter__button[data-key="subtract"]');
const resetButton = document.querySelector('.counter__button[data-key="reset"]');

function updateCountDisplay() {
  countDisplay.value = store.getState().count;
}

store.subscribe(updateCountDisplay);

// Scenario 1: Increment the counter by one
console.log('Scenario 1: Initial State (0)');
console.log('Initial State:', store.getState().count);

// Scenario 2: Increment the counter by clicking the "Add" button
console.log('Scenario 2: Increment by 1 (1)');
incrementButton.addEventListener('click', () => {
  store.dispatch({ type: 'ADD' });
});

// Scenario 3: Decrement the counter by clicking the "Subtract" button
console.log('Scenario 3: Decrement by 1 (0)');
decrementButton.addEventListener('click', () => {
  store.dispatch({ type: 'SUBTRACT' });
});

// Scenario 4: Reset the counter by clicking the "Reset" button
console.log('Scenario 4: Reset (0)');
resetButton.addEventListener('click', () => {
  store.dispatch({ type: 'RESET' });
});
