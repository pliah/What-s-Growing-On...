
export const initialState = {
    basket: [],
}
const addToBasket = (state, action) => {
    debugger;
    let itemInItems = action.payload.items.find(_item => action.payload.item.id === _item.id)
    if (itemInItems.amount >= action.payload.item.amount) {
       action.payload.item.arrName=action.payload.arrName;
        const newBasket = [...state.basket, action.payload.item]
        return { ...state, basket: newBasket }
    }
    else {
        action.payload.amountError()
        return { ...state, basket: [...state.basket] }
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            const newState=addToBasket(state, action);
            console.log('new basket :',newState);
            return  newState; 
        case 'REMOVE_FROM_CART':
            const newCart = state.basket.filter((basketItem) => basketItem.id !== action.id)
            return { ...state, basket: newCart }
        case 'SET_AMOUNT':
            debugger
            let newCart2 =state.basket
            const item = action.payload.items.find((basketItem) => basketItem.id === action.payload.id)
            if (item?.amount >= action.payload?.amount) {
                newCart2.forEach(element => {if(element.id===action.payload.id)element.amount=action.payload.amount });
                return { ...state, basket: newCart2 };break;
            }
            default:
                return state
        }
    }  
export default reducer;

