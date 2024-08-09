export const ProductItem: PModel = {
  info: {
    name: 'ProductItem',
    label: 'Product Item',
    description: 'ProductItem model',
    managed: true,
    prefix: 'PRODUCT_ITEM'
  },
  fields: {
    product: {
      type: "relationship",
      ref: "Product"
    },
    description: {
      type: "string",
    },
    productAttribute: {
      type: "relationship",
      ref: "ProductAttribute",
    },
    images: {
      type: "relationship",
      ref: 'File',
      many: true
    },
  },
  options: {
    historyTracking: false
  }
}