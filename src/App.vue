<script setup lang="tsx">
import Profile from './components/views/Profile.vue';
import Toolbar from './components/views/Toolbar.vue';
import Contact from './components/views/Contact.vue';
import Projects from './components/views/Projects.vue';

</script>


<template>
  <div h-full flex flex-col>
    <div p-t-4 m-x-4>
      <Toolbar />
    </div>
    <div flex-1 m-4 bg-gray-8 rounded-4 p-4 overflow-y-auto>
      <router-view v-slot="{ Component, route }">
        <Transition name="fade">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>

    </div>
  </div>
</template>