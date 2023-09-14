
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
                          <font-awesome-icon class="fas fa-search text-center m-2" :icon="['fas', 'magnifying-glass']" />
                        </div>
                    </div>
                    <div class="col-lg-11 col-md-11 col-sm-11 col-10">
                        <div>
                            <input v-model="searchQuery" type="search" id="search-key" class="form-control" placeholder="search..." aria-label="email" aria-describedby="addon-wrapping">
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
                              <option selected>كارت بلس</option>
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

              <article v-for="r of resultQuery" :key="r.id"  class="card p-lg-3 p-md-2 p-3 mb-3 shadow-sm search-job" role="button">
                  <div class="card-title d-flex justify-content-between align-items-center m-0">
                      <div class="px-2 s">
                          <h3 class="mb-0"><a class="text-primary fs-5 fw-bold" href="../templates/detailsJob.html">{{r.title}}</a></h3>
                          <a class="text-secondary fs-5 fw-bold mb-0" href="#"> {{ r.company }} <span class="fw-light text-dark fs-7">{{ r.country }}</span></a>
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
                                      <span class="text-dark">{{r.type}}</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-cash-stack text-primary"></i>
                                      <span class="text-dark">{{r.price}}</span>
                                  </a>
                              </div>
                              <div class="d-inline-block px-1">
                                  <a href="../templates/detailsJob.html">
                                      <i class="bi bi-clock text-primary"></i>
                                      <span class="text-danger">{{r.data}}</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="my-2">
                          <a href="../templates/detailsJob.html">
                              <p class="fw-light  text-dark">{{ r.body }} </p>
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
  name: "App",
  data() {
    return {
      searchQuery: null,
      jobs:[
                {id: 1, title: 'Systems Engineer, Microsoft Services' , company:'Microsoft' , country:'Yemen' , body:'Our Culture: At STS we are proud of our culture and how it drives everything.' , type:'Full-time',price:"1500$ - 2500$",data:'March 03' ,isOffer: true}, 
                {id: 2, title: 'javascript for dummies, Microsoft Services', company:'Google' , country:'Eypt' ,body:'Our Culture: At STS we are proud of our culture and how it drives everything.',type:'Full-time',price:"3500$ - 2500$" ,data:'Feb 01'  ,isOffer: true}, 
                {id: 3, title: 'vue for dummies, Microsoft Services' ,company:'Meta' , country:'US' ,body:'Our Culture: At STS we are proud of our culture and how it drives everything.',type:'On-line',price:"2500$ - 3500$",data:'Sep 02'  ,isOffer: true}, 
                {id: 4, title: 'windows for dummies, Microsoft Services' ,company:'Amozon' , country:'China' ,body:'Our Culture: At STS we are proud of our culture and how it drives everything.',type:'Part-time',price:"150$ - 500$",data:'Oct 02'  ,isOffer: true}, 
                {id: 4, title: 'html for dummies, Microsoft Services' ,company:'OpenAi',  country:'Russa' ,body:'Our Culture: At STS we are proud of our culture and how it drives everything.',type:'Full-time',price:"5000$ - 5000$",data:'Jun 03'  ,isOffer: true}, 
            ]
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.jobs.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.jobs;
      }
    }
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