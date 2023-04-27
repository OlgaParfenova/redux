const defaultState = {
    customers: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]};
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]};
        case REMOVE_CUSTOMERS:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
        default:
            return state;
    }
}
