import React, { useState, useEffect } from 'react';
import './Modal.css';
import { fastFoodItems } from '../../utills/constant/ProductData';

const Modal = ({ modal, setModal, selectedId }) => {
    const singleProduct = fastFoodItems.find(item => item.id === selectedId);
    
    
    const [mainImage, setMainImage] = useState('');

    
    useEffect(() => {
        if (modal && singleProduct) {
            setMainImage(singleProduct.image1);
        }
    }, [modal, singleProduct]);

    
    const filterImage = (image) => {
        setMainImage(image);
    };

    return (
        <>
            {modal && singleProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{singleProduct.name}</h2>
                        <img src={mainImage} />

                        <div className="additional-images">
                            {singleProduct.image2 && (
                                <img
                                    onClick={() => filterImage(singleProduct.image2)}
                                    src={singleProduct.image2}
                                    
                                />
                            )}
                            {singleProduct.image3 && (
                                <img
                                    onClick={() => filterImage(singleProduct.image3)}
                                    src={singleProduct.image3}
                                    
                                />
                            )}
                        </div>

                        <p>{singleProduct.description}</p>
                        <p className='product-price'>Price: {singleProduct.price}</p>
                        <button className='close' onClick={() => setModal(false)}>Close</button>
                        <button>Add To Cart</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;



