import { defineStore } from "pinia";

export const useCategoryStore = defineStore('category', () => {
    const categories = [
        'Motherboard', 'CPU', 'GPU', 'RAM'
    ]
    return {
        categories,
    }
})