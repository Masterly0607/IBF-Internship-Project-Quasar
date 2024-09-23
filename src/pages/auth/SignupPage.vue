<template>
    <q-page padding>
      <div class="masterly-container-1200">
        <!-- Back btn -->
        <div>
          <q-btn
            flat
            style="color: grey"
            label="BACK"
            icon="mdi-arrow-left-thin"
            color="black"
            size="md"
            :to="{ name: 'home-page' }"
          />
        </div>
  
        <!-- Login container -->
        <div class="row q-mt-md q-col-gutter-md">
            <div v-if="$q.screen.gt.sm" class="col-12 col-md-8">
            <q-card flat>
              <q-card-section class="q-pa-none">
                <q-img src="/public/images/1.png" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4">
            <q-card bordered square flat>
              <q-card-section>
                <div class="text-weight-bold text-h4">Sign Up</div>
                <div class="text-grey-6 q-mt-xs">
                  Already have an account?
                  <router-link class="text-blue-6" :to="{ name: 'login-page' }"
                    >Login</router-link
                  >
                </div>
                <div class="q-mt-xl"></div>
                <q-input outlined square label="Username" />
                <div class="q-mt-md"></div>
                <q-input outlined square label="Family name" />
                <div class="q-mt-md"></div>
                <q-input outlined square label="Given name"  />
                <q-input
                  outlined
                  square
                  label="Password"
                  class="q-mt-md"
                  :type="isPwd ? 'password' : 'text'"
                  v-model="password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <q-input
                  outlined
                  square
                  label="Confirm password"
                  class="q-mt-md"
                  :type="isPwd ? 'password' : 'text'"
                  v-model="password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
  
               
                <q-btn color="primary" class="full-width q-mt-lg" label="SIGN UP"/>
                <div class="q-mt-sm row q-gutter-md justify-center items-center">
                  <q-separator size="2px" style="width: 100px" />
                  <span>or login with </span>
                  <q-separator size="2px" style="width: 100px" />
                </div>
  
                <div class="row q-gutter-sm justify-center q-mt-sm">
                  <q-btn
                    outline
                    color="primary"
                    label="GOOGLE"
                    icon="mdi-alpha-g"
                  />
                  <q-btn
                    outline
                    color="blue"
                    label="FACEBOOK"
                    icon="mdi-alpha-f"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
         
        </div>
      </div>
    </q-page>
  </template>
  <script setup>

  
  import { useQuasar } from "quasar";
  import {  ref } from "vue";
  const $q = useQuasar();
  const isPwd = ref("");



</script>
  