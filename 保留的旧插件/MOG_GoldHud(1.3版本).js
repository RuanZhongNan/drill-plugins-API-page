//=============================================================================
// MOG_GoldHud.js
//=============================================================================

/*:
 * @plugindesc (v1.3) 画面 - 金钱固定框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 初始显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。
 * @default true 
 *
 * @param 资源-固定框
 * @desc 金钱外框的图片资源。
 * @default 金钱固定框-框
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 资源-金钱数值
 * @desc 金钱数值的图片资源。
 * @default 金钱固定框-数值
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 平移-固定框 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 555
 *
 * @param 平移-固定框 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 560
 *
 * @param 平移-金钱数值 X
 * @desc 以固定框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 240
 *
 * @param 平移-金钱数值 Y
 * @desc 以固定框为基准，y轴方向平移，单位像素。（可为负数）
 * @default 24
 *
 * @param 最小透明度
 * @type number
 * @min 0
 * @desc 玩家在地图中进入被固定框挡住的区域时，框会变透明。
 * 0表示完全透明，255表示完全不透明
 * @default 60
 *
 * @param 金钱数值最大显示位
 * @type number
 * @min 1
 * @desc 注意,这里是只显示位数,不负责破限。填12表示最大显示12位数。
 * 如果你使用了金钱破限脚本，请及时修正你想要显示的最大位数。
 * @default 8
 *
 * @help  
 * =============================================================================
 * +++ MOG Gold Hud (v1.3) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 显示金币数值的固定框。固定框是长期显示的ui窗口，与浮动框不同。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 使用金币显示框，需要配置资源文件：（img/system文件夹）
 *
 * 资源-固定框
 * 资源-金钱数值
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 金币显示框可以通过插件指令进行关闭。
 *
 * 插件指令（显示）：show_gold_hud
 * 插件指令（隐藏）：hide_gold_hud
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * 添加了金钱数值最大显示位选项。
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_GoldHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_GoldHud');
   
    // HUD POSITION
	Moghunter.ghud_pos_x = Number(Moghunter.parameters['平移-固定框 X'] || 555);
	Moghunter.ghud_pos_y = Number(Moghunter.parameters['平移-固定框 Y'] || 560);
	Moghunter.ghud_number_pos_x = Number(Moghunter.parameters['平移-金钱数值 X'] || 240);
	Moghunter.ghud_number_pos_y = Number(Moghunter.parameters['平移-金钱数值 Y'] || 24);
	Moghunter.ghud_fade_limit = Number(Moghunter.parameters['最小透明度'] || 60);
	Moghunter.ghud_hudvisible = String(Moghunter.parameters['初始显示'] || "true");
	Moghunter.Gold_A = String(Moghunter.parameters['资源-固定框']);
	Moghunter.Gold_B = String(Moghunter.parameters['资源-金钱数值']);
    Moghunter.Gold_display = Number(Moghunter.parameters['金钱数值最大显示位'] || 8);		
	
//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_ghud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_ghud_sys_initialize.call(this);
	this._ghud_visible = String(Moghunter.ghud_hudvisible) === "true" ? true : false;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_goldhud_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_goldhud_pluginCommand.call(this,command, args)
	if (command === "show_gold_hud")  { $gameSystem._ghud_visible = true};
	if (command === "hide_gold_hud")  { $gameSystem._ghud_visible = false};
	return true;
};

//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * Screen RealX
//==============================
Game_CharacterBase.prototype.screen_realX = function() {
    return this.scrolledX() * $gameMap.tileWidth()
};

//==============================
// * Screen RealY
//==============================
Game_CharacterBase.prototype.screen_realY = function() {
    return this.scrolledY() * $gameMap.tileHeight()
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// * Create Upper Layer
//==============================
var _alias_mog_ghud_sprmap_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
Spriteset_Map.prototype.createUpperLayer = function() {
    _alias_mog_ghud_sprmap_createUpperLayer.call(this);
	this.create_gold_hud();
};

//==============================
// * Create Gold Hud
//==============================
Spriteset_Map.prototype.create_gold_hud = function() {
	this._gold_hud = new Gold_Hud();
	this.addChild(this._gold_hud);
}; 

//=============================================================================
// * Actor_Hud
//=============================================================================
function Gold_Hud() {
    this.initialize.apply(this, arguments);
};

Gold_Hud.prototype = Object.create(Sprite.prototype);
Gold_Hud.prototype.constructor = Gold_Hud;

//==============================
// * Initialize
//==============================
Gold_Hud.prototype.initialize = function() {	
    Sprite.prototype.initialize.call(this);	
	this._hud_size = [-1,-1,-1,-1];
    this.load_img();
	this.opacity = 255;
};

//==============================
// * Load Img
//==============================
Gold_Hud.prototype.load_img = function() {
	this._layout_img = ImageManager.loadSystem(Moghunter.Gold_A);
	this._number_img = ImageManager.loadSystem(Moghunter.Gold_B);
};

//==============================
// * Create Layout
//==============================
Gold_Hud.prototype.create_layout = function() {
	this._layout = new Sprite(this._layout_img);
	this._layout.x = this._pos_x;
	this._layout.y = this._pos_y;
	this.addChild(this._layout);
};
	
//==============================
// * Refresh Data
//==============================
Gold_Hud.prototype.refresh_data = function() {
     this._hud_size[0] = Moghunter.ghud_pos_x - ($gameMap.tileWidth() / 2);
     this._hud_size[1] = Moghunter.ghud_pos_y - $gameMap.tileHeight();
     this._hud_size[2] = Moghunter.ghud_pos_x + this._layout_img.width - $gameMap.tileWidth();
     this._hud_size[3] = Moghunter.ghud_pos_y + this._layout_img.height;	 
	 this._pos_x = Moghunter.ghud_pos_x;
	 this._pos_y = Moghunter.ghud_pos_y;
  	 this.create_layout();
     this.create_number();	 
};

//==============================
// * Create Number
//==============================
Gold_Hud.prototype.create_number = function() {
	this._number = [];
	this._number_img_data = [this._number_img.width,this._number_img.height,
	                      this._number_img.width / 10, this._number_img.height / 2,
						  this._pos_x + Moghunter.ghud_number_pos_x,
						  this._pos_y + Moghunter.ghud_number_pos_y,
						  ];
	for (var i = 0; i < Moghunter.Gold_display; i++) {
	   this._number[i] = new Sprite(this._number_img);
	   this._number[i].visible = false;
	   this._number[i].x = this._number_img_data[4];
	   this._number[i].y = this._number_img_data[5];
	   this.addChild(this._number[i]);
	};	
	this._number_old = $gameParty.gold();	
	this.refresh_number(this._number,this._number_old,this._number_img_data,this._number_img_data[4],0);	
};

//==============================
// * Update Dif
//==============================
Gold_Hud.prototype.update_dif = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Refresh Number
//==============================
Gold_Hud.prototype.refresh_number = function(sprites,value,img_data,x,center) {
    numbers = Math.abs(value).toString().split("");  
   	for (var i = 0; i < sprites.length ; i++) {sprites[i].visible = false;
	   if (i > numbers.length) {return};
	   var n = Number(numbers[i]);
	   sprites[i].setFrame(n * img_data[2], 0, img_data[2], img_data[1]);
	   sprites[i].visible = true;
	   if (center === 0) {
     	   var nx = -(img_data[2] * i) + (img_data[2] * numbers.length);
	   } else {
		   var nx = -(img_data[2] * i) + ((img_data[2] / 2) * numbers.length);
	   };
	   sprites[i].x = x - nx;
    };	
};

//==============================
// * Update Number
//==============================
Gold_Hud.prototype.update_number = function() {
	 var dif_number = this.update_dif(this._number_old,$gameParty.gold(),10)
	 if (this._number_old != dif_number) {this._number_old = dif_number;
	 this.refresh_number(this._number,this._number_old,this._number_img_data,this._number_img_data[4],0);};
};

//==============================
// * Update visible
//==============================
Gold_Hud.prototype.update_visible = function() {
	this.visible = $gameSystem._ghud_visible;
	if (this.is_hud_visible()) {this.opacity += 10}	 
	else {this.opacity -= 10};
};

//==============================
// * Is Hud Visible
//==============================
Gold_Hud.prototype.is_hud_visible = function() {
	if ($gameMessage.isBusy()) {return false};
	if (!$gameSystem._ghud_visible) {return false};
	if ($gamePlayer.screen_realX() < this._hud_size[0]) {return true};
	if ($gamePlayer.screen_realX() > this._hud_size[2]) {return true};
	if ($gamePlayer.screen_realY() < this._hud_size[1]) {return true};
	if ($gamePlayer.screen_realY() > this._hud_size[3]) {return true};
	if (this.opacity < Moghunter.ghud_fade_limit) {return true};
	return false;
};

//==============================
// * Update
//==============================
Gold_Hud.prototype.update = function() {	
    Sprite.prototype.update.call(this);	
	if (this._hud_size[0] === -1 && this._layout_img.isReady()) {this.refresh_data()};
	if (this._hud_size[0] === -1) {return};
	this.update_visible();
	this.update_number();
};