<template>
 <el-main>
  <el-form ref="form" :model="book" label-width="80px" @submit.native.prevent="saveBook">
  <el-form-item label="图书名称">
    <el-input v-model="book.name"></el-input>
  </el-form-item>
  <el-form-item label="作者">
    <el-input v-model="book.author"></el-input>
  </el-form-item>
    <el-form-item label="图书类型">
      <el-radio v-model="book.category" label="文学">文学</el-radio>
      <el-radio v-model="book.category" label="技术">技术</el-radio>
      <el-radio v-model="book.category" label="科学">科学</el-radio>
      <el-radio v-model="book.category" label="艺术">艺术</el-radio>      
    </el-form-item>
  <el-form-item label="描述">
    <el-input type="textarea" v-model="book.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
 </el-main>
</template>

<script>
  export default {
    data() {
      return {
        book: {
          name: '',
          author:'',
         category:'',
          desc: ''
        }
      } 
    }, 
    methods: {
      saveBook() {
        const bookinfo=this.book
       if (!bookinfo.name||!bookinfo.author||!bookinfo.category||!bookinfo.desc) {
            this.$message({
            message: '添加图书失败',
            type: 'warning'
        })
        } 
        else{
          this.$http.post("books",this.book).then(res => {
          this.$message({
          message: '添加图书成功',
          type: 'success'
        });
        this.$router.push('/')
        })
        }
      }
    }
  }
</script>