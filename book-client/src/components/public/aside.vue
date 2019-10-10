<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']"  router>
        <el-submenu index="1" >
          <template slot="title">
            <i class="el-icon-menu"></i>导航一
          </template>
          <el-menu-item-group>
            <el-menu-item index="/content"><i class="el-icon-s-order"/>图书列表</el-menu-item>
            <el-menu-item index="/search"><i class="el-icon-search"/>图书查找</el-menu-item>
            <el-menu-item index="/update"><i class="el-icon-edit"/>图书修改</el-menu-item>
            <el-menu-item index="joinbook"><i class="el-icon-circle-plus-outline"/>新增图书</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
    
}
</script>

<style>
.el-aside {
  color: #333;
}
</style>