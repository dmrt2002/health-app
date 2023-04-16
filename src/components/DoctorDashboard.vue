<template>
    <div class="showcase-component">
        <body class="py-8 flex">
            <div class="bg-white w-screen py-5">
                <div class="mb-5 sm:mb-10 rounded-tl-lg rounded-tr-lg">
                    <div class="sm:flex items-center justify-between">
                        <div class="flex items-center mt-4 ml-4">
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
                                        <input id="search" name="search" v-model="searchProduct" class="
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
                    </div>
                </div>
                <div class="">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full whitespace-nowrap">
                            <tbody class="w-full">
                                <tr
                                    class="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white">
                                    <td tabindex="0" class="focus:outline-none pl-4">Date</td>
                                    <td tabindex="0" class="focus:outline-none pl-4">Full Name</td>
                                    <td tabindex="0" class="focus:outline-none pl-4">Email</td>
                                    <td tabindex="0" class="focus:outline-none pl-4">Age</td>
                                    <td tabindex="0" class="focus:outline-none pl-4">Phone</td>
                                    <td tabindex="0" class="focus:outline-none pl-4">Status</td>
                                </tr>
                                <tr v-for="data in tableData" :key="data.id"
                                    class="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100">
                                    <td tabindex="0" class="focus:outline-none pl-4">{{ data.date }}</td>
                                    <td tabindex="0" class="focus:outline-none pl-4">{{ data.fullname }}</td>
                                    <td tabindex="0" class="focus:outline-none pl-10">{{ data.email }}</td>
                                    <td class="pl-10">
                                        <span tabindex="0" class="focus:outline-none"> {{ data.age }} </span>
                                    </td>
                                    <td class="pl-10">
                                        <span tabindex="0" class="focus:outline-none"> {{ data.phone }} </span>
                                    </td>
                                    <td v-if="checkStatus(data)" class="pl-10">
                                        <span tabindex="0" class="focus:outline-none">
                                            <tu-icon v-if="tempStatus=== 'pending'">home</tu-icon>
                                            <tu-icon v-else-if="tempStatus === 'accept'">done</tu-icon>
                                            <tu-icon v-else>clear</tu-icon>
                                        </span>
                                    </td>
                                    <td class="pl-10" v-if="tempStatus === 'pending'">
                                        <div class="flex items-center">
                                            <tu-button primary width="100px" @click="updateStatus(data)" style="margin: 5px"
                                                block>
                                                Update Status
                                            </tu-button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </body>
        <tu-dialog width="550px" v-model="activeDialog">
            <template v-slot:header>
                <h4 class="mt-4">Status</h4>
            </template>
            <div class="center">
                <div>
                    <table>
                        <tr>
                            <td>
                                <tu-button success width="100px" @click="update('accept')" style="margin: 5px" block>
                                    Accept
                                </tu-button>
                            </td>
                            <td>
                                <tu-button danger width="100px" @click="update('reject')" style="margin: 5px" block>
                                    Reject
                                </tu-button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </tu-dialog>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import * as components from "tukal-vue";
import { useStore } from "vuex"
import axios from "axios";
export default defineComponent({
    components: {
        ...components
    },
    setup() {
        const navExpanded = ref(false)
        const selectedNavItem = ref("home")
        const navState = ref(false)
        const reduce = ref(true)
        const store = useStore();
        const tableData = ref([])
        const activeDialog = ref(false)
        const currentClient = ref();
        let tempStatus = ref("pending")
        onMounted(async () => {
            let param = {
                id: store.getters.getToken
            }
            let res = await axios.post("http://localhost:5000/doctor/getAllAppointments", param);
            tableData.value = res.data.appointments
        })
        const updateStatus = (data) => {
            activeDialog.value = true
            currentClient.value = data.email
        }
        const update = async (status) => {
            let param = {
                email: currentClient.value,
                status: status,
                id: store.getters.getToken
            }
            let res = await axios.post("http://localhost:5000/doctor/updateStatus", param)
            console.log(res)
        }
        const checkStatus = async(data) => {
            let param = {
                email: data.email
            }
            let resp = await axios.post("http://localhost:5000/doctor/getpatient", param)
            for (let i = 0; i < resp.data.length; i++) {
                if(resp.data[i].id === store.getters.getToken) {
                    tempStatus.value = resp.data[i].status
                }
            }
        }
        return { navExpanded, selectedNavItem, tempStatus, navState, reduce, tableData, updateStatus, activeDialog, update, checkStatus }
    }
});
</script>

<style scoped>
.showcase-component {
    padding: 0;
    display: flex;
    flex-direction: row;
}

.tu-sidebar-content {
    width: 180px;
    height: 98vh;
}
</style>