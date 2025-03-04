export default {
    

    async getAll() {
        const baseURL = 'http://localhost:3030/jsonstore/users';
        const response = await fetch(baseURL);
        const data = await response.json(); // parse the response body as JSON
        const result = Object.values(data);

        return result;
    },

    async getUser(_id) {
        const baseURL = 'http://localhost:3030/jsonstore/users';
        const response = await fetch(`${baseURL}/${_id}`);
        
        const user = await response.json();
        
        return user;
    },

    async createUser(user) {

        const {country, city, street, streetNumber, ...postData} = user;

        postData.address = {country, city, street, streetNumber};
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();

        console.log(postData.createdAt);

        try {
            const baseURL = 'http://localhost:3030/jsonstore/users';

            const res = await fetch(
                baseURL,
                {
                    method: 'POST',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData),
                }
            );

            const resData = await res.json();

            console.log(resData);

            return resData;

        } catch (err) {
            console.log(err.message);
        }
    }
};
