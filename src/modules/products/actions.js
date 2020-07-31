export async function fetchProducts({ commit }) {
  const resp = await fetch("/fixtures/products.json");
  const products = await resp.json();
  commit("products/setProducts", products, { root: true });
}
