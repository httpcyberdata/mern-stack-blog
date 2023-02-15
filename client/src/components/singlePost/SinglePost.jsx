import "./singlePost.css";
import { useLocation } from 'react-router';
import { useEffect } from 'react';

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2];

    
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt=""
                className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor, sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Safak</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ad officia perspiciatis obcaecati at exercitationem minima,
                voluptatem, voluptatum, enim aliquid maiores natus molestias quae
                dicta in eaque repellat quibusdam doloremque et odit quisquam aut 
                rem est sunt explicabo? Sequi, quibusdam libero.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ad officia perspiciatis obcaecati at exercitationem minima,
                voluptatem, voluptatum, enim aliquid maiores natus molestias quae
                dicta in eaque repellat quibusdam doloremque et odit quisquam aut 
                rem est sunt explicabo? Sequi, quibusdam libero.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ad officia perspiciatis obcaecati at exercitationem minima,
                voluptatem, voluptatum, enim aliquid maiores natus molestias quae
                dicta in eaque repellat quibusdam doloremque et odit quisquam aut 
                rem est sunt explicabo? Sequi, quibusdam libero.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ad officia perspiciatis obcaecati at exercitationem minima,
                voluptatem, voluptatum, enim aliquid maiores natus molestias quae
                dicta in eaque repellat quibusdam doloremque et odit quisquam aut 
                rem est sunt explicabo? Sequi, quibusdam libero.
            </p> 
        </div>
    </div>
  )
}
