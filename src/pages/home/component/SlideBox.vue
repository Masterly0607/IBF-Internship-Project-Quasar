<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="primary"
      padding
      :height="autoHeightCarousel"
     
    >
    <!-- New:  :height="autoHeightCarousel" -->
      <q-carousel-slide
        v-for="(dataUrl, index) in imageUrl"
        :key="index"
        :name="index + 1"
        class="q-pa-none"
      >
        <q-img :src="dataUrl.img" height="100%" width="100%" fit="fill" />
        <!-- New: absolute-bottom -->
        <div class="absolute-bottom q-pa-md custom-caption">
          <div class="row justify-between item-center">
            <div class="col-6 text-dark">
              <div class="text-body1">{{ dataUrl.title }}</div>
              <div class="text-caption ellipsis">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus quos fug
              </div>
            </div>
            <div class="col-auto">
              <q-btn
                color="dark"
                icon-right="mdi-arrow-right"
                label="More info"
                flat
                no-caps
                space
                @click="nextSlide"
              />
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row justify-center items-center q-py-sm">
      <q-radio
        size="35px"
        v-model="slide"
        :val="index + 1"
        v-for="(dataUrl, index) in imageUrl"
        :key="index"
      />
    </div>
  </div>
</template>
<script setup>
import { ref,computed} from "vue";

const slide = ref(1);
const autoplay = ref(true);
const imageUrl = ref([
  {
    img: "https://cdn.quasar.dev/img/chicken-salad.jpg",
    title: "The Institute of Banking and Finance",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: "https://cdn.quasar.dev/img/parallax2.jpg",
    title: "Our courses list",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: "https://cdn.quasar.dev/img/parallax1.jpg",
    title: "International Partners",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: "https://cdn.quasar.dev/img/mountains.jpg",
    title: "Webinar Event",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
]);
// Next slide function
const nextSlide = () => {
  slide.value = slide.value < imageUrl.value.length ? slide.value + 1 : 1;
};
import { useQuasar } from "quasar";
const $q = useQuasar();
const autoHeightCarousel = computed(() => {

  if ($q.screen.gt.sm) {
    return "430px";
  } else {
    return "215px";
  }
});
</script>
<style scoped>
.custom-caption {
  background: rgba(201, 201, 201, 0.556);
}
</style>
