<script setup>
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';

const productStore = useProductStore();
const route = useRoute();

const product = productStore.findProductbyID(route.params.id)

</script>

<template>
    <div class="container">
        <div class="row">
                <div class="card-img-top mt-4">
                    <img :src="product.img" class="card-img-top" alt="Фото">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ product.category }}</p>
                        <p class="card-text">{{ product.description }}</p>
                        <p class="card-text">{{ product.price }}$</p>
                        <p class="card-text">{{ product.publishAt }}</p>
                        <a href="#" class="btn btn-primary me-2">Add</a>
                    </div>
                </div>
            </div>
        </div>
</template>