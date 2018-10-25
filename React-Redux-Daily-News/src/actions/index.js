const URL = 'http://localhost:3004'

/***************************
            Articles 
****************************/
export function latestNews() {
    const request = fetch(`${URL}/articles?_order=desc&_end=3`, { method: 'GET' })
        .then(Response => Response.json())

    return {
        type: 'GET_LATEST',
        payload: request
    }
}

export function otherNews() {
    const request = fetch(`${URL}/articles?_order=desc&_start=3&_end=10`, { method: 'GET' })
        .then(Response => Response.json())

    return {
        type: 'GET_OTHER',
        payload: request
    }
}
/***************************
            Gallery 
****************************/
export function getGAllery() {
    const request = fetch(`${URL}/galleries?_order=desc&_limit=4`, { method: 'GET' })
        .then(Response => Response.json())

    return {
        type: 'GET_GALLERY',
        payload: request
    }
}

/***************************
        Specific News
****************************/
export function selectedNews(id) {
    const request = fetch(`${URL}/articles?id=${id}`, { method: 'GET' })
        .then(Response => Response.json())
    return {
        type: 'SELECTED_NEWS',
        payload: request
    }
}
export function clearSelectedNews() {
    return {
        type: 'CLEARSELECTED_NEWS',
        payload: []
    }
}

/***************************
        Selected Gallary 
****************************/
export function SelectedGallary(id) {
    const request = fetch(`${URL}/galleries?id=${id}`, { method: 'GET' })
        .then(Response => Response.json())
    return {
        type: 'SELECTED_GALLERY',
        payload: request
    }
}
export function ClearSelectedGallery() {
    return {
        type: 'CLEARSELECTED_GALLERY',
        payload: []
    }
}
/***************************
            Likes 
****************************/

export function handleLikes(array, id, section, type) {
    const request = fetch(`${URL}/${section}/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: array })
        }
    )
        .then(Response => Response.json())
    return {
        type: type,
        payload: request
    }
}