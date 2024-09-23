<template>
    <q-layout view="hHh lpR fFf">
      <!-- Home header -->
  
      <!-- Desktop screen -->
       <div v-if="Screen.gt.sm">
        <q-header bordered class="bg-white text-primary q-pa-md" height-hint="98">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar style="cursor: pointer;" :to="{name:'home-page-logined'}">
              <img src="/public/icons/android-chrome-512x512.png" alt="Masterly Profile"  />
            </q-avatar>
          </q-toolbar-title>
  
          <q-tabs v-model="tab" active-class="active-tab" class="text-capitalize">
            <!-- active-class="active-tab" : Make active to menu when is on that page-->
            <q-tab name="home" label="Home" class="text-capitalize" />
            <q-tab name="course" label="Courses" class="text-capitalize" />
            <q-tab name="event" label="Events" class="text-capitalize" />
            <q-tab name="about" label="About" class="text-capitalize" />
            <q-tab name="contact" label="Contact Us" class="text-capitalize" />
  
            <q-separator vertical size="2px" inset />
          </q-tabs>
          <!-- Sign in and Sign up button -->
          <div class="q-gutter-md q-ml-sm">
            
            <q-btn color="primary" icon="mdi-cart-outline"  flat round dense/>
            <q-btn color="primary" icon="mdi-account-circle"  flat round dense>
                <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
                <img src="/public/icons/android-chrome-512x512.png" alt="Masterly Profile"/>
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">Masterly</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
              :to="{name: 'home-page'}"
            />
          </div>
        </div>
      </q-menu>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>
       </div>
  
       <!-- Mobile Screen -->
        <div class="row justify-between q-pa-md" v-else>
  
          <!-- Logo  -->
        <div>
          <q-avatar style="cursor: pointer;">
              <img src="/public/icons/android-chrome-512x512.png" alt="Masterly Profile"/>
            </q-avatar>
        </div>
        <div>
  
          <!-- Right drawer   -->
          <!-- First design -->
          <q-btn flat round color="primary" icon="mdi-menu" @click="toggleRightDrawer"/>
            <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered  @click-outside="closeDrawer">
              <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>Single line item</q-item-section>
        </q-item>
  
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Item with caption</q-item-label>
            <q-item-label caption>Caption</q-item-label>
          </q-item-section>
        </q-item>
              </q-list>
      </q-drawer>
  
        <!-- Second design -->
        <!-- <q-btn flat round color="primary" icon="mdi-menu" >
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>New tab</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New incognito tab</q-item-section>
              </q-item>
              
            </q-list>
          </q-menu>
        </q-btn>  -->
      
          
   
        </div>
        </div>
        
     
  
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  <script setup>
  import { ref } from "vue";
  import { Screen } from "quasar";
  const tab = ref("home");
  const rightDrawerOpen = ref (false);
  const toggleRightDrawer = () =>{
    rightDrawerOpen.value = !rightDrawerOpen.value
  } 
  const closeDrawer = () => {
    rightDrawerOpen.value = false;
  };
  </script>
  
  
  <style></style>
  
  