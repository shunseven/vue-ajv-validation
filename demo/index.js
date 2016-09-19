import Vue from 'vue';
import validate from '../index';

new Vue({
    mixins:[validate.mixin],
    validate:{
       user:{
            schema:{
            properties:{
                name:{
                    properties:{
                        items:{
                            items:{
                                type:'number'
                            }
                        }
                    }
                },
                age:{
                    type:'number'
                }
            }
        }
       },
       goods:{
           schema:{
               type:'array',
               items:[
                   {
                       properties:{
                       price:{
                           type:'number'
                       },
                       num:{
                           type:'number'
                       }
                   }
                   }
               ]
           }
       }
    },
    el: '#app',
    data: {
        user: {
            name:{
                items:['333']
            },
            age:22
        },
        goods:[
            {
                price:33,
                num:33
            }
        ],
    }
})