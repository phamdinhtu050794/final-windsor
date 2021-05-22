<template>
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
              <a class="section" href="#goto5"><h4>All</h4></a>
            <br />
            <a class="section" href="#goto0"><h4>Hot Tea</h4></a>
            <br />
            <a class="section" href="#goto1"><h4>Cold Tea</h4></a>
            <br />
            <a class="section" href="#goto2"><h4>Oolong tea</h4></a>
            <br />
            <a class="section" href="#goto3"><h4>Cookies</h4></a>
            <br />
            <a class="section" href="#goto4"><h4>Section 5</h4></a>
            <br />
            <div>
              <i @click="inventory" class="fas">&#xf468;</i>
            </div>
          </div>
        </transition>
      </div>
</template>
<script>
export default {
    name:'BarMenu',
    
    data(){
        return {
      toggled: false,
        }
    },
    methods:{
          myFunction() {
      this.toggled = !this.toggled;
    },
    }

}
</script>
<style scoped>
.menu-box-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* width: 20vw; */
  height: 100vh;
}
.menu-box a {
  text-decoration: none;
  font-size: 24px;
  color: red;
}
.menu-box {
  display: flex;
  /* overflow: scroll; */
   /* position: sticky; */
  flex-direction: column;
  justify-content: space-around;
   /* align-items: flex-start; */
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
  /* display: inline-block; */
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
</style>