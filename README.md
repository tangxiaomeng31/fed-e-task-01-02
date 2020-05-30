# fed-e-task-01-02
前端学习阶段一模块2

# 简答题
## 1.描述引用计数原理的工作原理和优缺点
工作原理：当创建一个对象的实例并在堆上申请内存时，对象的引用次数就为1，在其他对象中需要持有这个对象时，就将其的引用计数加1，需要释放一个对象时，就将这个对象的引用计数减1，直到引用计数为0，则内存就会立即释放这个对象内存。

优点：
- 发现垃圾时会立即回收
- 由于内存快爆满的情况下会去立即寻找引用计数为0的内存并且立即释放，所以最大程度的减少了程序的暂停

缺点：
- 无法回收循环利用的对象
- 开销时间大

## 2.描述标记整理算法的工作流程
标记整理先遍历所有对象找到活动对象，清除没有标记的对象之前先对内存进行整理，整理之后再对非活动对象进行清除。

## 3.描述V8中新生代存储区垃圾回收的流程
- 新生代区域一分为二，每个16M，一个使用，一个空闲
- 开始垃圾回收的时候，会检查FROM区域中的存活对象，如果还活着，拷贝到TO空间，所有存活对象拷贝完后，清空(释放)FROM区域
- 然后FROM和To区域互换

## 4.描述增量标记算法在何时使用，以及工作原理
在垃圾回收的过程中执行了GC算法，但是在回收过程中程序会被暂停，这样给用户的体验并不是很好，于是出现了增量标记算法，他的作用是不会等GC全部执行完之后才能执行程序，而是穿插着执行，执行一部分程序再执行一部分垃圾回收，极大降低了GC的最大暂停时间。

# 代码题1
练习1：`let isLastInstock = fp.flowRight(fp.prop('in_stock'), fp.last)`

练习2：`let firstName = fp.flowRight(fp.prop('name'), fp.first)`

练习3：`let averageDollarValue2 = fp.flowRight(_average, fp.map((cars) => cars.dollar_value))`

练习4：`let sanitizeNames = fp.flowRight(_underscore, fp.toLower)`

# 代码题2
练习1：`let ex1 = maybe.map(fp.map(item => fp.add(item, 1)))`

练习2：`let ex2 = xs.map(fp.first)`

练习3：`let ex3 = safeProp('name', user).map(fp.first)`

练习4：`let ex4 = n => Maybe.of(n).map(parseInt)`
