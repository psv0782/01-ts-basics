import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;

}

async function fetchPosts(): Promise<Post[]> {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts>'
    );
    return response.data as Post[];
}

fetchPosts().then((posts: Post[]) => {
    console.log(posts[0].title);
});
