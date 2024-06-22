/* eslint-disable no-undef */
/**
'feat',     //新特性、新功能
'fix',      //修改bug
'docs',     //文档修改
'style',    //代码格式修改, 注意不是 css 修改
'refactor', //代码重构
'perf',     //优化相关，比如提升性能、体验
'test',     //测试用例修改
'chore',    //其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',   //回滚到上一个版本
'build',    //编译相关的修改，例如发布版本、对项目构建或者依赖的改动
 */

// 参考细则： https://segmentfault.com/a/1190000017790694
// 提交规范细则参考：https://blog.csdn.net/wei371522/article/details/84070803
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'style', 'refactor', 'test', 'revert', 'chore']
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
