<template>
  <div>
    <h1> this is sbada</h1>
    <h2 @click="handleUserPage">跳转用户页面</h2>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    setup() {
      const go = useGo();

      function handleUserPage() {
        go("{ name: '/user/index', params: { id: '1' }}");
      }

      return {
        handleUserPage,
      };
    },
  });
</script>
