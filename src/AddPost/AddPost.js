import React from 'react'
import './AddPost.css'
export default function AddPost() {
    return (
        <div className="container-AddP">
            <div className="wrapper-AddP">
                <section className="post-AddP">
                    
                    <header><span className="gg--chevron-left" id="backButton"></span>Create Post</header>
                    <form action="#">
                        <div className="content-AddP">
                            <img src="imgs/images/pdp.jpg" alt="logo" />
                                <div className="details-AddP">
                                    <p>Hamza BANNOUR</p>
                                    {/* <div className="privacy-AddP">
                                        <i className="fas fa-user-friends"></i>
                                        <span>Friends</span>
                                        <i className="fas fa-caret-down"></i>
                                    </div> */}
                                </div>
                        </div>
                        <textarea placeholder="What's on your mind, CodingNepal?" spellcheck="false" required></textarea>
                        <div className="theme-emoji-AddP">
                            <img src="/imgs/images/fb-icons/theme.svg" alt="theme" />
                                <img src="/imgs/images/fb-icons/smile.svg" alt="smile" />
                                </div>
                                <div className="options-AddP">
                                    <p>Add to Your Post</p>
                                    <ul className="list-AddP">
                                        <li><img src="/imgs/images/fb-icons/gallery.svg" alt="gallery" /></li>
                                        <li><img src="/imgs/images/fb-icons/tag.svg" alt="gallery" /></li>
                                        <li><img src="/imgs/images/fb-icons/emoji.svg" alt="gallery" /></li>
                                        <li><img src="/imgs/images/fb-icons/mic.svg" alt="gallery" /></li>
                                        <li><img src="/imgs/images/fb-icons/more.svg" alt="gallery" /></li>
                                    </ul>
                                </div>
                                <button>Post</button>
                            </form>
                        </section>
                        
                    </div>
            </div>
            )
}
