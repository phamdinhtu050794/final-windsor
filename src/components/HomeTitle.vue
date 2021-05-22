<template>
  <div class="title-container">
    <h1>The Windsor Tea House</h1>
    
  </div>
</template>
<script>
export default {
  name: "HomeTitle",
};
</script>
<style scoped>
.title-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 10vh;
      position: -webkit-sticky;
  position: sticky;
  top: 0;
  
  /* padding: 5px; */
  background-color: #cae8ca;
  border: 2px solid #073009;
}

</style>