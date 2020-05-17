import {Action} from "./actions";

const initialState = {

    isWaiting: false,
    purchases: [],
};

function reducer(state = initialState, action){
    switch(action.type) {
        case Action.LoadPurchases:
        return{
            ...state,
            purchases: action.payload,
        }
        
        case Action.FinishAddingPurchase:
            return{
                ...state,
                purchases: [action.payload, ...state.purchases],
        };
        
        case Action.FinishDeletingPurchase:
            return{
                ...state,
                purchases: state.purchases.filter(purchase => purchase.id !== action.payload.id), 
        };
        
        case Action.LoadIncome:
        return{
            ...state,
            income: action.payload,
        }

        case Action.FinishAddingIncome:
            return{
                ...state,
                income: [action.payload, ...state.income],
        };

        case Action.FinishDeletingIncome:
            return{
                ...state,
                purchases: state.income.filter(income => income.id !== action.payload.id), 
        };
        default: 
        return state;
    }
}

export default reducer;