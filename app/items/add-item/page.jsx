import RootLayout from "../../layout";
import BackButton from "../../../components/shared/BackButton";
import AddItemForm from "@/components/items/AddItemForm";

const AddItem = () => {
  return (
    <RootLayout showNavbar={true}>
      <>
        <BackButton />
        <AddItemForm/>
      </>
    </RootLayout>
  );
};

export default AddItem;
