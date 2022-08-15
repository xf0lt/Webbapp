import React from 'react'
import './Home.css'

function Home() {
   return (
      <div>
         <section className='hero-section'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img src="https://st.hzcdn.com/simgs/pictures/exteriors/modern-exterior-img~03013fb109ad6fe8_4-8489-1-84c040a.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                     <h5>First slide label</h5>
                     <p>Some representative placeholder content for the first slide.</p>
                  </div>
               </div>
               <div className="carousel-item">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&w=1000&q=80" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                     <h5>Third slide label</h5>
                     <p>Some representative placeholder content for the third slide.</p>
                  </div>
               </div>
               <div className="carousel-item">
                  <img src="https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/newsletter/02C.jpg?1590547607" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                     <h5>Second slide label</h5>
                     <p>Some representative placeholder content for the second slide.</p>
                  </div>
               </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
            </button>
            </div>
         </section>
         
         {/* //! INI AKU COPY */}
         <section className='featured-posts container pt-2'>
            <h3 className='text-center text-uppercase py-4'>Featured posts</h3>
            <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                     <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                     <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <div className="d-grid">
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                     </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                     <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                     <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <div className="d-grid">
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                     </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                     <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                     <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <div className="d-grid">
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                     </div>
                     </div>
                  </div>
               </div>

            </div>
         </section>
         
         <section className='latest-posts container pt-2'>
            <h3 className='text-center text-uppercase py-4'>Latests posts</h3>
            <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                     <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                     <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <div className="d-grid">
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                     </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                     <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                     <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <div className="d-grid">
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                     </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card">
                     <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                     <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <div className="d-grid">
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className="container-fluid bg-primary bg-gradient mt-4" style={{ minHeight: "180px"}}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
               <i className='fs-1 text-warning my-3 fa-solid fa-location-dot'></i>
               <h3 className='text-white text-uppercase'>We have wide variety of posts</h3>
               <button className='fw-bold btn btn-warning my-2 text-dark text-uppercase'>View all posts</button>
            </div>
         </div>

         <section className='our-portfolion container'>
            <h3 className='text-center text-uppercase py-4'>Our portfolio</h3>
               <div className="container">
                  <div className="row g-2">
                     <div className="col-6">
                        <div className="p-1 border bg-light">
                           <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="p-1 border bg-light">
                           <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="p-1 border bg-light">
                           <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="p-1 border bg-light">
                           <img src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg" class="card-img-top" alt="..." />
                        </div>
                     </div>
                  </div>
               </div>
         </section>
      </div>
   )
}

export default Home;
