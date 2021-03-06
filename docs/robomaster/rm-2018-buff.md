---
id: rm-2018-buff
title: RoboMaster2018能量机关
sidebar_label: RM2018能量机关
---
## 前言
从17年到18年RM的能量机关都是对手写数字进行识别，18年参赛的时候刚刚入门，只能仰望各路大神成功击打能量机关，虽然比赛已经结束，下一年规则也已经没有这个需要了，但是自己还是想将之前没有实现的遗憾给完成。

## 目标分析
具体的能量机关规则不做赘述，简单来说就需要按一定的顺序在九宫格中成功识别到5个不同的手写数字，具体样式如下图

![](https://raw.githubusercontent.com/rcxxx/my-img/main/img/screenshot/rm-2018-buff.jpg)

上方横向排列的5个数字我们称为数码管数字，也就是我们需要获取的识别顺序的列表

下方的九宫格中就是需要按列表匹配的手写数字

左右两侧为表示正确击打数量的状态灯，五个全亮起时即为激活成功

## 基本思路
1. 获取顺序列表
   - 即横向排列的数码管数字列表，获取后存放在数组中
2. 获取状态灯数量
   - 即两侧的状态灯，根据数量确定匹配数组的下标
3. 手写数字配对
   - 九个格子中的数字标签依次与相应位置元素配对，成功后计算返回世界坐标

## 准备工作
### 物资清单
- 一份模拟显示的代码
- 一块超大的显示器
	- 如果没有显示器，将代码的模拟显示输出为视频格式即可
### 系统版本等
| 名称     | 版本           |
|----------|----------------|
| 操作系统 | Ubuntu18.04LTS |
| 语言     | C++、Python     |
| OpenCV   | 4.1.0          |
| Qt       | 5.12           |

## 代码实现

### 获取识别的顺序列表
首先要获取识别的顺序列表，也就是要提取数码管中的数字，这里有两种方案

1. 一种是将数码管中的数字二值化之后，分割出每一个数字所在的区域，因为数码管数字是规则的，可以将每一个数字等分为四个区域，计算每个区域中的分量，就可以得出数码管中的数字
2. 另一种是分割出数字所在区域后也放到模型中去推理，但是本身手写数字识别也需要模型推理，这样一来二去速率上说不定不会达标，故选择了第一种方案

### 获取状态灯数量


### 手写数字配对
获取了识别顺序之后，就需要按照顺序在九宫格中找出对应的手写数字，这些手写数字都是来自于MNIST数据集，只需要使用该数据集训练一个手写数字的模型，就可以识别出对应的数字