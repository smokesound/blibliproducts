<script setup lang="ts">
import Products from "./components/Products.vue";
import Data from "./assets/data";
</script>

<script lang="ts">
export default {
  data: function () {
    return {
      closed: false,
      toTopStats: false,
      rightScroll: true,
      leftScroll: false,
      shopData: Data,
    };
  },
  methods: {
    collapseFooter() {
      this.closed = !this.closed;
    },
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      if (window.pageYOffset < 100) {
        this.toTopStats = false;
      } else {
        this.toTopStats = true;
      }
    },
    scrollLeft() {
      let content = document.querySelector(".productContainer");
      if (content) {
        content.scrollLeft -= 30;
        content?.addEventListener("scroll", () => {
          if (content?.scrollLeft === 0) {
            this.leftScroll = false;
          } else {
            this.leftScroll = true;
          }
        });
      }
    },
    onPressProduct(product: any) {
      alert(`You clicked, ${product.title}`);
    },
    scrollRight() {
      let content = document.querySelector(".productContainer");
      if (content) {
        content.scrollLeft += 30;
        content?.addEventListener("scroll", () => {
          let totalScroll = content.offsetWidth + content?.scrollLeft;
          if (totalScroll >= content?.scrollWidth) {
            this.rightScroll = false;
          } else {
            this.rightScroll = true;
            this.leftScroll = true;
          }
        });
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<template>
  <header>
    <img
      src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg"
      class="logo"
    />
  </header>

  <main v-on:scroll.passive="handleScroll">
    <div class="mainContent" id="mainContainer">
      <div class="container12">
        <div class="container1"><div class="number1">1</div></div>
        <div class="container2"><div class="number2">2</div></div>
      </div>
      <div class="container34">
        <div class="container3"><div class="number3">3</div></div>
        <div class="container4"><div class="number4">4</div></div>
      </div>
      <div class="containerHolder">
        <div class="productContainer">
          <Products
            v-for="data in shopData"
            :photo="data.photo"
            :title="data.title"
            :price="data.price"
            :discountPrice="data.discountPrice"
            :discount="data.discount"
            :buttonTitle="data.buttonTitle"
            :small="data.small"
            :disabled="data.disabled"
            @click="onPressProduct(data)"
          />
        </div>
        <div class="navContainer noselection">
          <div
            @click="scrollLeft"
            class="scroll scrollLeft"
            v-bind:class="!leftScroll && 'vanished'"
          >
            <font-awesome-icon icon="chevron-left" />
          </div>
          <div
            @click="scrollRight"
            class="scroll scrollRight noselection"
            v-bind:class="!rightScroll && 'vanished'"
          >
            <font-awesome-icon icon="chevron-right" />
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p ref="footer " v-bind:class="closed && 'closed'">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      <div class="collapseAll" @click="collapseFooter">Collapse All</div>
      <div class="identity">&copy; 2022 PT Global Digital Niaga</div>
      <div
        class="backToTop"
        v-bind:class="toTopStats && 'shownTop'"
        @click="toTop"
      >
        <font-awesome-icon icon="arrow-up" />
      </div>
    </footer>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: #218acb;
  width: 100%;
  height: 50px;
}
main {
  background-color: white;
  overflow: hidden;
}
.mainContent {
  max-width: 1440px;
  margin: 0 auto;
}
.logo {
  display: block;
  width: 100px;
  padding-top: 10px;
  padding-left: 30px;
}
#dynamicId {
  color: red;
}
.done {
  text-decoration: line-through;
}
.productContainer {
  display: flex;
  padding: 20px 40px 20px 20px;
  overflow-x: hidden;
  gap: 2px;
  max-width: 1425px;
  position: relative;
}
.container12 {
  display: flex;
  gap: 15px;
  padding: 10px 15px;
  height: 300px;
  flex-direction: row;
  flex-wrap: wrap;
}
.container34 {
  display: flex;
  gap: 15px;
  padding: 10px 15px;
  flex-direction: column;
}
.container1 {
  background-color: yellow;
  flex: 1;
  display: flex;
  text-align: center;
  box-sizing: content-box;
}
.number1 {
  flex: 1;
  align-self: center;
  font-size: 74px;
  color: black;
  font-weight: bold;
}
.container2 {
  background-color: teal;
  flex: 1;
  display: flex;
  text-align: center;
  box-sizing: content-box;
}
.number2 {
  flex: 1;
  align-self: center;
  font-size: 74px;
  color: black;
  font-weight: bold;
}
.container3 {
  background-color: plum;
  display: flex;
  text-align: center;
  box-sizing: content-box;
  height: 300px;
}
.number3 {
  flex: 1;
  align-self: center;
  font-size: 74px;
  color: black;
  font-weight: bold;
}
.container4 {
  background-color: peachpuff;
  display: flex;
  text-align: center;
  box-sizing: content-box;
  height: 300px;
}
.number4 {
  flex: 1;
  align-self: center;
  font-size: 74px;
  color: black;
  font-weight: bold;
}
footer {
  background-color: lightgray;
  padding: 20px 20px 50px;
}
footer p {
  color: rgb(80, 80, 80);
  font-weight: bold;
  transition-property: all;
  margin-top: 0px;
  transition-duration: 1s;
  display: block;
  visibility: visible;
}
.collapseAll {
  color: #218acb;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  cursor: pointer;
  display: block;
}
footer p.closed {
  visibility: hidden;
  height: 0;
  opacity: 0;
  z-index: -1;
  transition-property: all;
  transition-duration: 1s;
}
.identity {
  text-align: center;
  color: black;
  margin-top: 150px;
  font-weight: bold;
}
.backToTop {
  padding: 10px 16px;
  background-color: white;
  border-radius: 100%;
  cursor: pointer;
  position: fixed;
  right: 20px;
  color: blue;
  bottom: 20px;
  opacity: 0;
  transition-property: all;
  transition-duration: 1s;
  text-align: center;
  vertical-align: center;
  box-shadow: 1px 1px 4px 0px #8f8f8f;
}
.shownTop {
  opacity: 1;
  transition-property: all;
  transition-duration: 1s;
}
.scrollRight {
  float: right;
  margin-top: 150px;
  right: 10px;
  color: #218acb;
}
.scroll {
  cursor: pointer;
  padding: 5px 15px;
  background: white;
  transition-property: all;
  transition-duration: 1s;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border-radius: 100%;
  box-shadow: 1px 1px 4px 0px #8f8f8f;
  margin-top: -200px;
  outline: none;
}
.scroll.vanished {
  opacity: 0;
  visibility: hidden;
}
.scrollLeft {
  left: 10px;
  float: left;
  color: #218acb;
}
.navContainer {
  display: block;
  width: 100%;
  /* position: absolute; */
  z-index: 1;
  top: 0;
}
.containerHolder {
  position: relative;
  display: block;
  width: 100%;
}
.noselection {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
