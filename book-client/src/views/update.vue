<template>
       <el-main>
        <el-table :data="books">
          <el-table-column prop="name" label="名称" width="140"></el-table-column>
          <el-table-column prop="author" label="作者" width="120"></el-table-column>
          <el-table-column prop="category" label="分类" width="120"></el-table-column>
          <el-table-column prop="desc" label="描述"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
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
  methods:{
    feach(){
      this.$http.get("books").then(res=>{
      this.books=res.data
    });
    },
    edit(id){
      this.$router.push(`/edit/${id}`)
    },
    remove(id){
      this.$http.delete(`books/${id}`).then(res =>{
        this.$message({
          message: '删除图书成功',
          type: 'success'
        });
        this.feach()
      })
    }
  },
  created(){
    this.feach()
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