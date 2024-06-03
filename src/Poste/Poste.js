import React from 'react'
import './Poste.css'
import { useState } from 'react';
export default function Poste({post}) {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    
    const renderMedia = () => {
        if (!post.image) {
            return null;
        }

        const fileExtension = post.image.split('.').pop().toLowerCase();
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
        const videoExtensions = ['mp4', 'webm', 'ogg'];

        if (imageExtensions.includes(fileExtension)) {
            return <img src={post.image} className="post-image" alt="Post" style={{ maxWidth: '100%' }} />;
        } else if (videoExtensions.includes(fileExtension)) {
            return (
                <video controls className="post-video" style={{ maxWidth: '100%' }}>
                    <source src={post.image} type={`video/${fileExtension}`} />
                    Your browser does not support the video tag.
                </video>
            );
        } else {
            return <p>Unsupported file type</p>;
        }
    };


    return (
        // <!-- Start Post 1 -->
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    <div className="post">
                        <div className="info">
                            <div className="user">
                                <div className="profile-pic"><img src={post.authorPost.pdp} alt="" style={{ height: '40px', width: '40px', padding: '0', background: 'none', borderRadius: '50%' }} /></div>
                                <p className="username">{post.authorPost.nameInProfile}</p>
                            </div>
                            <img src="/imgs/images/img/option.PNG" className="options" alt="" onClick={toggleMenu} />
                            {showMenu && (
                                <div className="dropdown-menu">
                                    <ul>
                                        <li>Delete</li>
                                        <li>Update</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="post-content">
                            <div className="reaction-wrapper">
                            <p className="description"><span>username </span>{post.content}</p>
                            </div>
                        </div>
                        {renderMedia()}

                        <input type="checkbox" name="" id="like1" className="btn-P like" />
                        <input type="checkbox" name="" id="comment1" className="btn-P commentt" />
                        <div className="post-content">
                            <div className="reaction-wrapper">
                                <label htmlFor="like1" className="like-btn"></label>
                                <label htmlFor="comment1" className="comment-btnn"></label>
                                {/* <img src="/imgs/images/img/send.PNG" className="icon" alt="" />
                                <img src="/imgs/images/img/save.PNG" className="icon save" alt="" /> */}
                            </div>
                            <p className="likes">1,012 likes</p>
                            <label htmlFor="comment1" className="comment-btn2"></label>
                            <p className="post-time">2 minutes ago</p>
                        </div>
                        <div className="comment-wrapper">
                            <img src="/imgs/images/img/smile.PNG" className="icon" alt="" />
                            <input type="text" className="comment-box" placeholder="Add a comment" />
                            <button className="comment-btn">post</button>
                        </div>

                        {/* <!-- Display Comments --> */}
                        <div className="post-comment">
                            <div className="head">
                                <div className="name">Comments</div>
                                <label htmlFor="comment1" className="comment-btn3">
                                    <i className="fa-solid fa-xmark"></i>
                                </label>
                            </div>
                            <div className="comments">
                                <div className="comment">
                                    <img src="../imgs/images/pdp.jpg" alt="" />
                                    <span>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                                        accusamus velit, ipsa provident.
                                        <div className="desc">2m ago <span>Reply</span></div>
                                    </span>
                                    {/* <!-- <i className="fa-regular fa-heart"></i> --> */}
                                </div>
                                <div className="comment">
                                    <img src="../imgs/images/pdp.jpg" alt="" />
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Explicabo nesciunt consectetur quos laudantium.
                                        <div className="desc">1h ago <span>Reply</span></div>
                                    </span>
                                    {/* <!-- <i className="fa-regular fa-heart"></i> --> */}
                                </div>
                                <div className="comment">
                                    <img src="../imgs/images/pdp.jpg" alt="" />
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                                        iusto.
                                        <div className="desc">1d ago <span>Reply</span></div>
                                    </span>
                                    {/* <!-- <i className="fa-regular fa-heart"></i> --> */}
                                </div>

                                <div className="comment">
                                    <img src="../imgs/images/pdp.jpg" alt="" />
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Explicabo nesciunt consectetur.
                                        <div className="desc">1h ago <span>Reply</span></div>
                                    </span>
                                    {/* <!-- <i className="fa-regular fa-heart"></i> --> */}
                                </div>
                                <div className="comment">
                                    <img src="../imgs/images/pdp.jpg" alt="" />
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.

                                        <div className="desc">1h ago <span>Reply</span></div>
                                    </span>
                                    {/* <!-- <i className="fa-regular fa-heart"></i> --> */}
                                </div>

                            </div>

                            <div className="new-comment">
                                <img src="../imgs/images/pdp.jpg" alt="" />
                                <input type="text" placeholder="Add a comment..." />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
