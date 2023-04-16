<template>
  <section class="pb-20 relative block bg-gray-900">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px)">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
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
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
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
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
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
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i class="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
          <p class="mt-2 mb-4 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <!-- Chatbot -->
        <button @click="cart = true" class="inline-block h-12 w-12 lg:mb-0 mr-4 fixed bottom-5 right-5 z-50">
          <ChatBubbleLeftEllipsisIcon
            class="h-full w-full rounded-full bg-white overflow-hidden text-indigo-500 shadow-lg p-2 hover:drop-shadow-glow" />
        </button>

        <!-- Chatbot end -->

        <!--  -->
        <!-- Start -->
        <div>
          <TransitionRoot class="z-50" as="template" :show="cart">
            <Dialog as="div" class="relative z-10">
              <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </TransitionChild>

              <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                  <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enter-from="translate-x-full" enter-to="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
                      leave-to="translate-x-full">
                      <DialogPanel class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-hidden bg-white shadow-xl">
                          <div class=" overflow-y-hidden pt-6 px-4 sm:px-6">
                            <div class="flex items-start justify-between">
                              <DialogTitle class="text-lg font-medium text-gray-900">Mr. Health
                              </DialogTitle>
                              <div class="ml-3 flex h-7 items-center">
                                <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                  @click="cart = false">
                                  <span class="sr-only">Close panel</span>
                                  <i class="fa-solid fa-xmark"></i>
                                </button>
                              </div>
                            </div>

                          </div>
                          <!-- tushar bsdk -->
                          <div
                            class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
                            <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
                              <div class="flex w-full mt-2 space-x-3 max-w-xs">
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                <div>
                                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">Hi hope you are doing well. I am <span
                                        class="text-blue-500 font-semibold"> MR.Health </span> here for your service.
                                      Please select any one of these options</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                              </div>
                              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end cursor-pointer">
                                <div>
                                  <div class="bg-white border-blue-300 border text-blue-600 p-3" @click="disease('fit')"
                                    :class="{
                                      bgblue900: currentTopic === 'fit',
                                    }">
                                    <p class="text-sm">How to be fit ?</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                              </div>
                              <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end cursor-pointer">
                                <div>
                                  <div class="bg-white border-blue-300 border text-blue-600 p-3" @click="disease('about')"
                                    :class="{
                                      bgblue900: currentTopic === 'about',
                                    }">
                                    <p class="text-sm">About a Diseases ?</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                              </div>
                              <div v-if="currentQuestion >= 1" class="flex w-full mt-2 space-x-3 max-w-xs">
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                <div>
                                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">What is your age?</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                              </div>
                              <div v-if="age !== ''"
                                class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end cursor-pointer">
                                <div>
                                  <div class="bg-blue-600 text-white p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">{{ age }}</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                              </div>
                              <div v-if="currentQuestion >= 2" class="flex w-full mt-2 space-x-3 max-w-xs">
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                <div>
                                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">Are you pregnant ? Answer in 0 or 1</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                              </div>
                              <div v-if="pregnant !== ''"
                                class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end cursor-pointer">
                                <div>
                                  <div class="bg-blue-600 text-white p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">{{ pregnant }}</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                              </div>
                              <div v-if="currentQuestion >= 3" class="flex w-full mt-2 space-x-3 max-w-xs">
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                <div>
                                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">do you consume tobacco ? Answer in 0 or 1</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                              </div>
                              <div v-if="tobacco !== ''"
                                class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end cursor-pointer">
                                <div>
                                  <div class="bg-blue-600 text-white p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">{{ tobacco }}</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                              </div>
                              <div v-if="end">
                              <div  v-for="fitAns in fitAnswers" :key="fitAns.MyHFTitle" class="flex w-full mt-2 space-x-3 max-w-xs">
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                <div>
                                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">{{ removeTags(fitAns.MyHFTitle) }}</p>
                                    <p class="text-sm">{{ removeTags(fitAns.MyHFDescription) }}</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                              </div>
                              </div>
                            </div>
                            <div class="bg-gray-300 p-4">
                              <input :disabled="!enable" v-on:keyup.enter="answerQuestion()" v-model="answer"
                                class="flex items-center h-10 w-full rounded px-3 text-sm" type="text"
                                placeholder="Type your message…">
                            </div>
                          </div>
                          <!--tushar bsdk end -->
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
import axios from "axios"
import { Dialog, TransitionChild, TransitionRoot } from "@headlessui/vue";
export default {
  name: "ServicesSection",
  components: {
    ChatBubbleLeftEllipsisIcon,
    Dialog,
    TransitionChild,
    TransitionRoot,

  },
  setup() {
    const open = ref(false);
    const cart = ref(false);
    let enable = ref(true)
    let currentTopic = ref("")
    let age = ref("")
    let answer = ref("")
    let pregnant = ref("");
    let currentQuestion = ref(0);
    const tobacco = ref("");
    let end = ref(false)
    const disease = (topic) => {
      currentTopic.value = topic
      if (topic == 'fit') {
        currentQuestion.value = 1;
        enable.value = true
      }
    }
    let fitAnswers = ref()
    function removeTags(str) {
      if ((str === null) || (str === ''))
        return false;
      else
        str = str.toString();
      return str.replace(/(<([^>]+)>)/ig, '');
    }
    let answerQuestion = async () => {
      if (currentQuestion.value === 1) {
        age.value = answer.value
        currentQuestion.value++;
        answer.value = ""
      }
      else if (currentQuestion.value === 2) {
        pregnant.value = answer.value
        currentQuestion.value++;
        answer.value = ""
      }
      else if (currentQuestion.value === 3) {
        tobacco.value = answer.value
        answer.value = ""
        let res = await axios.get(`https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?lang=en&age=21&tobaccoUse=0&sexuallyActive=1&pregnant=1`)
        fitAnswers.value = res.data.Result.Resources.all.Resource.slice(0,5);
        end.value = true
      }
    }
    return { cart, age, answer, tobacco, pregnant, open, end, disease, currentTopic, answerQuestion, currentQuestion, enable, fitAnswers, removeTags }
  }
};
</script>

<style>
.bgblue900 {
  background: rgb(45, 134, 228);
  color: white;
}
</style>
