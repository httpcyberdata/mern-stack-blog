import './post.css'
export default function Post() {
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
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue 
            quisque egestas diam in arcu. Phasellus vestibulum lorem sed risus ultricies 
            tristique. Et egestas quis ipsum suspendisse ultrices gravida dictum
        </p>
    </div>
  )
}
