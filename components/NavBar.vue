<template>
  <header class="bg-teal-500 sm:flex sm:justify-center sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button"
          class="block text-gray-900 hover:text-gray-300 focus:text-gray focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!isOpen" fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden justify-between'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      <a href="/about"
        class="block px-2 py-1 font-normal rounded hover:bg-gray-300 sm:mt-0 sm:ml-2">About Us</a>
      <a href="/coaching" 
        class="mt-1 block px-2 py-1 font-normal font-sans rounded hover:bg-gray-300 sm:mt-0 sm:ml-2">Coaching</a>
      <a href="/training"
        class="mt-1 block px-2 py-1 font-normal rounded hover:bg-gray-300 sm:mt-0 sm:ml-2">Training</a>
      <a href="/membership"
        class="mt-1 block px-2 py-1 font-normal rounded hover:bg-gray-300 sm:mt-0 sm:ml-2">Membership</a>
      <a href="/contact"
        class="mt-1 block px-2 py-1 font-normal rounded hover:bg-gray-300 sm:mt-0 sm:ml-2">Contact</a>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>