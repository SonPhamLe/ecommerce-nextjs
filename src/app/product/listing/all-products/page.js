import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";

export default async function AllProducts(context) {
  const getAllProducts = await getAllAdminProducts(parseInt(context.searchParams.page));
  return <CommonListing currentPage={parseInt(context.searchParams.page)} totalPage={getAllProducts.totalPage}  data={getAllProducts && getAllProducts.data} />;
}