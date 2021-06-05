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
  overflow: hidden;
  z-index: 2;
  /* padding-bottom: 10vh; */
  background-color: white;
  border: 2px solid #073009;
}

</style>