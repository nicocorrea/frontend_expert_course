const BASE_API1 = 'https://jsonplaceholder.typicode.com/todos/1'
const BASE_API2 = 'https://jsonplaceholder.typicode.com/users'
const POST_API = 'https://jsonplaceholder.typicode.com/posts'

fetch(BASE_API1)
    .then(res => res.text())
    .then(console.log)
    .catch(error => console.log(error));

// Querying with parameters
// Option 1
fetch(BASE_API2 + '?id=1')
    .then(res => res.text())
    .then(console.log)
    .catch(error => console.log(error));

// Option 2
const url = new URL(BASE_API2);
url.searchParams.set('id', '1');

fetch(url)
.then(res => res.text())
.then(console.log)
.catch(error => console.log(error));

// Now with using async and await
async function main() {
    const url = new URL(BASE_API2);
    url.searchParams.set('id', '1');

    try {
        const response = await fetch(url);
        console.log(response.status);
        console.log(response.ok);
        console.log(response.headers.get('content-type')) // application/json; charset=utf-8
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.log(error);
    }
}

main();

// Creating a POST request
const header = new Headers();
header.append('Content-Type', 'application/json; charset=utf-8');

async function main_post() {
    const url = new URL(POST_API);
    const data = {
        name: 'Nico'
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            // headers: {
            //     'Content-Type': 'application/json; charset=utf-8',
            // }
            headers: header
        });
        console.log(response.status);
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.log(error);
    }
}

main_post();

/* An old version of how it was done in the past */
const request = new XMLHttpRequest();
request.addEventListener('load', function() {
    console.log(this.responseText);
});

request.open('GET', BASE_API1);
request.send();