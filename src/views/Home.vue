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
            <a class="section"><h4>All</h4></a>
            <br />
            <a class="section"><h4>White Tea</h4></a>
            <br />
            <a class="section"><h4>Oolong Tea</h4></a>
            <br />
            <a class="section"><h4>Green Tea</h4></a>
            <br />
            <a class="section"><h4>Black Tea</h4></a>
            <br>
            <a class="section"><h4>Cake</h4></a>
            <br />
<!-- 
             <ul class="tabs-header">
                  <li
                  
                  v-for="(item, classify) in item" 
                  :key="classify"
                  v-on:click="setActive(classify)"
                  v-bind:class="{active : tabActive == classify}"
                  >
                    {{ item.classify }}
                  </li>
                </ul> -->
            <div>
              <i @click="inventory" class="fas">&#xf468;</i>
            </div>
          </div>
        </transition>
      </div>
      <div class="table">
        <div v-for="item in items" :key="item.id">
          <Card v-if="item.id" 
                @click.native="showModal(item.id)" 
                :item="item">
          </Card>
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
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: antiquewhite;
}
.home-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  height: 90vh;
}
.menu-box-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
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
  height: 100vh;
  overflow: scroll;
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
.table {
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  justify-content: space-around;
  padding: 2%;
  padding-left: 2%;
  padding-right: 2%;
  width: 100%;
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
  border: 0.5px solid black;
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
  font-size: 22px;
  font-family: monospace;
  color: red;
  text-align: start;
}
::v-deep .table #classify {
  display: none;
}
::v-deep .table #description {
  display: none;
}
::v-deep .table #action {
  display: none;
}
</style>
