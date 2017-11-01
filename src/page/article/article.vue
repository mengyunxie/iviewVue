<template>
    <div class="page">
        <h1 class="page__title">Article2</h1>
        <article class="articleBox">
            <section>
                <section>
                    <h3>1.1 节标题</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </section>
                <section>
                    <h3>1.2 节标题</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </section>
            </section>
        </article>
        <div class="editBox" @click="editArticle">
            <Icon type="edit" size="18" color="#fff" ></Icon>
        </div>        
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{
        },
        mounted(){
            this.articleId = this.$route.query.id;
            console.log(this.articleId);
        },
        methods:{
            editArticle:function(){
                this.$router.push({ path: '/addArticle'});
            }
        }
    }
</script>
<style scoped>
.page__title{
    text-align: center;
}
.editBox{
    position:fixed;
    width:32px;
    height:32px;
    text-align:center;
    line-height:36px;
    border-radius:16px;
    background-color:#6dd2c9;
    bottom:10px;
    right:10px;
}
.articleBox{
    width:90%;
    margin:0 auto;
    text-align: left;
}
</style>