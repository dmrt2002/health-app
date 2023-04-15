<template>
    <div class="showcase-component">
    <tu-sidebar square v-model:value="selectedNavItem" v-model:expanded="navExpanded" :open="navState" :reduce=reduce>
        <template #logo>
            <img src="https://vuesax.com/logos/logo-vuesax-logotipo-vuesax-png-3.png" alt="" />
        </template>
        <template #header> Dashboard </template>
        <tu-sidebar-item id="home" href="/#/human" target="_self">
            <template #icon>
                <img src="https://e7.pngegg.com/pngimages/404/150/png-clipart-fountain-hills-computer-icons-house-home-inspection-house-blue-angle.png"
                    width="28" alt="" />
            </template>
            Home
        </tu-sidebar-item>
        <tu-sidebar-item id="market">
            <template #icon>
                <img src="data:image/png;base64,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"
                    width="28" alt="" />
            </template>
            Patients
        </tu-sidebar-item>
        <tu-sidebar-item id="Music">
            <template #icon>
                <img src="https://icon-library.com/images/appointment-icon-png/appointment-icon-png-27.jpg" width="24"
                    alt="" />
            </template>
            Appointments
        </tu-sidebar-item>
        <template #footer>
            <div style="margin: 0 auto; cursor: pointer;">
                <img @click="reduce = !reduce"
                    src="https://cdn.iconscout.com/icon/free/png-256/menu-bar-lines-option-list-hamburger-web-5-3177.png"
                    width="28" alt="" />
            </div>
        </template>
    </tu-sidebar>
    <tu-table striped size="" persistent-id="twne" :draggable="true" v-model="selected" v-bind="srvTableConfig" :page="page"
        :pageSize="5" :columnSelector="true">
        <template #footer>
            <tu-pagination not-margin flat v-model="page" :length="numPages" />
        </template>
    </tu-table>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import * as components from "tukal-vue";
export default defineComponent({
    components: {
        ...components
    },
    setup() {
        const navExpanded = ref(false)
        const selectedNavItem = ref("home")
        const navState = ref(false)
        const reduce = ref(true)
        const page = ref(1);
        const srvTableConfig = {
            columns: [
                {
                    caption: "name",
                    field: "name",
                    dataType: "string"
                },
                {
                    caption: "Country",
                    field: "country",
                    dataType: "string"
                },
                {
                    caption: "alpha_two_code",
                    field: "alpha_two_code",
                    dataType: "string"
                },
                {
                    caption: "state-province",
                    field: "state-province",
                    dataType: "string"
                }
            ],
            size: "",
            model: "server",
            serverSideConfig: {
                ajaxUrl: "http://universities.hipolabs.com/search?country=Singapore",
                method: "GET"
            }
        }
        return { navExpanded, selectedNavItem, navState, reduce, srvTableConfig, page }
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
}</style>