import "../admin/AdminPage.css"
import Header from "../header/Header";
import { baseApi } from "../../utils/constants";
import { useCallback, useState, useEffect } from "react";

const AdminPage = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = useCallback(() => {
        fetch(baseApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => setProducts(data))
    }, [])

    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);

    const deleteData = async (id) => {
        const url = `${baseApi}/delete?id=${id}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete data');
            }

            console.log('Data successfully deleted');
            getAllProducts();
        } catch (error) {
            console.error('Error!');
        }
    };

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        specs: "",
        price: 0,
        imgPath: "",
        available: true
    });

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitProduct = () => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        };
    
        fetch("http://localhost:8080/api/v1/smartphone/addSmartphone", requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
          })
          .then((data) => {
            alert('Operation succesful!');
            getAllProducts();
          })
          .catch(() => {
            alert('Something went wrong!')
          });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitProduct();
        toggleModal();
    };

    const toggleUpdate = (product) => {
        setFormData(product);
        toggleModal()
    }

    return (
        <div>
            <div>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={toggleModal}>&times;</span>
                            <h2>Submit Data</h2>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    Brand:
                                    <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
                                </label>
                                <label>
                                    Image link:
                                    <input type="text" name="imgPath" value={formData.imgPath} onChange={handleChange} />
                                </label>
                                <label>
                                    Availability:
                                    <input type="text" name="available" value={formData.available} onChange={handleChange} />
                                </label>
                                <label>
                                    Model:
                                    <input type="text" name="model" value={formData.model} onChange={handleChange} />
                                </label>
                                <label>
                                    Specs:
                                    <input type="text" name="specs" value={formData.specs} onChange={handleChange} />
                                </label>
                                <label>
                                    Price:
                                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            {!showModal &&
                <div>
                    <Header cart={[]} />
                    <button className="btn" onClick={() => toggleUpdate({})}>Add product</button>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Brand</th>
                                <th>Availability</th>
                                <th>Model</th>
                                <th>Specs</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map((product) => {
                                return <tr>
                                    <td>{product.id}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.available ? "Yes" : "No"}</td>
                                    <td>{product.model}</td>
                                    <td>{product.specs}</td>
                                    <td>{product.price}</td>
                                    <td><button className="btn" onClick={() => toggleUpdate(product)}>Update</button></td>
                                    <td><button className="btn outline-red" onClick={() => deleteData(product.id)}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>}
        </div>
    )
}

export default AdminPage;