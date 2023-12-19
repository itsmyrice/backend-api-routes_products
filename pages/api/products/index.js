import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
    const allProducts = getAllProducts();
    console.log("Request to /api/products")
    response.status(200).json(allProducts)
}