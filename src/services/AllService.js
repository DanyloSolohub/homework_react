export class AllService {
    url = `https://jsonplaceholder.typicode.com/users`


    getAllUsers(){
        return fetch(this.url).then(value => value.json())
            .then(posts => posts)

    }
    getUserById(userId){
    return fetch(`${this.url}/${userId}`)
            .then(value => value.json()).then(value =>  value)}


    url1 = `https://jsonplaceholder.typicode.com/posts`


getAllPosts(){
    return fetch(this.url1)
            .then(value => value.json())
            .then(posts => posts
)}
getPostById(id){
    return fetch(`${this.url1}/${id}`).then(value => value.json()).then(value =>  value)}
}