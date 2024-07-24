const Category = require("../models/Category");

// Lấy tất cả danh mục
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: "Error getting categories" });
  }
};

// Lấy danh mục theo ID
const getCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json(categorie);
  } catch (error) {
    return res.status(500).json({ message: "Error getting category" });
  }
};

// Tạo danh mục mới
const createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCategory = new Category({
      name,
      description,
    });
    const savedCategory = await newCategory.save();
    return res.status(200).json(savedCategory);
  } catch (error) {
    return res.status(500).json({ message: "Error creating category" });
  }
};

// Xóa danh mục
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting category", error });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
};
