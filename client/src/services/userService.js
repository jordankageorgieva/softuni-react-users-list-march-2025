export default {

    async getAll() {
        const baseURL = 'http://localhost:3030/jsonstore/users';
        const response = await fetch(baseURL);
        const data = await response.json(); // parse the response body as JSON
        const result = Object.values(data);

        return result;
    },

    async createUser(user) {

        try {
            const baseURL = 'http://localhost:3030/jsonstore/users';

            const res = await fetch(
                baseURL,
                {
                    method: 'POST',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user),
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
