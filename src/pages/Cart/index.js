// src/pages/Cart/Cart.js
import React from 'react';
import { useCart } from '../../contexts/CartContext'; // Importe o contexto
import './style.css';
import IconCart from '../../assets/iconCart2.png'


const Cart = () => {
    const { cart, removeFromCart } = useCart(); // Pegue o carrinho e a função de remover

    // Defina a função handleRemoveItem
    const handleRemoveItem = (index) => {
        removeFromCart(index); // Remove o item usando a função do contexto
    };

    return (
        <section className="cart">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col">
                        {cart.map((item, index) => (
                            <div class="card mb-4 bg-transparent text-white border-dark" >
                                <div class="card-body p-4">

                                    <div class="row align-items-center">
                                        <div class="col-md-2">
                                            <img src={IconCart} class="img-fluid" alt="Generic placeholder image" style={{ width: '7rem' }} />
                                        </div>
                                        <div class="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p class="small text-white mb-4 pb-2">Plan</p>
                                                <p class="lead fw-normal mb-0">{item.name}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 d-flex justify-content-center">
                                        </div>
                                        <div class="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p class="small text-white mb-4 pb-2">Price</p>
                                                <p class="lead fw-normal mb-0">${item.price}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-2 d-flex justify-content-center">
                                        </div>
                                        <div class="col-md-2 d-flex justify-content-center">
                                            <button className="btn btn-dark" onClick={() => handleRemoveItem(index)}>
                                                Remover
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                        <div class="d-flex justify-content-end">
                            <button className="btn btn-success">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;