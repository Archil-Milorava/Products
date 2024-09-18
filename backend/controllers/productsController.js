import { Product } from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      result: products.length,
      products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
export const getProduct = async (req, res) => {
  try {
    const singleProduct = await Product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      product: singleProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      status: "success",
      products: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      product: updateProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("product deleted successfully");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
