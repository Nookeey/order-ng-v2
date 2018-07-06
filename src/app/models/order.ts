export class Order {
  _id?: { $oid: string };
  customer: string;
  price: string;
  dinner: string;
  isPay: boolean;
  status: boolean;
}
