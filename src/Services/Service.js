export default class Service {
    url = `https://jsonplaceholder.typicode.com/users`

   async getAllUsers() {
        return await fetch(this.url)
            .then(value => value.json())
            .then(users => users)
    }


    url1 = `https://jsonplaceholder.typicode.com/posts`


   async getAllPosts() {
        return await fetch(this.url1)
            .then(value => value.json())
            .then(posts => posts)
    }
    url2 = `https://jsonplaceholder.typicode.com/comments`

    async getAllComments(){
        return await fetch(this.url2)
            .then(value => value.json())
            .then(comments => comments)
    }


}