<template>
    <div class="container">
        <div v-if="cartItems.length">
            <div class="row">
                <div class="col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cartItems" :key="item.id">
                                <th scope="row">{{ item.id }}</th>
                                <td>{{ item.name }}</td>
                                <td>
                                    <img :src="item.img" alt="" style="width: 100px; height: auto;">
                                </td>
                                <td>{{ item.price * item.quantity }} $</td>
                                <td>
                                    <input type="number" :value="item.quantity"
                                        @input="updateQuantity(item.id, $event.target.value)">
                                </td>
                                <td>
                                    <button type="button" class="btn btn-outline-danger"
                                        @click="removeFromCart(item.id)">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>


                    </table>

                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h3> Total: {{ totalPrice }}$</h3>

                    <button type="button" class="btn btn-success">Buy</button>
                </div>x
            </div>

        </div>

        <div v-else>
            <p class="alert alert-warning">Ваша корзина пуста.</p>
            <router-link to="/" class="btn btn-primary">Вернуться к каталогу</router-link>
        </div>
    </div>
</template>

<script setup>

import { useCartStore } from '@/stores/cart';
import { isRef } from 'vue';
import { ref } from 'vue';

const cartStore = useCartStore()

const cartItems = ref(cartStore.cartItems)
const removeFromCart = cartStore.removeFromCart
const updateQuantity = cartStore.updateQuantity
const totalPrice = cartStore.totalPrice

console.log(isRef(cartItems))


</script>