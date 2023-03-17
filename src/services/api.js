export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const getCategorie = await categories.json();
  return getCategorie;
}

export async function getProductsFromCategoryAndQuery(QUERY) {
  const query = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const queryData = await query.json();
  return queryData;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
