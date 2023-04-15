<template>
    <div>
        <NavBar />
        <div>
            <div class="flex justify-evenly mt-8">
                <div>
                    <div class="w-full sm:max-w-xs">
                    <label for="search" class="sr-only">Search</label>
                    <div class="relative">
                      <div
                        class="
                          pointer-events-none
                          absolute
                          inset-y-0
                          left-0
                          pl-3
                          flex
                          items-center
                        "
                      >
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <input
                        id="search"
                        name="search"
                        v-model="searchProduct"
                        class="
                          block
                          w-full
                          bg-white
                          border border-gray-300
                          rounded-md
                          py-2
                          pl-10
                          pr-3
                          text-sm
                          placeholder-gray-500
                          focus:outline-none
                          focus:text-gray-900
                          focus:placeholder-gray-400
                          focus:ring-1
                          focus:ring-indigo-500
                          focus:border-indigo-500
                          sm:text-sm
                        "
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                    </div>
                </div>
            </div>
            <div v-if="medicines.length > 0" class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-6">
                <div v-for="disease in medicines" :key="disease">
                    <div class="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                        <div class="p-4 md:p-6">
                            <div class="flex items-center">
                                <img src="../assets/tablet.jpg"
                                    alt="dp" class="w-16 h-16 rounded-full" />
                                <div class="pl-4 sm:pl-5">
                                    <p class="text-sm font-semibold text-gray-800 dark:text-gray-100">
                                        {{ disease.openfda.brand_name[0] }}
                                       </p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        {{  disease.openfda.product_type[0] }}
                                    </p>
                                </div>
                            </div> 
                            <div class="sm:mt-7 mt-4">
                                <p class="sm:text-lg text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">
                                    {{ disease.openfda.manufacturer_name[0] }}</p>
                                <p class="sm:text-base text-sm leading-5 text-gray-500 dark:text-gray-400 mt-2">{{
                                    disease.openfda.pharm_class_pe[0] }}</p>
                            </div>
                            <!-- <div class="mt-4">
                                <p class="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">{{
                                    disease.openfda.product_type }}</p>
                                <div class="flex items-center mt-5">
                                    <div
                                        class="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-10 flex items-center justify-center">
                                        <p
                                            class="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">
                                            Full Time</p>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="px-8 mt-6">
                                <button class="bg-indigo-700 hover:bg-indigo-600 w-full rounded py-2">
                                    <p class="sm:text-base text-sm font-semibold leading-9 text-center text-white">Get
                                        Appointment</p>
                                </button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios"
import NavBar from "./NavBar.vue"
export default defineComponent({
    components: {
        NavBar
    },
    setup() {
        const medicines = ref([]);
        onMounted(async () => {
            let res = await axios.post("http://localhost:5000/patients/getMedicines");
            medicines.value = res.data
            console.log(medicines.value[0])
        })
        return { medicines }
    }
});
</script>