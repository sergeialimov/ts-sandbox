/**
 *  extends { value: string }  is generic constrains
 */
class Coll<T extends { value: string }> {
  items: T[];

  find(keyword: string): T {
    return this.items.filter((x) => x.value === keyword)[0];
  }
}
