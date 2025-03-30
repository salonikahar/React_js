import React, { useState, useRef, useEffect, Fragment } from "react";

const ElectricProductList = ({ theme }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("electricProducts");
    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          { id: 1, name: "Laptop", brand: "Apple", price: 1200, stock: 5 },
          { id: 2, name: "Smartphone", brand: "Samsung", price: 800, stock: 10 },
          { id: 3, name: "Headphones", brand: "Sony", price: 150, stock: 20 },
        ];
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: "",
    stock: 1,
  });

  const nameInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("electricProducts", JSON.stringify(products));
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === "price" || name === "stock" ? Math.max(1, Number(value)) : value,
    });
  };

  const addProduct = (event) => {
    event.preventDefault();
    if (!newProduct.name || !newProduct.brand || !newProduct.price || newProduct.stock < 1) return;

    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;

    setProducts([...products, { ...newProduct, id: newId }]);
    setNewProduct({ name: "", brand: "", price: "", stock: 1 });
    nameInputRef.current.focus();
  };

  const increaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: product.stock + 1 } : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: Math.max(1, product.stock - 1) } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: theme === "light" ? "#fff" : "#444",
      color: theme === "light" ? "#333" : "#fff",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center", 
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center elements horizontally
      gap: "10px",
    },
    input: {
      padding: "10px",
      width: "90%", // Center input fields
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
      backgroundColor: theme === "light" ? "#f0f0f0" : "#000000",
    },
    button: {
      padding: "10px",
      width: "90%",
      backgroundColor: theme === "light" ? "#007bff" : "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    productList: {
      marginTop: "20px",
      listStyle: "none",
      padding: "0",
    },
    productItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center", // Center text
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: theme === "light" ? "#f5f5f5" : "#555",
      marginBottom: "5px",
    },
    quantityButtons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center", // Center quantity buttons
      gap: "5px",
    },
    qtyBtn: {
      padding: "5px 10px",
      fontSize: "14px",
      cursor: "pointer",
      backgroundColor: theme === "light" ? "#555" : "#f0f0f0",
      color: theme === "light" ? "#f0f0f0" : "#333",
      borderRadius: "5px",
    },
    deleteButton: {
      backgroundColor: "red",
      color: "#fff",
      border: "none",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    pageWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width : "100vw",
    },
  };

  return (
    <Fragment>
      <div style={styles.pageWrapper}></div>
      <div style={styles.container}>
        <h2>Electric Products</h2>

        {/* Add Product Form */}
        <form onSubmit={addProduct} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}
            ref={nameInputRef}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={newProduct.brand}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            value={newProduct.price}
            onChange={handleInputChange}
            min="1"
            required
            style={styles.input}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={newProduct.stock}
            onChange={handleInputChange}
            min="1"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Add Product
          </button>
        </form>

        {/* Product List */}
        <ul style={styles.productList}>
          {products.map((product) => (
            <li key={product.id} style={styles.productItem}>
              <span>
                {product.name} ({product.brand}) - ${product.price}
              </span>

              {/* Quantity Controls */}
              <div style={styles.quantityButtons}>
                <button onClick={() => decreaseQuantity(product.id)} style={styles.qtyBtn}>
                  ➖
                </button>
                <span>{product.stock}</span>
                <button onClick={() => increaseQuantity(product.id)} style={styles.qtyBtn}>
                  ➕
                </button>
              </div>

              {/* Delete Button */}
              <button onClick={() => deleteProduct(product.id)} style={styles.deleteButton}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ElectricProductList;
