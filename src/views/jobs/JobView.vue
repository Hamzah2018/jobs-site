
<template>
  <section class="banner"
   :style="{ backgroundImage: 'url(' + image + ')' }"
   >
    <div class="container-lg">
        <div class="row pt-5 pb-5">
            <div class="col-12">
                <div class="p-lg-5 p-md-5 text-lg-start text-md-start text-sm-center text-center">
                    <h1 class="fs-1 fw-bold text-light mt-5">Hr-jobs</h1>
                    <p class="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum itaque natus numquam</p>
                </div>
            </div>
            <!-- Search -->
            <div class="card py-2 shadow m-auto position-relative search" style="width: 75%;">
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-sm-1 col-2">
                        <div class="bg-20 bg-warning  d-flex logo border  shadow-sm align-items-center justify-content-center">
                          <!-- <font-awesome-icon icon="fab-solid fa-user-secret" /> -->
                          <!-- <font-awesome-icon icon="fab-solid fa-user" /> -->
                          <font-awesome-icon class="fas fa-search text-center m-2" :icon="['fas', 'magnifying-glass']" />
                          <!-- <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"/> -->
                               <!-- For "normal" icons, do not use the prefix -->

   <!-- For "brands", use more verbose prop definition -->
                          <!-- <font-awesome-icon icon="fa-regular fa-envelope"></font-awesome-icon> -->

                          <!-- <i class="fas fa-search text-center m-2"></i> -->
                          <!-- <i class="bi bi-search text-light"></i> -->
                        </div>
                    </div>
                    <div class="col-lg-11 col-md-11 col-sm-11 col-10">
                        <div>
                            <input type="search" id="search-key" class="form-control" placeholder="search..." aria-label="email" aria-describedby="addon-wrapping">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end Search  -->

<main>
  <div class="container-lg">
      <div class="row pt-4 mt-lg-5 mt-md-4 mt-0">
          <!-- header of page -->
          
          <!-- Filter Section -->
          <section class="Filter col-lg-4 col-md-4 col-sm-12 mb-3">
              <div class="card shadow p-3">
                  <div class="card-header bg-transparent mb-4">
                      <h1 class="fs-4 fw-bold text-primary">
                          <i class="bi bi-funnel fs-5 "></i>
                          <span>Filter</span>
                      </h1>
                  </div>
                  <form class="d-flex flex-column gap-3">
                      <div class="col-12 input-group flex-nowrap position-relative">
                          <div class="position-absolute top-50 end-0 translate-middle-y" style="z-index: 999; margin-right: 14px;">
                              <i class="bi bi-search text-black-50"></i>
                          </div>
                          <input type="search" id="" class="form-control rounded-pill" placeholder="search" aria-label="email" aria-describedby="addon-wrapping">
                      </div>
                      <div>
                          <h6 class="text-primary">الشركة</h6>
                          <select class="form-select" aria-label="Default select example">
                              <option selected>وميض</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                      <div>
                          <h6 class="text-primary">المدينة</h6>
                          <select class="form-select" aria-label="Default select example">
                              <option selected>صنعاء</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                      <div>
                          <h6 class="text-primary">التصنيفات</h6>
                          <div class="form-check mb-2">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                              <label class="form-check-label" for="flexCheckDefault">
                                  Default checkbox
                              </label>
                          </div>
                          <div class="form-check mb-2">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                              <label class="form-check-label" for="flexCheckDefault">
                                  Default checkbox
                              </label>
                          </div>
                          <div class="form-check mb-2">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                              <label class="form-check-label" for="flexCheckDefault">
                                  Default checkbox
                              </label>
                          </div>
                      </div>
                      <div>
                          <h6 class="text-primary">المهارات</h6>
                      </div>
                  </form>
              </div>
          </section>
          <!-- All Job Section -->
          <section class="col-lg-8 col-md-8 col-sm-12">
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
              <!-- Single Job -->
              <article class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">Sales Executive / Senior Sales Executive</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#">Hassans Optician <span class="fw-light text-dark fs-7">- Al Kuwait</span></a>
                      </div>
                      <div class="p-1 rounded d-flex justify-content-center logo-lg shadow-sm mt-2 ml-5">
                          <img class="img-fluid" src="../../assets/imges/microsoft.png" width="100%" alt="microsoft">
                      </div>
                  </div>
                  <div class="card-body p-md-2">
                      <div class="row card-link d-flex align-items-center justify-content-between mt-2">
                          <div class="col-12 fs-7">
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-briefcase text-primary"></i>
                                      <span class="text-secondary">Entry Level</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-hourglass text-primary"></i>
                                      <span class="text-dark">Full-time</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">$2000 - $1000</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">Feb 01</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">As a sales / senior sales executive, you will be working as part of our sales team in order to create a pleasant shopping experience for our customers, create a positive workplace environmen</p>
                          </a>
                      </div>
                  </div>
              </article>
              <!-- Single Job -->
          </section>
        </div>
        </div>
</main>
<!-- #EDF7FF -->
</template>

<script>
export default {
  data(){
        return{
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%2300ca00' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E",
      };
    }
};
</script>

<style>
.banner{
   
   height: 50vh;
   background-color: rgb(211, 235, 211);
  /* background-image: '../../assets/imges/loginback.png';*/
}
</style>