import './home.css';
import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts');
      setPosts(res.data)
      console.log(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <>
      <Header />
      <div className="home">
          <Posts posts={posts} />
          <Sidebar />
      </div>
    </>
  )
}
