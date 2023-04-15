<template>
			<tu-navbar left-aligned fixed :open="openNav" v-model:value="navValue">
				<template #left>
					<img src="https://vuesax.com/logos/logo-vuesax-logotipo-vuesax-png-3.png" alt="" />
				</template>
				<tu-navbar-item :active="navValue == 'Github'" id="Github">
					Github
				</tu-navbar-item>
				<tu-navbar-item :active="navValue == 'Discord'" id="Discord">
					Discord
				</tu-navbar-item>
				<tu-navbar-item :active="navValue == 'Twitter'" id="Twitter">
					Twitter
				</tu-navbar-item>
				<tu-navbar-item :active="navValue == 'Medium'" id="Medium">
					Medium
				</tu-navbar-item>
			</tu-navbar>
</template>

<script>
import { defineComponent} from "vue";
import * as components from "tukal-vue";
export default defineComponent({
    components: {
        ...components
    },
    setup() {

    }
});
</script>

<style>
</style>