<template>
    <!-- menu section  -->
 <nav class="navbar navbar-expand-lg navbar-light container-fluid" >
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">H<span style="color: yellow;">R</span> <small >Jobs </small> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'Job'}"> Jobs </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="pages/site/services.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="pages/site/resume.html">Make Resume / CV</a></li>
            <li><a class="dropdown-item" href="#">Evaluate Resume </a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Help to know your needs</a></li>
            <li><a class="dropdown-item" href="#">Help You to know Your Goal</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">The job you wish</a>
        </li>
      </ul>
      <div class="col-lg-1 col-0" style="color: #777 !important;">
        <div class="dropdown d-lg-inline-flex d-none" style="color: #777 !important;">
            <a class="dropdown-toggle text-center text-light mt-1" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                <img src="../assets/imges/me.jpg"  width="50%" class="img-fluid rounded-circle border border-2 border-secondary shadow-sm" alt="fdsfdsfds">
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="pages/dashboard/protfile.html" 
                  
                  ><i class="bi bi-person-fill m-2"></i> Profile</a></li>
                <li><a class="dropdown-item" href="pages/dashboard/manage_users.html"><i class="bi bi-speedometer m-2"></i> Dashboard</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="pages/site/regest.html"><i class="bi bi-box-arrow-down-right m-2"></i> Sign out</a></li>
            </ul>
        </div>
    </div>
    
      
      <!-- <li class="nav-item">
        <a class="nav-link" href="pages/jobs.html" style="color: yellow;">Create Email</a>
      </li> -->
    </div>
  </div>
</nav>
<!--End menu section  -->
<router-view/>
</template>

<script>
export default {
  name: 'ImageCursoer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  min-width: 40px;
}




</style>
