/**
 * Created by seven.zhong on 2016/9/5.
 */
import Ajv from 'ajv/dist/ajv.bundle.js'
import localize from './ch_cn.js';
class ValidateCrtl {
    constructor(validates) {
        this.validates = validates;
        this.vms = {};
        this.targets = Object.keys(validates);
        this.validators = {};
        //init
    }
    getVms(vm) {
        this.targets.forEach(key => {
            this.vms[key] = vm.$get(key);
        })
    }
    setValidators(fn) {
        this.targets.forEach(item => {
            let validate = this.validates[item];
            let schema = validate.schema;
            let validator = validate.validator;
            if (schema) {
                this.validators[item] = fn(schema);
            } else {
                if (typeof validator === 'function') {
                    this.validators[item] = validator();
                }
            }
        })
    }
}


let mixin = {
    data() {
        return {
            validateState: {},
            validateError: {}
        }
    },
    created() {
        const ajv = new Ajv({ allErrors: true });
        const vm = this;
        const validates = this.$options.validate;
        if (!validates) return;
        const validateCrtl = new ValidateCrtl(validates);
        validateCrtl.getVms(vm);
        validateCrtl.setValidators(ajv.compile);

        // validateCrtl.targets.forEach(target => {
        //     vm.$set(`validateState.${target}`, {});
        //     vm.$set(`validateError.${target}`, {});
        // });

        function setObjectPathValue(obj, path, value) {
            console.log(value);
            let pathAry = path.replace(']', '').replace('[', '.').split('.');
            pathAry = pathAry.filter(item => item);
            pathAry.forEach((item, i) => {
                if (pathAry.length - 1 == i) {
                    obj[item] = value;
                }
                obj = obj[item];
            })
        }


        // function getObjectPathValue(object, path) {
        //     const pathAry = path.replace(']', '').replace('[', '.').split('.');
        //     let value = '';
        //     pathAry.forEach((item, i) => {
        //         if (pathAry.length - 1 == i) {
        //             value = object[item];
        //         }
        //     });
        //     return value;
        // }

        function setValidateValue(itemProp, target, error) {

            if (error) {
                setObjectPathValue(vm.validateState[target], itemProp, false);
                setObjectPathValue(vm.validateError[target], itemProp, error);
            } else {
                setObjectPathValue(vm.validateState[target], itemProp, true);
                setObjectPathValue(vm.validateError[target], itemProp, "");
            }

        }

        function addProp(pre, next) {
            if (next.split('')[0] == '[') {
                return pre + next;
            }

            return pre + '.' + next;
        }

        function initValidateProp(watchExp, target, prop) {
            let validator = validateCrtl.validators[target];
            let vmTarget = validateCrtl.vms[target];
            Object.keys(watchExp).forEach(function (key) {
                let itemProp = '';
                if (prop) {
                    if (Array.isArray(watchExp)) {
                        itemProp = prop + '[' + key + ']';
                    } else {

                        itemProp = prop + '.' + key
                    }

                } else {
                    itemProp = Array.isArray(watchExp) ? `[${key}]` : key;
                }
                if (typeof watchExp[key] == 'object') {
                    return initValidateProp(watchExp[key], target, itemProp);
                }
                vm.$watch(addProp(target, itemProp), function () {
                    validator(vmTarget);
                    
                    let errors= localize(validator.errors) ;
                    console.log('errors',localize);
                    if (!validator.errors) return setValidateValue(itemProp, target, '');
                    let hasError =errors.some(error => {
                        if (error.dataPath == addProp('', itemProp)) {
                            setValidateValue(itemProp, target, error.message);
                        }
                        return error.dataPath == addProp('', itemProp);
                    });
                    if (!hasError) {
                        setValidateValue(itemProp, target, '')
                    }
                });
                console.log(addProp(target, itemProp))
                vm.$set(`validateState.${addProp(target, itemProp)}`, true);
                vm.$set(`validateError.${addProp(target, itemProp)}`, '');

            })
        }
        Object.keys(validateCrtl.vms).forEach(target => {
            console.log();
            initValidateProp(validateCrtl.vms[target], target, '');
        })

    }
}

function install(Vue) {
    Vue.mixins(mixin);

}

export default {
    mixin,
    install
}