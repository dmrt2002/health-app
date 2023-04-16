<template>
    <div>
        <NavBar />
        <div>
            <div class="flex justify-evenly mt-8">
                <div>
                    <div class="w-full sm:max-w-xs">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="
                              pointer-events-none
                              absolute
                              inset-y-0
                              left-0
                              pl-3
                              flex
                              items-center
                            ">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <input id="search" name="search" v-model="search" class="
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
                            " placeholder="Search" type="search" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-6">
                <div v-for="disease in diseases" :key="disease">
                    <div class="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                        <div class="p-4 md:p-6">
                            <div class="flex items-center">
                                <img src="data:image/jpeg;base64,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"
                                    alt="dp" class="w-16 h-16 rounded-full" />
                                <div class="pl-4 sm:pl-5">
                                    <p class="sm:text-xl text-lg font-semibold text-gray-800 dark:text-gray-100">{{
                                        disease.Disease }}</p>
                                    <p class="sm:text-lg text-base text-gray-500 dark:text-gray-400 mt-1">
                                        Symptoms
                                    </p>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="flex items-center mt-5">
                                    <div
                                        class="bg-gray-100 dark:bg-gray-800 rounded-full w-full h-10 flex items-center justify-center">
                                        <p
                                            class="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">
                                            {{ disease.Symptom_1 }}</p>
                                    </div>
                                </div>
                                <div class="flex items-center mt-5">
                                    <div
                                        class="bg-gray-100 dark:bg-gray-800 rounded-full w-full h-10 flex items-center justify-center">
                                        <p
                                            class="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">
                                            {{ disease.Symptom_2 }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center mt-5">
                                <div
                                    class="bg-gray-100 dark:bg-gray-800 rounded-full w-full h-10 flex items-center justify-center">
                                    <p
                                        class="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">
                                        {{ disease.Symptom_3 }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import NavBar from "./NavBar.vue"
import axios from "axios"
export default defineComponent({
    components: {
        NavBar
    },
    setup() {
        const diseases = ref([]);
        const search = ref("");
        onMounted(async () => {
            let res = await axios.post("http://localhost:5000/patients/getDiseases");
            diseases.value = res.data
        })
        watch(search, async () => {
            if (search.value !== "") {
                let result = diseases.value.filter((obj) => {
                    return obj.Disease.startsWith(search.value)
                })
                diseases.value = result
            }
            else {
                let res = await axios.post("http://localhost:5000/patients/getDiseases");
                diseases.value = res.data
            }
        })
        return { diseases, search }
    }
});
</script>