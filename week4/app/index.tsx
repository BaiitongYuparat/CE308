import { CenteredView } from "./component/CenteredView";
import { ItemList } from "./component/ItemList";
import type { Item } from "./component/ItemList";
import "./global.css";

export default function Index() {

  const item: Item[] = [
  { id: "1", productname: "Banana", price: 2000, pcs: 10, btnSize: "sm", btnColor: "primary" },
  { id: "2", productname: "Mango",  price: 2000, pcs: 10, btnSize: "md", btnColor: "secondary" },
  { id: "3", productname: "Apple",  price: 2000, pcs: 10, btnSize: "lg", btnColor: "danger" },
];


  return (
    <CenteredView>
      <ItemList items={item} />
    </CenteredView>
  );
}

