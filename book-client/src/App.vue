<template>
  <div id="app">
  <el-container style="height: 600px; border: 1px solid #eee">
     <broad-side/>
    <el-container direction="vertical">
       <my-header/>
      <router-view></router-view>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import BroadSide from "@/components/public/aside.vue"
import MyHeader from "@/components/public/header.vue"
export default {
  name: 'app',
  components: {
    BroadSide,
    MyHeader
  }
}
</script>

<style>

</style>
