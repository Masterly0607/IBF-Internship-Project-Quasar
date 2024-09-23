<template>
    
    <div>
        <div class="q-mt-lg">
      <div class="text-weight-medium text-h5" align="center">
        Institute of Banking & Finance (IBF)
        <q-separator
          size="4px"
          inset
          spaced="10px"
          color="primary"
          style="width: 300px"
        />
        
      </div>
      <div align="center" class="q-mt-lg text-grey-7">
       s dolor porro! Laboriosam.sadhk ckjac, asckhas cashkdnaskdassajdasd
      </div>

      <div class="q-mt-lg row q-col-gutter-md" >
        
        <div class="col-md-3 col-12" >
          <q-img
          src="https://picsum.photos/500/300"
          :ratio="16/9"
        />
        </div>
        <div class="col-md-9 col-12 text-grey-7">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat quo, nobis consequatur incidunt odio adipisci, deleniti temporibus rerum dolores expedita obcaecati maiores, sit libero est similique doloribus sunt ex! 
            <br/> <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, officia neque. Debitis error corrupti impedit rerum, ullam veniam repudiandae tempora qui amet, culpa esse, soluta similique sequi assumenda eos ut!
            
          </div>
          <br/>
          <div>
            <p>
              <span v-if="!isExpanded">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, voluptate. Iure, aspernatur dolorum? Quas autem ut consequuntur nobis, magnidicta... 
                <br/>
                <span class="text-primary" style="cursor: pointer; text-decoration: underline;" @click="toggleExpand">
                  See more
                  <q-icon name="arrow_forward" />
 
                </span>

              </span>
              <span v-else>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, voluptate. Iure, aspernatur dolorum? Quas autem ut consequuntur nobis, magnidicta aut quae optio ex error eos itaque iusto, suscipit repudiandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, rerum voluptatem quidem maxime id optio laboriosam aspernatur atque voluptate suscipit dolor necessitatibus ut provident iure quae quas! Molestias, maiores sequi!
                <br/>
                <span @click="toggleExpand" class="text-primary" style="cursor: pointer; text-decoration: underline;">
                  See less
                  <q-icon name="arrow_back" />
                </span>

              </span>
            </p>
          </div>
    
        
          
        </div>
      </div>
     <q-separator size="3px" spaced="30px"/>
    </div>
  <div class="row q-col-gutter-md q-mb-md">
    <div class="col-6" v-for="(item,i) in dataInfo" :key="i">
      <div class="row q-gutter-md items-center">
         <q-icon
       :name="item.icon"
       size="45px"
       color="primary"
       
       /> 
       <div class="text-h6">
       {{ item.title}}
       </div>
      </div>
     
       <div class=" q-mt-sm">
      {{ item.content }}
       </div>
    </div>
    
    
  </div>
  <div align="center" class="q-mb-xl">
    <q-btn push color="primary" label="Get Started" dense class="q-pa-sm" :to="{name:'login-page'}"/>
  </div>
    </div>
</template>
<script setup>
import {ref} from "vue";
const isExpanded = ref (false);
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const dataInfo = ref([
  {
    id: 1,
    icon: "mdi-certificate",
    title: "Graduate with a certificate",
    content:
      "Graduate with a verified certificate from Impact Hub Phnom Penh when you finish all the course content to share with your network",
  },
  {
    id: 2,
    icon: "mdi-account-group",
    title: "Online Community",
    content:
      "Meet other changemakers across the country in our online Facebook group. You can access more resources, ask questions, get support from our experts, build your network, and join virtual events and peer coaching circles.",
  },
  {
    id: 3,
    icon: "mdi-translate",
    title: "Learn in Your Language",
    content:
      "We teach in Khmer language, but blend English terms in where necessary (e.g. when a direct translation is difficult) to ensure you have the best learning experience and help you learn specific business terms. No more confusing translations!",
  },
  {
    id: 4,
    icon: "mdi-comment-question",
    title: "What is IBF?",
    content:
      "The Institute of Banking and Finance (IBF) is a professional institute that provides training and certification for banking professionals in Cambodia. The institute offers a wide range of courses, including international certifications, local certifications, webinars, and short courses. ",
  },
]);
</script>