<template>
  <section class="pb-20 relative block bg-gray-900">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px)">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4 lg:pt-16">
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-white mt-4">
            What we offer
          </h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
             We offer a range of services to support the health and wellbeing of individuals and communities. Some of the services we offer include:
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
            <span class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Personalized</span> Chatbot
          </h6>
          <p class="mt-2 mb-4 text-gray-500">
            Our personalized AI chat bot is designed to provide information about a user's health by asking a few simple questions.
          </p>
        </div>
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i class="fas fa-poll text-xl"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-white">
            <span class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Blazingly</span> fast Appointments
          </h5>
          <p class="mt-2 mb-4 text-gray-500">
            Our Appointment mechanism helps you find the best doctors within your premises on your date of Choice without any hassle.
          </p>
        </div>
        <div class="w-full lg:w-3/12 px-4 text-center">
          <div
            class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i class="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 class="text-xl mt-5 font-semibold text-white"><span class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Informative</span> Blogs</h5>
          <p class="mt-2 mb-4 text-gray-500">
            Unlock the power of knowledge with our app's blog section! Discover expert insights, stay up-to-date with the latest trends, and unleash your full potential with every click.
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
            class="h-full w-full rounded-full bg-white overflow-hidden text-indigo-500 shadow-lg p-2 hover:drop-shadow-glow" />
        </button>
        </div>

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
                                    <p class="text-sm">About a Topic?</p>
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
                                <div v-for="fitAns in fitAnswers" :key="fitAns.MyHFTitle"
                                  class="flex w-full mt-2 space-x-3 max-w-xs">
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
                              <div v-if="currentTopic === 'about'" class="flex w-full mt-2 space-x-3 max-w-xs">
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                <div>
                                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">
                                      Please select any one of these options</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                              </div>
                              <div v-if="currentTopic === 'about'"
                                class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end cursor-pointer">
                                <div>
                                  <div class="bg-white border-blue-300 border text-blue-600 p-3" @click="about('first')"
                                    :class="{
                                      bgblue900: currentAbout === 'first',
                                    }">
                                    <p class="text-sm">Protect Yourself from Seasonal Flu</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                              </div>
                              <div v-if="currentTopic === 'about'"
                                class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end cursor-pointer">
                                <div>
                                  <div class="bg-white border-blue-300 border text-blue-600 p-3" @click="about('second')"
                                    :class="{
                                      bgblue900: currentAbout === 'second',
                                    }">
                                    <p class="text-sm">Talk with Your Doctor About Newborn Screening</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                              </div>
                              <div v-if="currentTopic === 'about'"
                                class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end cursor-pointer">
                                <div>
                                  <div class="bg-white border-blue-300 border text-blue-600 p-3" @click="about('third')"
                                    :class="{
                                      bgblue900: currentAbout === 'third',
                                    }">
                                    <p class="text-sm">Get Enough Sleep</p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                              </div>
                              <div v-if="currentTopic === 'about' && currentAbout === 'first'"
                                class="flex w-full mt-2 space-x-3 max-w-xs">
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                <div>
                                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">The single best way to reduce the risk of seasonal flu and its potentially serious complications is to get vaccinated each year, but good health habits like avoiding people who are sick, covering your cough and washing your hands often can help stop the spread of germs and prevent respiratory illnesses like flu. There also are flu antiviral drugs that can be used to treat and prevent flu
                                    </p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                              </div>
                              <div v-if="currentTopic === 'about' && currentAbout === 'second'"
                                class="flex w-full mt-2 space-x-3 max-w-xs">
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                <div>
                                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">Talk about newborn screening with your doctor or midwife before
                                      your baby is born. Newborn screening includes tests that check for certain diseases
                                      and conditions in newborn babies.

                                      Newborn screening lets doctors find these diseases and conditions early — before
                                      your baby shows any signs of a problem. Early treatment is important to keep your
                                      baby healthy and developing normally.

                                      Your baby will get most tests before leaving the hospital. The tests don't cause any
                                      harm or risk to your baby.
                                    </p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
                                </div>
                              </div>
                              <div v-if="currentTopic === 'about' && currentAbout === 'third'"
                                class="flex w-full mt-2 space-x-3 max-w-xs">
                                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                <div>
                                  <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p class="text-sm">People often cut back on their sleep for work, for family demands,
                                      or even to watch a good show on television. But if not getting enough sleep is a
                                      regular part of your routine, you may be at an increased risk for obesity, type 2
                                      diabetes, high blood pressure, heart disease and stroke, poor mental health, and
                                      even early death.
                                    </p>
                                  </div>
                                  <span class="text-xs text-gray-500 leading-none"></span>
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
    let currentAbout = ref("");
    const disease = (topic) => {
      if (currentTopic.value === "") {
        currentTopic.value = topic
        if (topic == 'fit') {
          currentQuestion.value = 1;
          enable.value = true
        }
      }
    }
    const about = (topic) => {
      console.log(topic)
      currentAbout.value = topic
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
        console.log(age.value, tobacco.value, pregnant.value)
        let res = await axios.get(`https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?lang=en&age=${age.value}&tobaccoUse=${tobacco.value}&sexuallyActive=1&pregnant=${pregnant.value}`)
        fitAnswers.value = res.data.Result.Resources.all.Resource;
        end.value = true
      }
    }
    return { cart, age, about, answer, tobacco, pregnant, open, end, disease, currentTopic, answerQuestion, currentQuestion, enable, fitAnswers, removeTags, currentAbout }
  }
};
</script>

<style>.bgblue900 {
  background: rgb(45, 134, 228);
  color: white;
}</style>
