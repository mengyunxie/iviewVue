<template>
    <div class="page">
        <head-top :myName="userName"></head-top>
        <div class="article-panel">
            <Timeline>
                <TimelineItem color="#6dd2c9" v-for="item in articleList">
                    <Icon type="ios-videocam-outline" slot="dot" v-if="item.type=='1'"></Icon>
                    <Icon type="plane" slot="dot" v-if="item.type=='2'"></Icon>
                    <Icon type="ios-book-outline" slot="dot" v-if="item.type=='3'"></Icon>
                    <Icon type="ios-pricetag-outline" slot="dot" v-if="item.type=='4'"></Icon>
                    <router-link :to='{path: "/article", query: {id: item.articleId}}'>
                        <p  class="article-con">{{item.name}}</p>
                    </router-link>
                    <p class="article-info">{{item.time}}</p>
                </TimelineItem>
            </Timeline>
        </div>
    </div>
</template>
<script>
import headTop from '../../components/headtop/headtop';
//type: 1--随记，2--旅游，3--读书，4--其他，
    export default{
        data(){
            return{
                articleList:[],
                value:20,
                userName:"Melin",
                open: false,
                value3: ''
            }

        },
        components:{
            headTop
        },
        beforeCreate(){
            console.log("beforeCreate");
        },
        created(){
            console.log("created");
        },
        beforeMount(){
            console.log(this.$route.query);
            if(this.$route.query.nameVal){
                this.userName = this.$route.query.nameVal;
            }
            
        },
        mounted(){
            let that = this;
            that.$axios.get('data/list.json', {
                params: {
                  ID: 12345
                }
              })
              .then(function (response) {
                if(response.status==200){
                    that.articleList = response.data;
                }
                
              })
              .catch(function (error) {
                    that.$Message.info({
                        content: error,
                        duration: 3
                    });
              });
            
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
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (date) {
                this.value3 = date;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            }
        }
    }
</script>
<style scoped>
.page{

}
.article-panel{
    width:84%;
    margin:0 auto;
    padding:10px 0px 0px 0px;
}
.article-con{
    color:#666;
    font-size: 16px;
}
.article-info{
    color:#999;
    font-size: 12px;
}
.article-panel .ivu-timeline-item-head-custom{
    margin-top:8px;
}
.calendarBox{
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
.article-panel .ivu-timeline-item-head{
    background-color: #fafafa;
}
</style>