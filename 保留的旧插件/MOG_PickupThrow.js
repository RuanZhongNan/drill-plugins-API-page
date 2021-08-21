//=============================================================================
// MOG_PickupThrow.js
//=============================================================================

/*:
 * @plugindesc (v1.3)[v1.2]  物体 - 举起花盆
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 花盆高度
 * @type number
 * @min 0
 * @desc 以角色的点为基准，花盆在角色上的高度，单位像素。
 * @default 22
 * 
 * @param 举起音效
 * @desc 举起花盆时，播放的音效。
 * @require 1
 * @dir audio/se/
 * @type file
 * @default Jump1
 *
 * @param 是否使用角色举起姿势
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param --角色组 1至20--
 * @default 
 *
 * @param 角色-1-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-2-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-3-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-4-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-5-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-6-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-7-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-8-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-9-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-10-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-11-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-12-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-13-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-14-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-15-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-16-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-17-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-18-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-19-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-20-举起姿势
 * @parent --角色组 1至20--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param --角色组21至40--
 * @default 
 *
 * @param 角色-21-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-22-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-23-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-24-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-25-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-26-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-27-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-28-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-29-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-30-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-31-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-32-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-33-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-34-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-35-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-36-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-37-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-38-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-39-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-40-举起姿势
 * @parent --角色组21至40--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param --角色组41至60--
 * @default 
 *
 * @param 角色-41-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-42-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-43-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-44-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-45-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-46-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-47-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-48-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-49-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-50-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-51-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-52-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-53-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-54-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-55-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-56-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-57-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-58-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-59-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色-60-举起姿势
 * @parent --角色组41至60--
 * @desc 角色举起姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ MOG - Pick Up and Throw (v1.2) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 玩家能够举起花盆等指定的物件，并投掷。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.自己的队伍的成员以及地图中的事件，都会阻塞扔花盆。
 * 2.花盆一次只能捡一个。
 * 3.跳跃过程中可以扔花盆。
 * 4.花盆不能带出地图。
 * 5.花盆可以落在任何可通行区域，包括天花板。（该坑待修复）
 * 6.花盆具有堵路功能，你需要留意是否会堵住剧情中npc的道路。
 *  (可推动箱子也有堵路功能)
 * 7.玩家举着花盆进入剧情时，玩家隐身，但是花盆不会，你可以看见一个花盆在
 * 剧情中半浮着。
 * 8.被玩家举着的花盆，不能作任何移动操作，包括指定事件位置。
 * 
 * -----------------------------------------------------------------------------
 * ----控制操作 - 键盘、手柄
 * 键盘 - "确定"键拾取、投掷
 * 手柄 - "确定"键拾取、投掷
 *
 * -----------------------------------------------------------------------------
 * ----控制操作 - 鼠标、触屏
 * 鼠标 - 点击可以拾取，但是不能投掷。（该坑待修复）
 * 触屏 - （未测试，暂时不清楚）
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 投掷距离
 * 在指定的事件中，使用下面事件注释：
 * （注意，冒号左右有两个空格）
 *
 * 事件注释：throw : X （旧注释，也可以用）
 * 事件注释：=>举起花盆 : 投掷距离 : X
 *
 * 参数X：投掷距离，最小为1，单位图格。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 落地触发开关
 * 如果你需要设置花盆在落地时触发指定开关，使用下面事件注释：
 * （注意，冒号左右有两个空格）
 * 
 * 事件注释：=>举起花盆 : 落地触发开关 : 1
 * 事件注释：=>举起花盆 : 落地触发独立开关 : A
 *
 * -----------------------------------------------------------------------------
 * ----插件说明
 * 1.添加了"=>举起花盆"注释的事件，可以被举起并投掷。
 * 2.mog旧插件注释也可以用。
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 这里需要在角色组中手动配置：（img/characters文件夹）
 *  角色-1-举起姿势（数字1对应角色配置中编号为1的角色）
 *  角色-2-举起姿势
 *  ……
 *
 * 如果没有举起姿势，可以设置为空。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 举起能力开关
 * 你可以通过插件指令设置物体是否可以举起。
 *
 * 插件指令（可举起）：pickup_enable
 * 插件指令（不能举起）：pickup_disable
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 添加了花盆落地时触发变量的功能。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		._pickup为举起者，._throw为投掷的物体。
//
//		这里用Moghunter.pick_list修改了举起姿势的设置。
//
//		mog的函数 Game_Event.prototype.checkPickComment 写的太烂，
//		（if中的函数应该只做判断，mog居然加了一大串外部修改的操作）这里直接换掉。
//		换成了this._throw.pickable判断
//		
//		添加了落地触发功能，搜索变量：this._drill_being_throwing
//		
//

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_PickupThrow = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_PickupThrow');
	Moghunter.pickTargetHeight = Number(Moghunter.parameters['花盆高度'] || 22);
	Moghunter.pickPose = String(Moghunter.parameters['是否使用角色举起姿势'] || 'true');
	Moghunter.pickSoundFile = String(Moghunter.parameters['举起音效']);
	Moghunter.pickDirectionButton = String(Moghunter.parameters['Hold Direction'] || 'true');					//该变量控制原地转向，默认开启。
	Moghunter.pickDirectionButtonKey = String(Moghunter.parameters['Hold Direction Button'] || 'pagedown');		//
	Moghunter.pickDirectionFix = String(Moghunter.parameters['Character Direction Fix'] || 'true');
	
	Moghunter.pick_list_length = 60;
	Moghunter.pick_list = {};
	for (var i = 1; i <= Moghunter.pick_list_length ; i++ ) {
		Moghunter.pick_list[i] = Moghunter.parameters['角色-' + String(i) + "-举起姿势" ];
	};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_pickup_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _mog_pickup_pluginCommand.call(this,command, args);
    if (command === "pickup_enable")  {
        $gameSystem._pickupData[0] = true;
	} else if (command === "pickup_disable")  {
        $gameSystem._pickupData[0] = false;
	};	
	return true;
};
	
//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_pickup_Gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _mog_pickup_Gsys_initialize.call(this);
	this._pickupData = [true,false];
};	
	
//=============================================================================
// ** Game Character
//=============================================================================	

//==============================
// * initMembers
//==============================
var _mog_pick_gcharbase_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
   _mog_pick_gcharbase_initMembers.call(this);
   this._pickup = {};
   this._pickup.enabled = false;
   this._pickup.originalName = this._characterName;
   this._pickup.pose = String(Moghunter.pickPose) === "true" ? true : false;
   this._pickup.wait = 0;   
   this._pickup.check = false;
   this._throw = {};
   this._throw.enabled = false;
   this._throw.through = false;
   this._throw.directionFixA = String(Moghunter.pickDirectionFix);
   this._throw.directionFix = false;
   this._throw.range = 0;
   this._throw.wait = 0;
};

//==============================
// * Update
//==============================
var _mog_pick_gchabase_update = Game_CharacterBase.prototype.update;
Game_CharacterBase.prototype.update = function() {
	if (this._throw.wait > 0) {this._throw.wait--;
	    if (this.isJumping()) {this.updateJump()};
   		if (!this.isJumping()) {this._throw.wait = 0};
		return;
	};
	if (this._pickup.wait > 0) {this._pickup.wait--;return};
	if (this._throw.enabled) {this.updatePickUp();return};
	
	if (this._drill_being_throwing != undefined 	//落地判断 
		&& this._drill_being_throwing == true 
		&& !this.isJumping() ){
		this._drill_being_throwing = false;
		if( this._throw._self_switch != undefined ){
			var key = [this._mapId, this._eventId, this._throw._self_switch ];
			$gameSelfSwitches.setValue(key,true);
		}
		if( this._throw._var_switch != undefined ){
			$gameSwitches.setValue( Number(this._throw._var_switch),true );
		}
	}
    _mog_pick_gchabase_update.call(this);
};

//==============================
// * Update Pick Up
//==============================
Game_CharacterBase.prototype.updatePickUp = function() {
    this._x = $gamePlayer._x;
	this._y = $gamePlayer._y;
    this._realX = $gamePlayer._realX;
    this._realY = $gamePlayer._realY;	
};

//==============================
// * can Pass Throw
//==============================
Game_CharacterBase.prototype.canPassThrow = function(x, y, d) {
    var x2 = $gameMap.roundXWithDirection(x, d);
    var y2 = $gameMap.roundYWithDirection(y, d);
	if (d === 2) {x3 = x; y3 = y + 1;	
	} else if (d === 4) {x3 = x - 1;y3 = y;		
	} else if (d === 6) {x3 = x + 1;y3 = y;	
	} else {x3 = x;y3 = y - 1;
	};
    if (!$gameMap.isValid(x2, y2)) {
        return false;
    };
    if (this.isThrough() || this.isDebugThrough()) {
        return true;
    };
    if (!$gameMap.isPassable(x3, y3)) {
        return false;
    };
    if (this.isCollidedWithCharacters(x2, y2)) {
        return false;
    };
    return true;
};

//=============================================================================
// ** Game Event
//=============================================================================	

//==============================
// * start
//==============================
var _mog_pick_gevent_start = Game_Event.prototype.start;
Game_Event.prototype.start = function() {
	this.drill_setPickComment();
	if (this.canPickUp()) {this.pickUp();return};
	_mog_pick_gevent_start.call(this);
};

//==============================
// * 获取事件注释
//==============================
Game_Event.prototype.drill_setPickComment = function() {
	this._throw.pickable = false;
	if (!this._erased && this.page()) {
		this.list().forEach(function(l) {
			if (l.code === 108) {
				var args = l.parameters[0].split(' ');
				var command = args.shift();
				if (command.toLowerCase() == "throw"){
					if(args.length == 2){
						this._throw.pickable = true;
						this._throw.range = Number(args[1]);
					}
				};
				if (command == "=>举起花盆"){
					if(args.length == 4){
						var type = String(args[1]);
						var temp1 = String(args[3]);
						if( type == "投掷距离" ){
							this._throw.pickable = true;
							this._throw.range = Number(temp1);
						}
						if( type == "落地触发独立开关" ){
							this._throw.pickable = true;
							this._throw._self_switch = temp1;
							if(this._throw.range == 0){this._throw.range = 1};
						}
						if( type == "落地触发开关" ){
							this._throw.pickable = true;
							this._throw._var_switch = Number(temp1);
							if(this._throw.range == 0){this._throw.range = 1};
						}
					}
				};
			};
		}, this);
	};
}

//==============================
// * can Pick UP
//==============================
Game_Event.prototype.canPickUp = function() {
	if (!$gameSystem._pickupData[0]) {return false};
	if ($gamePlayer._pickup.enabled) {return false};
	if (this._trigger > 1) {return false};
	if (this._throw.enabled) {return false};
	if (this._throw.wait > 0) {return false};
	if (this._pickup.wait > 0) {return false};
	if ($gamePlayer._pickup.wait > 0) {return false};
    return this._throw.pickable;
};

//==============================
// * Pick UP
//==============================
Game_Event.prototype.pickUp = function() {
	var wait = 15;
	this._throw.enabled = true
    this._throw.wait = wait;
	this._throw.directionFix = this._directionFix;
	this._throw.through = this._through;
	this._directionFix = this._throw.directionFixA ? true : this._directionFix;
	this._through = true;
	$gamePlayer._pickup.enabled = true;
	$gamePlayer._pickup.wait = wait;
	$gamePlayer._pickup.originalName = $gamePlayer._characterName;
	if ($gamePlayer._pickup.pose 
	    && Moghunter.pick_list[$gameParty._actors[0]] != "" ) {
		$gamePlayer._characterName = Moghunter.pick_list[$gameParty._actors[0]];
	};
	if (Imported.MOG_CharPoses) {
	    $gamePlayer._pickup.originalName = $gamePlayer._originalName.name;
	    if ($gamePlayer._pickup.pose
			&& Moghunter.pick_list[$gameParty._actors[0]] != "" ) {
			$gamePlayer._characterName = Moghunter.pick_list[$gameParty._actors[0]];
		};
	};
	var x = $gamePlayer._x - this._x;
	var y = $gamePlayer._y - this._y;
	this.jump(x,y,this._direction)
};

//=============================================================================
// ** Game Player
//=============================================================================	

//==============================
// * Initialize
//==============================
var _mog_pick_gplayer_initialize = Game_Player.prototype.initialize;
Game_Player.prototype.initialize = function() {
	_mog_pick_gplayer_initialize .call(this);
	this._dirButton = String(Moghunter.pickDirectionButton) === "true" ? true : false;
	this._dirButtonK = String(Moghunter.pickDirectionButtonKey)
};

//==============================
// * move By Input
//==============================
var _mog_gplayer_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
	if (this._pickup.wait > 0) {return};	
	if (this._pickup.enabled && this.canMove()) {
	    if (Input.isTriggered('ok')) {this.throwTarget();return};
		if (Input.isPressed(this._dirButtonK)) {this.holdDirectionT();return};
    };
	_mog_gplayer_moveByInput.call(this);	
};

//==============================
// * hold Direction D T
//==============================
Game_Player.prototype.holdDirectionT = function() {
   if (Input.isPressed('down')) {this.setDirection(2);
   } else if (Input.isPressed('left')) {this.setDirection(4);
   } else if (Input.isPressed('right')) {this.setDirection(6);
   } else if (Input.isPressed('up')) {this.setDirection(8);
   };
};

//==============================
// * trigger Action
//==============================
var _mog_gplayer_pick_triggerAction = Game_Player.prototype.triggerAction;
Game_Player.prototype.triggerAction = function() {
	if (this._throw.wait > 0) {return false};
	if (this._pickup.wait > 0) {return false};	
    if (this._pickup.enabled) {return false};
	_mog_gplayer_pick_triggerAction.call(this);
	return false;
};

//==============================
// * throw Target
//==============================
Game_Player.prototype.throwTarget = function() {
	this._pickup.check = false;
	$gameMap.events().forEach(function(event) {
             if (event._throw.enabled) {this.throwEvent(event)};
    }, this);
	if (!this._pickup.check) {return};
	this._pickup.enabled = false;
	this._pickup.wait = 15;
	SoundManager.playThrowSE(String(Moghunter.pickSoundFile));
	if (this._pickup.pose) {this._characterName = this._pickup.originalName};
};

//==============================
// * throw Event
//==============================
Game_Player.prototype.throwEvent = function(event) {
	var r = event._throw.range;	var xr = 0;	var yr = 0;	
	if (this._direction === 2) {
		x = this._x; y = this._y + r - 1; x2 = 0; y2 = +r;
		for (var i = 0; i < r; i++) {
	    	if (this.canPassThrow(x,y,this._direction)) {xr = x2; yr = y2;break};
			y--;y2--;
		};	
    } else if (this._direction === 4) {
		x = this._x - r + 1; y = this._y; x2 = -r; y2 = 0;
		for (var i = 0; i < r; i++) {
	    	if (this.canPassThrow(x,y,this._direction)) {xr = x2; yr = y2;break};
			x++;x2++;
		};	    
    } else if (this._direction === 6) {
		x = this._x + r - 1; y = this._y; x2 = +r; y2 = 0;
		for (var i = 0; i < r; i++) {
	    	if (this.canPassThrow(x,y,this._direction)) {xr = x2; yr = y2;break};
			x--;x2--;
		};			
    } else if (this._direction === 8) {
		x = this._x; y = this._y - r + 1; x2 = 0; y2 = -r;
		for (var i = 0; i < r; i++) {
	    	if (this.canPassThrow(x,y,this._direction)) {xr = x2; yr = y2;break};
			y++;y2++;
		};
	};
	if (xr === 0 && yr ===0) {return};
	event.jump(xr,yr)
	event._drill_being_throwing = true
	event._throw.enabled = false
    event._throw.wait = 30;
	event._through = this._throw.through;
	event._directionFix = this._throw._directionFix;	
	this._pickup.check = true;
};

//==============================
// * clear Transfer Info
//==============================
var _mog_pick_gplayer_clearTransferInfo = Game_Player.prototype.clearTransferInfo;
Game_Player.prototype.clearTransferInfo = function() {
    _mog_pick_gplayer_clearTransferInfo.call(this);
    this.clearPick();
};

//==============================
// * clearPick
//==============================
Game_Player.prototype.clearPick = function() {
	this._pickup.enabled = false;
	this._pickup.wait = 0;
};

//=============================================================================
// ** Sound Manager
//=============================================================================	

//==============================
// * Play ThrowSE
//==============================
SoundManager.playThrowSE = function(fileName){
   var se = {};
   se.name = fileName;
   se.pitch = 100;
   se.volume = 100;
   AudioManager.playSe(se);
};  

//=============================================================================
// ** Sprite Character
//=============================================================================	

//==============================
// * update Position
//==============================
var _mog_pick_sprChar_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function() {
	if (this.needUpdatePick()) {this.updateSprtPick();return};
	_mog_pick_sprChar_updatePosition.call(this);
	if (this._character._throw.wait > 0) {this.z = $gamePlayer.screenZ() + 1};
};
	
//==============================
// * Need Update Pick
//==============================
Sprite_Character.prototype.needUpdatePick = function() {
	 if (this._character._throw.enabled && this._character._throw.wait > 0) {return false};
	 return this._character._throw.enabled;
};
	
//==============================
// * update Sprt Pick
//==============================
Sprite_Character.prototype.updateSprtPick = function() {
    this.x = $gamePlayer.screenX();
    this.y = $gamePlayer.screenY() - Moghunter.pickTargetHeight;
    this.z = $gamePlayer.screenZ() + 1;	
};