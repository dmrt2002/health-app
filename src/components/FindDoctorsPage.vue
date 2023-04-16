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
                <div v-for="doctor in doctors" :key="doctor">
                    <div class="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                        <div class="p-4 md:p-6">
                            <div class="flex items-center">
                                <img src="../assets/doc.jpg" alt="dp" class="w-16 h-16 rounded-full" />
                                <div class="pl-4 sm:pl-5">
                                    <p class="sm:text-xl text-lg font-semibold text-gray-800 dark:text-gray-100">{{
                                        doctor.fname }} {{ doctor.lname }}</p>
                                    <p class="sm:text-lg text-base text-gray-500 dark:text-gray-400 mt-1">{{ doctor.title }}
                                    </p>
                                </div>
                            </div>
                            <div class="sm:mt-7 mt-4">
                                <p class="sm:text-lg text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">
                                    {{ doctor.state }}</p>
                                <p class="sm:text-base text-sm leading-5 text-gray-500 dark:text-gray-400 mt-2">{{
                                    doctor.specialist }}</p>
                            </div>
                            <div class="mt-4">
                                <p class="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">{{
                                    doctor.address }}</p>
                                <div class="flex items-center mt-5">
                                    <div
                                        class="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-10 flex items-center justify-center">
                                        <p
                                            class="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-400">
                                            Full Time</p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-8 mt-6">
                                <button @click="openDialog(doctor._id)"
                                    class="bg-indigo-700 hover:bg-indigo-600 w-full rounded py-2">
                                    <p class="sm:text-base text-sm font-semibold leading-9 text-center text-white">Get
                                        Appointment</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <tu-dialog width="550px" v-model="activeDialog">
            <template v-slot:header>
                <h2 class="mt-4 text-xl">Appointment</h2>
            </template>
            <div class="center">
                <div>
                    <table>
                        <tr>
                            <td>
                                <span title="Label">Full Name</span>
                            </td>
                            <td>
                                <tu-input primary v-model="fullname" state="primary" class="" placeholder="Full Name" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span title="Label">Age</span>
                            </td>
                            <td>
                                <tu-input primary v-model="age" state="primary" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span title="Label">Sex</span>
                            </td>
                            <td>
                                <tu-select placeholder="" v-model="selectValue1" filter>
                                    <tu-select-option label="male" value="male">
                                        Male
                                    </tu-select-option>
                                    <tu-select-option label="female" value="female">
                                        Female
                                    </tu-select-option>
                                </tu-select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span title="Label">Phone</span>
                            </td>
                            <td>
                                <tu-input type="number" v-model="phone" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span title="Label">Email</span>
                            </td>
                            <td>
                                <tu-input type="email" v-model="email" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span title="Label">Appointment Date</span>
                            </td>
                            <td>
                                <tu-input type="date" v-model="date" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <template v-slot:footer>
                <tu-button width="100px" style="margin: 5px" @click="submitApplication()" block>
                    Submit
                </tu-button>
            </template>
        </tu-dialog>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, toRefs, reactive, watch } from "vue";
import { useStore } from "vuex";
import axios from "axios"
import NavBar from "./NavBar.vue";
import { tuDialog, tuButton, tuInput, tuSelect, tuSelectOption } from "tukal-vue"
export default defineComponent({
    components: {
        NavBar,
        tuDialog,
        tuButton,
        tuInput,
        tuSelect,
        tuSelectOption
    },
    setup() {
        const store = useStore();
        const doctors = ref([]);
        let currentDoctor = ref();
        const activeDialog = ref(false);
        const appointment = reactive({
            fullname: "",
            age: "",
            sex: "",
            phone: "",
            email: "",
            date: ""
        })
        const search = ref("");
        onMounted(async () => {
            let param = {
                city: store.getters.getCity
            }
            let res = await axios.post("http://localhost:5000/doctor/getdoctors", param);
            doctors.value = res.data
        })
        const openDialog = (id) => {
            currentDoctor.value = id;
            activeDialog.value = true
        }
        const submitApplication = async () => {
            let param = {
                fullname: appointment.fullname,
                age: appointment.age,
                sex: appointment.sex,
                phone: appointment.phone,
                email: appointment.email,
                date: appointment.date,
                token: store.getters.getToken,
                doctorid: currentDoctor.value
            }
            let res = await axios.post("http://localhost:5000/patients/getAppointment", param);
            console.log(res)
            if (res.status === 200) {
                activeDialog.value = false
            }
        }
        watch(search, async () => {
            if (search.value !== "") {
                let result = doctors.value.filter((obj) => {
                    return obj.fname.startsWith(search.value)
                })
                doctors.value = result
            }
            else {
                let param = {
                    city: store.getters.getCity
                }
                let res = await axios.post("http://localhost:5000/doctor/getdoctors", param);
                doctors.value = res.data
            }
        })
        return { doctors, openDialog, activeDialog, submitApplication, ...toRefs(appointment), search }
    }
});
</script>

<style>
.tu-navbar__item {
    font-size: 1.25rem !important;
}

.col-3 {
    flex: 0 0 auto;
    width: 16.6666666667%;
}

.d-flex {
    display: flex;
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
