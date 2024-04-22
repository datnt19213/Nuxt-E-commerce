export type StringType = string;
export type NumberType = number;
export type BooleanType = boolean;
export type ObjectType = object;
export type VoidType = void;
export type UndefinedType = undefined;
export type AnyType = any;
export type ArrayType = Array<AnyType>;
export type ArrayStringType = Array<StringType>;
export type ArrayNumberType = Array<NumberType>;
export type ArrayBooleanType = Array<BooleanType>;
export type NullType = null;
export type KeyboardEventType = KeyboardEvent;
export type InputElementType = HTMLInputElement;

export type CartBtnType = "detail" | "card";

interface CartStoreState {
  isShow: BooleanType;
  cart: Cart | NullType;
  isShowingCart: BooleanType;
  isUpdatingCart: BooleanType;
  isUpdatingCoupon: BooleanType;
  paymentGateways: PaymentGateway[];
}

interface ProductAttributeInput {
  attributeName: StringType;
  attributeValue: StringType;
}

// interface AddToCartInput {
//   clientMutationId?: StringType;
//   extraData?: StringType;
//   productId: NumberType;
//   quantity: NumberType;
//   variation?: ProductAttributeInput[];
//   variationId?: NumberType | NullType | UndefinedType;
// }

interface Customer {
  lastName?: StringType | NullType;
  email?: StringType | NullType;
  firstName?: StringType | NullType;
  username?: StringType | NullType;
  databaseId?: NumberType | NullType;
  sessionToken?: StringType | NullType;
  billing?: Address | NullType;
  shipping?: Address | NullType;
}

interface Address {
  address1?: StringType | NullType;
  address2?: StringType | NullType;
  city?: StringType | NullType;
  country?: StringType | NullType;
  email?: StringType | NullType;
  firstName?: StringType | NullType;
  lastName?: StringType | NullType;
  username?: StringType | NullType;
  phone?: StringType | NullType;
  postcode?: StringType | NullType;
  state?: StringType | NullType;
  company?: StringType | NullType;
}

interface Viewer {
  lastName?: StringType | NullType;
  email?: StringType | NullType;
  databaseId: NumberType;
  id: StringType;
  firstName?: StringType | NullType;
  username?: StringType | NullType;
  nicename?: StringType | NullType;
  wooSessionToken?: StringType | NullType;
}

interface ProductCategory {
  databaseId: NumberType;
  id: StringType;
  slug: StringType;
  name: StringType;
  count: NumberType;
  image?: ProductImage | NullType;
}

interface Attribute {
  value: StringType;
  name: StringType;
}

interface ProductAttribute {
  name: StringType;
  label: StringType;
  options?: Array<StringType> | NullType;
  variation?: BooleanType | NullType;
  visible?: BooleanType | NullType;
}

interface ProductTerm {
  taxonomyName?: StringType | NullType;
  slug?: StringType | NullType;
}

interface Author {
  name?: StringType | NullType;
  avatar?: {url?: StringType | NullType} | NullType;
}

interface Review {
  rating?: NumberType | NullType;
  content?: StringType | NullType;
  id?: StringType | NullType;
  date?: StringType | NullType;
  author?: {node?: Author | NullType} | NullType;
}

interface Reviews {
  averageRating?: NumberType | NullType;
  edges?:
    | Array<{rating?: NumberType | NullType; node?: Review | null}>
    | NullType;
}

interface Product {
  name: StringType;
  databaseId?: NumberType | NullType;
  id?: StringType | NullType;
  slug?: StringType | NullType;
  sku?: StringType | NullType;
  onSale?: BooleanType | NullType;
  type?: ProductTypesEnum | NullType;
  price?: StringType | NullType;
  date?: StringType | NullType;
  regularPrice?: StringType | NullType;
  salePrice?: StringType | NullType;
  stockStatus?: StockStatusEnum | NullType;
  stockQuantity?: NumberType | NullType;
  description: StringType | UndefinedType;
  rawDescription?: StringType | NullType;
  shortDescription: StringType | UndefinedType;
  averageRating?: NumberType | NullType;
  weight?: StringType | NullType;
  length?: StringType | NullType;
  width?: StringType | NullType;
  height?: StringType | NullType;
  reviewCount?: NumberType | NullType;
  rawPrice?: StringType | NullType;
  rawRegularPrice?: StringType | NullType;
  rawSalePrice?: StringType | NullType;
  image?: ProductImage | NullType;
  terms?: {nodes: Array<ProductTerm>} | NullType;
  galleryImages?: Array<{sourceUrl?: StringType | NullType}> | NullType;
  attributes?: {nodes: Array<Attribute>} | NullType;
  productCategories?: {nodes: Array<ProductCategory>} | NullType;
  defaultAttributes?:
    | Array<{
        name?: StringType | NullType;
        attributeId?: NumberType | NullType;
      }>
    | NullType;
  variations?: {nodes: Variation[]} | NullType;
  node?: SimpleProduct | VariableProduct;
  related?: {nodes: Array<Product>} | NullType;
  reviews?: Reviews | NullType;
}

interface SimpleProduct {
  name?: StringType | NullType;
  price?: StringType | NullType;
  regularPrice?: StringType | NullType;
  salePrice?: StringType | NullType;
  stockStatus?: StockStatusEnum | NullType;
  stockQuantity?: NumberType | NullType;
  description?: StringType | NullType;
  shortDescription?: StringType | NullType;
  averageRating?: NumberType | NullType;
  weight?: StringType | NullType;
  length?: StringType | NullType;
  width?: StringType | NullType;
  height?: StringType | NullType;
  reviewCount?: NumberType | NullType;
  rawPrice?: StringType | NullType;
  rawRegularPrice?: StringType | NullType;
  rawSalePrice?: StringType | NullType;
  image?: ProductImage | NullType;
  galleryImages?:
    | {nodes: Array<{sourceUrl?: StringType | NullType}>}
    | NullType;
}

interface VariableProduct {
  name?: StringType | NullType;
  description?: StringType | NullType;
  shortDescription?: StringType | NullType;
  weight?: StringType | NullType;
  length?: StringType | NullType;
  width?: StringType | NullType;
  height?: StringType | NullType;
  averageRating?: NumberType | NullType;
  reviewCount?: NumberType | NullType;
  regularPrice?: StringType | NullType;
  salePrice?: StringType | NullType;
  stockStatus?: StockStatusEnum | NullType;
  totalSales?: NumberType | NullType;
  stockQuantity?: NumberType | NullType;
  rawPrice?: StringType | NullType;
  rawRegularPrice?: StringType | NullType;
  rawSalePrice?: StringType | NullType;
  image?: ProductImage | NullType;
  attributes?: {nodes: Array<ProductAttribute>} | NullType;
  defaultAttributes?: {nodes: Array<Attribute>} | NullType;
  variations?:
    | {
        nodes: Variation[];
      }
    | NullType;
  galleryImages?:
    | {nodes: Array<{sourceUrl?: StringType | NullType}>}
    | NullType;
}

interface Variation {
  name?: StringType | NullType;
  databaseId?: NumberType;
  price?: StringType | NullType;
  regularPrice?: StringType | NullType;
  salePrice?: StringType | NullType;
  slug?: StringType | NullType;
  stockQuantity?: NumberType | NullType;
  stockStatus?: StockStatusEnum | NullType;
  hasAttributes?: BooleanType | NullType;
  image?: ProductImage | NullType;
  attributes?: {nodes: Attribute[]} | NullType;
  node?: SimpleProduct | VariableProduct;
}

interface ProductImage {
  sourceUrl?: StringType | NullType | UndefinedType;
  altText?: StringType | NullType | UndefinedType;
  title?: StringType | NullType | UndefinedType;
}

interface CartItem {
  quantity?: NumberType | NullType;
  key: StringType;
  product?: Product | NullType;
  variation?: {node: Variation} | NullType;
}

interface CartContents {
  itemCount?: NumberType | NullType;
  productCount?: NumberType | NullType;
  nodes?: CartItem[];
}

interface PaymentGateway {
  title?: StringType | NullType;
  id?: StringType | NullType;
}

interface AppliedCoupon {
  description?: StringType | NullType;
  discountTax: StringType;
  discountAmount: StringType;
  code: StringType;
}

interface ShippingMethodRate {
  cost?: StringType | NullType;
  id: StringType;
  label?: StringType | NullType;
}

interface Cart {
  total?: StringType | NullType;
  rawTotal?: StringType | NullType;
  subtotal?: StringType | NullType;
  totalTax?: StringType | NullType;
  discountTotal?: StringType | NullType;
  shippingTotal?: StringType | NullType;
  chosenShippingMethods?: Array<StringType | NullType> | NullType;
  isEmpty?: BooleanType | NullType;
  appliedCoupons?: Array<AppliedCoupon | NullType> | NullType;
  availableShippingMethods?:
    | Array<
        | {
            rates?: Array<ShippingMethodRate | NullType> | NullType;
          }
        | NullType
      >
    | NullType;
  contents?: CartContents | NullType;
}

interface LineItem {
  quantity?: NumberType | NullType;
  total?: StringType | NullType;
  product?: Product | NullType;
  variation?: Variation | NullType;
}

interface Order {
  needsPayment?: BooleanType | NullType;
  needsProcessing?: BooleanType | NullType;
  status?: OrderStatusEnum | NullType;
  databaseId?: NumberType | NullType;
  orderKey?: StringType | NullType;
  subtotal?: StringType | NullType;
  total?: StringType | NullType;
  totalTax?: StringType | NullType;
  shippingTotal?: StringType | NullType;
  paymentMethodTitle?: StringType | NullType;
  paymentMethod?: StringType | NullType;
  date?: StringType | NullType;
  customer?: Customer | NullType;
  lineItems?: {nodes?: LineItem[]} | NullType;
}
interface WooNuxtSEOItem {
  provider: StringType;
  url?: StringType;
  handle?: StringType;
}
