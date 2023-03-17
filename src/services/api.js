export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const getCategorie = await categories.json();
  return getCategorie;
}

export async function getProductsFromCategoryAndQuery(query) {
  const querys = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const queryData = await querys.json();
  return queryData;
}

export async function getProductsFromID(categoryId) {
  const querys = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const queryData = await querys.json();
  return queryData;
}

export async function getProductById(id) {
  const product = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const productDetails = await product.json();
  return productDetails;
}
