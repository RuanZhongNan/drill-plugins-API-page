//=============================================================================
// MOG_MapNameHud.js
//=============================================================================

/*:
 * @plugindesc (v1.0) 画面 - 地图浮动框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-浮动框
 * @desc 图浮动框的图片资源。
 * @default MapName
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 平移-浮动框 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 250
 *
 * @param 平移-浮动框 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 32
 *
 * @param 平移-地图名 X
 * @desc 以浮动框为基准，x轴方向平移，单位像素。
 * @default 105
 *
 * @param 平移-地图名 Y
 * @desc 以浮动框为基准，y轴方向平移，单位像素。
 * @default 30
 *
 * @param 持续时间
 * @desc 浮动框的持续时间。120表示120帧后浮动框消失。
 * （1秒60帧）
 * @default 120
 *
 * @param 字体大小
 * @desc 浮动框的字体大小。
 * @default 20
 *	 
 * @help  
 * =============================================================================
 * +++ MOG Map Name Hud(v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 进入地图时会弹出浮动框表示地图的名字。插件用于美化地图浮动框。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 使用地图浮动框，需要配置资源文件：
 *
 * 资源-浮动框
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
　　Imported.MOG_MapNameHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_MapNameHud');   
    Moghunter.mhud_pos_x = Number(Moghunter.parameters['平移-浮动框 X'] || 250);
	Moghunter.mhud_pos_y = Number(Moghunter.parameters['平移-浮动框 Y'] || 32);
	Moghunter.mhud_text_x = Number(Moghunter.parameters['平移-地图名 X'] || 105);
	Moghunter.mhud_text_y = Number(Moghunter.parameters['平移-地图名 Y'] || 30);
	Moghunter.mhud_duration = Number(Moghunter.parameters['持续时间'] || 120);
	Moghunter.mhud_fontsize = Number(Moghunter.parameters['字体大小'] || 20);
	Moghunter.src_MapName = String(Moghunter.parameters['资源-浮动框']);

//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_mhud_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_mhud_temp_initialize.call(this);
	this._mhud_sprite = [false,0,0];
	this._mhud_data = [false,null,0];	
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// * Create Upper Layer
//==============================
var _alias_mog_mhud_sprmap_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
Spriteset_Map.prototype.createUpperLayer = function() {
    _alias_mog_mhud_sprmap_createUpperLayer.call(this);
	this.create_mapname_hud();
};

//==============================
// * Create Map Name HUD
//==============================
Spriteset_Map.prototype.create_mapname_hud = function() {
	this._mapNameHud = new Map_Name_Hud();
	this.addChild(this._mapNameHud);
	if (this.needRefreshMhud()) {
		$gameTemp._mhud_data[0] = true;
		$gameTemp._mhud_data[1] = $gameMap.displayName();
	};
	if ($gameTemp._mhud_data[2] != $gameMap._mapId) {$gameTemp._mhud_sprite = [false,0,0]};
	$gameTemp._mhud_data[2] = $gameMap._mapId;
}; 

//==============================
// * Need Refresh MHud
//==============================
Spriteset_Map.prototype.needRefreshMhud = function() {
	if (!$gameMap.isNameDisplayEnabled()) {return false};
	if ($gameTemp._mhud_data[2] === $gameMap._mapId) {return false};
	if (!$gameMap.displayName()) {return false};
	return true;
};

//=============================================================================
// * Map_Name_Hud
//=============================================================================
function Map_Name_Hud() {
    this.initialize.apply(this, arguments);
};

Map_Name_Hud.prototype = Object.create(Sprite.prototype);
Map_Name_Hud.prototype.constructor = Map_Name_Hud;

//==============================
// * Initialize
//==============================
Map_Name_Hud.prototype.initialize = function() {	
    Sprite.prototype.initialize.call(this);	
    this._pos_x = Moghunter.mhud_pos_x;
	this._pos_y = Moghunter.mhud_pos_y;	
    this.load_img();
	this.create_sprites();
	this.opacity = $gameTemp._mhud_sprite[1];
	this.refresh();
};

//==============================
// * Load Img
//==============================
Map_Name_Hud.prototype.load_img = function() {
	this._layout_img = ImageManager.loadSystem(Moghunter.src_MapName);
};

//==============================
// * Create Layout
//==============================
Map_Name_Hud.prototype.create_layout = function() {
	this._layout = new Sprite(this._layout_img);
	this._layout.x = this._pos_x;
	this._layout.y = this._pos_y;
	this.addChild(this._layout);
};

//==============================
// * Create Text
//==============================
Map_Name_Hud.prototype.create_text = function() {
	this._text = new Sprite(new Bitmap(160,32));
	this._text.x = this._pos_x + Moghunter.mhud_text_x;
	this._text.y = this._pos_y + Moghunter.mhud_text_y;
	this._text.bitmap.fontSize = Moghunter.mhud_fontsize;
	this.addChild(this._text);
};

//==============================
// * Create Sprites
//==============================
Map_Name_Hud.prototype.create_sprites = function() {
  	 this.create_layout();
     this.create_text();	 
};

//==============================
// * Name
//==============================
Map_Name_Hud.prototype.name = function() {
     return $gameTemp._mhud_data[1];
};

//==============================
// * Refresh Init
//==============================
Map_Name_Hud.prototype.refresh_init = function() {
  $gameTemp._mhud_data[0] = false;
  $gameTemp._mhud_sprite = [true,0,0];
  this.x = -50;
  this.opacity = 0;
};

//==============================
// * Refresh
//==============================
Map_Name_Hud.prototype.refresh = function() {
	if ($gameTemp._mhud_data[0]) {this.refresh_init()};	
	if (!this.name()) {return};
	this.refresh_name();
};

//==============================
// * Refresh Name
//==============================
Map_Name_Hud.prototype.refresh_name = function() {
    this._text.bitmap.clear();
	this._text.bitmap.drawText(this.name(),0,0,160,32,"center");
};

//==============================
// * Update visible
//==============================
Map_Name_Hud.prototype.update_position = function() {
	$gameTemp._mhud_sprite[1] += 1;
    if ($gameTemp._mhud_sprite[1] < 30) {
		this.opacity += 8.5;	this.x += 1.6;
	} else if ($gameTemp._mhud_sprite[1] < 20 + Moghunter.mhud_duration) {
		this.x = 0;	this.opacity = 255;
	} else { 
	    this.opacity -= 8.5;	this.x += 1.6;
		if (this.opacity === 0) {$gameTemp._mhud_sprite[0] = false};
	};
};

//==============================
// * Update
//==============================
Map_Name_Hud.prototype.update = function() {	
    Sprite.prototype.update.call(this);	
	if ($gameTemp._mhud_sprite[0]) {this.update_position()
	} else {this.opacity = 0};
	if ($gameTemp._mhud_data[0]) {this.refresh()};
};

//=============================================================================
// * Refresh
//=============================================================================

//==============================
// * Refresh
//==============================
Window_MapName.prototype.refresh = function() {
	 this.contents.clear(); 
};