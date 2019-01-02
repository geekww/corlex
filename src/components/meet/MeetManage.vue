<template>
    <div class="module-box">
      <Calendar :events="fcEvents" locale="en"></Calendar>
    </div>
</template>

<script>
  import Calendar from 'vue-fullcalendar'
  export default {
    components:{Calendar},
    name: 'MeetManage',
    data () {
      return {
        fcEvents : [{
          title : '部门培训分享',
          start : '2019-01-01',
          end : '2019-01-01',
          YOUR_DATA:{}
        }]
      }
    },
    methods:{
      // emitChangeMonth:function (start,end) {
      //   alert(start);
      // },
      // this.$emit('ChangeMonth', start, end):function{

  // }
    },
    watch:{
      emitChangeMonth:function (start,end) {
        alert(start);
      }
    }
  }
</script>

<style scoped>

</style>
