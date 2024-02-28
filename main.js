const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'VueMastery',
            description: 'They are socks',
           selectedVariant: 0,
            url: 'https://www.vuemastery.com/',
            inventory: 8,
             onSale: true,
             details: ['50% cotton', '30% wool', '20% polyster'],
             variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
             ],
             sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge'],

        }
    },



methods:
 {
    addToCart() {
        this.cart += 1;
    },
    removeFromCart() {
        if(this.cart >= 0)
        this.cart -= 1;
    },
    updateVariant(index) {
        this.selectedVariant = index;
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
}
 }
})
