export const Action = Object.freeze({
    LoadPurchases: 'LoadPurchases',
});

export function loadPurchases(purchases){
    return {
        type: Action.LoadPurchases,
        payload: purchases,
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