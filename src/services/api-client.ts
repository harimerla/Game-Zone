import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e8628f52bab240eb9b49186b64b988ae'
    }
})