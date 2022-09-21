const APIURl = 'http://foodapi.esoftmm.com';

async function apiGet(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data;
}