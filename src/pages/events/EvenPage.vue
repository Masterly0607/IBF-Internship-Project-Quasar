<template>
    <div v-if="loading" class="row justify-center">
          <q-spinner-hourglass color="primary" size="2em" />
        </div>
  <section class="masterly-background-color-page1 " v-else>
    <div class="masterly-container-1200 q-pa-lg">
       <!-- Add spinner(loading) -->

     
   
          
      <div >
    
   <!-- Box1: Events and Updates -->
        <div class="text-weight-bold text-h4 q-py-lg">Events & Updates</div>
        <div>
          <div class="row q-col-gutter-lg">
            <div class="col-12 col-md-4">
              <q-card class="my-card column" style="height: 550px">
                <q-img
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                  fit="cover"
                  height="250px"
                />

                <q-card-section>
                  <div class="text-grey-6 text-h6">05-May-2024</div>
                </q-card-section>

                <q-card-section class="q-gutter-md">
                  <q-chip color="primary" class="text-white"> Messi </q-chip>
                  <q-chip color="primary" class="text-white"> Messi </q-chip>
                  <q-chip color="primary" class="text-white"> Messi </q-chip>
                </q-card-section>

                <q-card-section class="q-pt-none ellipsis-2-lines">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  deserunt ratione nemo. Id, atque amet laudantium quidem est
                  adipisci dolore sunt minima dolor beatae nesciunt harum quos
                  accusamus sequi at.
                </q-card-section>
                <q-space />
                <q-card-section align="right">
                  <q-btn
                    color="primary absolute-end"
                    icon-right="mdi-chevron-right"
                    label="Learn More"
                    class="text-capitalize"
                    flat
                    dense
                  />
                </q-card-section>
              </q-card>
            </div>

            <div class="col-12 col-md-4">
              <q-card class="my-card column" style="height: 550px">
                <q-img
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                  fit="cover"
                  height="250px"
                />

                <q-card-section>
                  <div class="text-grey-6 text-h6">05-May-2024</div>
                </q-card-section>

                <q-card-section class="q-gutter-md">
                  <q-chip color="primary" class="text-white"> Messi </q-chip>
                  <q-chip color="primary" class="text-white"> Messi </q-chip>
                  <q-chip color="primary" class="text-white"> Messi </q-chip>
                </q-card-section>

                <q-card-section class="q-pt-none ellipsis-2-lines">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  deserunt ratione nemo. Id, atque amet laudantium quidem est
                  adipisci dolore sunt minima dolor beatae nesciunt harum quos
                  accusamus sequi at.
                </q-card-section>
                <q-space />
                <q-card-section align="right">
                  <q-btn
                    color="primary absolute-end"
                    icon-right="mdi-chevron-right"
                    label="Learn More"
                    class="text-capitalize"
                    flat
                    dense
                  />
                </q-card-section>
              </q-card>
            </div>

            <div class="col-12 col-md-4">
              <q-card class="my-card column" style="height: 550px">
                <q-img
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                  fit="cover"
                  height="250px"
                />

                <q-card-section>
                  <div class="text-grey-6 text-h6">05-May-2024</div>
                </q-card-section>

                <q-card-section class="q-gutter-md">
                  <q-chip color="primary" class="text-white"> Messi </q-chip>
                  <q-chip color="primary" class="text-white"> Messi </q-chip>
                  <q-chip color="primary" class="text-white"> Messi </q-chip>
                </q-card-section>

                <q-card-section class="q-pt-none ellipsis-2-lines">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  deserunt ratione nemo. Id, atque amet laudantium quidem est
                  adipisci dolore sunt minima dolor beatae nesciunt harum quos
                  accusamus sequi at.
                </q-card-section>
                <q-space />
                <q-card-section align="right">
                  <q-btn
                    color="primary absolute-end"
                    icon-right="mdi-chevron-right"
                    label="Learn More"
                    class="text-capitalize"
                    flat
                    dense
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>

      <!-- Box2: All events  -->
      <div class="q-mt-xl">
        <div class="row q-gutter-md">
          <q-icon
            name="mdi-calendar-month-outline "
            size="md"
            color="primary"
          />
          <span class="text-h6 text-grey-8">All Events</span>
        </div>

        <q-separator spaced="10px" size="1px" />

        <div class="row q-col-gutter-md">
          <div class="col-12" v-for="(item, i) in visibleProducts" :key="i">
            <q-card class="q-mt-lg" style="height: 270px">
              <q-card-section>
                <div class="row" bordered flat>
                  <!-- Img box -->
                  <div class="col">
                    <q-img :src="item.img" style="width: 100%; height: 100%" />
                  </div>

                  <div class="col-9 q-ml-md">
                    <!-- Name -->
                    <div class="text-h5 text-grey-8 text-weight-bold q-mb-md">
                      {{ item.name }}
                    </div>

                    <!-- Icon box -->
                    <div class="row items-center q-mb-md">
                      <q-icon
                        name="mdi-calendar"
                        size="sm"
                        class="q-mr-sm text-grey-8"
                      />

                      <div class="text-grey-10">{{ item.type1 }}</div>
                    </div>
                    <div class="row items-center q-mb-md">
                      <q-icon
                        name="mdi-map-marker-outline"
                        size="sm"
                        class="q-mr-sm text-grey-8"
                      />
                      <div class="text-grey-10">{{ item.type2 }}</div>
                    </div>

                    <!-- Date -->
                    <div class="q-pt-lg text-grey-6">
                      <span> Published Date: </span>
                      <span
                        class="text-primary text-weight-bolder text-subtitle2"
                        >{{ item.start_date }}</span
                      >
                    </div>
                  </div>
                </div>
              </q-card-section>

              <q-separator />
              <q-card-actions align="right">
                <q-btn flat no-caps label="View Details" @click="eventDetail" />
              </q-card-actions>
            </q-card>
          </div>

          <div></div>
        </div>
      </div>

      <!-- See more events -->
      <div>
        <div v-if="showSeeMoreButton" class="row justify-center q-mt-md">
          <q-btn
            color="primary"
            @click="seeMoreCourses"
            style="width: 100%"
            outline
            >See More Events</q-btn
          >
        </div>
      </div>
 
      
    </div>
  </section>
</template>
<script setup>
import { products } from "src/pages/courses/components/product-data/products.js";
import { ref, onMounted, onUnmounted } from "vue";
// Initially visible products (first 8 products for 2 rows)
const visibleProducts = ref(products.value.slice(0, 8)); // slice(0, 8) means it takes the first 8 items from the products array from 0th index
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
