export const initialState = { 
    basket: [], 
    user: null,
};

const reducer = (state = initialState, action) => { 
    console.log(action); 
    switch (action.type) { 
        case 'ADD_TO_BASKET': 
            // Logic for adding item to basket
            return { 
                ...state, 
                basket: [...state.basket, action.item], // Assuming action has an `item` property 
            }; 

        case 'REMOVE_FROM_BASKET': 
            // Logic for removing item from basket 
            return { 
                ...state, 
                basket: state.basket.filter((item) => item.id !== action.id), // Assuming action has an `id` property 
            }; 

        default: 
            return state; 
    }
};

export default reducer;
