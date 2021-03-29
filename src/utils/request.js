
const header = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
})
function get(url){
    return fetch(url,{
        method:"GET",
        headers:header
    }).then(response=>{
        handleResponse(url,response);
    }).catch(err =>{
        console.error(`Request failed. Url= ${url}.Message = ${err}`);
        return Promise.reject({error: {nessage:"Reqeust failed due to server error"}});
    })
}
function post(url,data){
    return fetch(url,{
        method:"GET",
        headers:header,
        body:data
    }).then(response=>{
        handleResponse(url,response);
    }).catch(err =>{
        console.error(`Request failed. Url= ${url}.Message = ${err}`);
        return Promise.reject({error: {nessage:"Reqeust failed due to server error"}});
    })
}

function handleResponse(url,response){
    if(response.status == 200){
        return response.json();
    }else{
        console.error(`Request failed. Url= ${url}`);
        return Promise.reject({error: {nessage:"Reqeust failed due to server error"}});
    }
}

export {get,post};
