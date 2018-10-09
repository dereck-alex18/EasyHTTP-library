class EasyHttp{
    //Make a get request
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //make a post request
    async post(url, data ){
        const response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-type': 'application/json',

            },
            body: JSON.stringify(data)
        });
        const dataRes = await response.json();
        return dataRes;
    }

    //make a put request
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers:{
                'Content-type': 'application/json',

            },
            body: JSON.stringify(data)
        });
        const dataRes = await response.json();
        return dataRes;
    }

    //make a delete request
    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers:{
                'Content-type': 'application/json',
            },
        });
        const dataRes = await 'User deleted';
        return dataRes;
    }
}