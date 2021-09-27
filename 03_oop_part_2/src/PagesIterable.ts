export function PagesIterable(): (target: any, name: PropertyKey) => void {
  return (target: any, name: PropertyKey) => {
    Object.defineProperty(target, 'next', {
      get(this: any) {
        return () => {
          const next = this[name].next();
          next.value = this.toString() + ', ' + next.value;
          return next;
        };
      },
    });

    Object.defineProperty(target, Symbol.iterator, {
      get(this: any) {
        return () => this;
      },
    });
  };
}
