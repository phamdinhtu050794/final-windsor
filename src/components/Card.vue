<template>
  <div class="card-container">
    <div id="classify" class="cells">
      {{ item.classify }}
    </div>
    <div class="cells">
      <img v-bind:src="item.imageUrl" class="uploading-image" />
    </div>
    <div class="cells">
      {{ item.name }}
    </div>
    <div id="description" class="cells">
      {{ item.description }}
    </div>
    <div class="cells">
      {{ item.price }}
    </div>
    <div id="action" class="cells">
      <button @click="$emit('delete', item)">Delete</button>
      <button @click="$emit('edit', item)">Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  
  props: ["item"],
 
  create() {
    console.log("item created");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .card-container {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//  align-items: flex-start;
//     // align-items: baseline;

// //   padding-top: 5%;

// }
// .cell{

//     overflow: scroll;
//     width: 17vw;
//     height: 100px;

//     padding: 1%;
//     text-align: start;
//     border: 0.5px solid black;
//     // height: 10%;
//     // overflow: scroll;
// }
.uploading-image {
  width: 100px;
  height: 100px;
}
</style>
