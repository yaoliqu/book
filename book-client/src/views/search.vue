<template>
 <el-main>
<el-form :inline="true" :model="book" class="demo-form-inline" @submit.native.prevent="findBook">
  <el-form-item label="图书名">
    <el-input v-model="book.name" placeholder="请输入图书名"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">查询</el-button>
  </el-form-item>
</el-form>

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
        book: {
          name: ''
        },
       books:[]
      }
    },
    methods: {
      findBook() {
        this.$http.post("findbook",this.book).then(res=>{
          this.books=res.data
        })
      }
    }
  }
</script>


<style>

</style>