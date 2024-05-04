import RootLayout from "../../layout";
import BackButton from "../../../components/shared/BackButton";
import UpdateItemForm from "@/components/items/UpdateItemForm";
import getSingleItem from "@/lib/getSingleItem";
import action from "@/app/actions/action";

const ItemsId = async (props) => {
  const params = props.params;
  const data = await getSingleItem(params.id);
  action("fetchItemData");
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
