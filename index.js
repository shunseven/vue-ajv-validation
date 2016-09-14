/**
 * Created by seven.zhong on 2016/9/5.
 */
import Ajv from 'ajv/dist/ajv.bundle.js'

export const minix = {
    data: function () {
        return {
            validateState: {},
            validateError: {}
        }
    },
    created() {
        const ajv = new Ajv({ allErrors: true });
        const vm = this;
        const option = this.$options.validate;
        if (!option) return;
        const target = option.target;
        const vmTarget = vm.$get(target);
        const labels = option.labels;
        let validator = option.validator;
        const schema = option.schema;

        // schema 优先于 validator
        if (schema) {
            console.log(schema);
            validator = ajv.compile(schema);
        } else {
            if (typeof validator === 'function') {
                validator = validator();
            }
        }

        vm.$validator = validator;

        function setObjectPathValue(object, path, value) {
            const pathAry = path.replace(']', '').replace('[', '.').split('.');
            pathAry.forEach((item, i) => {
                if (pathAry.length - 1 == i) {
                    object[item] = value;
                }
                object = object[item];
            })
        }

        function getObjectPathValue(object, path) {
            const pathAry = path.replace(']', '').replace('[', '.').split('.');
            let value = '';
            pathAry.forEach((item, i) => {
                if (pathAry.length - 1 == i) {
                    value = object[item];
                }
            })
            return value;
        }

        function setValidateValue(itemProp, error) {
            if (error) {
                setObjectPathValue(vm.validateState, itemProp, false);
                setObjectPathValue(vm.validateError, itemProp, error);
            } else {
                setObjectPathValue(vm.validateState, itemProp, true);
                setObjectPathValue(vm.validateError, itemProp, "");
            }

        }

        function initValidateProp(watchExp, prop) {
            Object.keys(watchExp).forEach(function (key) {
                let itemProp = '';
                if (prop) {
                    if (Array.isArray(watchExp)) {
                        itemProp = prop + '[' + key + ']';
                    } else {
                        itemProp = prop + '.' + key
                    }

                } else {
                    itemProp = key;
                }

                if (typeof watchExp[key] == 'object') {
                    return initValidateProp(watchExp[key], itemProp);
                }
                vm.$watch(target + '.' + itemProp, function () {
                    validator(vmTarget);
                    console.log(validator.errors);
                    if (!validator.errors) return setValidateValue(itemProp, '');
                    let hasError = validator.errors.some(error => {
                        if (error.dataPath == `.${itemProp}`) {
                            setValidateValue(itemProp, error.message)
                        }
                        return error.dataPath == `.${itemProp}`;
                    })
                    if (!hasError) {
                        setValidateValue(itemProp, '')
                    }
                })
                vm.$set(`validateState.${itemProp}`, true)
                vm.$set(`validateError.${itemProp}`, '')
            })
        }
        initValidateProp(vmTarget, '');
    }
}

export default function (Vue, options) {
    Vue.minix(minix);
}