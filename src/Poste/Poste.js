import React, { useEffect, useState } from 'react';
import './Poste.css'
import { Link } from 'react-router-dom'
import PostService from '../Services/PostService';

export default function Poste({ post }) {

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

    // ---------------------------------------Like --------------------------------------------

    const [like, setLike] = useState('');
    const liker = JSON.parse(localStorage.getItem('user_data'))

    // Verify Like
    const verifierLike = async () => {
        try {
            const postId = post._id
            const likerId = liker.id
            const response = await PostService.ifIsLikePost(postId, likerId)
            if (response.data == true) {
                setLike(true)
            }
            else {
                setLike(false)
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    }

    // Like
    const Like = async () => {
        try {
            const postId = post._id
            const likerId = liker.id
            console.log(postId)
            const response = await PostService.likeAndDisLike(postId, likerId)
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const toggleLike = async () => {
        setLike(!like);
        await Like()
    };

    useEffect(() => {
        verifierLike()
    }, [like]);

    // ------------------------------------------- isAuthorPost -----------------------------------------
    const author = JSON.parse(localStorage.getItem('user_data'))
    const [isAuthorPost, setIsAuthorPost] = useState('')

    // Verify Like
    const ifIsAuthor = async () => {
        try {
            const postId = post._id
            const authorId = author.id
            const response = await PostService.isAuthorPost(postId, authorId)
            if (response.status == 200) {
                setIsAuthorPost(response.data)
            }
            else {
                console.log(response.data)
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    }

    useEffect(() => {
        ifIsAuthor();
    }, []);

    return (
        // <!-- Start Post 1 -->
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    <div className="post">
                        <div className="info">
                            <div className="user">
                                <Link to={`/ProfilFriend/${post.authorPost._id}`}>
                                    <div className="profile-pic"><img src={post.authorPost.pdp} alt="" style={{ height: '40px', width: '40px', padding: '0', background: 'none', borderRadius: '50%' }} /></div>
                                </Link>
                                <p className="username">{post.authorPost.nameInProfile}</p>
                            </div>

                            {isAuthorPost && (
                                <>
                                    <img src="/imgs/images/img/option.PNG" className="options" alt="" onClick={toggleMenu} />
                                    {showMenu && (
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li>Delete</li>
                                                <li>Update</li>
                                            </ul>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="post-content">
                            <div className="reaction-wrapper">
                                <p className="description"><span>username </span>{post.content}</p>
                            </div>
                        </div>
                        {renderMedia()}

                        <input
                            type="checkbox"
                            id={`like-${post._id}`}
                            className="btn-P like"
                            checked={like}
                            onChange={toggleLike}
                            style={{ display: 'none' }}
                        />

                        <input type="checkbox" name="" className="btn-P commentt" />
                        <div className="post-content">
                            <div className="reaction-wrapper">

                                <label
                                    htmlFor={`like-${post._id}`}
                                    className="like-btn"
                                    style={{ color: like ? 'red' : 'inherit' }}
                                ></label>
                                <Link to={`/Commentaires/${post._id}`}>
                                    <label htmlFor="comment1" className="comment-btnn"></label>
                                </Link>
                            </div>
                            <p className="likes">{post.nombreLikes} likes</p>
                            <label htmlFor="comment1" className="comment-btn2"></label>
                            <p className="post-time">2 minutes ago</p>
                        </div>
                        <div className="comment-wrapper">
                            <img src="/imgs/images/img/smile.PNG" className="icon" alt="" />
                            <input type="text" className="comment-box" placeholder="Add a comment" />
                            <button className="comment-btn">post</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
