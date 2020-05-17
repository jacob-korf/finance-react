export const Action = Object.freeze({
    LoadPurchases: 'LoadPurchases', LoadIncome: 'LoadIncome',
});

export function loadPurchases(purchases){
    return {
        type: Action.LoadPurchases,
        payload: purchases,
    };
}

export function FinishAddingPurchase(purchase){
    return {
        type: Action.FinishAddingPurchase,
        payload: purchase,
    };
} 

export function finishDeletingPurchase(purchase){
    return{
        type: Action.FinishDeletingPurchase,
        payload: purchase,
    };
}
export function loadIncome(income){
    return {
        type: Action.LoadIncome,
        payload: income,
    };
}

export function FinishAddingIncome(income){
    return {
        type: Action.FinishAddingIncome,
        payload: income,
    };
} 

export function finishDeletingIncome(income){
    return{
        type: Action.FinishDeletingIncome,
        payload: income,
    };
}

function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}


const host = 'https://financeapi.duckdns.org:8442';

export function loadUserPurchases(user){
    return dispatch => {
        fetch(`${host}/finance/${user}`)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                 if(data.ok) {
                    dispatch(loadPurchases(data.purchases));
                }
            })
        .catch(e => console.error(e));
    };
}

export function startAddingPurchase(username, amount, description){
    const purchase = {username, amount, description};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchase),
    }
    return dispatch => {
        fetch(`${host}/finance`, options)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                 if(data.ok) {
                    purchase.id = data.id;
                    dispatch(FinishAddingPurchase(purchase));
                }
            })
        .catch(e => console.error(e));
    };
}

export function startDeletingPurchase(purchaseId) {
    const options = {
        method: 'DELETE',
    };

    return dispatch => {
        fetch(`${host}/finance/${purchaseId}`, options)
         .then(checkForErrors)
         .then(response => response.json())
         .then(data => {
             if(data.ok) {
                dispatch(finishDeletingPurchase(purchaseId));
             }
         })
         .catch(e => console.error(e));
    };
}


export function loadUserIncome(user){
    return dispatch => {
        fetch(`${host}/income/${user}`)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                 if(data.ok) {
                    dispatch(loadIncome(data.income));
                }
            })
        .catch(e => console.error(e));
    };
}

export function startAddingIncome(username, amount, description){
    const income = {username, amount, description};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(income),
    }
    return dispatch => {
        fetch(`${host}/income`, options)
            .then(checkForErrors)
            .then(response => response.json())
            .then(data => {
                 if(data.ok) {
                    income.id = data.id;
                    dispatch(FinishAddingIncome(income));
                }
            })
        .catch(e => console.error(e));
    };
}

export function startDeletingIncome(incomeId) {
    const options = {
        method: 'DELETE',
    };

    return dispatch => {
        fetch(`${host}/income/${incomeId}`, options)
         .then(checkForErrors)
         .then(response => response.json())
         .then(data => {
             if(data.ok) {
                dispatch(finishDeletingIncome(incomeId));
             }
         })
         .catch(e => console.error(e));
    };
}