import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function WomenAllProducts(context) {
  const getAllProducts = await productByCategory("women",parseInt(context.searchParams.page));

  return <CommonListing currentPage={parseInt(context.searchParams.page)} totalPage={getAllProducts.totalPage} data={getAllProducts && getAllProducts.data} />;
}