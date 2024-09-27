<template>
  <section>
    <div v-if="loading"  class="row justify-center">
          <q-spinner-hourglass color="primary" size="2em" />
        </div>
    <div class="bg-grey-3" v-else>
      
      <div class="masterly-container-1200 q-pa-sm">
        <!-- Slide box -->
        <SlideBox />
        <!-- Course Type -->
        <CourseType />
        <!-- Information Box -->
        <InformationBox />
      </div>
    </div>


    
  </section>
</template>
<script setup>
import SlideBox from "./component/SlideBox.vue";
import CourseType from "./component/CourseType.vue";
import InformationBox from "./component/InformationBox.vue";
import{ref,onMounted,onUnmounted} from "vue";
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
