import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext'; // Importe o contexto
import './style.css';
import IconCart from '../../assets/iconCart2.png';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart(); // Pegue o carrinho e a função de remover
    const [showModal, setShowModal] = useState(false); // Estado para controlar o modal
    const [orderNumber, setOrderNumber] = useState(null); // Número do pedido
    const navigate = useNavigate(); // Hook para navegação

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2); // Soma dos preços
    };

    // Função para gerar número aleatório para o pedido
    const generateOrderNumber = () => {
        return Math.floor(Math.random() * 1000000); // Gera um número aleatório de 6 dígitos
    };

    const handleFinalizeOrder = () => {
        const orderNum = generateOrderNumber(); // Gera o número do pedido
        setOrderNumber(orderNum); // Define o número do pedido
        setShowModal(true); // Exibe o modal
    };

    // Defina a função handleRemoveItem
    const handleRemoveItem = (index) => {
        removeFromCart(index); // Remove o item usando a função do contexto
    };

    const handleCloseModal = () => {
        setShowModal(false); // Fecha o modal
    };

    const handleCloseAndClearCart = () => {
        clearCart();
        navigate('/');
    };

    return (
        <section className="cart">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        {cart.map((item, index) => (
                            <div className="card mb-4 bg-dark text-white border-dark" key={item.name + index}>
                                <div className="card-body p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                            <img src={IconCart} className="img-fluid" alt="Item" style={{ width: '7rem' }} />
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small text-muted mb-4 pb-2">Plan</p>
                                                <p className="lead fw-normal mb-0">{item.name}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small text-muted mb-4 pb-2">Price</p>
                                                <p className="lead fw-normal mb-0">${item.price}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <button className="btn btn-light" onClick={() => handleRemoveItem(index)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="card mb-5 bg-dark text-white border-dark">
                            <div className="card-body p-4">
                                <div className="float-end">
                                    <p className="mb-0 me-5 d-flex align-items-center">
                                        <span className="small text-muted me-2">Order total:</span>
                                        <span className="lead fw-normal">${calculateTotal()}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-success" onClick={handleFinalizeOrder}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content"  style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(36,201,201,1) 0%, rgba(216,0,228,1) 100%)', color: 'white' }}>
                            <div className='buttonCloseModal'>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <h4>Order Completed!</h4>
                            <p><strong>Order Number:</strong> {orderNumber}</p>
                            <p><strong>Total Value:</strong> ${calculateTotal()}</p>
                            <div className="modal-buttons">
                                <button type='button' className="btn btn-light" onClick={handleCloseAndClearCart}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cart;