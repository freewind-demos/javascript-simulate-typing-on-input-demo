JavaScript Simulate Typing on Input Demo
=========================================

我一直有一个疑问：在页面上我们是否可以使用发送Keyboard event的方式，来模拟用户输入，进行一些自动化操作？

比如，让javascript在某个input以键盘事件而非直接修改值的方式，给它输入一些内容？

答案是不可以。

我们可以模拟发送Keyboard event（比如`keydown`），甚至可以触发相应的listener，但是，无法同时让event中的字符出现在input中。

这个行为并没有找到非常明确显眼的定义，最后在 https://stackoverflow.com/a/50219991/342235 里看到提到了一个 mozilla 的文档，
里面在不显眼的地方有说明：

> Note: Manually firing an event does not generate the default action associated with that event. 
> For example, manually firing a key event does not cause that letter to appear in a focused text input. 
> In the case of UI events, this is important for security reasons, as it prevents scripts from simulating 
> user actions that interact with the browser itself.

因为安全原因，对于这些模拟事件，只会触发listener，但不会真的模拟用户输入。

算是解答了我一个长远的疑惑：为什么各种e2e测试框架都需要从外层调用浏览器以绕开其安全限制？原来不这么做，连最基本的typing都实现不了。

注：还在哪里看到说，对于浏览器原生事件，它们触发listener时是异步的；而对于模拟出来的事件，它们是同步的，也就是会马上触发listener，
直到执行完成后，才会继续执行后面的代码。

```
npm i
npm run demo
```
