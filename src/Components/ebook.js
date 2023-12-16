import React from 'react'
import hero from '../assets/images/hero_bg_1.jpg'
import book_white from '../assets/images/book2.png'
import book_black from '../assets/images/book1.png'
import './style.css'
export const Ebook = () => {
    return (
        <div style={{ paddingLeft: '20px', backgroundColor: '#fff' }}>
            <header id="fh5co-header" style={{ backgroundImage: `url(${hero})`, paddingLeft: '20px', marginRight: '20px' }}>
                <div class="overlay"></div>
                <div style={{ backgroundColor: '#fff' }} class="container">
                    <div class="row" style={{ marginTop: "5em" }}>
                        <div class="col-md-12 text-center">
                            <h1 id="fh5co-logo" class="cursive-font m-0" ><a style={{color: "#15375c", fontSize: "40px", margin: "0", padding: "0"}} href="/ebook">E-Books</a></h1>
                            <hr style={{backgroundColor: "#15375c", padding: "2px", width: "140px", margin: "0 auto"}}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div className="intro intro-ebooks" >
                                <h2 style={{ color: '#000' }}>"Unlock the transformative power within you with 'The Tazkiyah Vision'—a guide to spiritual enlightenment and self-discovery."</h2>
                                <div className="flex banaa">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <figure class="fh5co-intro-img">
                                <img class="img-1" style={{height: "500px"}} src={book_black} alt="Free Website Template by FreeHTML5.co" />
                                <img class="img-2" style={{height: "500px"}} src={book_white} i alt="Free Website Template by FreeHTML5.co" />
                            </figure>
                        </div>
                    </div>
                </div>
            </header>
            <div className='mt-0' id="main" style={{ paddingLeft: '20px' }}>
                <div class="container mt-0">
                    <div class="row fh5co-feature">
                        <div class="col-md-6 col-md-push-6">
                            <div class="fh5co-copy">
                                <div class="fh5co-copy-inner">
                                    <h2 style={{fontSize: "27px"}}>Keep It Simple</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-pull-6">
                            <div class="fh5co-img text-right">
                                <figure class="fh5co-figure ">
                                    <img class="img-2" style={{height: "500px"}} src={book_white} alt="Free Website Template by FreeHTML5.co" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="row fh5co-feature fh5co-reverse">
                        <div class="col-md-6">
                            <div class="fh5co-copy">
                                <div class="fh5co-copy-inner">
                                    <h2 style={{fontSize: "27px"}}>Pixel Perfect</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="fh5co-img text-left">
                                <figure class="fh5co-figure ">
                                    <img class="img-2" style={{height: "500px"}} src={book_black} alt="Free Website Template by FreeHTML5.co" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="row fh5co-feature last-feature">
                        <div class="col-md-6 col-md-push-6">
                            <div class="fh5co-copy">
                                <div class="fh5co-copy-inner">
                                    <h2 style={{fontSize: "27px"}}>Beautiful Design</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-pull-6">
                            <div class="fh5co-img text-right">
                                <figure class="fh5co-figure ">
                                    <img class="img-2"  style={{height: "500px"}} src={book_white} alt="Free Website Template by FreeHTML5.co" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="features">
                    <div class="container">
                        <div class="row text-center fh5co-heading">
                            <div class="col-md-8 col-md-offset-2">
                                <h2 style={{fontSize: "27px"}}>More Features</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 ">
                                <div class="feature-center">
                                    <span class="icon">
                                        <i class="icon-tablet"></i>
                                    </span>
                                    <h3>iBook</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                </div>
                            </div>
                            <div class="col-md-3 ">
                                <div class="feature-center">
                                    <span class="icon">
                                        <i class="icon-heart"></i>
                                    </span>
                                    <h3>Love by everyone</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                </div>
                            </div>
                            <div class="col-md-3 ">
                                <div class="feature-center">
                                    <span class="icon">
                                        <i class="icon-star"></i>
                                    </span>
                                    <h3>Good Review</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                </div>
                            </div>
                            <div class="col-md-3 ">
                                <div class="feature-center">
                                    <span class="icon">
                                        <i class="icon-cog"></i>
                                    </span>
                                    <h3>Mob</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}