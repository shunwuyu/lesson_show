<template>
  <div>
    <router-link class="btn btn-primary" to="/time-entries/log-time" 
    v-if="$route.path !== '/time-entries/log-time'">创建</router-link>
    <div v-if="$route.path==='/time-entries/log-time'">
      <h3>创建</h3>
    </div>
    <hr>
    
    <router-view />
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>