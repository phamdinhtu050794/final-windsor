<template>
  <div v-if="showModal" class="containerr">
    <div id="classify" class="cells">
      {{ item.classify}}
    </div>
    <div class="cells">
      <img v-bind:src="item.imageUrl" width="200" height="200" class="uploading-image" />
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

    <!-- {{item.name}} -->
   
    
    <i @click="close" id="button" class="fa">&#xf00d;</i>
  </div>
</template>

<script>

export default {
  name: "Modal",
  components:{

  },
  data() {
    return {      
      showModal: true, 
    };
  },
   create() {
    console.log("item created");
  },
  props:['item'],

  methods: {
  
    close() {
      console.log("cccccclosing");
      // alert('gfhfhg')
      this.$emit("close");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.containerr {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 100px;
  left: 250px;
  width: 70%;
  height: 70%;
  
  margin: 0px auto;
  border: 1px solid white;
  background-color: bisque;
  border-radius: 50px;
}
// .image-container {
//   margin: 40px;
//   left: 100px;
// }
// .description {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// }
// .footer {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 80%;
//   margin: 20px;
// }
// .details {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: baseline;
//   padding: 2%;
// }
#button {
  position: absolute;
  top: 0px;
  right: 40px;
  font-size: 36px;
}
// .name {
//   font-size: 30px;
//   display: flex;
//   flex-direction: row;
//   justify-content: left;
//   padding: 2%;
// }
// .price {
//   font-size: 30px;
//   top: 0px;
//   align-self: flex-end;
// }
</style>
