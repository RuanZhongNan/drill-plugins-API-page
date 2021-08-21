//=============================================================================
// MOG_TreasureHud.js
//=============================================================================

/*:
 * @plugindesc (v1.1) 画面 - 道具浮动框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-浮动框
 * @desc 道具浮动框的图片资源。
 * @default 道具浮动框
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 平移-浮动框 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 555
 *
 * @param 平移-浮动框 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 370
 *
 * @param 平移-物品名 X
 * @desc 以浮动框为基准，x轴方向平移，单位像素。
 * @default 78
 *
 * @param 平移-物品名 Y
 * @desc 以浮动框为基准，y轴方向平移，单位像素。
 * @default 24
 *
 * @param 平移-图标 X
 * @desc 以浮动框为基准，x轴方向平移，单位像素。
 * @default 42
 *
 * @param 平移-图标 Y
 * @desc 以浮动框为基准，y轴方向平移，单位像素。
 * @default 24  
 *
 * @param 持续时间
 * @desc 浮动框的持续时间。90表示90帧后浮动框消失。
 * （1秒60帧）
 * @default 90
 *
 * @param 金钱图标编号
 * @type number
 * @min 0
 * @desc 需要指定金钱的图标编号，金钱的增减时将使用该编号对应的图标。
 * @default 163
 *
 * @param 字体大小
 * @type number
 * @min 1
 * @desc 浮动框的字体大小。
 * @default 20
 *	 
 * @help  
 * =============================================================================
 * +++ MOG Treasure Hud (v1.1) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 获得/失去物品、增减金钱时会浮动出提示框。
 * 如果一次性获得多个物品，那么将弹出最后一个物品的信息。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----相似插件
 * 该插件与MOG_TreasurePopup.js 地图-道具浮动文字 的功能是一样的。
 * 后者是在地图上显示信息，该插件是在画面上显示信息。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 使用金币显示框，需要配置资源文件：（img/system文件夹）
 *
 * 资源-浮动框
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 默认情况下提示框是开启的。可以通过插件指令进行关闭。
 *
 * 插件指令（显示）：show_treasure_hud
 * 插件指令（隐藏）：hide_treasure_hud
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_TreasureHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TreasureHud');   
    Moghunter.src_image = String(Moghunter.parameters['资源-浮动框']);
    Moghunter.thud_pos_x = Number(Moghunter.parameters['平移-浮动框 X'] || 555);
	Moghunter.thud_pos_y = Number(Moghunter.parameters['平移-浮动框 Y'] || 500);
	Moghunter.thud_text_x = Number(Moghunter.parameters['平移-物品名 X'] || 78);
	Moghunter.thud_text_y = Number(Moghunter.parameters['平移-物品名 Y'] || 22);
	Moghunter.thud_icon_x = Number(Moghunter.parameters['平移-图标 X'] || 42);
	Moghunter.thud_icon_y = Number(Moghunter.parameters['平移-图标 Y'] || 22);	
	Moghunter.thud_duration = Number(Moghunter.parameters['持续时间'] || 90);
	Moghunter.thud_gold_index = Number(Moghunter.parameters['金钱图标编号'] || 163);
	Moghunter.thud_fontsize = Number(Moghunter.parameters['字体大小'] || 20);
	 
//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_thud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_thud_sys_initialize.call(this);
	this._thud_visible = true;
	this._thud_int = false;	
};

//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_thud_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_thud_temp_initialize.call(this);
	this._thud_sprite = [false,0,0];
	this._thud_data = [false,null,0];	
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================

//==============================
// * Command125
//==============================
var _alias_mog_thud_command125 = Game_Interpreter.prototype.command125;
Game_Interpreter.prototype.command125 = function() {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command125.call(this);
    return true;
};

//==============================
// * Command126
//==============================
var _alias_mog_thud_command126 = Game_Interpreter.prototype.command126;
Game_Interpreter.prototype.command126 = function() {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command126.call(this);
    return true;
};

//==============================
// * Command127
//==============================
var _alias_mog_thud_command127 = Game_Interpreter.prototype.command127;
Game_Interpreter.prototype.command127 = function() {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command127.call(this);
    return true;
};

//==============================
// * Command128
//==============================
var _alias_mog_thud_command128 = Game_Interpreter.prototype.command128;
Game_Interpreter.prototype.command128 = function() {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command128.call(this);
    return true;
};


//=============================================================================
// ** Game_Party
//=============================================================================

//==============================
// * Gain Item
//==============================
var _alias_mog_thud_gparty_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
	_alias_mog_thud_gparty_gainItem.call(this,item, amount, includeEquip);
	if ($gameSystem._thud_visible && !this.inBattle() && $gameTemp._thud_int) {$gameTemp._thud_data = [true,item,amount]};
    $gameTemp._thud_int = false;
};

//==============================
// * Gain Gold
//==============================
var _alias_mog_thud_gainGold = Game_Party.prototype.gainGold;
Game_Party.prototype.gainGold = function(amount) {
	_alias_mog_thud_gainGold.call(this,amount);
	if ($gameSystem._thud_visible && !this.inBattle()) {$gameTemp._thud_data = [true,"gold",amount]};
    $gameTemp._thud_int = false;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_thud_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_thud_pluginCommand.call(this,command, args);
	if (command === "show_treasure_hud")  { $gameSystem._thud_visible = true};
	if (command === "hide_treasure_hud")  { $gameSystem._thud_visible = false};
	return true;
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// * Create Upper Layer
//==============================
var _alias_mog_thud_sprmap_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
Spriteset_Map.prototype.createUpperLayer = function() {
    _alias_mog_thud_sprmap_createUpperLayer.call(this);
	this.create_treasure_hud();
};

//==============================
// * Create Treasure Hud
//==============================
Spriteset_Map.prototype.create_treasure_hud = function() {
	this._treasure_hud = new Treasure_Hud();
	this.addChild(this._treasure_hud);
}; 

//=============================================================================
// * Treasure_Hud
//=============================================================================
function Treasure_Hud() {
    this.initialize.apply(this, arguments);
};

Treasure_Hud.prototype = Object.create(Sprite.prototype);
Treasure_Hud.prototype.constructor = Treasure_Hud;

//==============================
// * Initialize
//==============================
Treasure_Hud.prototype.initialize = function() {	
    Sprite.prototype.initialize.call(this);	
    this._pos_x = Moghunter.thud_pos_x;
	this._pos_y = Moghunter.thud_pos_y;	
    this.load_img();
	this.create_sprites();
	this.opacity = $gameTemp._thud_sprite[1];
	this.refresh();
};

//==============================
// * Load Img
//==============================
Treasure_Hud.prototype.load_img = function() {
	this._layout_img = ImageManager.loadSystem(Moghunter.src_image);
	this._icon_img = ImageManager.loadSystem("IconSet");
};

//==============================
// * Create Layout
//==============================
Treasure_Hud.prototype.create_layout = function() {
	this._layout = new Sprite(this._layout_img);
	this._layout.x = this._pos_x;
	this._layout.y = this._pos_y;
	this.addChild(this._layout);
};

//==============================
// * Create Text
//==============================
Treasure_Hud.prototype.create_text = function() {
	this._text = new Sprite(new Bitmap(160,32));
	this._text.x = this._pos_x + Moghunter.thud_text_x;
	this._text.y = this._pos_y + Moghunter.thud_text_y;
	this._text.bitmap.fontSize = Moghunter.thud_fontsize;
	this.addChild(this._text);
};

//==============================
// * Create Icon
//==============================
Treasure_Hud.prototype.create_icon = function() {
	this._icon = new Sprite(this._icon_img);
	this._icon.x = this._pos_x + Moghunter.thud_icon_x;
	this._icon.y = this._pos_y + Moghunter.thud_icon_y;
	this.addChild(this._icon);
};

//==============================
// * Create Sprites
//==============================
Treasure_Hud.prototype.create_sprites = function() {
  	 this.create_layout();
	 this.create_icon();
     this.create_text();	 
};

//==============================
// * Item
//==============================
Treasure_Hud.prototype.item = function() {
     return $gameTemp._thud_data[1];
};

//==============================
// * Number
//==============================
Treasure_Hud.prototype.number = function() {
     return $gameTemp._thud_data[2];
};

//==============================
// * Name
//==============================
Treasure_Hud.prototype.name = function() {
	 if (this.item() === "gold") {return ""};
     return "x " + $gameTemp._thud_data[1].name;
};

//==============================
// * Refresh Init
//==============================
Treasure_Hud.prototype.refresh_init = function() {
  $gameTemp._thud_data[0] = false;
  $gameTemp._thud_sprite = [true,0,0];
  this.x = -50;
  this.opacity = 0;
};

//==============================
// * Refresh
//==============================
Treasure_Hud.prototype.refresh = function() {
	if ($gameTemp._thud_data[0]) {this.refresh_init()};	
	if (!this.item()) {return};
    this.refresh_icon();
	this.refresh_name();
};

//==============================
// * Refresh Icon
//==============================
Treasure_Hud.prototype.refresh_icon = function() { 
    if (this.item() === "gold") {var iconIndex = Moghunter.thud_gold_index;
    } else {var iconIndex = this.item().iconIndex};
    var sx = iconIndex % 16 * 32;
    var sy = Math.floor(iconIndex / 16) * 32;
    this._icon.setFrame(sx, sy, 32, 32);
};

//==============================
// * Refresh Name
//==============================
Treasure_Hud.prototype.refresh_name = function() {
    this._text.bitmap.clear();
	var text = String(this.number() + " " + this.name());
	this._text.bitmap.drawText(text,0,0,160,32,"left");
};

//==============================
// * Update visible
//==============================
Treasure_Hud.prototype.update_position = function() {
	$gameTemp._thud_sprite[1] += 1;
    if ($gameTemp._thud_sprite[1] < 20) {
		this.opacity += 13;	this.x += 2.5;
	} else if ($gameTemp._thud_sprite[1] < 20 + Moghunter.thud_duration) {
		this.x = 0;	this.opacity = 255;
	} else { 
	    this.opacity -= 13;	this.x += 2.5;
		if (this.opacity === 0) {$gameTemp._thud_sprite[0] = false};
	};
};

//==============================
// * Update
//==============================
Treasure_Hud.prototype.update = function() {	
    Sprite.prototype.update.call(this);	
	if ($gameTemp._thud_sprite[0]) {this.update_position()
	} else {this.opacity = 0};
	if ($gameTemp._thud_data[0]) {this.refresh()};
};