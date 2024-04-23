import RootLayout from "../../layout";
import BackButton from "../../../components/shared/BackButton";
import UpdateItemForm from "@/components/items/updateItemForm";

const ItemsId = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <BackButton />
        <UpdateItemForm/>
      </>
    </RootLayout>
  );
};

export default ItemsId;
