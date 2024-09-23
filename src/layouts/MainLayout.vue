<template>
  <q-layout view="hHh lpR fFf">
    <!-- Home header -->
    <HeaderHome/>
  
   

    <q-page-container>
      <router-view />
    </q-page-container>
    
      <!-- Footer home -->
      <FooterHome/>
  </q-layout>
</template>
<script setup>
import HeaderHome from 'src/components/HeaderHome.vue';
import FooterHome from 'src/components/FooterHome.vue';
</script>




