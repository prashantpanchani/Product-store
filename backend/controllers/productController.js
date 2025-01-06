import Product from '../models/product.model.js';
import mongoose from 'mongoose';
export const getProducts = async(req,res)=>{
    try {
     const products = await Product.find({});
     res.status(200).json({succes : true , data : products})
    } catch (error) {
     console.log("error :",error.message)
     res.status(500).json({succes : false , message : "server error"})
    } 
 }

 export const createProduct = async(req,res)=>{
    const product = req.body; //data sent by user
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success : false , message: "please provide all fields"})
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(200).json({success:true,data:newProduct})
    } catch (error) {
        console.error("Error in Create : " , error.message)
        res.status(500).json({ success : false ,message : "server Error" })
    }
}

export const updateProduct = async(req,res)=>{
    const { id } = req.params
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success : false , message : "Invalid product id"  })
    }
    try {
       const updateProduct = await Product.findByIdAndUpdate(id,product,{new:true});
       res.status(200).json({success:true , data : updateProduct})
    } catch (error) {
        console.error("Error : ",error.message)
        res.status(500).json({success : false , message : "server error"})
    }
}
export const deleteProduct = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success : false , message : "Invalid product id"  })
    }
try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({success : true,message :"Product Deleted"})
} catch (error) {
    console.error("error :",error.message)
    res.status(500).json({success : false,message : " server error"})
}
}