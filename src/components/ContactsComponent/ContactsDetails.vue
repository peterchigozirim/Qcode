<template>
    <div class=" w-full">
        <div class="space-y-8">
            <div>
                <p class="text-2xl md:text-4xl text-emerald-600/90 font-bold">
                    Contact Us
                </p>
            </div>
            <div class="hover:bg-emerald-600/50 group capitalize h-24 w-full md:w-96 rounded-md drop-shadow-xl shadow-lg bg-emerald-50 flex items-center px-4 gap-4">
                <div>
                    <font-awesome :icon="['fas', 'phone-volume']" class="-rotate-45 mr-3 text-4xl text-emerald-600 group-hover:text-emerald-50" /> 
                </div>
                
                <div class="space-y-2 group-hover:text-emerald-50">
                    <div class="text-emerald-600 text-xl md:text-2xl font-semibold group-hover:text-emerald-50">
                        <p>call us</p>
                    </div>
                    <div>
                        <a href="tel:+2349013359038" class="hover:text-emerald-600 group-hover:hover:text-emerald-50 hover:underline">phone:+2349013359038</a>
                    </div>
                </div>
            </div>
            <div class="hover:bg-emerald-600/50 group capitalize h-24 w-full md:w-96 rounded-md drop-shadow-xl shadow-lg bg-emerald-50 flex items-center px-4 gap-4">
                <div>
                    <font-awesome :icon="['fas', 'envelope']" class=" mr-3 text-4xl text-emerald-600 group-hover:text-emerald-50" /> 
                </div>
                
                <div class="space-y-2 group-hover:text-emerald-50">
                    <div class="text-emerald-600 text-xl md:text-2xl font-semibold group-hover:text-emerald-50">
                        <p>email</p>
                    </div>
                    <div>
                        <a href="mailto:info@gorgorcity.com" class="hover:text-emerald-600 group-hover:hover:text-emerald-50 lowercase hover:underline">info@gorgorcity.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>