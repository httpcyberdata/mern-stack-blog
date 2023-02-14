import './post.css'
export default function Post({ post }) {
  return (
    <div className="post">
        <img

            className="postImg"
            src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">{post.title}</span>
            <hr/>
            <span className="postDate">
                {new Date(post.createdAt).toDateString()}
                </span>
        </div>
        <p className="postDesc">
        Lorem ipsum
        </p>
    </div>
  )
}
