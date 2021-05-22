<template>
  <div v-if="showModal" class="containerr">
    <div class="image-container">
      <img v-bind:src="item.imageUrl" width="200" height="200"/>
    </div>
    <div>{{ item.classify }}</div>
    <div class="name">{{ item.name }}</div>
    <div class="details">
      <div>{{ item.description }}</div>
      <div class="price">{{ item.price }}</div>
    </div>
   
    
    <i @click="close" id="button" class="fa">&#xf00d;</i>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: "Modal",
  components:{
      Card
  },
  data() {
    return {
        
      showModal: true, 
    };
  },
  props: {
      item:Object,
    //   item:{
    //       classify: this.classify,
    //     imageUrl: this.item.imageUrl,
    //     name: this.name,
    //     description: this.description,
    //     price: this.price,
    //   },
  },
//   computed: {
//         items() {
//             return this.$store.state.items;
//         }
//     },
  methods: {
    showAlert() {
      this.showModal = !this.showModal;
    },
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
  background-color: rgb(245, 245, 245);
  // opacity: 0.5;
  margin: 0px auto;
  border: 1px solid white;
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
