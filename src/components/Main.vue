<template>
  <el-container>
    <SideBar></SideBar>
    <Header></Header>
  </el-container>
</template>

<script>
import Header from './Header.vue'
import SideBar from './SideBar.vue'

export default {
  components:{Header,SideBar},
  name: 'main'
}
</script>

<style scoped>

</style>
