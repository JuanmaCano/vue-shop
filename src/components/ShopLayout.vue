<template>
  <b-container>
    <b-row>
      <b-col sm="12" md="8">
        <slot name="product-list"></slot>
      </b-col>
      <b-col sm="12" md="4">
        <slot name="cart"></slot>
      </b-col>
    </b-row>
  </b-container>
</template>