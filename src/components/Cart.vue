<template>
  <div v-if="cart.length">
    <b-table striped hover :items="cart" :fields="fields">
      <template v-slot:cell(actions)="row">
        <b-button variant="danger" size="sm" @click.stop="removeProductFromCart(row.item)">Delete</b-button>
      </template>
    </b-table>
    <b-alert show variant="success" class="text-center">Coste total: {{ totalCost.toFixed(2) }}€</b-alert>
  </div>
  <b-alert v-else show variant="info">No hay productos en el carrito</b-alert>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      fields: ["name", "qty", "price", "actions"],
    };
  },
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["totalCost"]),
  },
  methods: {
    ...mapMutations("cart", ["removeProductFromCart"]),
  },
};
</script>