
const headers = (extra = null) => {
    let stdHeaders = {
            'Content-Type': "application/json",
            // 'Access-Control-Allow-Headers': 'Authorization, Content-Type',
            Accept: "application/json",
            // "X-Requested-With": 'XMLHttpRequest',
            // Authorization: "438fy7438wued438fydu2893iuw"
    }
    let newHeaders =  extra !== null ? {...stdHeaders, ...extra} : stdHeaders;

    return {
        headers: newHeaders
    }
}

export default headers;
