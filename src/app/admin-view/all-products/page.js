import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";



export default async function AdminAllProducts(context) {

  const allAdminProducts = await getAllAdminProducts(parseInt(context.searchParams.page))

  return <CommonListing currentPage={parseInt(context.searchParams.page)} totalPage={allAdminProducts.totalPage} data={allAdminProducts && allAdminProducts.data}/>
}