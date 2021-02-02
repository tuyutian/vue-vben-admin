<template>
  <a-row class="workbench p-4" :gutter="12">
    <a-col :md="24" :lg="7">
      <img :src="wokB" class="workbench__wokb-img mb-3" />
    </a-col>
  </a-row>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { Row, Col } from 'ant-design-vue';
  import wokB from '/@/assets/images/dashboard/wokb/wokb.png';

  export default defineComponent({
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      onMounted(() => {
        return;
      });
      return {
        onMounted,
        wokB: wokB,
      };
    },
  });
</script>
<style lang="less" scoped>
  .workbench {
    &__wokb-img {
      width: 100%;
      height: 240px;
    }
  }
</style>
