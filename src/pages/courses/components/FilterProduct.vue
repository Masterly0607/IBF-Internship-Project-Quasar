<template>
    <div>
      <q-btn
      icon="mdi-filter-outline"
      color="primary"
      flat
      round
      @click="drawerRight = !drawerRight"
    />
  
    <q-drawer
      v-model="drawerRight"
      :width="300"
      side="right"
      overlay
      class="bg-grey-3 text-white"
    >
      <q-scroll-area class="fit q-pa-md">
        <div class="row justify-between q-mb-md">
          <q-btn
            flat
            round
            color="red-5"
            icon="mdi-close"
            dense
            @click="closeDrawer"
          />
          <q-btn
            flat
            style="color: grey"
            label="Clear Filter"
            class="text-capitalize"
            dense
          />
        </div>
  
        <q-card>
          <q-card-section>
            <div class="text-grey-8 q-mb-md">Course type :</div>
            <q-separator spaced />
  
            <div>
              <q-option-group
                v-model="group"
                :options="options"
                color="primary"
                class="text-grey-7"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-scroll-area>
    </q-drawer>
    </div>
   
  </template>
  <script setup>
  import { ref } from "vue";
  const group = ref("op1");
  const options = ref([
    {
      label: "Option 1",
      value: "op1",
    },
    {
      label: "Option 2",
      value: "op2",
    },
    {
      label: "Option 3",
      value: "op3",
    },
  ]);
  
  // Hide and show drawer function
  const closeDrawer = () => {
    drawerRight.value = !drawerRight.value;
  };
  
  
  const drawerRight = ref(false);
  
  </script>
  