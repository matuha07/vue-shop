import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);

    const addToCart = (product) => {
        const existingItem = cartItems.value.find((item) => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.value.push({ ...product, quantity: 1 });
        }
    };

    const removeFromCart = (productId) => {
        const index = cartItems.value.findIndex(item => item.id === productId);
        if (index !== -1) {
            cartItems.value.splice(index, 1);
        }
    };

    const updateQuantity = (productId, quantity) => {
        const item = cartItems.value.find((item) => item.id === productId);
        if (item) {
            item.quantity = quantity > 0 ? quantity : 1;
        }
    };

    const clearCart = () => {
        cartItems.value = [];
    };

    const totalPrice = computed(() =>
        cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    return {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
    };
});
