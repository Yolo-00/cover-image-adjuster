<script setup lang="ts">
import { ref } from "vue";
import CoverImageAdjuster from "./components/CoverImageAdjuster/index.vue";

import output1 from "./assets/output1.jpg";
import output2 from "./assets/output2.jpg";

const position1 = ref<undefined | { x: number; y: number }>(undefined);
const position2 = ref<undefined | { x: number; y: number }>(undefined);
const disabled = ref(false);

const getPositionChange1 = (position: any) => {
  position1.value = position;
};
const getPositionChange2 = (position: any) => {
  position2.value = position;
};
</script>

<template>
  <div class="page-bg">
    <h1>图片封面位置调整组件</h1>
    <div class="text-lg">{{ position1 }}</div>
    <div class="mt-5">
      <input type="checkbox" v-model="disabled" /><label for="horns">是否禁用</label>
    </div>
    <CoverImageAdjuster :src="output1" :draggable="!disabled" :width="1000" :height="300"
      @position-change="getPositionChange1" />

    <div class="text-lg mt-5">{{ position2 }}</div>
    <CoverImageAdjuster class="mt-5" :src="output2" :width="500" :height="400" @position-change="getPositionChange2" />
  </div>
</template>

<style scoped>
.text-lg {
  font-size: 18px;
}

.mt-5 {
  margin-top: 40px;
}

.page-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>