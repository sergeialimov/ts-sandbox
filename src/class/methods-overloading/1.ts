// eslint-disable-next-line max-classes-per-file
class Product {
  constructor(public name: string, public price: number) {}
}

class Products {
  private products: Product[] = [];

  add(product: Product) {
    this.products.push(product);
  }

  filter(name: string): Product[]
  filter(name: string, price: number): Product[]
  filter(name: string, price?: number): Product[] {
    let res = [];
    if (price !== undefined) {
      res = this.products.filter(
        (product) => product.name === name && product.price === price,
      );
    } else {
      res = this.products.filter(
        (product) => product.name === name,
      );
    }
    return res;
  }
}

const products = new Products();
products.add(new Product('Table', 400));
products.add(new Product('Chair', 100));
products.add(new Product('Lamp', 30));

console.log(products.filter('Chair', 100));
