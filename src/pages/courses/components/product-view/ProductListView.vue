<template>
    <section>
      <!-- Product List(Grid view) -->
      <div class="row q-col-gutter-md q-mt-md">
           <div
             class="col-12 "
             v-for="(item, i) in visibleProducts"
             :key="i"
           >
             <q-card class="my-card no-border-radius row q-mb-sm " bordered flat style="height: 220px;">
                    <div class="col q-pl-sm q-pt-sm ">
                        <q-img :src="item.img" style="width: 100%; height: 85%;" /> 
                    </div>
                   
                
   
                
               <q-card-section class="col-9  column justify-between q-ml-md">
                 <div class="text-h5 text-grey-8 text-weight-bold">{{ item.name }}</div>
              
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
    
                 <div class="row justify-between items-end">
                   <div class="row q-gutter-xl">
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
          <div>
            <div v-if="showSeeMoreButton" class="row justify-center q-mt-md">
              <q-btn color="primary" @click="seeMoreCourses" style="width: 100%;"  outline>See More Courses</q-btn>
            </div>
          </div>
        
         
    </section>
    </template>
    <script setup>
    import {ref} from "vue";
    import {products} from 'src/pages/courses/components/product-data/products.js'
    
    // Initially visible products (first 8 products for 2 rows)
    const visibleProducts = ref(products.value.slice(0, 8));  // slice(0, 8) means it takes the first 8 items from the products array from 0th index
    // Boolean to show/hide the "See More Courses" button
    const showSeeMoreButton = ref(products.value.length >= 8);
    
    // Function to load more courses
    const seeMoreCourses = () => {
      const newVisibleCount = visibleProducts.value.length + 8;
      visibleProducts.value = products.value.slice(0, newVisibleCount);
    
      // Show the "See More Courses" button when there are 8 or more visible products
      if (newVisibleCount >= 8) {
        showSeeMoreButton.value = true;
      }
    
      // Hide the "See More Courses" button when all products are shown
      if (newVisibleCount >= products.value.length) {
        showSeeMoreButton.value = false;
      }
    };
    
    
    
    
    
    
    
    </script>
    