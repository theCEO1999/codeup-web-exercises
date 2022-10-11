// API -- Application Programming Interface
// a set of rules defining how applications and/or devices can communicate with one another

// REST means representational state transfer
// a pattern of design principles for APIs
// REST APIs communicate via HTTP requests

// in a REST API, communication via HTTP request is used to perform the standard
// set of actions called CRUD
// Create, Read, Update, Delete

// JSON Javascript Object Notation is not mandatory but is popular because it is both human- and machine-readable

// https://glitch.com/cultured-probable-saltasaurus

const booksURl = "https://cultured-probable-saltasaurus.glitch.me/books"

const moviesURL = "https://cultured-probable-saltasaurus.glitch.me/movies"

// the R in CRUD: Read

function getMovies(){
    fetch(moviesURL)
        .then(resp => resp.json())
        .then(data=>console.log(data));
}

getMovies();

// The C in CRUD: Create

const bookToPost = {
    title: "Eleanor of Aquitaine",
    author: {
        firstName: "Ralph",
        lastName: "Turner"
    }
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(bookToPost)
}

function getBooks(){
    fetch(booksURl)
        .then(resp => resp.json())
        .then(data=>console.log(data));
}

getBooks();

// fetch(booksURl, postOptions).then(getBooks);

// The U in CRUD: Updating with PUT and PATCH requests
// well use PUT to replace the entire content
// well use PATCH to modify only part of the entry

let modification = {
    title: "Eleanor of Aquitaine: Queen of France, Queen of England"
}

const patchOptions = {
    method: 'PATCH',
    header: {
        'Content_Type' : 'application/JSON'
    },
    body: JSON.stringify(modification)
}

// fetch(booksURl + "/1", patchOptions).then(getBooks);

modification = {
    title: "Eleanor of Aquitaine and the Four Kings",
    author: {
        firstName: "Amy",
        lastName: "Kelly"
    }
}

const putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}
// fetch(booksURl + "/1", putOptions).then(getBooks);


// The D in CRUD: Delete

const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(getBooks)
}
fetch(booksURl + "/1", deleteOptions).then(getBooks);
