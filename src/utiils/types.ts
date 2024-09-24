export type Guitarr = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = Guitarr & {
  quantity: number;
};

export type GuitarId = Guitarr["id"];
// export type GuitarId = Pick<Guitarr, "id"> & {};

// export interface CartItem extends Guitarr {
//   quantity: number;
// };

//? con pick y tmb se puede con omit
// export type CartItem = Pick<Guitarr, "id" | "name"> & {
//   quantity: number;
// };

export type HeaderProps = {
  cart: CartItem[];
  removeFromCart: (id: GuitarId) => void;
  decreaseQuantity: (id: GuitarId) => void;
  increaseQuantity: (id: GuitarId) => void;
  clearCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
};
