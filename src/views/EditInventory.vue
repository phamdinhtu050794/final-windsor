<template>
  <div class="editcard-container">
    <div>
      <h1>Edit</h1>
    </div>
     
    <input class="input" v-model="item.classify" placeholder="classify" />
    <!-- <input type="file" id="pictureTest" capture> -->
    <input class="input" v-model="item.name" placeholder="name" />
    <input class="input" v-model="item.description" placeholder="description" />
    <input class="input" v-model="item.price" placeholder="price" />
    <input type="file" accept="image/*" @change="uploadImage"  />
    <div id="preview">
      <img v-if="item.imageUrl" :src="item.imageUrl" width="200" height="200" />
    </div>
    <button class="btn" @click="save">Save</button>
    <button class="btn" @click="back">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "EditInventory",
  props: {
    msg: String,
  },
  data() {
    return {
      
      item: null,
      item: {
        
        image: null,
        imageUrl: null,
      },
    };
  },
  created() {
    if (this.$route.params.item) {
      this.item = this.$route.params.item;
    } else {
      this.item = {
        
        classify: this.classify,
        imageUrl: this.item.imageUrl,
        name: this.name,
        description: this.description,
        price: this.price,
      };
    }
  },
  methods: {
     uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.item.imageUrl = e.target.result;
        console.log(this.item.imageUrl);
      };
    },

    async save() {
      await this.$store.dispatch("saveItem", this.item);
      console.log("back");
      this.$router.push("/inventory");
    },
    back() {
      this.$router.push("/inventory");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.editcard-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.input {
  width: 70vw;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn {
  width: 70vw;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  background-color: #45a049;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 70%;
  max-height: 200px;
}
</style>