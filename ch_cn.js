'use strict';
module.exports = function localize_en(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    console.log(e);
    switch (e.keyword) {
      case '$ref':
        out = '给能引用' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += '不应该超过' + (n) + '项';
        break;
      case 'additionalProperties':
        out = '不允许多余的字段';
        break;
      case 'anyOf':
        out = '数据不符合以下任何一个模式 ';
        break;
      case 'constant':
        out = '应该等于一个常数';
        break;
      case 'custom':
        out = '应该通过关键字"' + (e.keyword) + '" 进行验证';
        break;
      case 'dependencies':
        out = '';
        out += '依赖失败 - 缺少键 ' + e.params.deps + ' (来自键: ' + e.params.property + ')'
        break;
      case 'enum':
        out = '应该等于一个预先确定的值';
        break;
      case 'format':
        out = '"' + (e.params.format) + '"' + '格式校验失败';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum 应该是一个布尔值';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMinimum 应该是一个布尔值';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '应该是' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '应该是' + (cond);
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '数值应小于最大值' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += '数组长度太长，, 最大长度' + (n);
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += '字符串太长 , 最多' + (n) + ' 个';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += '字段数过多，最多 ' + (n) + ' 个';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += '数值应大于最小值 ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += '数组长度太短, 最小长度' + (n);
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += '字符串太短 , 至少 ' + (n) + ' 个';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += '字段数过少 , 最少' + (n) + ' 个';
        break;
      case 'multipleOf':
        out = '数值 不是 ' + e.params.multipleOf + ' 的倍数 ';
        break;
      case 'not':
        out = '数据不应匹配以下模式 ("not")';
        break;
      case 'oneOf':
        out = '数据不符合以下任何一个模式 ("oneOf")'
        break;
      case 'pattern':
        out = '字符串不匹配模式"' + (e.params.pattern) + '"';
        break;
      case 'patternGroups':
        out = '';
        var n = e.params.limit;
        out += 'should have ' + (e.params.reason) + ' ' + (n) + ' propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        out += ' matching pattern "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'should have property matching pattern "' + (e.params.missingPattern) + '"';
        break;
      case 'required':
        out = '缺少必要字段 ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'should pass "switch" keyword validation, case ' + (e.params.caseIndex) + ' fails';
        break;
      case 'type':
        out = '请输入';
        switch (e.params.type) {
          case 'number':
            out += '数字';
            break;
          case 'number':
            out += '字符串';
            break;
          case 'object':
            out += '对象';
            break;
          case 'array':
            out += '数组'
            break;
          case 'boolean':
            out += '布尔值'
            break;
          default:
            out += e.params.type
        }
        break;
      case 'uniqueItems':
        out = 'should not have duplicate items (items ## ' + (e.params.j) + ' and ' + (e.params.i) + ' are identical)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
  return errors;
};
