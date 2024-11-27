import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useProductStore = defineStore('product', () =>
{
    const products = ref([{
        id: 1,
        name: 'Gigabyte H510M K V2',
        img: 'https://static.shop.kz/upload/resize_cache/iblock/065/gcgsznwq4suzskq5b9ri2x4mdaggx6sq/450_450_1/176279x3.webp',
        price: 63,
        category: 'Motherboard',
        description: 'AAaaaaa',
        publishAt: '27.11.2024'
    },
    {
        id: 2,
        name: 'AMD Ryzen 9 9950X',
        img: 'https://static.shop.kz/upload/resize_cache/iblock/ddb/f5lg2lvl0ld7xkdr9ict2rqh43iy7e48/450_450_1/183165_02_2.webp',
        price: 740,
        category: 'CPU',
        description: 'AAaaaaa',
        publishAt: '27.11.2024'
        
    },
    {
        id: 3,
        name: 'MSI GeForce GTX 1650',
        img: 'https://c.dns-shop.kz/thumb/st1/fit/500/500/b6f56e24852bb3b1ffc4fe9ce4da69a3/291e3d866c55a4a55843d59380a9a2fe063f05290e8df4b95efb35ddf6b12e0b.jpg.webp',
        price: 440,
        category: 'GPU',
        description: 'AAaaaaa',
        publishAt: '27.11.2024'
        
    },
    {
        id: 4,
        name: 'Kingston FURY Beast Black',
        img: 'https://c.dns-shop.kz/thumb/st4/fit/500/500/7552b6341dea70a9dea9102b6c2609e8/93b717156b88cba868730da8338b1b4dcca873ec855fe4a603a5cf92e7489a5a.jpg.webp',
        price: 100,
        category: 'RAM',
        description: 'AAaaaaa',
        publishAt: '27.11.2024'
        
    }

        

    ])

    const productsFilteredbyCategoryNameList = computed(() => {
        return (category, searchText) => 
        {
            if (category) {
                return products.value.filter((product) => product.category === category)
            }
            if (searchText) {
                return products.value.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
            }   

            return products.value
        }
    })

    return {
        products, productsFilteredbyCategoryNameList
    }
})