import { getUserInfo } from "../localStorage"

const Header ={
    render:()=>{
        const {name, isAdmin} = getUserInfo()
        return ` <div class="brand"><a href="/#/">Cento <span> Ecommerce</span></a></div>
        ${name
              ? `<a href="/#/profile">${name}</a>`
              : `<a href="/#/signin">Sign-In</a>`
          }    
        <div><a href="/#/cart">Cart</a>
        ${isAdmin ? `<a href="/#/dashboard">Dashboard</a>` : ''}
        </div>`
        
 
   
    },
    after_render:()=>{}
}
export default Header;