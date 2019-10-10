<template>
       <el-main>
        <el-table :data="books">
          <el-table-column prop="name" label="名称" width="140"></el-table-column>
          <el-table-column prop="author" label="作者" width="120"></el-table-column>
          <el-table-column prop="category" label="分类" width="120"></el-table-column>
          <el-table-column prop="desc" label="描述"></el-table-column>
        </el-table>
      </el-main>
</template>

<script>
export default {
     data() {
    return {
      books:[]
    };
  },
  created(){
    this.$http.get("books").then(res=>{
      this.books=res.data
    })
  }
}
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>