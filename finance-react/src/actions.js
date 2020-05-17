export const Action = Object.freeze({
    LoadPurchases: 'LoadPurchases',
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

{/*const host = 'https://financeapi.duckdns.org:8442';*/}
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
                    dispatch(FinishAddingPurchase(purchase));
                }
            })
        .catch(e => console.error(e));
    };
}