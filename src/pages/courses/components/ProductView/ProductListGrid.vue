<template>
    <section>
   <q-page class="q-mt-xs bg-grey-3" padding>
  
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
             color="grey-6"
             flat
             size="md"
             dense
             
           />
           <q-btn icon="mdi-view-list" color="grey-6" flat size="md" dense />
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
        <!-- Gird view -->
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
       </div>
       
      
      
     </div>
  
  </q-page>
  </section>
  </template>
  <script setup>
  import { ref} from "vue";
  import FilterProduct from "src/pages/courses/components/FilterProduct.vue";
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
  const products = ref([
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  {
   img: "/images/1.png",
   name: "Messi",
   type1: "A",
   type2: "B",
   start_date: "2024/08/29",
   duration: "3 months",
  },
  ]);
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
  
  
  