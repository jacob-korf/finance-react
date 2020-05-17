export const Action = Object.freeze({
    LoadPurchases: 'LoadPurchases',
    FinishAddingPurchase: 'FinishAddingPurchase',
    FinishDeletingPurchase: 'FinishDeletingPurchase',
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

function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

export function finishDeletingPurchase(purchase){
    return{
        type: Action.FinishDeletingPurchase,
        payload: purchase,
    };
}

//const host = 'https://financeapi.duckdns.org:8442';
const host = 'https://162.243.166.76:8442';

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
                    dispatch(FinishAddingPurchase(data.purchase));
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