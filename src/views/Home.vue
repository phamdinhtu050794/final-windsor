<template>
  <div class="home">
     <!-- <div class="title-container">
    <h1>The Windsor Tea House</h1>
    </div> -->
    <div class="home-header">
      <div class="menu">
        <div
          v-show="!toggled || toggled"
          :class="['container', { change: toggled }]"
          @click="myFunction"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <transition name="menu-box-bottom">
          <div v-show="!toggled" class="menu-box-bottom"></div>
        </transition>
        <transition name="menu-box">
          <div v-show="toggled" class="menu-box">
            
            <h1>Menu</h1>
            <a class="section" href="#go_white"><h4>White Tea</h4></a>
            <br />
            <a class="section" href="#go_olong"><h4>Oolong Tea</h4></a>
            <br />
            <a class="section" href="#go_green"><h4>Green Tea</h4></a>
            <br />
            <a class="section" href="#go_black"><h4>Black Tea</h4></a>
            <br />
            <a class="section" href="#go_cake"><h4>Cake</h4></a>
            <br />
            <div>
              <i @click="inventory" class="fas">&#xf468;</i>
            </div>
          </div>
        </transition>
      </div>
      <div class="table">
        <div class="table-content">
          <div id="go_white"><h4>White Tea</h4></div>
          <div class="item-content">
          <div v-for="item in evenSection_White()" :key="item.id">
            <Card
              v-if="item.id"
              @click.native="showModal(item.id)"
              :item="item"
            >
            </Card>
            </div>
          </div>
        </div>

        <div class="table-content">
          <div id="go_olong"><h4>Oolong Tea</h4></div>
          <div class="item-content">
          <div v-for="item in evenSection_Olong()" :key="item.id">
            <Card
              v-if="item.id"
              @click.native="showModal(item.id)"
              :item="item"
            >
            </Card>
            </div>
          </div>
        </div>
        <div class="table-content">
          <div id="go_green"><h4>Green Tea</h4></div>
          <div class="item-content">
          <div v-for="item in evenSection_Green()" :key="item.id">
            <Card
              v-if="item.id"
              @click.native="showModal(item.id)"
              :item="item"
            >
            </Card>
            </div>
          </div>
        </div>
        <div class="table-content">
          <div id="go_black"><h4>Black Tea</h4></div>
          <div class="item-content">
          <div v-for="item in evenSection_Black()" :key="item.id">
            <Card
              v-if="item.id"
              @click.native="showModal(item.id)"
              :item="item"
            >
            </Card>
            </div>
          </div>
        </div>

        <div class="table-content">
          <div id="go_cake"><h4>Cake</h4></div>
          <div class="item-content">
          <div v-for="item in evenSection_Cake()" :key="item.id">
            <Card
              v-if="item.id"
              @click.native="showModal(item.id)"
              :item="item"
            >
            </Card>
            </div>
          </div>
        </div>
      </div>
      <Modal
        class="modal"
        v-if="showingModal != null"
        v-on:close="closeModal"
        :item="items[showingModal]"
      >
      </Modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "./../components/Card.vue";
// import HomeTitle from "./../components/HomeTitle.vue";
import Modal from "./../components/Modal.vue";

export default {
  name: "Home",
  components: {
    Card,
    // HomeTitle,
    Modal,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  created() {
    this.$store.dispatch("getItems");
  },
  data() {
    return {
      // id: Number,
      showingModal: null,
      toggled: false,

      // item: {
      //   name: this.name,
      //   classify: this.classify,
      //   imageUrl: this.imageUrl,
      //   description: this.description,
      //   price: this.price,
      // },
    };
  },
  methods: {
    myFunction() {
      this.toggled = !this.toggled;
    },
    inventory() {
      this.$router.push({ name: "Inventory" });
    },
    showModal(IDs) {
      for (var i = 0; i < this.items.length; i++) {
        console.log("loooking " + i);
        if (this.items[i].id == IDs) {
          this.showingModal = i;
        }
      }
      // this.showingModal = IDs;
    },
    closeModal() {
      console.log("make");
      this.showingModal = null;
    },
    close() {
      console.log("closingggg");
      this.$emit("close");
    },

    // sắp xếp
    sortFunc: function () {
      return this.items.slice().sort(function (w, c) {
        return w.classify < c.classify ? 1 : -1;
      });
    },

    evenSection_Olong: function () {
      return this.items.filter(function (item) {
        return item.classify === "Oolong Tea";
      });
    },

    evenSection_White: function () {
      return this.items.filter(function (item) {
        return item.classify === "White Tea";
      });
    },

    evenSection_Green: function () {
      return this.items.filter(function (item) {
        return item.classify === "Green Tea";
      });
    },
    evenSection_Black: function () {
      return this.items.filter(function (item) {
        return item.classify === "Black Tea";
      });
    },

    evenSection_Cake: function () {
      return this.items.filter(function (item) {
        return item.classify === "Cake";
      });
    },
    // whiteTea: function(){
    //   return this.items.slice().sort(function(w,b){
    //     return (w.classify < b.classify) ? 1 : -1;
    //   })
    // },
  },
};
</script>
<style lang="scss" scoped>



.menu-box-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
z-index: 0;
  //    left: 0;
  // // max-width: 100%;
  // overflow: visible;
  // position: fixed !important;
  // top: 0;
  // width: 100%;
  // z-index: 1;
  
}
.menu-box a {
  text-decoration: none;
  font-size: 24px;
  color: red;

  
}
.menu-box {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 15vw;
  height: 90vh;
  background-color: rgb(255, 206, 47);
  border-radius: 15px;
}
.menu-box-enter,
.menu-box-leave-to {
  transform: translate(0px, 0px);
  opacity: 0;
  position: fixed;
}
.menu-box-enter-to,
.menu-box-leave {
  transform: translate(0px);
  opacity: 100;
  position: fixed;
}
.menu-box-enter-active,
.menu-box-leave-active {
  transition: all 1s ease-out;
}
.menu-box-bottom-enter,
.menu-box-bottom-leave-to {
  width: 0px;
  opacity: 0;
}
.menu-box-bottom-enter-to,
.menu-box-bottom-leave {
  width: 0px;
  opacity: 100;
}
.menu-box-bottom-enter-active,
.menu-box-bottom-leave-active {
  transition: all 1s ease-out;
}
.container {
  cursor: pointer;
}
.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.5s;
}
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
.fas {
  font-size: 36px;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: aqua;
  height: 100%;
  padding-bottom: 0%;
  // padding-top: -10vh;
  // margin-top: -10vh;
}
div .title-container{
  height: 10vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
}
.home-header {
  // position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  width: 100%;
}

.menu{
  background-color: red;
  height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 0;
  // padding-top: 10vh;
  margin-top: -10vh;
  
}
.container{
  padding-top: 10vh;
}

.table{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
  // overflow: hidden;
  // min-width: 70%;
}
.table-content {
   display: flex;
   flex-direction: column;

  min-width: 0px;
  flex: 0 10 30%;
  height: auto;
  min-height: 100vh;
  justify-content: start;
  
  overflow: hidden;
  margin-top: -10vh;
}
#go_white{
  padding-top: 10vh;
}
#go_olong{
  padding-top: 10vh;
}
#go_green{
  padding-top: 10vh;
}
#go_black{
  padding-top: 10vh;
}
#go_cake{
  padding-top: 10vh;
}

.item-content{
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
  height: auto;
}
::v-deep .card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20vw;
  min-width: 25vw;
  height: 25vh;
  margin-bottom: 5vh;
  background-color: white;
  border-radius: 15px;
  border: 0.5px solid white;
}
::v-deep .table #name {
  position: relative;
  text-align: start;
  padding-left: 10px;
  margin-left: 10px;
  overflow: scroll;
  scrollbar-width: none;
  width: 90%;
  height: 30px;
  font-family: monospace;
  font-size: 22px;
}
::v-deep .table #price {
  position: relative;
  width: 40%;
  height: 30px;
  margin-left: 10px;
  padding-left: 10px;
  font-size: 18px;
  font-family: monospace;
  color: red;
  text-align: start;
}
::v-deep .table #classify {
  // display: none;
}
::v-deep .table #description {
  display: none;
}
::v-deep .table #action {
  display: none;
}

#go_white{
  position: relative;
  height: 30px;
  align-items: center;
  display: flex;
  padding-bottom: 5px;
}
#go_olong{
  position: relative;
  height: 30px;
  align-items: center;
  display: flex;
  padding-bottom: 5px;
}
#go_green{
  position: relative;
  height: 30px;
  align-items: center;
  display: flex;
  padding-bottom: 5px;
}
#go_black{
  position: relative;
  height: 30px;
  align-items: center;
  display: flex;
  padding-bottom: 5px;
}
#go_cake{
  position: relative;
  height: 30px;
  align-items: center;
  display: flex;
  padding-bottom: 5px;
}



@media only screen and (max-width: 1366px) {
  .menu-box a {
    text-decoration: none;
    font-size: 18px;
    color: red;
  }
  .menu-box {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 15vw;
    height: 70%;
    overflow: scroll;
    background-color: rgb(255, 206, 47);
    border-radius: 15px;
  }
}

@media only screen and (max-width: 768px) {
  .menu-box a {
    text-decoration: none;
    font-size: 18px;
    color: red;
  }
  .menu-box {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 15vw;
    height: 100vh;
    overflow: scroll;
    background-color: rgb(255, 206, 47);
    border-radius: 15px;
  }
}
#goto0 {
  display: none;
}
</style>
