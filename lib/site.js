const APIURl = 'http://api.covid19api.com';

async function apiGet(url) {
    const response = await fetch(APIURl + url)
    const data = await response.json()
    return data;
}