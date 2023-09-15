
<template>
  <section class="banner mb-md-6 mb-ms-6"
   :style="{ backgroundImage: 'url(' + image + ')' }"
   >
    <div class="container-lg ">
        <div class="row pt-5 pb-5">
         
            <!-- Search -->
            <section class="card py-2 shadow m-auto position-relative search " >
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
            </section>
            <section class="col-12 card py-3 shadow m-auto my-4 position-relative search" styel="background-color:#FFC107">
                <div class="row">
                    <div class="col-md-4">
                      <select class="form-control">
                        <option  v-for="j of resultQuery" :key="j.id" :value="j.country" selected > {{ j.country }} </option>
                        <option value="" selected>City</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <select class="form-control" aria-label="Default select example">
                        <option  v-for="j of resultQuery" :key="j.id" :value="j.company" selected > {{ j.company }} </option>
                        <option value="" selected  >Company</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <select class="form-control">
                        <option  v-for="j of resultQuery" :key="j.id" :value="j.type" selected > {{ j.type }} </option>
                        <option value="" selected>Job Type</option>
                      </select>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-4">
                      <select class="form-control">
                        <option  v-for="j of resultQuery" :key="j.id" :value="j.type" selected > {{ j.type }} </option>
                        <option value="" selected>Work Type</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <select class="form-control">
                        <option value="">Time</option>
                        <option>Last time</option>
                        <option>Today</option>
                        <option>This week</option>
                        <option>This month</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <select class="form-control">
                        <option  v-for="j of resultQuery" :key="j.id" :value="j.price" selected > {{ j.price }} </option>
                        <option value="" selected>Price</option>
                      </select>
                    </div>
                  </div>

            </section>
        </div>
      
    </div>
</section>
<!-- end Search  -->

<main class="my-md-5 my-ms-5">
  <div class="container-lg ">
      <div class="row pt-4 mt-lg-3 mt-md-4 mt-5">
          <!-- header of page -->
          
      
          <!-- All Job Section -->
          <section class="col-lg-12 col-md-8 col-sm-12">
              <!-- Single Job -->

              <article v-for="r of resultQuery" :key="r.id"  class="card p-lg-3 p-md-2 p-3 mb-2 shadow-sm search-job border-4 border-success-subtle" role="button">
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
      filterQuery: null,

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
    },
    resultCopany() {
      if (this.filterQuery) {
        return this.jobs.filter(item => {
          return this.filterQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.company.toLowerCase().includes(v));
        });
      } else {
        return this.jobs;
      }
    },

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