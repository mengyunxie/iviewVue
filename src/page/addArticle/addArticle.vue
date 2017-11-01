<template>
    <div class="page">
        <div class="article-panel">
            <vue-html5-editor :content="content"></vue-html5-editor>
        </div>
        <div class="btnBox">
            <ButtonGroup shape="circle">
                <Button type="ghost" @click="cancle">取消</Button>
                <Button type="ghost" @click="save">保存</Button>
            </ButtonGroup>            
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                content:''        

            }
        },
        components:{
        },
        mounted(){
            this.articleId = this.$route.params.articleId;
            console.log(this.articleId);
        },
        methods: {
            save:function(){
                this.$router.push({ path: 'home/list'})
            },
            cancle:function(){
                this.$router.push({ path: 'home/list'})
            }
        }
    }
</script>
<style scoped>
    .article-panel{
        width:100%;
        margin:0 auto;
    }
    .article-panel .vue-html5-editor{
        border:none 0;
        border-bottom: 1px solid #ddd;
        border-radius: 0px; 
    }
    .btnBox {
        padding-top:1.5rem;
        text-align: center;
    }
</style>