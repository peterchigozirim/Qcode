<template>
    <footer class=" bg-emerald-100">
        <div class="max-w-6xl h-12 mx-auto w-11/12 md:w-auto">
            <div class="flex gap-8 h-full justify-center items-center capitalize">
                <div>
                    <RouterLink to="/contact-us">contact us</RouterLink>
                </div>
                <div>
                    <a href="https://github.com/peterchigozirim/" target="blank">
                        <font-awesome :icon="['fab', 'github']" class="text-xl" /> github
                    </a>
                </div>
                <div>
                    <p>
                        <font-awesome :icon="['far', 'copyright']" class="text-lg" /> 2022 copyright
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    // var moment = require('moment')
    export default {
        data(){
            return{
                // moment:moment,
            }
        },
     
    }
</script>

<style>

</style>