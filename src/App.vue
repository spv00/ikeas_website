<script setup lang="tsx">
import Profile from './components/views/Profile.vue';
import Toolbar from './components/views/Toolbar.vue';
import Contact from './components/views/Contact.vue';
import Projects from './components/views/Projects.vue';
</script>

<template>
  <div flex flex-col h-screen>
    <Toolbar />
    <div flex-1 m-4 bg-gray-8 rounded-4 h-full p-4>
      <Profile />
    </div>
  </div>
</template>