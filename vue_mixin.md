# 配合 Vue 使用
Obj-Validation 提供了一个 mixin 模块让 Vue 的 component 可以很方便的使用它。Vue 组件可在组件 option 中声明 **validate** 项来配置 mixin 模块的行为。在 Vue 的组件代码中，也可以直接调用验证器实例的方法来完成数据验证。另外，mxin 模块声明了 **validateError** 和 **validateState** 这两个数据对象用于保存验证错误消息和验证状态，它们可以很方便的引用以及在组件模板中绑定显示。

```javascript
import ObjValidation from  'obj-validation'

new Vue({
  el: '#ObjValidationDemo',
  mixins: [ObjValidation.vueMixin],
  validate: {
    // 验证规则
    rules: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Product",
        "description": "A product from Acme's catalog",
        "type": "object",
        "properties": {
            "id": {
                "description": "The unique identifier for a product",
                "type": "integer"
            },
            "name": {
                "description": "Name of the product",
                "type": "string"
            },
            "price": {
                "type": "number",
                "minimum": 0,
                "exclusiveMinimum": true
            }
        },
        "required": ["id", "name", "price"]
    },
    // 要验证的对象，可以通过 vm.$get('user') 获取
    target: 'user',
    // 可选项，只监听 target 的指定成员
  },
  data: {
    user: {
      name: '',
      age: 1
    }
  },
  computed: {
    isInvalid () {
      let state = this.validateState
      return Object.keys(state).some(function (prop) {
        return state[prop] === false
      })
    }
  },
  methods: {
    submit: () {
      this.$validator.validate(function (isValid){
        if(isValid) {
          // submit form
        }
      })
    }
})
```

```html
<div id="ObjValidationDemo">
  <form id="validateForm" v-cloak @submit.prevent="submit">
    <p>
      <label for="name">Name</label>
      <input type="text" v-model="user.name">
      <span class="help-block">{{ validateError.name }}</span>
    </p>
    <p>
      <label for="name">Age</label>
      <input type="text" v-model="user.age">
      <span class="help-block">{{ validateError.age }}</span>
    </p>
    <p>
      <button :disabled="isInValid">Submit</button>
    </p>
  </form>
</div>
```

