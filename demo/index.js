import Vue from 'vue';
import Validation from '../index';

new Vue({
    mixins:[Validation],
    validate:{
        schema:{
            properties:{
                name:{
                    type:'number'
                }
            }
        },
        target:"user"
    },
    el: '#app',
    data: {
        user: {
            name:'33'
        }
    }
})