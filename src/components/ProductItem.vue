<template>
  <b-card
    :img-src="product.picture"
    :img-alt="product.name"
    img-top
    style="max-width: 20rem; padding: 1rem;"
    class="shadow-sm"
  >
    <b-card-text class="font-weight-bold">{{ product.name }} ...</b-card-text>
    <b-card-text>{{ product.description.substr(0, 80) }} ...</b-card-text>
    <template v-slot:footer>
      <b-button block variant="warning" @click="$emit('addToCart', product)">Añadir al carrito</b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
