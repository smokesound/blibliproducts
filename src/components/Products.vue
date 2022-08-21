<script setup lang="ts">
defineProps<{
  photo?: string;
  title?: string;
  price?: string;
  discountPrice?: string;
  buttonTitle?: string;
  buttonColor?: string;
  discount?: string;
  disabled?: boolean;
  small?: boolean;
}>();
</script>

<template>
  <div class="cardContainer" v-bind:class="small && 'small'">
    <div class="imageContainer">
      <img
        v-if="photo"
        :src="photo"
        class="image"
        v-bind:class="disabled && 'disabled'"
        alt="product image"
      />
      <img
        v-else
        src="https://pertaniansehat.com/v01/wp-content/uploads/2015/08/default-placeholder.png"
        class="image"
        v-bind:class="disabled && 'disabled'"
        alt="product image"
      />
    </div>
    <div class="detailContainer">
      <div class="title">{{ title ? title : "Not Specified" }}</div>
      <div class="price">{{ price ? `Rp. ${price} ` : "Rp. 0" }}</div>
      <span class="discountPrice">{{
        discountPrice ? `Rp. ${discountPrice} ` : "Rp.0"
      }}</span>
      <span class="discountTag">{{ discount ? `${discount}%` : "0%" }}</span>
    </div>
    <div class="buttonContainer">
      <button v-if="!disabled" class="addToCartButton">
        {{ buttonTitle }}
      </button>
      <button v-if="disabled" class="disabledButton">Out of Stock</button>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .cardContainer {
    width: 132px;
    min-width: 132px;
    transition-property: all;
    transition-duration: 1s;
  }
  .cardContainer .imageContainer {
    height: 130px;
    overflow: hidden;
  }
  .cardContainer.small .imageContainer {
    height: 130px;
    overflow: hidden;
  }
}
@media (min-width: 768px) {
  .cardContainer {
    width: 182px;
    min-width: 182px;
    transition-property: all;
    transition-duration: 1s;
  }
  .cardContainer .imageContainer {
    height: 182px;
    overflow: hidden;
  }
  .cardContainer.small .imageContainer {
    height: 130px;
    overflow: hidden;
  }
}
.cardContainer {
  max-width: 182px;
  background: #fff;
  color: #000;
  border-radius: 12px;
  margin-right: 10px;
  box-shadow: 0px 0px 4px 0px #8f8f8f;
  cursor: pointer;
}
.cardContainer:hover {
  box-shadow: 0px 0px 4px 0px #242424;
}
.cardContainer.small {
  width: 130px;
  min-width: 130px;
  max-height: 275px;
}
.cardContainer.small .imageContainer {
  height: 130px;
  overflow: hidden;
}
.disabled {
  opacity: 0.7;
}
.image {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 5px;
  height: 100%;
  object-fit: contain;
}
.title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
  color: rgba(44, 44, 44, 0.87);
  font-weight: 500;
  min-height: 40px;
  margin-top: 5px;
  text-transform: capitalize;
}
.price {
  color: orange;
  font-weight: bold;
}
.detailContainer {
  padding: 0px 10px 10px;
}
.discountPrice {
  text-decoration: line-through;
  color: grey;
  font-size: 12px;
}
.buttonContainer {
  padding: 0 8px 8px;
}
.addToCartButton {
  background-color: #218acb;
  border-radius: 6px;
  width: 100%;
  color: white;
  font-size: 14px;
  padding: 8px;
  border: none;
}
.disabledButton {
  background-color: rgb(238, 238, 238);
  border-radius: 6px;
  width: 100%;
  color: rgb(66, 66, 66);
  font-size: 14px;
  padding: 8px;
  border: none;
}
.discountTag {
  padding: 0 4px;
  border-radius: 8px;
  font-size: 1.2rem;
  color: #ed1c24;
  margin-left: 2px;
  background-color: #f9b9bc;
  font-size: 11px;
  font-weight: bold;
}
</style>
