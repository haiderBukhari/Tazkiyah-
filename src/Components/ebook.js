import React from 'react'
import hero from '../assets/images/hero_bg_1.jpg'
import book_white from '../assets/images/book_white.png'
import book_black from '../assets/images/book_black.png'
import person_1 from '../assets/images/person_1.jpg'
import person_2 from '../assets/images/person_2.jpg'
import person_3 from '../assets/images/person_3.jpg'
import './style.css'
export const Ebook = () => {
    return (
        <div style={{ paddingLeft: '20px' }}>
            <header id="fh5co-header" style={{ backgroundImage: `url(${hero})` }}>
                <div class="overlay"></div>
                <div style={{ backgroundColor: '#7291b0' }} class="container">
                    <div class="row" style={{ marginTop: "5em" }}>
                        <div class="col-md-12 text-center">
                            <h1 id="fh5co-logo" class="cursive-font"><a href="/ebook">E-Books</a></h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="intro">

                                <h2>"Unlock the transformative power within you with 'The Tazkiyah Vision'—a guide to spiritual enlightenment and self-discovery."</h2>
                                <div className="flex banaa">
                                    <button className='readmore'>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <figure class="fh5co-intro-img">
                                <img class="img-1" src={book_black} alt="Free Website Template by FreeHTML5.co" />
                                <img class="img-2" src={book_white} i alt="Free Website Template by FreeHTML5.co" />
                            </figure>
                        </div>
                    </div>
                </div>
            </header>
            <div id="main">

                <div class="container">

                    <div class="row row-pb-md">
                        <div class="col-md-4">
                            <div class="review text-center">
                                <figure>
                                    <img src={person_3} alt="user" />
                                </figure>
                                <span>Rob Smith </span>
                                <span class="star">
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                </span>
                                <blockquote>
                                    <p>&ldquo;Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                </blockquote>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="review text-center">
                                <figure>
                                    <img src={person_2} alt="user" />
                                </figure>
                                <span>John Doe </span>
                                <span class="star">
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                </span>
                                <blockquote>
                                    <p>&ldquo;Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                </blockquote>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="review active text-center">
                                <figure>
                                    <img src={person_1} alt="user" />
                                </figure>
                                <span>Jean Doe </span>
                                <span class="star">
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star colored"></i>
                                    <i class="icon-star"></i>
                                </span>
                                <blockquote>
                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.&rdquo;</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="row fh5co-feature">
                        <div class="col-md-6 col-md-push-6">
                            <div class="fh5co-copy">
                                <div class="fh5co-copy-inner">
                                    <h2>Keep It Simple</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-pull-6">
                            <div class="fh5co-img text-right">
                                <figure class="fh5co-figure ">
                                    <img class="img-2" src={book_white} alt="Free Website Template by FreeHTML5.co" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="row fh5co-feature fh5co-reverse">
                        <div class="col-md-6">
                            <div class="fh5co-copy">
                                <div class="fh5co-copy-inner">
                                    <h2>Pixel Perfect</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="fh5co-img text-left">
                                <figure class="fh5co-figure ">
                                    <img class="img-2" src={book_black} alt="Free Website Template by FreeHTML5.co" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="row fh5co-feature last-feature">
                        <div class="col-md-6 col-md-push-6">
                            <div class="fh5co-copy">
                                <div class="fh5co-copy-inner">
                                    <h2>Beautiful Design</h2>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-pull-6">
                            <div class="fh5co-img text-right">
                                <figure class="fh5co-figure ">
                                    <img class="img-2" src={book_white} alt="Free Website Template by FreeHTML5.co" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="features">
                    <div class="container">
                        <div class="row text-center fh5co-heading">
                            <div class="col-md-8 col-md-offset-2">
                                <h2>More Features</h2>
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