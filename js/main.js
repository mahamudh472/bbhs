// ------------------------------------------------
// ----------------header and footer---------------
// ------------------------------------------------

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="web-top">
            <div class="social-logos">
                <a href="" class="social-links">
                    <img class="social-icon" src="gallery/facebook.png" alt="">
                </a><a href="" class="social-links"></a><a href="" class="social-links"></a><a href="" class="social-links"></a>
                <a href="" class="social-links">
                    <img class="social-icon" src="gallery/twitter.png" alt="">
                </a><a href="" class="social-links"></a><a href="" class="social-links"></a><a href="" class="social-links"></a>
                <a href="" class="social-links">
                    <img class="social-icon" src="gallery/youtube.png" alt="">
                </a><a href="" class="social-links"></a><a href="" class="social-links"></a><a href="" class="social-links"></a>
                <a href="" class="social-links">
                    <img class="social-icon" src="gallery/linkedin (1).png" alt="">
                </a><a href="" class="social-links"></a><a href="" class="social-links"></a><a href="" class="social-links"></a>
            </div>
            <div class="top-right">
                <input type="button" class="language" value="বাংলা সংস্করণ">
                <input type="text" name="0" id="search">
                <button id="search-btn"><i class="fa fa-magnifying-glass"></i></button>
            </div>
        </div>
        <hr class="nav-devider">
        <div class="menu-bar">
        <div class="menu-item">
            <a href="index.html">Home</a>

            <div class="drop-container">
                <a >About ∇</a>

                <div class="drop-content">
                    <a href="about.html">About us</a>
                    <hr>
                    <a href="exindex.html">Our principal</a>
                    <hr>
                    <a href="mv.html">Mission & vision</a>
                    <hr>
                    <a href="contact.html">Contact us</a>
                    <hr>
                    <a href="tindex.html">About Teachers</a>
                </div>
            </div>

          
            <div class="drop-container">
                <a >Administration ∇</a>

                <div class="drop-content">
                    <a href="#">Achivment</a>
                    <hr>
                    <a href="#"> Notice</a>
                    <hr>
                </div>

            </div>

            <div class="drop-container">
                <a >Results ∇</a>
                <div class="drop-content">
                    <a href="#">Model Test </a>
                    <hr>
                    <a href="#">JSC Result</a>
                    <hr>
                    <a href="#">SSC Result</a>
                </div>
            </div>

            <div class="drop-container">
                <a >Admision ∇</a>
                <div class="drop-content">
                    <a href="admis.html">Admission Circular</a>
                </div>
            </div>


            <div class="drop-container">
                <a >Academics ∇</a>
                <div class="drop-content">
                    <a href="#">Rules & Regulation</a>
                    <hr>
                    <a href="#">Academic Calender</a>
                    <hr>
                    <a href="#">Syllabus</a>
                    <hr>

                </div>
            </div>

            
                <a href="#gallery">Gallery</a>
                
            

            <div class="drop-container">
                <a >Facilities ∇</a>
                <div class="drop-content">
                    <a href="#">Medical</a>
                    <hr>
                    <a href="#">Playground</a>
                </div>
            </div>

            
        </div>

    </div> <hr>
              
    <div class="img-slider">
        <a href="https://www.facebook.com/BhushirbandarSchool">
 <img src="Gallery/bbhs logo.png" alt="photo"></a>

    </div>
 
    <div class="anim-text">

        <marquee scrollamount="8" class="anim"> ⭕ এই ওয়েবসাইট এর সম্পূর্ণ কপিরাইট Infinite Tech Query -এর ধন্যবাদ ।
        </marquee>
    </div>

        
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="footer-zone">
        <div class="footer-up">
        <div class="school-detailes">
            <div class="name">
                <h2>Bhushir Bandar High School</h2>

            </div>
            <div class="sc-det">
                <p> Chirirbandar, Dinajpur</p>
                <p>Phone: +8801812905996</p>
                <p>Email: mdrejaulislam2607@gmail.com</p>
                <div class="fb-img">
                    <a href="https://www.facebook.com/BhushirbandarSchool"><img src="./Gallery/facebook img.webp"
                            alt="photo"></a>
                </div>

            </div>
        </div>
        <div class="foot-2">
            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449.11524523210414!2d88.74389960747531!3d25.77314104652358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4a9d178f937e1%3A0x4253183c2a57801a!2sVushirbondor%20High%20School!5e0!3m2!1sen!2sbd!4v1668088722507!5m2!1sen!2sbd"
                     style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        

        
        </div>
        <div class="foot-1">
            <h3>Important Links</h3>
            <a href="https://dhakaeducationboard.gov.bd/">≻ ঢাকা শিক্ষাবোর্ড</a><br>

            <a href="https://www.teachers.gov.bd/">≻ শিক্ষক বাতায়ন</a><br>

            <a href="http://www.dpe.gov.bd/">≻ প্রাথমিক শিক্ষা অধিদপ্তর</a><br>

            <a href="http://www.moedu.gov.bd/">≻ শিক্ষা মন্ত্রনালয়</a><br>

            <a href="http://www.dshe.gov.bd/">≻ মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</a><br>

            <a href="http://www.nctb.gov.bd/">≻ জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড</a><br>


        </div>


    </div>
    <hr>

    <div class="foot-nd">
        <div class="copy-des">
            <p>© Copyright 2022. All Rights Reserved. Bhushir Bandar High School</p>
            <p>Design & Developed by <a href="#">Infinite Tech Query</a></p>
        </div>
    </div>

        `
    }
}
customElements.define('my-footer', MyFooter)




// ------------------------------------------------
// ----------------Photos and videos---------------
// ------------------------------------------------

let photo = document.getElementById("e-photo")
let video = document.getElementById("e-video")
let photos = document.querySelector(".event-img-slider")
let videos = document.querySelector(".vid-slider")

video.addEventListener('click', ()=>{
    photo.classList.replace('e-active', 'e-disable')
    video.classList.replace('e-disable', 'e-active')
    photos.style.display="none";
    videos.style.display="flex";
    
})
photo.addEventListener('click', ()=>{
    video.classList.replace('e-active', 'e-disable')
    photo.classList.replace('e-disable', 'e-active')
    videos.style.display="none";
    photos.style.display="flex";
})
