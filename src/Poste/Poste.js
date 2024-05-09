import React from 'react'
import './Poste.css'
import { useState } from 'react';
export default function Poste() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = () => {
        setZoomed(!zoomed);
    };

    return (
        // <!-- Start Post 1 -->
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    <div className="post">
                        <div className="info">
                            <div className="user">
                                <div className="profile-pic"><img src="/imgs/images/pdp.jpg" alt="" style={{ height: '40px', width: '40px', padding: '0', background: 'none', borderRadius: '50%' }} /></div>

                                <p className="username">Hamza Bannour</p>
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
                        {!zoomed && (
                            <img src="/imgs/images/Register_Img.jpg" className="post-image" alt="" onClick={toggleZoom} />)}

                        {/* <!-- Div pour afficher l'image zoomée --> */}

                        {zoomed && (
                            <div
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    zIndex: 9999,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onClick={toggleZoom}
                            >
                                <img
                                    src="/imgs/images/Register_Img.jpg"
                                    alt=""
                                    style={{ maxHeight: '90%', maxWidth: '90%' }}
                                />
                            </div>
                        )}

                        <input type="checkbox" name="" id="like1" className="btn like" />
                        <input type="checkbox" name="" id="comment1" className="btn commentt" />

                        <div className="post-content">
                            <div className="reaction-wrapper">


                                <label htmlFor="like1" className="like-btn"></label>
                                <label htmlFor="comment1" className="comment-btnn"></label>
                                <img src="/imgs/images/img/send.PNG" className="icon" alt="" />
                                <img src="/imgs/images/img/save.PNG" className="icon save" alt="" />
                            </div>
                            <p className="likes">1,012 likes</p>
                            <label htmlFor="comment1" className="comment-btn2"><p className="description"><span>username </span> Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum
                                quo natus molestias?</p></label>
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
