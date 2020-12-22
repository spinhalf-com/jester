export const errorHandler  = (error) => {

    error = JSON.parse(JSON.stringify(error))

    console.log(typeof error)
    if(typeof error === 'object') {
        if (error.hasOwnProperty('response') && error.response.hasOwnProperty('status') && error.response.status === 401) {
            console.log('401 found in error response')
            window.location.href = '/#/login'
        }
        if(error.hasOwnProperty('message') && error.message === 'Network Error') {
            console.log('Network error found in error response')
            alert('Network error. Please try again.')
            // window.location.href = '/#/login'
        }
    }
    return false;
}
