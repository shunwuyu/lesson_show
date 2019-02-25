<template>
  <div>
    Products
    <ul>
      <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions} from 'vuex';
export default {
  
  // 方法 用户的交互
  // methods: mapActions('cart', [
  //   'addProductToCart'
  // ]),
  // connect (props)  this.props
  // vuex mapState 读， 交给computed 计算属性 根据data 
  computed: mapState({
    products: state => state.products.all 
  }),
  created() { // 生命周期函数
    // products:state.all 状态是不能直接被修改
    // reducers 才能修改  mutation 才能直接修改状态
    // UI -> dispatch Action -> mutation ->  state
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
<style>
</style>