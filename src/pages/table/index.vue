<template>
  <Table
    :pagination="false"
    :columns="columns1"
    :dataSource="data1"
    rowKey="id"
  />
</template>

<script>
export default {
  data() {
    return {
      columns1: [{"title":"姓名","dataIndex":"name","key":"name"},{"title":"年龄","dataIndex":"age","key":"age"},{"title":"住址","dataIndex":"address","key":"address"},{"title":"电话","dataIndex":"tel","key":"tel"}],
      data1: [{"id":"1","name":"John Brown","age":32,"tel":"0571-22098909","phone":18889898989,"address":"New York No. 1 Lake Park","province":"a"},{"id":"2","name":"Jim Green","tel":"0571-22098333","phone":18889898888,"age":42,"address":"London No. 1 Lake Park","province":"b"},{"id":"3","name":"Joe Black","age":32,"tel":"0575-22098909","phone":18900010002,"address":"Sidney No. 1 Lake Park","province":"c"},{"id":"4","name":"Jim Red","age":18,"tel":"0575-22098909","phone":18900010002,"address":"London No. 2 Lake Park","province":"d"}],
    };
  },
};
</script>
