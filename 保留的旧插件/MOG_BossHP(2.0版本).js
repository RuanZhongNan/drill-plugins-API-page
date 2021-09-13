//=============================================================================
// MOG_BossHP.js
//=============================================================================

/*:
 * @plugindesc (v2.0) 敌人 - boss生命固定框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-固定框
 * @desc 固定框的图片资源。
 * @default Boss生命固定框-框
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param 资源-生命条
 * @desc 生命条的图片资源。
 * @default Boss生命固定框-生命条
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param 资源-生命数值
 * @desc 生命数值的图片资源。
 * @default Boss生命固定框-生命数值
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param 生命数值是否显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 生命条是否流动
 * @type boolean
 * @on 流动
 * @off 不流动
 * @desc 生命条从左往右流动。修改时注意资源图片的宽度。
 * true - 流动，false - 不流动
 * @default true
 *
 * @param 流动速度
 * @type number
 * @min 0
 * @desc 如果设置为4，则速度为4像素/帧。
 * （1秒60帧）
 * @default 4
 *  
 * @param 字体大小
 * @type number
 * @min 1
 * @desc boss名的字体大小。
 * @default 18
 * 
 * @param 平移-固定框 X
 * @desc x轴方向平移，单位像素。0表示贴在最左边。
 * @default 150
 *
 * @param 平移-固定框 Y
 * @desc y轴方向平移，单位像素。0表示贴在最上面。
 * @default 10
 *
 * @param 平移-boss名 X
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 36
 *
 * @param 平移-boss名 Y
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 23   
 * 
 * @param 平移-生命条 X
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 22
 *
 * @param 平移-生命条 Y
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 28 
 * 
 * @param 平移-生命数值 X
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 460
 *
 * @param 平移-生命数值 Y
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 32  
 *
 * @param 是否显示头像
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 受伤是否震动头像
 * @type boolean
 * @on 震动
 * @off 不震动
 * @desc true - 震动，false - 不震动
 * @default true 
 *
 * @param 平移-头像 X
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default -50
 *
 * @param 平移-头像 Y
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 10   
 *
 * @param --boss组 1至20--
 * @default 
 *
 * @param boss-1
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-1-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-2
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-2-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-3
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-3-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-4
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-4-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-5
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-5-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-6
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-6-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-7
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-7-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-8
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-8-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-9
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-9-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-11
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-11-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-12
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-12-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-13
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-13-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-14
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-14-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-15
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-15-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-16
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-16-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-17
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-17-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-18
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-18-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-19
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-19-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-20
 * @parent --boss组 1至20--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-20-头像
 * @parent --boss组 1至20--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param --boss组21至40--
 * @default 
 *
 * @param boss-21
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-21-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-22
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-22-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-23
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-23-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-24
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-24-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-25
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-25-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-26
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-26-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-27
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-27-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-28
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-28-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-29
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-29-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-30
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-30-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-31
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-31-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-32
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-32-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-33
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-33-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-34
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-34-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-35
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-35-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-36
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-36-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-37
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-37-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-38
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-38-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-39
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-39-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-40
 * @parent --boss组21至40--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-40-头像
 * @parent --boss组21至40--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param --boss组41至60--
 * @default 
 *
 * @param boss-41
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-41-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-42
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-42-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-43
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-43-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-44
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-44-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-45
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-45-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-46
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-46-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-47
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-47-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-48
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-48-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-49
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-49-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-50
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-50-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-51
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-51-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-52
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-52-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-53
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-53-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-54
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-54-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-55
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-55-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-56
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-56-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-57
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-57-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-58
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-58-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-59
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-59-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @param boss-60
 * @parent --boss组41至60--
 * @desc 设置指定的敌人为boss。
 * @type enemy
 * @default 0  
 *
 * @param boss-60-头像
 * @parent --boss组41至60--
 * @desc boss头像的图片资源。没有头像可以不设置。
 * @default 
 * @require 1
 * @dir img/bosshp/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ MOG - Boss HP Meter (v2.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 显示boss生命的固定框。固定框是长期显示的ui窗口，与浮动框不同。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 先确保项目img文件夹下是否有bosshp文件夹！如果没有，需要自己建立。
 * 这里需要在boss组中手动配置：
 *  boss-1：       指定敌人为boss
 *  boss-1-头像：  指定的敌人拥有的头像资源
 *  ……
 *
 * 注意，如果你配置了重复的敌人为boss，那么将选择配置在前的头像。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有bosshp文件夹！（img/bosshp）
 * 使用boss生命浮动框，需要配置资源文件：
 *
 * 资源-固定框
 * 资源-生命条
 * 资源-生命数值
 *
 * boss-1-头像（选择配置，配置了的文件都会被包含并加密）
 * boss-2-头像
 * boss-3-头像
 * ……
 *
 * -----------------------------------------------------------------------------
 * ----素材规则
 * 不流动生命条的长度是资源图片长度。
 * 流动生命条的长度是资源图片长度的三分之一。
 * 如果开启了生命条流动，那么生命条的图片会分成3等份，第1份和第3份要
 * 一模一样，第2份是第1份和第3份的过渡。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件设置固定框的xy位置：
 * 
 * 插件指令：boss_hp_position : X : Y
 *
 * 部分boss也可以通过以下指令隐藏数字：
 * （如果有兴趣，可以把该指令做成天眼技能，但前提是战斗前要记得隐藏。）
 * 
 * 插件指令（隐藏数字）：boss_hp_number_hide
 * 插件指令（显示数字）：boss_hp_number_show
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_BossHP = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_BossHP');
	Moghunter.bosshp_flowAnimation = String(Moghunter.parameters['生命条是否流动'] || "true");
	Moghunter.bosshp_flowAnimationSpeed = Number(Moghunter.parameters['流动速度'] || 4);
    Moghunter.bosshp_faceX = Number(Moghunter.parameters['平移-头像 X'] || -50);
	Moghunter.bosshp_faceY = Number(Moghunter.parameters['平移-头像 Y'] || 10);
    Moghunter.bosshp_layout_x = Number(Moghunter.parameters['平移-固定框 X'] || 150);
    Moghunter.bosshp_layout_y = Number(Moghunter.parameters['平移-固定框 Y'] || 10)
    Moghunter.bosshp_meter_x = Number(Moghunter.parameters['平移-生命条 X'] || 22);
    Moghunter.bosshp_meter_y = Number(Moghunter.parameters['平移-生命条 Y'] || 28);	
    Moghunter.bosshp_number_x = Number(Moghunter.parameters['Number X-Axis'] || 460);
    Moghunter.bosshp_number_y = Number(Moghunter.parameters['Number Y-Axis'] || 32);
    Moghunter.bosshp_name_x = Number(Moghunter.parameters['平移-boss名 X'] || 36);
    Moghunter.bosshp_name_y = Number(Moghunter.parameters['平移-boss名 Y'] || 23);
	Moghunter.bosshp_font_size = Number(Moghunter.parameters['字体大小'] || 18);
	Moghunter.bosshp_face = String(Moghunter.parameters['是否显示头像'] || "true");
	Moghunter.bosshp_shake_effect = String(Moghunter.parameters['受伤是否震动头像'] || true);	
	Moghunter.bosshp_hp_number_visible = String(Moghunter.parameters['生命数值是否显示'] || true);
	Moghunter.src_Boss_HP_A = String(Moghunter.parameters['资源-固定框']);
	Moghunter.src_Boss_HP_B = String(Moghunter.parameters['资源-生命条']);
	Moghunter.src_Boss_HP_C = String(Moghunter.parameters['资源-生命数值']);
	
	Moghunter.boss_list_length = 60;
	Moghunter.boss_list = {};
	Moghunter.boss_face_list = {};
	for (Moghunter.i = 1; Moghunter.i <= Moghunter.boss_list_length ; ++Moghunter.i) {
	  Moghunter.line = "Number(Moghunter.parameters['boss-" + Moghunter.i + "'] || 0)";
	  Moghunter.boss_list[Moghunter.i] = eval(Moghunter.line);
	  Moghunter.line = "String(Moghunter.parameters['boss-" + Moghunter.i + "-头像'])";
	  Moghunter.boss_face_list[Moghunter.i] = eval(Moghunter.line);
	};
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Boss Hp
//==============================
ImageManager.loadBossHp = function(filename) {
    return this.loadBitmap('img/bosshp/', filename, 0, true);
};

	
//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bosshp_temp_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function() {
	_alias_mog_bosshp_temp_initialize.call(this);
	this._battler_bhp_temp = [null,0,false,0];
	this._battler_bhp_refresh = false;
};

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bosshp_sys_initialize = Game_System.prototype.initialize
Game_System.prototype.initialize = function() {
	_alias_mog_bosshp_sys_initialize.call(this);
	this._bosshp_data = [Moghunter.bosshp_layout_x,Moghunter.bosshp_layout_y,Moghunter.bosshp_hp_number_visible];
}

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_bosshp_ex_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_bosshp_ex_pluginCommand.call(this,command, args)
	if (command === "boss_hp_position")  { $gameSystem._bosshp_data[0] = args[1];
	     $gameSystem._bosshp_data[1] = args[3];};
	if (command === "boss_hp_number_hide")  {$gameSystem._bosshp_data[2] = "false";};
	if (command === "boss_hp_number_show")  {$gameSystem._bosshp_data[2] = "true";};
	return true;
};

//=============================================================================
// ** BattleManager
//=============================================================================

//==============================
// * processVictory
//==============================
var _alias_mog_bosshp_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	 $gameTemp._battler_bhp_temp[2] = true
	 _alias_mog_bosshp_processVictory.call(this);	 
};

//==============================
// * processAbort
//==============================
var _alias_mog_bosshp_processAbort = BattleManager.processAbort;
BattleManager.processAbort = function() {
	 $gameTemp._battler_bhp_temp[2] = true
	 _alias_mog_bosshp_processAbort.call(this);	 
};

//==============================
// * processDefeat
//==============================
var _alias_mog_bosshp_processDefeat = BattleManager.processDefeat;
BattleManager.processDefeat = function() {
	 $gameTemp._battler_bhp_temp[2] = true
	 _alias_mog_bosshp_processDefeat.call(this);	 
};

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function() {
	if (this.isEnemy()) {return this.enemy().note.split(/[\r\n]+/)};
	if (this.isActor()) {return this.actor().note.split(/[\r\n]+/)};
};

//==============================
// * Appear
//==============================
var _mog_bhp_gbat_appear = Game_BattlerBase.prototype.appear;
Game_BattlerBase.prototype.appear = function() {
    _mog_bhp_gbat_appear.call(this);
	$gameTemp._battler_bhp_refresh = true;
};

//=============================================================================
// ** Game_Enemy
//=============================================================================

//==============================
// * initMembers
//==============================
var _alias_mog_bosshp_initMembers = Game_Enemy.prototype.initMembers;
Game_Enemy.prototype.initMembers = function() {
	_alias_mog_bosshp_initMembers.call(this);
	this._bosshp_meter = false;
};

//==============================
// * Setup
//==============================
var _alias_mog_bosshp_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_alias_mog_bosshp_setup.call(this,enemyId, x, y);
    this.checkBossHPnoteTag(enemyId);	
};

//==============================
// * Setup
//==============================
Game_Enemy.prototype.checkBossHPnoteTag = function(enemyId) {
	for (var i = 1; i <= Moghunter.boss_list_length; i++) {
		if( enemyId == Moghunter.boss_list[i] ){
			this._bosshp_meter = true;
			break;
		}
	}
	//for (var i = 0; i < this.notetags().length; i++) {
	//	if (this.notetags()[i] == "Boss HP") {this._bosshp_meter = true};
	//};	
};

//==============================
// * transform
//==============================
var _mog_bosshp_enemy_transform = Game_Enemy.prototype.transform;
Game_Enemy.prototype.transform = function(enemyId) {
	_mog_bosshp_enemy_transform.call(this,enemyId)
    $gameTemp._battler_bhp_refresh = true;
	this.checkBossHPnoteTag();	
};
	
//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _alias_mog_bosshp_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	 if (target.isEnemy() && target._bosshp_meter) {$gameTemp._battler_bhp_temp[1] = target.hp;
	 var old_hp = target.hp; $gameTemp._battler_bhp_temp[3] = 0};
	 _alias_mog_bosshp_apply.call(this,target);
	 if (target.isEnemy() && target._bosshp_meter) {$gameTemp._battler_bhp_temp[0] = target;
	    if (old_hp > target.hp) {$gameTemp._battler_bhp_temp[3] = 60};
	 };
};

//=============================================================================
// ** Spriteset_Battle
//=============================================================================	

//==============================
// * CreateLowerLayer
//==============================
var _alias_mog_bosshp_createLowerLayer = Spriteset_Battle.prototype.createLowerLayer
Spriteset_Battle.prototype.createLowerLayer = function() {
	_alias_mog_bosshp_createLowerLayer.call(this);
	this.create_bosshp_sprites();
};

//==============================
// * Update
//==============================
var _alias_mog_bosshp_update = Spriteset_Battle.prototype.update
Spriteset_Battle.prototype.update = function() {
	_alias_mog_bosshp_update.call(this);
	this.update_boss_sprites();
};

//==============================
// * Create Boss HP Sprites
//==============================
Spriteset_Battle.prototype.create_bosshp_sprites = function() {
	$gameTemp._battler_bhp_refresh = false;
	var bosshp = false;
	var init_battler = null;
    $gameTroop.members().forEach(function(enemy) {
			if (enemy._bosshp_meter && !enemy.isHidden()) {bosshp = true; init_battler = enemy};
	},this);
	if (bosshp) {
		if (!this._bosshp_sprites) {
		   this._bosshp_sprites = new Sprite_BossHP(init_battler);
	       this.addChild(this._bosshp_sprites);
		};
	} else {
		if (this._bosshp_sprites) {this.removeChild(this._bosshp_sprites)};
	};
};

//==============================
// * Update Boss HP Sprites
//==============================
Spriteset_Battle.prototype.update_boss_sprites = function() {
	if ($gameTemp._battler_bhp_refresh) {this.create_bosshp_sprites()};
	if (this._bosshp_sprites == null) {return};
    this._bosshp_sprites.update();
};

//=============================================================================
// ** Sprite_BossHP
//=============================================================================	
function Sprite_BossHP() {
    this.initialize.apply(this, arguments);
}

Sprite_BossHP.prototype = Object.create(Sprite.prototype);
Sprite_BossHP.prototype.constructor = Sprite_BossHP;

//==============================
// * Initialize
//==============================
Sprite_BossHP.prototype.initialize = function(init_battler) {
    Sprite.prototype.initialize.call(this);	
	$gameTemp._battler_bhp_temp = [init_battler,init_battler.hp,false,0]
	this._flowAnimation = String(Moghunter.bosshp_flowAnimation) === "true" ? true : false;
	this._battler = init_battler;
	this._hp_data = [-1,-1,0,0,0,0,0,0,0,Number($gameSystem._bosshp_data[0]),Number($gameSystem._bosshp_data[1]),false,true];
    this.createSprites();
	if (String(Moghunter.bosshp_shake_effect) === "true") {this._hp_data[11] = true};
	if (String($gameSystem._bosshp_data[2]) != "true") {this._hp_data[12] = false};
};

//==============================
// * create Sprites
//==============================
Sprite_BossHP.prototype.createSprites = function() {
    this.createLayout();
    this.createHPMeter();
	if (String(Moghunter.bosshp_face) === "true") {this.createFace()};
	this.createHPNumber(); 
    this.createName();
};

//==============================
// * createLayout
//==============================
Sprite_BossHP.prototype.createLayout = function() {
	this._layout = new Sprite(ImageManager.loadBossHp(Moghunter.src_Boss_HP_A));
	this._layout.x = this._hp_data[9];
	this._layout.y = this._hp_data[10];
	this._layout.opacity = 0;
	this.addChild(this._layout);	
};

//==============================
// * create Face
//==============================
Sprite_BossHP.prototype.createFace = function() {
     this._face = new Sprite();
	 this.addChild(this._face);
	 this.refreshFace();
	 this.updateFace();
};

//==============================
// * update Face
//==============================
Sprite_BossHP.prototype.updateFace = function() {
	 this._face.x = this._layout.x + Moghunter.bosshp_faceX;
	 this._face.y = this._layout.y + Moghunter.bosshp_faceY;
	 this._face.visible = this._layout.visible;
	 this._face.opacity = this._layout.opacity;
};

//==============================
// * refresh Face
//==============================
Sprite_BossHP.prototype.refreshFace = function() {
	var cur_id = this._battler._enemyId;
	for (var i = 1; i <= Moghunter.boss_list_length; i++) {
		if( cur_id == Moghunter.boss_list[i] ){
			if( Moghunter.boss_face_list[i]=="" ){
				this._face.bitmap = null;
			}else{
				this._face.bitmap = ImageManager.loadBossHp(Moghunter.boss_face_list[i]);
			}
		}	
	}
	/*
	var fs = require('fs');
	var absPath = require('path');			//如果Face_.png文件不存在，则不显示头像。
	var base = absPath.dirname(process.mainModule.filename);
	var filepath = 'img/bosshp/' + "Face_" + String(this._battler._enemyId)+".png";
	if(fs.existsSync(absPath.join(base, filepath))){
		this._face.bitmap = ImageManager.loadBossHp("Face_" + String(this._battler._enemyId));
	}else{
		this._face.bitmap = null;
	}*/
};

//==============================
// * create HP Meter
//==============================
Sprite_BossHP.prototype.createHPMeter = function() {
	this._hp_meter_red = new Sprite(ImageManager.loadBossHp(Moghunter.src_Boss_HP_B));
	this._hp_meter_red.x = this._layout.x + Moghunter.bosshp_meter_x;
	this._hp_meter_red.y = this._layout.y + Moghunter.bosshp_meter_y;
	this._hp_meter_red.opacity = 0;
	this._hp_meter_redFlow = [-1,0,0,0];
	this.addChild(this._hp_meter_red);
	this._hp_meter_blue = new Sprite(ImageManager.loadBossHp(Moghunter.src_Boss_HP_B));
	this._hp_meter_blue.x = this._hp_meter_red.x;
	this._hp_meter_blue.y = this._hp_meter_red.y;	
	this._hp_meter_blue.opacity = 0;
	this._hp_meter_blueFlow = [-1,0,0,0];
	this.addChild(this._hp_meter_blue);
};	

//==============================
// * create HP Number
//==============================
Sprite_BossHP.prototype.createHPNumber = function() {
	this._hp_number = [];
	this._hp_number_data = []
	this._hp_number_img = ImageManager.loadBossHp(Moghunter.src_Boss_HP_C);
	for (var i = 0; i < 8; i++) {
		 this._hp_number[i] = new Sprite(this._hp_number_img);
		 this._hp_number[i].visible = false;
		 this._hp_number[i].opacity = 0;
		 this._hp_number[i].x = this._layout.x + Moghunter.bosshp_number_x;
		 this._hp_number[i].y = this._layout.y + Moghunter.bosshp_number_y;
		 this._hp_number_data[i] = 0;
		 this.addChild(this._hp_number[i]);		 
	};
};

//==============================
// * create Name
//==============================
Sprite_BossHP.prototype.createName = function() {
	this._name = new Sprite(new Bitmap(300,48));
	this.addChild(this._name);
	this._name.bitmap.fontSize = Moghunter.bosshp_font_size;
	this.refresh_name();
	this._name.x = this._layout.x + Moghunter.bosshp_name_x;
	this._name.y = this._layout.y + Moghunter.bosshp_name_y;
	this._name.opacity = 0;
};

//==============================
// * get Sprite Data
//==============================
Sprite_BossHP.prototype.getSpriteData = function() {
	    this._hp_meter_blueFlow[0] = this._flowAnimation ? (this._hp_meter_blue.bitmap.width / 3) : this._hp_meter_blue.bitmap.width;
		this._hp_meter_blueFlow[1] = this._hp_meter_blue.bitmap.height;
		this._hp_meter_blueFlow[2] = this._hp_meter_blueFlow[0] * 2;
		this._hp_meter_blueFlow[3] = 0;
	    this._hp_meter_redFlow[0] = this._flowAnimation ? (this._hp_meter_red.bitmap.width / 3) : this._hp_meter_red.bitmap.width;
		this._hp_meter_redFlow[1] = this._hp_meter_red.bitmap.height;
		this._hp_meter_redFlow[2] = this._hp_meter_redFlow[0] * 2;
		this._hp_meter_redFlow[3] = 0;		
};

//==============================
// * Update
//==============================
Sprite_BossHP.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (this._hp_meter_blueFlow[0] === -1) {
	    if (this._layout.bitmap.isReady()) {
			this.getSpriteData();
		} else {
			return
		};
    };
	if (this._flowAnimation) {this.updateFlowAnimation()};
	if ($gameTemp._battler_bhp_temp[3] != 0) {this.refreshShake()};
	if (this.need_fade_sprites()) {this.fade_sprites(5)} else {this.fade_sprites(-5)};
	if ($gameTemp._battler_bhp_temp[0] != this._battler) {this.refresh_all();	};
	if (this._flowAnimation) {
	    this.refresh_blue_meter(); 
	} else if (this._hp_data[0] != this._battler.hp || this._hp_data[1] != this._battler.mhp) {
		this.refresh_blue_meter();
	};
	if (this._hp_data[2] != this._battler.hp) {this.refresh_red_meter();};
	if (this._hp_data[6] != this._battler.hp) {this.update_hp_number();};
	if (this._hp_data[11]) {this.update_shake_effect();};
	if (this._face) {this.updateFace()};
};

//==============================
// * refresh Shake
//==============================
Sprite_BossHP.prototype.refreshShake = function() {
	this._hp_data[7] = $gameTemp._battler_bhp_temp[3];
	$gameTemp._battler_bhp_temp[3] = 0;
};

//==============================
// * Update Flow Animation
//==============================
Sprite_BossHP.prototype.updateFlowAnimation = function() {
    this._hp_meter_blueFlow[3] += Moghunter.bosshp_flowAnimationSpeed;
	if (this._hp_meter_blueFlow[3] > this._hp_meter_blueFlow[2]) {
		this._hp_meter_blueFlow[3] = 0;
	};
    this._hp_meter_redFlow[3] += Moghunter.bosshp_flowAnimationSpeed;
	if (this._hp_meter_redFlow[3] > this._hp_meter_redFlow[2]) {
		this._hp_meter_redFlow[3] = 0;
	};	
};

//==============================
// * Update Shake Effect
//==============================
Sprite_BossHP.prototype.update_shake_effect = function() {
    if (this._hp_data[7] <= 0) {return;};
	this._hp_data[7] -= 1;
	this._layout.y = -3 + this._hp_data[10] + Math.floor(Math.random() * 6);
	if (this._hp_data[7] <= 0) {this._layout.y = this._hp_data[10]};
};

//==============================
// * Update HP Number
//==============================
Sprite_BossHP.prototype.update_hp_number = function() {
	  if (!this._hp_data[12]) {return};
      var nspd = 1 + Math.floor((Math.abs(this._hp_data[6] - this._battler.hp) / 30))
      if (this._hp_data[6] < this._battler.hp) {
		  this._hp_data[6] += nspd;
		  if (this._hp_data[6] > this._battler.hp) {this._hp_data[6] = this._battler.hp};
	  }
	  else if (this._hp_data[6] > this._battler.hp) {
		  this._hp_data[6] -= nspd;
		  if (this._hp_data[6] < this._battler.hp) {this._hp_data[6] = this._battler.hp};
	  };
	  this.refresh_hp_number();
};
	  
//==============================
// * Refresh HP Number
//==============================
Sprite_BossHP.prototype.refresh_hp_number = function() {
   var w = this._hp_number_img.width / 10;
   var h = this._hp_number_img.height;	
   this._hp_data[4] = Math.abs(this._hp_data[6]).toString().split("");  
   if (this._hp_data[4].length > this._hp_number.length) {return};
   if (this._hp_data[4].length != this._hp_data[5]) {
	   for (var i = 0; i < 8; i++) {this._hp_number[i].visible = false};this._hp_data[5] = this._hp_data[4].length};
   for (var i = 0; i < this._hp_data[4].length; i++) {
	   var n = Number(this._hp_data[4][i]);
	   this._hp_number[i].setFrame(n * w, 0, w, h);
	   this._hp_number[i].visible = true;	   
	   var nx = -(w * i) + (w * this._hp_data[4].length)
	   this._hp_number[i].x = (this._layout.x + Moghunter.bosshp_number_x) - nx;
   };
};

//==============================
// * Refresh Name
//==============================
Sprite_BossHP.prototype.refresh_name = function() {
	this._name.bitmap.clear();
	this._name.bitmap.drawText(this._battler.enemy().name, 0, 0, this._name.bitmap.width, this._name.bitmap.height,0);	
};

//==============================
// * Need Fade Sprites
//==============================
Sprite_BossHP.prototype.need_fade_sprites = function() {
	if ($gameMessage.isBusy()) {return true} ;	
	if ($gameTemp._battler_bhp_temp[2]) {return true} ;
	return false;
};

//==============================
// * Fade Sprites
//==============================
Sprite_BossHP.prototype.fade_sprites = function(value) {
	this._layout.opacity -= value;
	this._hp_meter_blue.opacity = this._layout.opacity;
	this._hp_meter_red.opacity = this._layout.opacity;
	this._name.opacity = this._layout.opacity;
	for (var i = 0; i < 8; i++) {this._hp_number[i].opacity -= value};
};

//==============================
// * Refresh All
//==============================
Sprite_BossHP.prototype.refresh_all = function() {
	 this._battler = $gameTemp._battler_bhp_temp[0];
	 this._hp_data[2] = $gameTemp._battler_bhp_temp[1];
	 this._hp_data[6] = $gameTemp._battler_bhp_temp[1];  
	 this.refresh_hp_number();  
	 this.refresh_blue_meter();
	 this.refresh_red_meter();
	 this.refresh_name();
	 if (this._face) {this.refreshFace()};
};

//==============================
// * Refresh Blue Meter
//==============================
Sprite_BossHP.prototype.refresh_blue_meter = function() {
	 this._hp_data[0] = this._battler.hp;
	 this._hp_data[1] = this._battler.mhp;
     this._layout.y = this._hp_data[10]	 
	 var meter_rate = this._hp_meter_blueFlow[0] * this._battler.hp / this._battler.mhp;
	 this._hp_meter_blue.setFrame(this._hp_meter_blueFlow[3], 0, meter_rate, this._hp_meter_blue.bitmap.height / 2);
};

//==============================
// * Refresh Red Meter
//==============================
Sprite_BossHP.prototype.refresh_red_meter = function() {
	  var dnspeed = 1 + (Math.abs(this._hp_data[2] - this._battler.hp) / 160);
	  if (this._hp_data[2] > this._battler.hp) {this._hp_data[2] -= dnspeed;
		  if (this._hp_data[2] < this._battler.hp) {this._hp_data[2] = this._battler.hp};}
	  else if (this._hp_data[2] < this._battler.hp) {this._hp_data[2]  += dnspeed;
		  if (this._hp_data[2]  > this._battler.hp) {this._hp_data[2]  = this._battler.hp};			
	  };
	 var meter_rate = this._hp_meter_redFlow[0] * this._hp_data[2] / this._battler.mhp;
	 this._hp_meter_red.setFrame(this._hp_meter_redFlow[3], this._hp_meter_red.bitmap.height / 2, meter_rate, this._hp_meter_red.bitmap.height / 2);	
};