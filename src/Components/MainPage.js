import React from 'react'
import './style.css'
import slider2 from '../assets/Corousel_Images/c3.png'
import slider3 from '../assets/Corousel_Images/c2.png'

export const MainPage = () => {
    return (
        <>
            <div>
                <section class="slider" style={{ paddingLeft: '10px' }}>
                    <div class="hero-slider">
                        <div class="single-slider" style={{ backgroundImage: `url(${slider2})`, backgroundSize: "contain" }}>
                            <div class="container ccocooc">
                                <div class="row">
                                    <div class="col-lg-7">
                                        <div class="text">
                                            {/* <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1> */}
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p> */}
                                            <div class="button">
                                                {/* <a href="/" class="btn">Get Appointment</a> */}
                                                {/* <a href="/" class="btn primary">About Us</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-slider" style={{ backgroundImage: `url(${slider3})`, backgroundSize: "contain" }}>
                            <div class="container ccocooc">
                                <div class="row">
                                    <div class="col-lg-7">
                                        <div class="text">
                                            {/* <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1> */}
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p> */}
                                            <div class="button">
                                                {/* <a href="/" class="btn">Get Appointment</a> */}
                                                {/* <a href="/" class="btn primary">Conatct Now</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section style={{ marginLeft: "50px", marginRight: "20px" }} class="schedule">
                    <div class="container">
                        <div class="schedule-inner">
                            <div class="row">
                                <div style={{ backgroundColor: "transparent" }} class="col-lg-4 col-md-6 col-12">
                                    <div style={{ backgroundColor: "#15375c", minHeight: "350px" }} class="single-schedule first">
                                        <div class="inner">
                                            {/* <div class="icon"> */}
                                            {/* <i class="fa fa-ambulance"></i> */}
                                            {/* </div> */}
                                            <div class="single-content">
                                                <h4>Learning and leadership</h4>
                                                {/* <h4>Emergency Cases</h4> */}
                                                <p>Empower mentees for their learning and holistic development.</p>
                                                <p>Cultivate self-discipline, leadership qualities, and a sense of social responsibilities in mentees, with the support of our website that facilitates personalized guidance, resources, and tools to enhance their overall educational experience.</p>
                                                {/* <a href="/">LEARN MORE<i class="fa fa-long-arrow-right"></i></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "transparent" }} class="col-lg-4 col-md-6 col-12">
                                    <div style={{ backgroundColor: "#15375c", minHeight: "350px" }} class="single-schedule middle">
                                        <div class="inner">
                                            <div class="icon">
                                                {/* <i class="icofont-prescription"></i> */}
                                            </div>
                                            <div class="single-content">
                                                {/* <span>Fusce Porttitor</span> */}
                                                <h4>Action and Vision</h4>
                                                <p>Enable them to develop their vision of life in line with their ideology and purpose of life.</p>
                                                <p>Encourage the mentees to develop action plans to achieve their visions.</p>
                                                {/* <a href="/">LEARN MORE<i class="fa fa-long-arrow-right"></i></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "transparent" }} class="col-lg-4 col-md-6 col-12">
                                    <div style={{ backgroundColor: "#15375c", minHeight: "350px" }} class="single-schedule middle">
                                        <div class="inner">
                                            <div class="icon">
                                                {/* <i class="icofont-prescription"></i> */}
                                            </div>
                                            <div class="single-content">
                                                {/* <span>Fusce Porttitor</span> */}
                                                <h4>Mentees Development</h4>
                                                <p>Encourage the mentees to develop action plans to achieve their visions.</p>
                                                <p>Our mission is to craft a cutting-edge, user-friendly website that seamlessly fulfills the unique requirements of the Tarbiyah department, promising an immersive and efficient online experience for every user.</p>
                                                {/* <a href="/">LEARN MORE<i class="fa fa-long-arrow-right"></i></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <h1 id='tazkiyahvision' style={{ fontSize: "27px", fontWeight: "bold", color: "gray", textAlign: "center", marginTop: "30px" }}>Tazkiyah Vision</h1>
            <hr style={{ width: "130px", padding: "1px", backgroundColor: "gray", margin: "10px auto 20px auto" }} />
            <div style={{display: "flex", justifyContent:"center", alignItems: "center", flexDirection: "column"}}>
                <p style={{fontSize: "16px", maxWidth: "800px", margin: "10px 30px", textAlign: "center", lineHeight: "3.0rem"}}>The very first thing that motivated us to start the project was the idea that it would help in solving the problem of departmental issues of our university. Second, it was a technically challenging project, so each new challenge in our project motivated us to learn a technology which solved our problem. Itself, it became a challenge for us too. For the project, we had to learn many new technologies and spent days finding the right technology for the project.</p>
                <p style={{fontSize: "17px", maxWidth: "800px", margin: "40px 30px", textAlign: "center", lineHeight: "3.0rem"}}>There are current systems that match our system. Existing System allows us limited features, but these features cannot satisfy the demand of our university Tarbiyah department. As a solution to these challenges, the Tazkiyah website came up with different new features that will prove to be beneficial for the targeted stakeholders.</p>
            </div>
        </>

    )
}