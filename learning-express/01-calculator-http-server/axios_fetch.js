/*
    Axios and Fetch
        Two popular ways to hit a backend server and get back response from them

        fetch - both the browser and nodejs natively provides you

        Axios - is an external library, to make it easy to send HTTP requests
*/


function main() {
    fetch("https://sum-server.100xdevs.com/todos")
        .then(async (response) => {
            const json = await response.json();
            console.log(json.todos.length)
        })
}


// other way to write above function 
async function mainn() {
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = response.json();
    console.log(json.todos.length)
}


// now writing it using axios library
// first import as its an external lib

const axios = require("axios")

async function axiosMain() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    // eliminates the extra step where we need to know what type of data is being sent by the server
    // so that it can be handled and parsed correctly, but axios handles this process automatically
    //  and also stores data in response.data
    console.log(response.data.todos.length)
}




// now sending POST req using both
async function postFetchMain() {
    /// need to send a 2nd arg here to specify the METHOD
    const response = await fetch("https://sum-server.100xdevs.com/todos", {
        method: "POST",
        body: {
            username: "Suhail",
            password: "12345"
        },
        headers: {
            "Authorization": "Bearer 123"
        }
    })
    const json = await response.json();
    console.log(json.todos.length)
}


async function postAxiosMain() {
    /// need to send a 2nd arg here to specify the METHOD
    const response = await axios.post("https://sum-server.100xdevs.com/todos", 
        {
            username: "Suhail"
        },
        {
            headers: {
                Authorization: "Bearer 123"
            }
        })
    
        // if you are doing get request 
        // the second arg should be the headers as no body expected
        // other than that for all the other request types the 2nd arg will be the body
    console.log(json.data.todos.length)
}



/*

async function main() {
    const response = await axios(
    {
        url: "actualURL",
        method: "PUT",
        headers: {
            Authorization: "Bearer 123"
        },
        data: {
            username: "Suhail"
        }
    })
}

    use http dump to dump and test all your incoming http requests, to see what data, args is reaching 
*/