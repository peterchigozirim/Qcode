<template>
    <div class="min-h-[35rem]  w-full">

        <div class="max-w-5xl w-11/12 mx-auto md:w-auto">
            <div class="grid md:grid-cols-2 gap-4 my-20 ">
                <contacts-details />
                <contacts-form />
            </div>
        </div>
    </div>
</template>

<script>
import ContactsDetails from '../components/ContactsComponent/ContactsDetails.vue'
import ContactsForm from '../components/ContactsComponent/ContactsForm.vue'
export default {
  components: { ContactsDetails, ContactsForm },

}
</script>

<style>

</style>