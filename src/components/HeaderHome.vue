<template>
  
<!-- Desktop screen -->
 <section>
    <div v-if="Screen.gt.sm">
      <q-header bordered class="bg-white text-primary q-pa-md" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="cursor: pointer;" :to="{name:'home-page'}">
            <img src="/icons/android-chrome-512x512.png" alt="Masterly Profile"/>
          </q-avatar>
        </q-toolbar-title>
        
        <q-tabs v-model="tab" active-class="active-tab" class="text-capitalize">
          <!-- active-class="active-tab" : Make active to menu when is on that page-->
          <q-route-tab name="home" label="Home" class="text-capitalize" :to="{name:'home-page'}" />
          <q-route-tab name="course" label="Courses" class="text-capitalize" 
          :to="{name:'market-place'}" />
             
          <q-route-tab name="event" label="Events" class="text-capitalize"/>
          <q-route-tab name="about" label="About" class="text-capitalize" />
          <q-route-tab name="contact" label="Contact Us" class="text-capitalize" />

          <q-separator vertical size="2px" inset />
        </q-tabs>
       
        <!-- Sign in and Sign up button -->
        <div class="q-gutter-md q-ml-sm">
          
          <q-btn color="primary" icon="mdi-clipboard-account-outline" label="SIGN UP"  outline :to="{name: 'sign-up-page'}"/>
          <q-btn color="primary" icon="mdi-login" label="LOGIN" :to="{name:'login-page'}" />
        </div>
      </q-toolbar>
    </q-header>
     </div>

     <!-- Mobile Screen -->
      <div class="row justify-between q-pa-md" v-else>

        <!-- Logo  -->
      <div>
        <q-avatar style="cursor: pointer;">
            <img src="/icons/android-chrome-512x512.png" alt="Masterly Profile"/>
          </q-avatar>
      </div>
      <div>

        <!-- Right drawer   -->
        <!-- First design -->
        <q-btn flat round color="primary" icon="mdi-menu" @click="toggleRightDrawer"/>
          <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered  @click-outside="closeDrawer">
            <q-list bordered separator>
      <q-item clickable v-ripple :to="{name:'home-page'}">
        <q-item-section>Home</q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{name:'market-place'}">
        <q-item-section>Courses</q-item-section>
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
   </section>
      
   

    

</template>
<script setup>
import { ref } from 'vue';
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




