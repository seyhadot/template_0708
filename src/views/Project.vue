<template>
  <div class="xs:px-0 sm:px-10 lg:px-32 xl:px-56 mt-6">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="xs:text-2xl sm:text-4xl lg:text-6xl font-bold text-white font-Raleway">Applications</h1>
      </div>
      <button class="more-app border-2 px-6 py h-12 line text-white font-bold font-Raleway">
        <span class="uil-plus mr-2 font-normal"></span> Add Application
        <!-- <span class="caret text-white"></span> -->
      </button>
    </div>
    <div class="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-10">
      <a href="/" v-for="x in 7" class="bg-menu_gray ml-0 flex py-16 justify-center relative items-center content-center align-middle">
        <div>
          <div class="text-menu_yellow">
            <i class="uil-expand-arrows-alt text-6xl"></i>
          </div>
          <div class="absolute bottom-0 left-0 pl-3 pb-2">
            <span class="text-white font-bold text-xs capitalize">Base App</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
