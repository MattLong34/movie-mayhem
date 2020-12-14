require('dotenv').config()

const api_key = require(API_KEY)

console.log(process.env.API_KEY)

const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: aeaadcd5,
            i: 'tt0848228'
        }
    })
    console.log('response.data', response.data)
}

fetchData()