<template>
  <div class="home">
    <HomeTitle></HomeTitle>
    <div class="home-header">
      <!-- <BarMenu></BarMenu> -->
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
            <br />
            <a class="section" href="#goto0"><h4>All</h4></a>
            <br />
            <a class="section" href="#goto1"><h4>Hot Tea</h4></a>
            <br />
            <a class="section" href="#goto2"><h4>Cold Tea</h4></a>
            <br />
            <a class="section" href="#goto3"><h4>Oolong tea</h4></a>
            <br />
            <a class="section" href="#goto4"><h4>Cookies</h4></a>
            <br />
            <a class="section" href="#goto5"><h4>MilkTea</h4></a>
            <br />
            <div>
              <i @click="inventory" class="fas">&#xf468;</i>
            </div>
          </div>
        </transition>
      </div>
      <div class="table">
        <div v-for="item in items" :key="item.id">
          <Card v-if="item.id" @click.native="showModal(item.id)" :item="item">
          </Card>
  
        </div>
      </div>
        <Modal
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
import HomeTitle from "./../components/HomeTitle.vue";
import Modal from "./../components/Modal.vue";

export default {
  name: "Home",
  components: {
    Card,
    HomeTitle,
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
      item: {
        name: this.name,
        classify: this.classify,
        imageUrl: this.imageUrl,
        description: this.description,
        price: this.price,
      },
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
      
      this.showingModal = IDs;
    },
    closeModal() {
      console.log("make");
      this.showingModal = null;
    },
    close() {
      console.log("closingggg");
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: antiquewhite;
  // overflow: hidden;
}
.home-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  // overflow: hidden;
  // width: 100vw;
  // align-items: baseline;
}
.menu {
  // position: -webkit-sticky;
  position: static;
  // top: 0;
  // padding-top: 10vh;

  /* padding: 5px; */
  // background-color: #cae8ca;
  // border: 2px solid #4CAF50;
}

.menu-box-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // width: 20vw;
  height: 100vh;
}
.menu-box a {
  text-decoration: none;
  font-size: 24px;
  color: red;
}
.menu-box {
  display: flex;
  // position: sticky;
  flex-direction: column;
  justify-content: space-around;
  // align-items: flex-start;
  width: 15vw;
  height: 100vh;
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
  // display: inline-block;
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
.table {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  padding: 2%;
  padding-left: 2%;
  padding-right: 2%;
  width: 100%;
}
::v-deep .card-container {
  display: flex;
  flex-direction: column;

  // flex-wrap: wrap;
  justify-content: space-around;
  width: 20vw;
  min-width: 25vw;
  height: 25vh;
  margin-bottom: 5vh;
  //  padding-bottom: 5vh;
  background-color: rgb(241, 255, 47);
  //  margin: 2%;
  border: 0.5px solid black;
}

::v-deep #classify {
  display: none;
}
::v-deep #description {
  display: none;
}
::v-deep #action {
  display: none;
}
// ::v-deep .cells {
//   // padding: 30px;
//   //   margin-bottom: 30px;
//     // border: 0.5px solid black;

//   // height: 10%;
//   // overflow: scroll;
// }
</style>
