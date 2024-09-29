import React, { useState } from 'react';
import { fastFoodItems } from '../utills/constant/ProductData';
import Modal from '../common/modal/Modal';
import './card.css';

const Card = () => {
    const [modal, setModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleOpenModal = (id) => {
        setSelectedId(id);
        setModal(true);
    };

    return (
        <div className='card-wrapper'>
            {fastFoodItems.map((item, index) => (
                <div className="product-card" key={index}>
                    <img src={item.image1} alt={item.name} className="product-image" />
                    <h2 className="product-name">{item.name}</h2>
                    <p className="product-price">Price:{item.price}</p>
                    <p className="product-description">{item.description}</p>
                    <button onClick={() => handleOpenModal(item.id)} className="product-detail">View Detail</button>
                </div>
            ))}
            <Modal modal={modal} setModal={setModal} selectedId={selectedId} />
        </div>
    );
};

export default Card;
