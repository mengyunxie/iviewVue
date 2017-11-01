<template>
    <div class="page">   
        <div class="conBox">
           <router-view></router-view> 
        </div>   
    </div>
</template>
<script>
//type: 1--随记，2--旅游，3--读书，4--其他，
    export default{
        data(){
            return{
            }

        },
        beforeCreate(){
            console.log("beforeCreate");
        },
        created(){
            console.log("created");
        },
        beforeMount(){
            console.log("beforeMount");
        },
        mounted(){
            
        },
        beforeUpdate(){
            console.log("beforeUpdate");
        },
        updated(){
            console.log("updated");
        },
        beforeDestroy(){
            console.log("beforeDestroy");
        },
        destroyed(){
            console.log("destroyed");
        }
    }
</script>
<style scoped>
.page{  
    position:relative;
    z-index:0;
}
.conBox{
    position:relative;
    z-index:1;
    padding-top:8rem;
}
</style>