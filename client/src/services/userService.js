export default {

    async getAll() {
        const baseURL = 'http://localhost:3030/jsonstore/users';
        const response = await fetch(baseURL);
        const data = await response.json(); // parse the response body as JSON
        const result = Object.values(data);           
   
        return result;
    }
}