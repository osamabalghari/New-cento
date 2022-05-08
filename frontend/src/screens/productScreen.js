import { getProduct } from "../api";
import { parseRequesturl } from "../utils";
import rating from "../component/rating";



const productScreen = {
    after_render: ()=>{
        const request = parseRequesturl();
        document.getElementById('primary').addEventListener('click', ()=>{
            document.location.hash = `/cart/${request.id}`
        });
    },
 render: async () => {
    const request = parseRequesturl();
    const product = await getProduct(request.id);
    if (product.error) {
        return `<div>${product.error}</div>`
    }
    return `
    <div class="content">
               <div class="back-to-result">
                   <a href="/#/">Back to Result</a>
               </div>
               <div class="details">
                   <div class="details-image">
                       <img src="${product.image}" alt="${product.name}">
                   </div>
                   <div class="details-info">
                       <ul>
                           <li>
                               <h1>${product.name}</h1>
                           </li>
                           <li>
                            ${rating.render({value: product.rating, text:`${product.numReviews} reviews`})}
                           </li>
                           <li>
                           price: <strong>$${product.price}</strong>
                       </li>
                       <li>
                           Description:
                           <div>
                               ${product.description}
                           </div>
                       </li>
                       </ul>
                   </div>
                   <div class="details-action">
       <ul>
         
           <li>
            price: $${product.price}
           </li>
           <li>
               Status: ${product.countinstock > 0 ? ` <span class="success">Instock</span>`:
               `<span class="error">Unavailable</span>`}
           </li>
           <li>
               <button class="fw primary" id="primary">Add to Cart</button>
           </li>
       </ul>
   </div>
            `
    
}
}
export default productScreen;