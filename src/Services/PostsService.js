export default class PostsService {
    url = `https://jsonplaceholder.typicode.com/posts`

    getAllPosts(){
       return fetch(this.url).then(value => value.json()).then(posts => posts)
}
}