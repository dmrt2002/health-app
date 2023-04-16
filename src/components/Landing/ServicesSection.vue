<template>
  <section class="pb-20 relative block bg-gray-900">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4 lg:pt-24">
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-white mt-4">
            Build something
          </h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap mt-12 justify-center">
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
          >
            <i class="fas fa-medal text-xl"></i>
          </div>
          <h6 class="text-xl mt-5 font-semibold text-white">
            Excelent Services
          </h6>
          <p class="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
          >
            <i class="fas fa-poll text-xl"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-white">
            Grow your market
          </h5>
          <p class="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
          >
            <i class="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
          <p class="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <!-- Chatbot -->
        <div>
          
        <div v-if="showTooltip" class="tooltip border-img">
        <p>Click here to chat with us!</p>
      </div>
        <button
        @click="cart = true"
          class="inline-block h-12 w-12 lg:mb-0 mr-4 fixed bottom-5 right-5 z-50"
        >
          <ChatBubbleLeftEllipsisIcon
            class="h-full w-full rounded-full bg-white overflow-hidden text-indigo-500 shadow-lg p-2 hover:drop-shadow-glow"
          />
        </button>
        </div>

        <!-- Chatbot end -->

        <!--  -->
        <!-- Start -->
        <div >
          <TransitionRoot class="z-50" as="template" :show="cart">
            <Dialog as="div" class="relative z-10">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-500"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-500"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />
              </TransitionChild>

              <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                  <div
                    class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
                  >
                    <TransitionChild
                      as="template"
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enter-from="translate-x-full"
                      enter-to="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leave-from="translate-x-0"
                      leave-to="translate-x-full"
                    >
                      <DialogPanel
                        class="pointer-events-auto w-screen max-w-md"
                      >
                        <div
                          class="flex h-full flex-col overflow-y-hidden bg-white shadow-xl"
                        >
                          <div class=" overflow-y-hidden pt-6 px-4 sm:px-6">
                            <div class="flex items-start justify-between">
                              <DialogTitle
                                class="text-lg font-medium text-gray-900"
                                >Mr. Health
                              </DialogTitle>
                              <div class="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                  @click="cart = false"
                                >
                                  <span class="sr-only">Close panel</span>
                                  <i class="fa-solid fa-xmark"></i>
                                </button>
                              </div>
                            </div>

                          </div>
<!-- chatbot ui  -->
	<div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
		<div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
			<div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
		</div>
		
		<div class="bg-gray-300 p-4">
			<input class="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…">
		</div>
	</div>
<!--chatbot end -->
                        </div>
                      </DialogPanel>
                    </TransitionChild>
                  </div>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>
        </div>

        <!-- End  -->

        <!--  -->
      </div>
    </div>
  </section>
</template>


<script>
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/vue/24/solid";
import { ref } from '@vue/runtime-core';
import { Dialog, TransitionChild, TransitionRoot } from "@headlessui/vue";
// eslint-disable-next-line
import VueScrollTo from 'vue-scrollto'

export default {
  name: "ServicesSection",
  components: {
    ChatBubbleLeftEllipsisIcon,
    Dialog,
    TransitionChild,
    TransitionRoot,

  },

  data() {
    return {
      showTooltip: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      if (scrollPosition > 500) { 
        this.showTooltip = true
      setTimeout(() => {
        this.showTooltip = false
      }, 7000)
        window.removeEventListener('scroll', this.handleScroll)

      }
    }
},
  setup() {
    // eslint-disable-next-line
    const open = ref(false);
    // eslint-disable-next-line
    const cart = ref(false);
  return {cart, open}
  }
};
</script>
