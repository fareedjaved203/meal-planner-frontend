import RootLayout from "../../layout";
import BackButton from "../../../components/shared/BackButton";
import UpdateItemForm from "@/components/items/UpdateItemForm";

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
