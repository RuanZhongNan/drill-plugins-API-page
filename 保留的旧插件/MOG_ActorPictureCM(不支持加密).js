//=============================================================================
// MOG_ActorPictureCM.js
//=============================================================================

/*:
 * @plugindesc (v1.3) 战斗 - 角色图像
 * @author Moghunter （Drill_up翻译）
 *
 * @param 是否使用角色图
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-角色图 X
 * @desc 0表示在最左边，816表示在最右边。x轴方向平移，单位像素。
 * @default 500
 *
 * @param 平移-角色图 Y
 * @desc 注意，0表示在最下面，624表示在最上面。y轴方向平移，单位像素。
 * @default 0 
 *
 * @param 是否使用角色背景图
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 平移-角色背景图 X
 * @desc 默认靠在最右边，在此基础x轴方向平移，单位像素。
 * @default 0
 *
 * @param 平移-角色背景图 Y
 * @desc 默认贴在最上面，在此基础y轴方向平移，单位像素。
 * @default 0
 *
 * @help  
 * =============================================================================
 * +++ MOG - Actor Picture CM (v1.4) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 战斗时选择一个玩家，会出现两张图片用于描述角色，一个为角色图片，
 * 另一个为背景渲染。
 * ★★需要关联外部png文件★★
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 一旦开启了此插件，所有角色都必须包含以下资源。
 * 需要含有以下文件在 img/picture/ 中：
 *
 * Actor_1.png （角色图，数字1表示为第1个角色，一一对应）
 * Actor_2.png
 * Actor_3.png
 * ……
 *
 * Actor_1b.png（角色背景图，数字1表示为第1个角色，一一对应）
 * Actpr_2b.png
 * Actpr_3b.png
 * ……
 *
 * 如果没有相应的图片资源，你可以用一张空白的全透明的png图片代替。
 * 
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ActorPictureCM = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ActorPictureCM');
    Moghunter.actor_cm1_visible = String(Moghunter.parameters['是否使用角色图'] || "true");
	Moghunter.actor_cm_x = Number(Moghunter.parameters['平移-角色图 X'] || 500);
    Moghunter.actor_cm_y = Number(Moghunter.parameters['平移-角色图 Y'] || 0);
	Moghunter.actor_cm2_visible = String(Moghunter.parameters['是否使用角色背景图'] || "true");
	Moghunter.actor_cm2_x = Number(Moghunter.parameters['平移-角色背景图 X'] || 0);
    Moghunter.actor_cm2_y = Number(Moghunter.parameters['平移-角色背景图 Y'] || 0);
	Moghunter.actor_cm_z = Number(Moghunter.parameters['Z Mode'] || 0);
	
//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_actorcm_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_actorcm_temp_initialize.call(this);
    this._actor_cm_visible = false;
};	
	
//=============================================================================
// ** Spriteset Battle
//=============================================================================

//==============================
// * CreateSpriteset
//==============================
var _alias_mog_actorcm_createLowerLayer = Spriteset_Battle.prototype.createLowerLayer;
Spriteset_Battle.prototype.createLowerLayer = function() {
   _alias_mog_actorcm_createLowerLayer.call(this);
   if (Moghunter.actor_cm_z === 0) {
      this.actorPictureCM = new Actor_CMPicture();
      this.actorPictureCM.z = 20;
      this.addChild(this.actorPictureCM);
   };
};

//=============================================================================
// * Actor_CMPicture
//=============================================================================
function Actor_CMPicture() {
    this.initialize.apply(this, arguments);
};

Actor_CMPicture.prototype = Object.create(Sprite.prototype);
Actor_CMPicture.prototype.constructor = Actor_CMPicture;

//==============================
// * Initialize
//==============================
Actor_CMPicture.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
    this.load_actor_cm_pictures();
	this.z = 20;
	if (String(Moghunter.actor_cm2_visible) === "true") {
  	   this._sprite_actor_cm_lay = new Sprite();
	   this._sprite_actor_cm_lay.x = Graphics.boxWidth + Moghunter.actor_cm2_x;
	   this._sprite_actor_cm_lay.y = Moghunter.actor_cm2_y;
	   this._sprite_actor_cm_lay.opacity = 0;
	   this._sprite_actor_cm_lay.visible = false;
       this.addChild(this._sprite_actor_cm_lay);	
	};	
	if (String(Moghunter.actor_cm1_visible) === "true") {
	   this._sprite_actor_cm = new Sprite();
	   this._sprite_actor_cm.anchor.x = 0.5;
	   this._sprite_actor_cm.y = this._actor_cm_data[2];
	   this.addChild(this._sprite_actor_cm);
	};
};

//==============================
// * Load Actor CM Pictures
//==============================	
Actor_CMPicture.prototype.load_actor_cm_pictures = function() {
	this._sprite_actor_cm_data = [Graphics.width,0,0]
	this._actor_cm_data = [null,Moghunter.actor_cm_x,Moghunter.actor_cm_y];
	this._actor_cm_data[3] = this._actor_cm_data[1] - 100;
	this._actor_cm_img = [];
	var members = $gameParty.battleMembers();
	if (String(Moghunter.actor_cm1_visible) === "true") {		
		for (var i = 0; i < members.length; i++) {
			this._actor_cm_img[members[i]._actorId] = ImageManager.loadPicture("Actor_" + members[i]._actorId)
		};
	};
	if (String(Moghunter.actor_cm2_visible) === "true") {
		this._actor_cm2_img = [];
		for (var i = 0; i < members.length; i++) {
			this._actor_cm2_img[members[i]._actorId] = ImageManager.loadPicture("Actor_" + members[i]._actorId + "b")
		};		
	};
};

//==============================
// * Update
//==============================
Actor_CMPicture.prototype.update = function() {
	Sprite.prototype.update.call(this);
	if ($gameTemp._actor_cm_visible) {
		if (this._actor_cm_data[0] != BattleManager.actor()) {this.actor_cm_refresh()};	
        if (this._sprite_actor_cm) {this.update_actor_cm_show()};
		if (this._sprite_actor_cm_lay) {this.update_actor_cm_lay_show()};
	} else {
        if (this._sprite_actor_cm) {this.update_actor_cm_hide()};
		if (this._sprite_actor_cm_lay) {this.update_actor_cm_lay_hide()};
	};
};

//==============================
// * Update Actor CM Show
//==============================
Actor_CMPicture.prototype.update_actor_cm_show = function() {	
	this._sprite_actor_cm.opacity += 15;
	if (this._sprite_actor_cm.x < this._actor_cm_data[1])
	   {this._sprite_actor_cm.x += 7;
	   	   if (this._sprite_actor_cm.x > this._actor_cm_data[1]) {this._sprite_actor_cm.x = this._actor_cm_data[1]}; 
	};
};

//==============================
// * Update Actor CM Hide
//==============================
Actor_CMPicture.prototype.update_actor_cm_hide = function() {
	this._sprite_actor_cm.opacity -= 15;
	if ( (this._sprite_actor_cm.x > this._actor_cm_data[3])) {
		this._sprite_actor_cm.x -= 7;
	    if (this._sprite_actor_cm.x < this._actor_cm_data[3]) {this._sprite_actor_cm.x = this._actor_cm_data[3]};
	};
};

//==============================
// * Update Actor CM Lay Show
//==============================
Actor_CMPicture.prototype.update_actor_cm_lay_show = function() {	
    this._sprite_actor_cm_lay.opacity += 15;
	if (this._sprite_actor_cm_lay.x > this._sprite_actor_cm_data[0])
	   {this._sprite_actor_cm_lay.x -= this._sprite_actor_cm_data[1];
	  if (this._sprite_actor_cm_lay.x < this._sprite_actor_cm_data[0]) {this._sprite_actor_cm_lay.x = this._sprite_actor_cm_data[0]};
	};
};

//==============================
// * Update Actor CM Lay Hide
//==============================
Actor_CMPicture.prototype.update_actor_cm_lay_hide = function() {
	this._sprite_actor_cm_lay.opacity -= 15;
	if ( (this._sprite_actor_cm_lay.x < Graphics.boxWidth)) {
		this._sprite_actor_cm_lay.x += this._sprite_actor_cm_data[1];
	    if (this._sprite_actor_cm_lay.x > Graphics.boxWidth) {this._sprite_actor_cm_lay.x = Graphics.boxWidth};
	};
};

//==============================
// * Actor CM Refresh
//==============================
Actor_CMPicture.prototype.actor_cm_refresh = function() {
	this._actor_cm_data[0] = BattleManager.actor();
	var actor_id = this._actor_cm_data[0]._actorId
	if (this._sprite_actor_cm) {
		if (!this._actor_cm_img[actor_id]) {
			this._actor_cm_img[actor_id] = ImageManager.loadPicture("Actor_" + String(actor_id))
		};
		this._sprite_actor_cm.bitmap = this._actor_cm_img[actor_id];
		this._sprite_actor_cm.opacity = 0;	
		this._sprite_actor_cm.x = this._actor_cm_data[3];
		if (this._sprite_actor_cm.bitmap.isReady()) {
			this._sprite_actor_cm.y = this._actor_cm_data[2] + Graphics.boxHeight - this._sprite_actor_cm.bitmap.height;
		};
    };	
	if (this._sprite_actor_cm_lay) {
		if (!this._actor_cm2_img[actor_id]) {
			this._actor_cm2_img[actor_id] = ImageManager.loadPicture("Actor_" + String(actor_id) + "b");
		};		
		this._sprite_actor_cm_lay.bitmap = this._actor_cm2_img[actor_id];
		if (this._actor_cm2_img[actor_id].isReady()) {
     	   this._sprite_actor_cm_data[0] = Graphics.boxWidth - this._sprite_actor_cm_lay.bitmap.width + Moghunter.actor_cm2_x;
	       this._sprite_actor_cm_data[1] = Math.max((this._sprite_actor_cm_lay.bitmap.width / 13),1);
	    };
		this._sprite_actor_cm_lay.x = Graphics.boxWidth + Moghunter.actor_cm2_x;
		this._sprite_actor_cm_lay.opacity = 0;
		this._sprite_actor_cm_lay.visible = true;
	};
};







//==============================
// * Update
//==============================
var _alias_mog_actorcm_scbat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_alias_mog_actorcm_scbat_update.call(this);
	$gameTemp._actor_cm_visible = this.sprite_actor_cm_visible();
};

//==============================
// * Sprite Actor CM Visible
//==============================
Scene_Battle.prototype.sprite_actor_cm_visible = function() {
	if (!BattleManager.actor()) {return false};
	if (this._actorWindow.active) {return false};
	if (this._enemyWindow.active) {return false};
	if (this._partyCommandWindow.active) {return false};
	if (!BattleManager.isInputting()) {return false};
	return true;
};