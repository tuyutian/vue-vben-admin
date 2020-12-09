<template>
  <div class="p-4">
    <BasicTable
      :row-selection="{ type: 'checkbox' }"
      :is-tree-table="true"
      title="树形表格"
      title-help-message="树形组件不能和序列号列同时存在"
      :columns="columns"
      :data-source="data"
      row-key="id"
      :indent-size="20"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  export default defineComponent({
    name: 'Menu',
    components: { BasicTable },
    setup() {
      function getTreeTableData() {
        const data: any = (() => {
          const arr: any = [];
          for (let i = 0; i < 40; i++) {
            arr.push({
              id: `${i}`,
              name: 'John Brown',
              age: `1${i}`,
              no: `${i + 10}`,
              address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
              beginTime: new Date().toLocaleString(),
              endTime: new Date().toLocaleString(),
              children: [
                {
                  id: `l2-${i}`,
                  name: 'John Brown',
                  age: `1${i}`,
                  no: `${i + 10}`,
                  address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
                  beginTime: new Date().toLocaleString(),
                  endTime: new Date().toLocaleString(),
                  children: [
                    {
                      id: `l3-${i}`,
                      name: 'John Brown',
                      age: `1${i}`,
                      no: `${i + 10}`,
                      address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
                      beginTime: new Date().toLocaleString(),
                      endTime: new Date().toLocaleString(),
                    },
                  ],
                },
              ],
            });
          }
          return arr;
        })();
        return data;
      }
      return {
        columns: [
          { title: 'ID', width: 150, dataIndex: 'id' },
          { title: '名称', dataIndex: 'name', width: 120 },
          { title: '图标', dataIndex: 'icon', width: 120 },
          { title: '路径', dataIndex: 'path' },
          { title: '登录', dataIndex: 'need_login', width: 80 },
          { title: '排序', dataIndex: 'orderNo' },
          { title: '标签', dataIndex: 'tag' },
          { title: '是否启用', dataIndex: 'disabled' },
          { title: '结束时间', sorter: true, dataIndex: 'endTime' },
        ],
        data: getTreeTableData(),
      };
    },
  });
</script>
