<template>
    <q-layout view="hHh lpR fFf">
      <!-- Home header -->
      <HeaderHomeLogined/>
  
      <q-page-container>
        <router-view />
      </q-page-container>
      
        <!-- Footer home -->
        <FooterHome/>
    </q-layout>
  </template>
  <script setup>
  import FooterHome from 'src/components/FooterHome.vue';
import HeaderHomeLogined from 'src/components/HeaderHomeLogined.vue';
  </script>
  
  
  
  
  