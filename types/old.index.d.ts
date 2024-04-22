export type StringType = string;
export type NumberType = number;
export type BooleanType = boolean;
export type VoidType = void;
export type AnyType = any;
export type NullType = null;
export type KeyboardEventType = KeyboardEvent;
export type InputElementType = HTMLInputElement;
export type ComponentType = DefineComponent<
  {},
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  PublicProps,
  Readonly<globalThis.ExtractPropTypes<{}>>,
  {},
  {}
>;

export type VariantType = "ghost" | "fill" | "outline";
export type ModeType = "icon" | "rounded" | "normal";

export interface CheckoutState {
  isShow: boolean;
  shipFee: number;
}

export interface CategoryItem {
  id: NumberType;
  name: StringType;
}

export interface FilterItems {
  id: NumberType;
  name: StringType;
}

export interface TagItems {
  id: NumberType;
  name: StringType;
}

export interface TagCategories {
  title: StringType;
  tags: TagItems[];
}

export interface Product {
  id: NumberType;
  name: StringType;
  description: StringType;
  price: NumberType;
  images: StringType[];
  availability: StringType;
  shippingInfo: StringType;
  reviews: {
    rating: NumberType;
    comment: StringType;
  }[];
  variants: {
    option: StringType;
    values: StringType[];
  }[];
  specifications: {
    key: StringType;
    value: StringType;
  }[];
  warranty: StringType;
  brand: StringType;
  category: StringType;
}
