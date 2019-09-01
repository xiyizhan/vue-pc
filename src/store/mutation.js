let getAdminData=(state,obj)=>{
    state.stateData.adminData=obj;
}
let getShopcarData=(state,obj)=>{
    state.stateData.shopCarData=obj;
}
let getshopCarTotalMoney=(state,shopCarTotalMoney)=>{
    state.stateData.shopCarTotalMoney=shopCarTotalMoney;
}
let getLoginName=(state,loginName)=>{
    state.stateData.loginName=loginName;
}
export default{
    getAdminData,
    getShopcarData,
    getshopCarTotalMoney,
    getLoginName
}