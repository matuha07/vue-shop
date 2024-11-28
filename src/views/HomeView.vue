<script setup>
import { useCartStore } from '@/stores/cart';
import { useCategoryStore } from '@/stores/category';
import { useProductStore } from '@/stores/product';
import { ref } from 'vue';

const productStore = useProductStore()
const categoryStore = useCategoryStore()
const cartStore = useCartStore()

const category = ref(null)
const searchText = ref('')

const products = ref([

])

products.value = productStore.products

const filterCategory = () => {
  searchText.value = ''
  products.value = productStore.productsFilteredbyCategoryNameList(category.value, null);
}

const searchName = () => {
  category.value = ''
  products.value = productStore.productsFilteredbyCategoryNameList(null, searchText.value);
}

const resetAll = () => {
  category.value = ''
  searchText.value = ''
}

</script>

<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-5">
        <select class="form-select" aria-label="default select example" @change="filterCategory" v-model="category">
          <option :value="null" selected>Select category</option>

          <option v-for="category in categoryStore.categories" :value="category" :key="category">{{ category }}</option>
        </select>
      </div>

      <div class="col-md-5">
        <input class="form-control" type="text" placeholder="Search" aria-label="default input example"
          v-model="searchText" @input="searchName">

      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-outline-danger" :disabled="!searchText && !category"
          @click="resetAll">Reset</button>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      <div class="col" v-for="product in products" :key="product.id">
        <div class="card-img-top mt-4" style="width: 18rem; top: 50px;">
          <img :src="product.img" class="card-img-top" alt="Фото">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.category }}</p>
            <p class="card-text">{{ product.price }}$</p>
            <a href="#" class="btn btn-primary me-2" @click="cartStore.addToCart(product)">Add</a>
            <a href="#" class="btn btn-outline">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
