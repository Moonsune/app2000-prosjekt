import { Post } from '../lib/models'

const newPost = new Post({
    title: "from function",
    desc: "oinaeroøgnaogn",
    userId: "knaogn9483hiueirøfn",
    slug: "from-function"
})

try {
    newPost.save()
} catch (error) {
    console.log("Error saving document");
}

export default newPost;