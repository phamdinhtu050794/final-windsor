<template>
  <div class="inventory-container">
    <div class="inventory-header">
      <i @click="back" class="fa">&#xf190;</i>
      <h1>Inventory</h1>
      <i @click="addCard" class="fa">&#xf055;</i>
    </div>
    <div class="table-header">
      <div class="cell">Classify</div>
      <div class="cell">Image</div>
      <div class="cell">Name</div>
      <div class="cell">Description</div>
      <div class="cell">Price</div>
      <div class="cell">Action</div>
    </div>
    <div class="table-body-container">
      <div class="table">
        <div v-for="(item, idx) in items" :key="idx">
          <Card
            :item="item"
            @delete="deleteItem"
            @edit="editItem"
            class="list-item"
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./../components/Card.vue";
export default {
  name: "Inventory",
  components: {
    Card,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  created() {
    this.$store.dispatch("getItems");
  },
  methods: {
    addCard() {
      this.$router.push({ name: "EditInventory" });
    },
    addItem() {
      this.$router.push({ name: "EditIventory" });
    },
    async deleteItem(item) {
      console.log("delete", item.id);
      await this.$store.dispatch("deleteItem", item);
      this.$store.dispatch("getItems");
    },
    editItem(item) {
      console.log("EditInventory", item.id);
      this.$router.push({ name: "EditInventory", params: { item: item } });
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.inventory-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1%;
  margin: 0px;
}
.inventory-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.fa {
  font-size: 48px;
}
.table-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.cell {
  height: 50px;
  background-color: bisque;
  color: black;
  font-size: 24px;
}
::v-deep .card-container {
  display: flex;
  
  // flex-direction: row;
  // justify-content: center;
  // width: 100%;
  
}
::v-deep .cells {
  overflow: scroll;
  width: 17vw;
  height: 200px;
  padding: 1%;
  text-align: center;
  // align-items: center;
  align-content: center;
  border: 0.5px solid black;
}
.cell {
  flex: 1 0 15%; // flex: grow shirnk percent
  border: 0.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>