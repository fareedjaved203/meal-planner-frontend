import RootLayout from "../../layout";
import BackButton from "../../../components/shared/BackButton";
import UpdateItemForm from "@/components/items/UpdateItemForm";
import getSingleItem from "@/lib/getSingleItem";

const ItemsId = async (props) => {
  const params = props.params;
  const data = await getSingleItem(params.id);
  return (
    <RootLayout showNavbar={true}>
      <>
        <BackButton />
        <UpdateItemForm itemData={data} />
      </>
    </RootLayout>
  );
};

export default ItemsId;
