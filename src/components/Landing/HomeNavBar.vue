<template>
  <Popover class="relative bg-white z-50">
    <div class="flex items-center justify-between p-2 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>
      <PopoverGroup as="nav" class="hidden space-x-10 md:flex">

        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Features</a>
        <a href="#about" class="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Team</a>
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Services</a>

      </PopoverGroup>
      <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
        <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid grid-cols-1 gap-7">
                <a v-for="solution in solutions" :key="solution.name" :href="solution.href" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                  <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <component :is="solution.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">{{ solution.name }}</div>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="mt-6">
              <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  InformationCircleIcon,
  UserGroupIcon,
  KeyIcon,
  LightBulbIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
// import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const solutions = [
  {
    name: 'Features',
    icon: KeyIcon,
  },
  {
    name: 'About',
    icon: InformationCircleIcon,
  },
  { name: 'Team', icon: UserGroupIcon },
  {
    name: 'Services',
    icon: LightBulbIcon,
  },

]
// const resources = [
//   {
//     name: 'Help Center',
//     description: 'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//   },
//   { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
//   { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
//   { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
// ]
</script>
