//=============================================================================
// TitleVideo.js v1.2.0
// https://github.com/nanowizard/rmmv-title-video
//=============================================================================

/*
Copyright 2017 Ryan Sivek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*:
 * @plugindesc (v1.20)[v1.2] 标题 - 视频动画背景
 * @author Ryan Sivek （Drill_up翻译+优化）
 *
 * @param 默认视频
 * @type number
 * @min 0
 * @max 10
 * @desc 第一次进入标题时，播放的视频动画，对应下面配置的编号，0表示不播放视频。
 * @default 1
 *
 * @param 资源-视频动画1
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 标题背景动画
 *
 * @param 资源-视频动画2
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画3
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画4
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画5
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画6
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画7
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画8
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画9
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画10
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 是否播放视频声音
 * @type boolean
 * @on 播放
 * @off 关闭
 * @desc true - 播放，false - 关闭。
 * @default false
 *
 * @param 音量比
 * @desc 视频声音的音量比，小数，在0.00-1.00之间。
 * @default 1
 *
 * @param 视频宽度
 * @desc 填入：auto -自适应窗口宽度, video -原视频宽度, 816 -指定宽度。
 * @default auto
 *
 * @param 视频高度
 * @desc 填入：auto -自适应窗口高度, video -原视频高度, 624 -指定高度。
 * @default auto
 *
 * @param 平移-视频 X
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 0
 *
 * @param 平移-视频 Y
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 0
 *
 * @param 是否循环播放视频
 * @type boolean
 * @on 循环
 * @off 不循环
 * @desc true - 循环，false - 不循环。
 * @default true
 *
 * @param 视频播放速度
 * @desc 视频播放的速度，1.0为原速度。
 * @default 1.0
 *
 * @param 混合模式
 * @type number
 * @min 0
 * @max 16
 * @desc pixi的渲染混合模式。0-普通,1-叠加。其他更详细相关介绍，去看看"pixi的渲染混合模式"。
 * @default 0
 *
 * @param 视频透明度
 * @desc 视频透明度的比值，小数，在0.00-1.00之间。0为完全透明。
 * @default 1.0
 *
 * @param 视频色调
 * @desc 屏幕的滤镜色调，默认: 0xffffff。
 * @default 0xffffff
 *
 * @param 视频起始帧
 * @desc 视频开始播放的初始帧数。默认从0帧开始播放。
 * @default 0
 *
 * @param 视频结束帧
 * @desc 视频开始播放的结束帧数。填入：end -视频总帧数，900 -指定结束帧。
 * @default end
 *
 * @param 是否开启Debug模式
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc true - 开启，false - 关闭。
 * @default true
 *
 * @help
 * =============================================================================
 * +++ TitleVideo +++
 * By Ryan Sivek
 * https://github.com/nanowizard/rmmv-title-video
 * =============================================================================
 * 在标题背景中添加一个视频层背景，用于播放视频动画。
 * 要了解更详细的组合方法，去看看"多层组合背景,粒子,魔法圈,gif,视频.docx"。
 * ★★可以与多层插件同时使用，但必须放在他们的前面★★
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 所有视频文件都存储在根目录的movies文件夹。需要配置视频名：
 * 
 * 资源-视频动画1
 * 资源-视频动画2
 * 资源-视频动画3
 * ……
 *
 * 只需要填入文件名即可，不需要后缀。
 * （视频文件不会被去除，但也不会被加密）
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令控制视频的播放情况：
 * 
 * 插件指令（播放）：  >标题视频 : A : 切换视频
 * 插件指令（隐藏）：  >标题视频 : 关闭视频
 *
 * 参数A：视频编号
 *        标题将播放指定对应配置的编号。
 *
 * 示例：
 * 插件指令：>标题视频 : 1 : 切换视频
 * 插件指令：>标题视频 : 关闭视频
 *
 * （视频动画不存在多层，直接作为最底层放在背景中）
 * （可以与背景、粒子、魔法圈、gif叠加使用）
 *
 * -----------------------------------------------------------------------------
 * ----使用说明
 * 1.视频动画支持.webm 和.mp4 格式的视频。
 * 2.视频宽高可以设置为 auto -自适应窗口宽度, video -原视频宽度, 816 -指定宽度。
 *
 *
 * -----------------------------------------------------------------------------
 * ----插件性能
 * 测试仪器：   4G 内存，Intel Core i5-2520M CPU 2.5GHz 处理器
 *              Intel(R) HD Graphics 3000 集显 的垃圾笔记本
 *              (笔记本的3dmark综合分：571，鲁大师综合分：48456)
 * 总时段：     20000.00ms左右
 * 对照表：     0.00ms  - 40.00ms （几乎无消耗）
 *              40.00ms - 80.00ms （低消耗）
 *              80.00ms - 120.00ms（中消耗）
 *              120.00ms以上      （高消耗）
 * 工作类型：   持续执行
 * 时间复杂度： o(n)+o(视频图像处理) 每帧
 * 测试方法：   在标题中开启视频背景。
 * 测试结果：   标题界面估算平均消耗为：【265.46ms】
 *
 * 1.插件只在自己作用域下工作消耗性能，在其它作用域下是不工作的。
 *   测试结果并不是精确值，范围在给定值的10ms范围内波动。
 *   更多了解插件性能，可以去看看"关于插件性能.docx"。
 * 2.战斗视频动画与标题视频动画原理一样，消耗图形计算能力非常大，
 *   而且有时候可能会出现视频花屏问题。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得你可以通过插件指令全局修改标题视频。
 * [v1.2]
 * 优化了插件指令格式。
 */
 
//
//		工作类型		持续执行
//		时间复杂度		o(n)+o(视频图像处理) 每帧
//		性能测试因素	标题界面开启视频
//		性能测试消耗	265.46ms 从图像函数里面找到的值
//		最坏情况		开视频就是最坏情况。

(function() {
	
	//=============================================================================
	// * Ryan变量获取
	//=============================================================================
	var Imported = Imported || {};
　　Imported.TitleVideo = true;
　	var DrillUp = DrillUp || {}; 

    var Ryan_parameters = PluginManager.parameters('TitleVideo');
    var Ryan_frist = Number(Ryan_parameters['默认视频'] || 1);
	var Ryan_filepath_list_length = 10;
	var Ryan_filepath_list = [];
	Ryan_filepath_list[0] = "";
	for (var i = 1; i <= Ryan_filepath_list_length; i++) {
		Ryan_filepath_list[i] = Ryan_parameters['资源-视频动画' + String(i)] || "";
	}
    var Ryan_filepath = Ryan_filepath_list[ Ryan_frist ];
    var Ryan_muted = Ryan_parameters['是否播放视频声音'];
    var Ryan_volume = Ryan_parameters['音量比'];
    var Ryan_w = Ryan_parameters['视频宽度'];
    var Ryan_h = Ryan_parameters['视频高度'];
    var Ryan_x = Ryan_parameters['平移-视频 X'];
    var Ryan_y = Ryan_parameters['平移-视频 Y'];
    var Ryan_loop = Ryan_parameters['是否循环播放视频'];
    var Ryan_playbackRate = Ryan_parameters['视频播放速度'];
    var Ryan_blendMode = Ryan_parameters['混合模式'];
    var Ryan_opacity = Ryan_parameters['视频透明度'];
    var Ryan_tint = Ryan_parameters['视频色调'];
    var Ryan_loopStart = Ryan_parameters['视频起始帧'];
    var Ryan_loopEnd = Ryan_parameters['视频结束帧'];
    var Ryan_DEBUG = Ryan_parameters['是否开启Debug模式'] === 'true' ? true : false;

    var listeners = {};
    var vidSprite, vid;
	
	//=============================================================================
	// ** 全局读取
	//=============================================================================
	var _drill_global = DataManager.loadGlobalInfo();
	//alert(JSON.stringify(_drill_global[0]));
	//for(var key in _drill_global[0]){
	//  console.log(key);
	//  console.log(_drill_global[0][key]);
	//}
	if( !DrillUp.global_title_video_first ){	//游戏没关情况
		if( _drill_global && _drill_global[0] && _drill_global[0]["_global_title_video_first"] != undefined ){		//游戏关闭后，重开读取global中的配置
			DrillUp.global_title_video_first = _drill_global[0]["_global_title_video_first"];
			Ryan_filepath = Ryan_filepath_list[ DrillUp.global_title_video_first ];
		}else{
			DrillUp.global_title_video_first = Ryan_frist;
			Ryan_filepath = Ryan_filepath_list[ Ryan_frist ];
		}
	}
	
	//=============================================================================
	// ** 全局存储
	//=============================================================================
	var _drill_TitleVideo_saveGlobal = DataManager.saveGlobalInfo;
	DataManager.saveGlobalInfo = function(info) {	//第0个存档为全局存档
		if(!info[0]){info[0] = []};
		info[0]["_global_title_video_first"] = DrillUp.global_title_video_first;
		_drill_TitleVideo_saveGlobal.call(this,info);
	};
	DataManager.forceSaveGlobalInfo = function() {		//强制存储（任何改变的全局变量的地方都需要调用该方法）
		var globalInfo = this.loadGlobalInfo() || [];
		globalInfo[0] = this.makeSavefileInfo();
		this.saveGlobalInfo(globalInfo);
	};

	//=============================================================================
	// * 插件指令
	//=============================================================================
	var _drill_title_videos_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_drill_title_videos_pluginCommand.call(this, command, args);
		if (command === '>标题视频') {
			if(args.length == 4){
				var temp1 = Number(args[1]);
				var type = String(args[3]);
				if (type === '切换视频') {
					DrillUp.global_title_video_first = temp1;
					DataManager.forceSaveGlobalInfo();
					Ryan_filepath = Ryan_filepath_list[ temp1 ];
				}
			}
			if(args.length == 2){
				var type = String(args[1]);
				if (type === '关闭视频') {
					DrillUp.global_title_video_first = 0;
					DataManager.forceSaveGlobalInfo();
					Ryan_filepath = Ryan_filepath_list[ 0 ];
				}
			}
		}
	};
	
	//=============================================================================
	// * Ryan设置标题背景
	//=============================================================================
    var ST_createBackground = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function() {
        ST_createBackground.call(this);
		//alert(DrillUp.global_title_video_first);	//注意取0情况。
		//alert(Ryan_filepath);
		if( Ryan_filepath == undefined || Ryan_filepath == "" ){ return ;}

        if(Ryan_DEBUG) console.log('TitleVideo parameters:', Ryan_parameters);

        var ext = Game_Interpreter.prototype.videoFileExt();
        var vidFilePath = 'movies/'+ Ryan_filepath + ext;

        if(Ryan_DEBUG) console.log('Loading video as texture:', vidFilePath);
        var vidTexture = PIXI.Texture.fromVideo(vidFilePath);

        vid = vidTexture.baseTexture.source;
        vidSprite = new PIXI.Sprite(vidTexture);

        vid.volume = Ryan_volume*WebAudio._masterVolume;

        vidSprite.blendMode = Ryan_blendMode || PIXI.BLEND_MODES.NORMAL;

        vid.addEventListener('loadedmetadata', function() {
            if(Ryan_DEBUG) console.log('Successfully loaded video metadata:');
            if(Ryan_w === 'video') {
                vidSprite.width = vid.videoWidth;
            }
            if(Ryan_h === 'video') {
                vidSprite.height = vid.videoHeight;
            }
            if(Ryan_loopEnd === 'end') {
                Ryan_loopEnd = vid.duration;
            }
        });

        window.vid = vid;

        vidSprite.width = Ryan_w === 'auto' ? Graphics.width : (parseInt(Ryan_w) || Graphics.width);
        vidSprite.height = Ryan_h === 'auto' ? Graphics.height : (parseInt(Ryan_h) || Graphics.height);
        vidSprite.x = parseInt(Ryan_x) || 0;
        vidSprite.y = parseInt(Ryan_y) || 0;
        vidSprite.alpha = parseFloat(Ryan_opacity) || 1.0;
        vidSprite.tint = parseInt(Ryan_tint) || 0xffffff;

        vid.loop = Ryan_loop === 'true' ? true : false;
        vid.muted = Ryan_muted === 'true' ? false : true;
        vid.playbackRate = parseFloat(Ryan_playbackRate) || 1.0;

        vidSprite.update = function() {
            vidTexture.update();
        };

        if(Ryan_loop){
            Ryan_loopStart = parseFloat(Ryan_loopStart);
            if(Ryan_loopEnd !== 'end'){
                Ryan_loopEnd = parseFloat(Ryan_loopEnd);
            }
            if(Ryan_loopStart > 0 || Ryan_loopEnd !== vid.duration) {
                vid.loop = false;
                addListener('timeupdate', doCustomLoop);

                if(Ryan_DEBUG) console.log('Setting up custom loop from %s to %s:', Ryan_loopStart.toFixed(3), Ryan_loopEnd);
            }
        }
        else {
            vid.addEventListener('ended', function() {
                vidSprite.visible = false;
            });
        }

        if(Ryan_DEBUG){
            vid.addEventListener('error', function() {
                console.error('video element error:', vid.error);
            });
        }

        this.addChild(vidSprite);
    };

    var WA_setMasterVolume = WebAudio.setMasterVolume;
    WebAudio.setMasterVolume = function(value) {
		if( Ryan_filepath == undefined || Ryan_filepath == "" ){ return WA_setMasterVolume(value);}
        if(Ryan_DEBUG) console.log('Setting video volume: ', value);
        if(vid) vid.volume = Ryan_volume*value;
        WA_setMasterVolume(value);
    }

    var ST_terminate = Scene_Title.prototype.terminate;
    Scene_Title.prototype.terminate = function() {
        ST_terminate.call(this);
		if( vidSprite == null || Ryan_filepath == undefined || Ryan_filepath == "" ){ return ;}
        vidSprite.destroy(true);

        removeListeners();
        vid.pause();
        vid.remove();
        vid = null;
        vidSprite = null
        WebAudio.setMasterVolume = WA_setMasterVolume;
    };

    function doCustomLoop() {
        if(Ryan_DEBUG) console.log('Time update:', vid.currentTime);
        if(vid.currentTime >= Ryan_loopEnd){
            if(Ryan_DEBUG) console.log('Looping back to ', Ryan_loopStart);
            vid.currentTime = Ryan_loopStart;
            vid.play();
        }
    }

    function addListener(evt, fn){
        vid.addEventListener(evt, fn);

        if(!listeners[evt]){
            listeners[evt] = [];
        }
        listeners[evt].push(fn);
    }

    function removeListeners() {
        Object.keys(listeners).forEach(function(evt){
            listeners[evt].forEach(function(fn){
                vid.removeEventListener(evt, fn);
            });
        });
    }

})();
