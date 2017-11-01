<template>
  <div class="inputBox" :class="{inputBoxActive:isInputActive}">
      <input class="inputSelf form-control"  v-model="inptVal" :placeholder="inptPlaceholder" @input="onInput" @focus="onFocus" @blur="onBlur" v-on:input="updateValue($event.target.value)"></input>
      <label class="inputLabel">{{inptLabel}}</label>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                isInputActive:false,
                inptVal:this.myVal,
                inptPlaceholder:this.placeholderText,
                inptLabel:this.placeholderText
            }
        },
        props: {
            myVal:{
                type:String,
                default:''
            },
            placeholderText:{
                type:String,
                default:''
            }
        },
        methods: {
            onFocus:function(){
                this.isInputActive = true;
                this.inptPlaceholder = '';
            },
            onInput:function(){
                this.isInputActive = true;
                this.inptPlaceholder = '';
            },
            onBlur:function(){
                if(!this.inptVal){
                    this.isInputActive = false;
                    this.inptPlaceholder = this.placeholderText;
                }else{
                    this.isInputActive = true;
                } 
            },
            updateValue: function (value) {
                this.$emit('input', value)
            }
        }
    }
</script>
<style scoped>
.form-control {
    display: block;
    width: 100%;
    height: 36px;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
}
.form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}

.form-control::-moz-placeholder {
    color: #666;
    opacity: 1
}

.form-control:-ms-input-placeholder {
    color: #666
}

.form-control::-webkit-input-placeholder {
    color: #666
}

.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control {
    cursor: not-allowed;
    background-color: #eee;
    opacity: 1
}

.inputBox{
    position:relative;
    width:80%;
    margin:0 auto;
    margin-top:24px;
    margin-bottom:8px;
}
.inputSelf{
    z-index: 2;
    position: relative;
    background: 0;
    -webkit-transition: all .4s ease;
    transition: all .4s ease
}
.inputLabel {
    position: absolute;
    display: none;
    width: 100%;
    left: 0;
    padding: 12px 16px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    font-weight: 500;
    color: #333;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
}
label.inputLabel {
    display:block;
    opacity: 0;
    bottom: 0;
    padding: 12px 16px;
}
.inputBoxActive label.inputLabel{
    display:block;
    opacity: 1;
    bottom: 100%;
    padding: 0 16px;
}
</style>