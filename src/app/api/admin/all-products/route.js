import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    // const { searchParams } = new URL(req.url);
    const searchParams = req.nextUrl.searchParams
    let page = searchParams.get("page")
    const pageSize = 8 
    const pageNumber = page || 1
    const countAllproducts = await Product.find({}).countDocuments()
      const extractAllproducts = await Product.find({}).limit(pageSize).skip((pageNumber-1)*pageSize);
    const totalPage = Math.ceil(countAllproducts/pageSize)
      if (extractAllproducts) {
        return NextResponse.json({
          success: true,
          data: extractAllproducts,
          totalPage:totalPage
        });
      } else {
        return NextResponse.json({
          success: false,
          status: 204,
          message: "No Products found",
        });
      }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}