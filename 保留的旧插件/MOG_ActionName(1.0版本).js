//=============================================================================
// MOG_ActionName.js
//=============================================================================

/*:
 * @plugindesc (v1.0) 技能 - 招式名浮动框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-框架图
 * @desc 招式名框架的图片资源。
 * @default 招式名浮动框-框架
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 平移-外框 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 420
 *
 * @param 平移-外框 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 64
 *
 * @param 平移-招式文字 X
 * @desc 以外框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-招式文字 Y
 * @desc 以外框为基准，y轴方向平移，单位像素。（可为负数）
 * @default 24 
 *
 * @param 平移-招式图标 X
 * @desc 以外框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0 
 *
 * @param 平移-招式图标 Y
 * @desc 以外框为基准，y轴方向平移，单位像素。（可为负数）
 * @default -4
 *
 * @param 字体大小
 * @type number
 * @min 1
 * @desc 招式字体的大小。
 * @default 22
 *
 * @help  
 * =============================================================================
 * +++ MOG - Action Name (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 发起某一技能或者使用物品时，会飘出窗口，提示招式的名字。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 使用招式名浮动框，需要配置资源文件：（system文件夹）
 *
 * 资源-框架图
 *
 * （浮动框的图片不一定必须与示例的大小一致，插件只要确定位置就能自动
 * 分层显示出来）
 * （ActionName_frame作为框架会被切成上中下三等分，最下部分会作为框背
 * 景进行拉伸，用于显示长文字）
 *      
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 如果某个招式或者物品不需要飘出窗口，则在其注释中，必须含有关键字：
 * 
 * Disable Name
 * 
 * （单独一行，关键字前后不能有多余的字符。）
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ActionName = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ActionName');
    Moghunter.skillName_x = Number(Moghunter.parameters['平移-外框 X'] || 420);
    Moghunter.skillName_y = Number(Moghunter.parameters['平移-外框 Y'] || 64);
    Moghunter.skillName_name_x = Number(Moghunter.parameters['平移-招式文字 X'] || 0);
    Moghunter.skillName_name_y = Number(Moghunter.parameters['平移-招式文字 Y'] || 24);
    Moghunter.skillName_icon_x = Number(Moghunter.parameters['平移-招式图标 X'] || 0);
    Moghunter.skillName_icon_y = Number(Moghunter.parameters['平移-招式图标 Y'] || -4);
    Moghunter.skillName_FontSize = Number(Moghunter.parameters['字体大小'] || 22);
	Moghunter.src_ActionName_frame = String(Moghunter.parameters['资源-框架图']);
	
//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_skillname_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function() {
	_alias_mog_skillname_initialize.call(this);
	this._skillNameData = [false,null,false];
};

//=============================================================================
// ** Battle Manager
//=============================================================================

//==============================
// ** Start Action
//==============================
var _mog_skillName_bmngr_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    this.setSkillName();
	_mog_skillName_bmngr_startAction.call(this);
};

//==============================
// * set Skill Name
//==============================
BattleManager.setSkillName = function() {
    if (!this._subject.currentAction() || !this._subject.currentAction().item()) {return};
	var item = this._subject.currentAction().item();
	var notes = item.note.split(/[\r\n]+/);
	var enableName = true;
    notes.forEach(function(note) {
    if (note == "Disable Name" ) {enableName = false};
	},this);		
	if (enableName) {$gameTemp._skillNameData = [true,item,true]};
};

//==============================
// * End Turn
//==============================
var _mog_skillName_bmngr_endAction  = BattleManager.endAction;
BattleManager.endAction = function() {
	_mog_skillName_bmngr_endAction.call(this);
	$gameTemp._skillNameData = [false,null,false];
};

//=============================================================================
// ** SpritesetBattle
//=============================================================================

//==============================
// * create Pictures
//==============================
var _mog_skillName_sprbattle_createPictures = Spriteset_Battle.prototype.createPictures;
Spriteset_Battle.prototype.createPictures = function() {
	this._spriteSkillName = new SpriteSkillName();
	this.addChild(this._spriteSkillName);
	_mog_skillName_sprbattle_createPictures.call(this);
};

//=============================================================================
// * Sprite Skill Name
//=============================================================================
function SpriteSkillName() {
    this.initialize.apply(this, arguments);
};

SpriteSkillName.prototype = Object.create(Sprite.prototype);
SpriteSkillName.prototype.constructor = SpriteSkillName;

//==============================
// * Initialize
//==============================
SpriteSkillName.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
    this.loadImages();
	this.createLayout();
	this.createName();
	this.createIcon();
};

//==============================
// * Load Images
//==============================
SpriteSkillName.prototype.loadImages = function() {
    this._iconImg = ImageManager.loadSystem("IconSet");
	this._layoutImg = ImageManager.loadSystem(Moghunter.src_ActionName_frame); 
};

//==============================
// * Item
//==============================
SpriteSkillName.prototype.item = function() {
    return $gameTemp._skillNameData[1];	
};

//==============================
// * is Visible
//==============================
SpriteSkillName.prototype.isVisible = function() {
    return $gameTemp._skillNameData[2];
};

//==============================
// * get Name Data
//==============================
SpriteSkillName.prototype.getNameData = function() {
	this._nameData = [0,0,0,0];
	this._nameData[0] = this._layoutImg.width;
	this._nameData[1] = Math.floor(this._layoutImg.height / 3);
	this._nameData[2] = Moghunter.skillName_x;
	this._nameData[3] = Moghunter.skillName_y;
	this._name.bitmap = new Bitmap(160,32);
	this._name.bitmap.fontSize = Moghunter.skillName_FontSize;
	this._name.y = this._nameData[3] + Moghunter.skillName_name_y;
	this._icon.x = this._nameData[2] + Moghunter.skillName_icon_x;
	this._icon.y = this._nameData[3] + Moghunter.skillName_icon_y;	
};

//==============================
// * refresh Skill Name
//==============================
SpriteSkillName.prototype.refreshSkillName = function() {
	$gameTemp._skillNameData[0] = false;
	this._name.bitmap.clear();
	this._layout.opacity = 0;
	if (!this.item()) {return};
	var text = this.item().name;
	var textsize = ((text.length * 7) + this._nameData[0]);
	var wsize = (Math.min(Math.max(textsize,48),160));
    var wposX = ((wsize / 2) + Math.floor(this._nameData[0] / 2));	
    for (var i = 0; i < this._layout.length; i++) {
		 this._layout[i].x = this._nameData[2];
		 this._layout[i].y = this._nameData[3];		
	     if (i === 0) {
		     this._layout[i].setFrame(0,0,this._nameData[0],this._nameData[1]);
		     this._layout[i].x -= wposX;			 
		 } else if (i === 1) {
		     this._layout[i].setFrame(0,this._nameData[1],this._nameData[0],this._nameData[1]);
		     this._layout[i].x += wposX;	
		 } else {
		     this._layout[i].setFrame(0,this._nameData[1] * 2,this._nameData[0],this._nameData[1]);
			 this._layout[i].scale.x = wsize / this._nameData[0];
		 };
	};		
	this._name.bitmap.drawText(this.item().name,0,0,160,32,"center")	
	this._name.x = this._nameData[2] + Moghunter.skillName_name_x;
	var w = Window_Base._iconWidth;
	var h = Window_Base._iconHeight;
	var sx = this.item().iconIndex % 16 * w;
	var sy = Math.floor(this.item().iconIndex / 16) * h;
    this._icon.setFrame(sx,sy,w,h);
};

//==============================
// * create Layout
//==============================
SpriteSkillName.prototype.createLayout = function() {	
	this._layout = [];
    for (var i = 0; i < 3; i++) {
		this._layout[i] = new Sprite(this._layoutImg);
		this._layout[i].anchor.x = 0.5;
		this._layout[i].opacity = 0;
		this._layout[i].z = 20;
		this.addChild(this._layout[i]);
	};	
};

//==============================
// * create Name
//==============================
SpriteSkillName.prototype.createName = function() {
    this._name = new Sprite();
	this._name.x = this._layout[0].x + Moghunter.skillName_name_x;
	this._name.y = this._layout[0].y + Moghunter.skillName_name_y;
	this._name.anchor.x = 0.5;
	this._name.z = 21;
	this._name.opacity = 0;
	this.addChild(this._name);

};

//==============================
// * create Icon
//==============================
SpriteSkillName.prototype.createIcon = function() {
   this._icon = new Sprite(this._iconImg);
   this._icon.x = this._layout[0].x + Moghunter.skillName_icon_x;
   this._icon.y = this._layout[0].y + Moghunter.skillName_icon_y;
   this._icon.anchor.x = 0.5;
   this._icon.z = 21;
   this._icon.opacity = 0;
   this.addChild(this._icon);
};

//==============================
// * Update
//==============================
SpriteSkillName.prototype.updateVisible = function() {
	if (this.isVisible()) {
	    this._layout[0].opacity += 20;
	} else {
	    this._layout[0].opacity -= 20;
	};
	for (var i = 1; i < this._layout.length; i++) {
		this._layout[i].opacity = this._layout[0].opacity;
	};
	this._name.opacity = this._layout[0].opacity;
	this._icon.opacity = this._layout[0].opacity;
};

//==============================
// * Update
//==============================
SpriteSkillName.prototype.update = function() {
    Sprite.prototype.update.call(this);	
    if (!this._nameData) {
		if (this._layoutImg.isReady()) {this.getNameData()};
		return;
	};
	if ($gameTemp._skillNameData[0]) {this.refreshSkillName()};
	this.updateVisible();
};