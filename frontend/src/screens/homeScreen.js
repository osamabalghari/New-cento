import axios from 'axios';
import rating from '../component/rating';
import { hideLoading, showLoading } from '../utils';
const homeScreen = {
    render: async ()=>{
        showLoading();
        const response = await axios({
            
            url: 'http://localhost:5000/api/products',
            headers:{
                'Content-Type': 'application/json',
            },
        });
       hideLoading();
        if (!response || response.statusText !== 'OK') {
            return `<div>There is an Error Loading This page</div>`
        }
        const products = response.data;
        return `
        <ul class="products">
        ${products.map(product=>`
        <li>
            <div class="product">
                <a href="/#/product/${product._id}">
                 <img src=${product.image} alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
                    ${product.name}
                    </a>

                </div>
                <div class="product-rating">
                ${rating.render({value: product.rating, text:`${product.numReviews} reviews`})}
                </div>
                <div class="price-brand">
                ${product.brand}
                </div>
                <div class="product-price">
                ${product.price}
                </div>
                
            </div>
        </li>
        `

        ).join('')}
        `
    }
}
export default homeScreen;