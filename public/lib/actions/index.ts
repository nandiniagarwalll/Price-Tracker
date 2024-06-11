"use server"

import { scarpeAmazonProduct } from "../scraper";
import { connectToDB } from "../mongoose";
import Product from "../models/product.model";

export async function scrapeAndStoreProduct(productUrl:string){
    if(!productUrl) return;

    try{
        connectToDB();
        const scrapedProduct=await scarpeAmazonProduct(productUrl);
        if(!scrapedProduct) return;
        

    }catch(error:any){
        throw new Error('Failed to create/update product:${error.message')
    }

}