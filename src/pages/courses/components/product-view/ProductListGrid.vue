<template>
<section>
  <div class="row q-col-gutter-md q-mt-md">
       <div
         class="col-12 col-md-3"
         v-for="(item, i) in visibleProducts"
         :key="i"
       >
         <q-card class="my-card no-border-radius" bordered flat>
           <img :src="item.img" />

           <q-card-section>
             <div class="text-h6 text-grey-8">{{ item.name }}</div>
             <q-separator spaced />
             <div class="q-mb-md"></div>
             <div class="row items-center q-mb-md">
               <q-icon
                 name="mdi-earth"
                 size="xs"
                 class="q-mr-sm text-grey-8"
               ></q-icon>
               <div class="text-grey-10">{{ item.type1 }}</div>
             </div>
             <div class="row items-center q-mb-md">
               <q-icon
                 name="mdi-checkbox-blank-badge-outline"
                 size="xs"
                 class="q-mr-sm text-grey-8"
               ></q-icon>
               <div class="text-grey-10">{{ item.type2 }}</div>
             </div>

             <div class="row justify-between items-center q-mt-lg">
               <div>
                 <div class="text-grey-6 text-weight-bold">
                   Start on:
                   <span class="text-primary text-weight-bold">{{
                     item.start_date
                   }}</span>
                 </div>
                 <div class="text-grey-6 text-weight-bold">
                   Start on:
                   <span class="text-primary text-weight-bold">{{
                     item.duration
                   }}</span>
                 </div>
               </div>
               <q-btn
                 icon="mdi-cart-outline"
                 class="text-grey-6"
                 flat
                 round
               ></q-btn>
             </div>
           </q-card-section>
         </q-card>
       </div>
     </div>
     <!-- "See More Courses" button -->
     <div v-if="showSeeMoreButton" class="row justify-center q-mt-md">
          <q-btn color="primary" @click="seeMoreCourses" style="width: 100%;"  outline>See More Courses</q-btn>
        </div>
     
</section>
</template>
<script setup>
import {ref} from "vue";
import {products} from 'src/pages/courses/components/product-data/products.js'
// Initially visible products (first 8 products for 2 rows)
const visibleProducts = ref(products.value.slice(0, 8));

// Boolean to show/hide the "See More Courses" button
const showSeeMoreButton = ref(products.value.length > 8);

// Function to load more courses
const seeMoreCourses = () => {
const newVisibleCount = visibleProducts.value.length + 8;
visibleProducts.value = products.value.slice(0, newVisibleCount);
if (newVisibleCount >= products.value.length) {
  showSeeMoreButton.value = false; // Hide the button when all products are shown
}
};



</script>
