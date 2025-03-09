export default {


    async getAll() {
        const baseURL = 'http://localhost:3001/data/users';
        const response = await fetch(baseURL);
        const data = await response.json(); // parse the response body as JSON
        const result = Object.values(data);
        console.log('result is : ' + result);
        return result;
    },

    async getUser(_id) {
        const baseURL = 'http://localhost:3001/data/users';
        const response = await fetch(`${baseURL}/${_id}`);

        const user = await response.json();

        return user;
    },

    async createUser(user) {

        const { country, city, street, streetNumber, ...postData } = user;

        postData.address = { country, city, street, streetNumber };
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();

        // const _id = `user_${Date.now()}`;
        // postData._id =  _id,

        // console.log("new id is " + postData._id);
        console.log("post data id is " + JSON.stringify(postData));

        try {
            const baseURL = 'http://localhost:3001/data/users';

            const res = await fetch(
                `${baseURL}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData),
                }
            );

            const contentType = res.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const resData = await res.json();
                console.log(resData);
                return resData;
            } else {
                const text = await res.text();
                console.log(text);
                throw new Error('Server returned non-JSON response');
            }

        } catch (err) {
            console.log(err.message);
        }
    },

    async updateUser(_id, user) {

        if (_id === undefined) {
            console.log("user is missing");

            return null;
        }

        const { country, city, street, streetNumber, ...postData } = user;

        postData.address = { country, city, street, streetNumber };
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();

        console.log("update user: " + _id);
        console.log("update user with data " + JSON.stringify(postData));

        try {
            const baseURL = 'http://localhost:3001/data/users';

            const res = await fetch(
                `${baseURL}/${_id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData),
                }
            );

            const contentType = res.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const resData = await res.json();
                console.log(resData);
                
                return resData;
            } else {
                const text = await res.text();
                console.log(text);
                throw new Error('Server returned non-JSON response');
            }

        } catch (err) {
            console.log(err.message);
        }
    },

    async deleteUser(_id) {

        if (_id === undefined) {
            console.log("user is missing");

            return null;
        }

        const isUserDelete = false;
        console.log("user id to delete" + _id);
        try {

            const baseURL = 'http://localhost:3001/data/users';

            const res = await fetch(
                `${baseURL}/${_id}`,
                {
                    method: 'DELETE'
                }
            );

            if (res.ok) {
                isUserDelete = true;
            }
            console.log("isUserDelete : " + isUserDelete);
            return isUserDelete;
        } catch (err) {
            console.log(err.message);
            return isUserDelete;
        }
    }
};
