<template>
    <footer class="sticky bottom-0 bg-emerald-100/90">
        <div class="max-w-6xl pb-3 h-3 mx-auto  w-11/12 md:w-auto">
            <div class="flex gap-8 h-full text-xs md:text-base justify-center items-end capitalize">
                <div>
                    <RouterLink to="/contact-us">contact us</RouterLink>
                </div>
                <div>
                    <a href="https://github.com/peterchigozirim/" target="blank">
                        <font-awesome :icon="['fab', 'github']" class="text-xl" /> github
                    </a>
                </div>
                <div>
                    <p class="flex items-center gap-1">
                        <font-awesome :icon="['far', 'copyright']" class="text-lg" /> {{ new Date().getFullYear() }} copyright <a href="https://gorgorcity.com" class="text-green-600 hover:text-black">Gorgorcity</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
 
</script>

<style>

</style>