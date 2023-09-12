<template>       
        <div class="card-body">
                <h6 class="card-title">
                    {{ job.title }}
                </h6>
                <p class="card-text">
                    {{ job.body }}
                </p>
                <a href="pages/site/jobs.html" class="btn btn-outline-success"><Details></Details></a>
        </div>
</template>

<script>
export default {
    props:['job'],
    
    
}
</script>

<style>

</style>