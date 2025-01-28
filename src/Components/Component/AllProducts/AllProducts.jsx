import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";

const AllProducts = () => {
    const [allproducts, setAllProducts]= useState([])
    // const {data: allproducts, isLoading,refetch} = useQuery({
    //     queryKey:['allproducts'],
    //     queryFn: async () =>{
    //       const {data} = await axios.fetch('/Products.json')
    //       return data
    //     }
    // })
    fetch('/public/Products.json')
    .then(res=> res.json())
    .then(data => {
        setAllProducts(data)

    })
    return (
        <div className=" container px-2 mx-auto">
            <h1 className=" my-10 text-4xl text-center border-b-2 rounded-4xl md:w-5/12 lg:w-3/12 uppercase border-[#FC8934] mx-auto">ALl Products</h1>
            <div className="grid mx-auto grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 ">
                {
                    allproducts.map(product => <Card key={product._id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default AllProducts;