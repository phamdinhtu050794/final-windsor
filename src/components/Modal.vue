<template>
  <div  class="containerr">
    <div id="classify" class="cells">
     <h3>{{item.classify}}</h3>
    </div>
    <div class="cells">
      <img v-bind:src="item.imageUrl" width="400" height="400" class="uploading-image" />
    </div>
    <div id="cell" class="cells">
     <div><h4>Name: </h4></div> <div>{{ item.name }}</div>
    </div>
    <div i id="cell" class="cells">
     <div><h4>Description: </h4></div> <div>{{ item.description }}</div>
    </div>
    <div id="cell" class="cells">
     <div><h4>Price: </h4></div> <div>{{ item.price }}</div>
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
      // showModal: null, 
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
  // justify-content: flex-start;
  position: fixed;
  z-index: 1;
  top: 100px;
  left: 25%;
  width: 50%;
  height: auto;
  
  margin: 0px auto;
  border: 1px solid white;
  background-color: bisque;
  border-radius: 50px;
}
#button {
  position: absolute;
  top: 0px;
  right: 40px;
  font-size: 36px;
}

#cell{
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: baseline;
  text-align: start;
  margin-left: 10%;
  padding-right: 10%;

}
#cell h4{
  padding-right: 10px;
  // background-color: red;
}

@media only screen and (max-width: 768px){


.containerr {
  display: flex;
  flex-direction: column;
  // justify-content: flex-start;
  position: fixed;
  z-index: 1;
  top: 150px;
  left: 20%;
  width: 70%;
  height: auto;
  
  margin: 0px auto;
  border: 1px solid white;
  background-color: bisque;
  border-radius: 50px;
}
  
}

</style>
