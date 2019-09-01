<template>
<div class="container">
    <div class="row">
        <div class="col-5">
            <router-link to="/aboat/orderHistory" tag="li" class="list-unstyled list-group-item">历史订单</router-link>
            <router-link to="/aboat/order" tag="li" class="list-unstyled list-group-item">订单</router-link>
            <router-link to="/aboat/connect" tag="li" class="list-unstyled list-group-item">联系</router-link>
            <router-link to="/aboat/express" tag="li" class="list-unstyled list-group-item">快递</router-link> 
        </div>
        <div class="col-7">
            <router-view/>
        </div>
        
    </div>
</div> 
</template>
