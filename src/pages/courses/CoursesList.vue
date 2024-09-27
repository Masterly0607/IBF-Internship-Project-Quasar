<template>
<section>
    <!-- Add spinner(loading) -->
  <div v-if="loading"  class="row justify-center">
          <q-spinner-hourglass color="primary" size="2em" />
        </div>
  <div v-else>
    <q-page class="masterly-background-color-page1" padding>
      <div class="masterly-container-1200">
         
        <q-form class="q-mt-lg">
          <q-input
            filled
            v-model="text"
            :dense="dense"
            placeholder="Search for IBF products"
          >
            <template v-slot:append>
              <q-btn flat round color="grey" icon="mdi-magnify" />
            </template>
            <template v-slot:after>
              <filter-product />
            </template>
          </q-input>
        </q-form>

        <div class="row justify-between items-center q-mt-lg">
          <div class="text-h5 text-black text-weight-bold">
            New & Featured Courses
          </div>

          <div>
            <q-btn
              icon="mdi-view-grid-outline"
             :color="isGrid ? 'primary' : 'grey-6'"
              flat
              size="md"
              dense
              @click="onChangeView"
            />
            <q-btn
              icon="mdi-view-list"
              :color="isGrid ? 'grey-6' : 'primary'"
              flat
              size="md"
              dense
              @click="onChangeView"
           
            />
          </div>
        </div>

        <q-separator spaced="" />

        <div class="row justify-end items-center">
          <q-select
            borderless
            dense
            v-model="sortKey"
            :options="sortKeyOptions"
            label="Sort by"
            style="width: 150px"
            transition-show="jump-up"
            transition-hide="jump-up"
          />
        </div>

        <!-- Product view -->
        <div>
          <transition
  appear
  enter-active-class="animated fadeIn slow delay-1s repeat-2"
  leave-active-class="animated fadeOut"
>
      <!-- Gird view -->
          <ProductListGrid v-if="isGrid" />
          <!-- List view -->
          <ProductListView v-else />
  
</transition>
      
        </div>
      </div>
    </q-page>
  </div>
</section>
 
</template>
<script setup>
import { ref,onMounted,onUnmounted } from "vue";
import ProductListGrid from "./components/product-view/ProductListGrid.vue";
import FilterProduct from "src/pages/courses/components/FilterProduct.vue";
import ProductListView from "./components/product-view/ProductListView.vue";

// Sort by select
const sortKey = ref("Newest");
const sortKeyOptions = ref([
  {
    label: "Newest",
    value: "newest",
  },

  {
    label: "Oldest",
    value: "oldest",
  },
  {
    label: "Lowest Price",
    value: "lowest_price",
  },
  {
    label: "Highest Price",
    value: "highest_price",
  },
]);

// Funtion and variable to switch page from grid view to list view
const isGrid = ref(true);
const onChangeView = () => {
  isGrid.value = !isGrid.value;
};

// Funciton of spinner
const loading = ref(true);
// On mounted: set a timer for loading
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000); // 1.5 seconds
});

onUnmounted(() => {
  loading.value = false; // clean up in case the component is unmounted before the timer ends
});
</script>
