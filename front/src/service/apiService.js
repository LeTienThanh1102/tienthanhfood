import axios  from "../util/axiosCustomize";

const registerUser=(email, password, username, address)=>{
    return axios.post('api/v1/auth/register',{email, password,username, address});
}

const postLoginUser=(email, password)=>{
    return axios.post('api/v1/auth/login',{email, password});
}

const getUserbyId=(id)=>{
    return axios.get('api/v1/auth/user/'+id);
}
const updateAccountUser=(id, user)=>{
    return axios.put('api/v1/auth/user/update/'+id, user);
}

const postProduct=(product)=>{
    return axios.post('api/v1/product',product);
}

const getProduct=()=>{
    return axios.get('api/v1/product');
}
const getAllCategory=()=>{
    return axios.get('api/v1/category');
}
const getProductbyId=(id)=>{
    return axios.get('api/v1/product/'+id); 
}

const getProductbyCategory=(categoryId)=>{
    return axios.get(`api/v1/product/category/${categoryId}`);
}
const getTopSale=()=>{
    return axios.get('api/v1/product/top/name')
}
const getProductAddMore=(index)=>{
    return axios.get(`api/v1/product/more/sp?index=${index}`);
}


const addToCart=(userId,productId, quantity)=>{
    return axios.post('api/v1/cart/add',{userId,productId,quantity});
}
const getProductCart=(id)=>{
    return axios.get('api/v1/cart/'+id);
}
const removeProductToCart=(userId, productId)=>{
    return axios.delete('api/v1/cart/remove/'+userId, { data: {productId } });
}

const orderProduct=(userId, productId, quantity,price,total,address)=>{
    return axios.post('api/v1/order', {userId, productId, quantity,price,total,address})
}

const getOrderbyUser=(id)=>{
    return axios.get('api/v1/order/user/'+id);
}
export {registerUser,postLoginUser, getUserbyId,updateAccountUser,postProduct,getProduct,getAllCategory,getProductbyId,
    getProductbyCategory,getTopSale,getProductAddMore,addToCart,getProductCart,removeProductToCart,orderProduct,
    getOrderbyUser
}