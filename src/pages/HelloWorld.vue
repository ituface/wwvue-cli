<template>
  <div class="hello">
    <div class="iconBox">
      <div class="iconItem" v-for="(item, index) in iconList">
        <w-icon :class="item" :style="{color:RandomColor()}"></w-icon>
        <p>{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import iconList from "@/assets/js/icon.json";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome To Your Vue.js App",
      date: 1558849079,
      params: this.$route.query,
      iconList: iconList
    };
  },
  mounted() {
    this.getUserInfo();
    //这里使用一下定义在mixin中的方法
    console.log(this.formatTime(this.date));
  },
  methods: {
    getUserInfo() {
      let datas = {
        token: "",
        user_id: ""
      };
      this.$API.User.getUserInfo(datas).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.iconBox {
  width: 80%;
  height: auto;
  margin: 0 auto;
  .iconItem {
    height: 64px;
    width: 120px;
    padding: 10px;
    margin: 5px;
    float: left;
    i {
      font-size: 24px;
    }
    p {
      font-size: 10px;
    }
  }
}
hr {
  width: 100%;
  height: 0;
  align: center;
  border: 1px solid #f00;
}
</style>
