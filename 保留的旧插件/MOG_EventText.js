//=============================================================================
// MOG_EventText.js
//=============================================================================

/*:
 * @plugindesc (v1.2)[v1.3]  行走图 - 事件漂浮文字
 * @author Moghunter （Drill_up翻译）
 *
 * @param 平移-位置 X
 * @desc 以事件的头顶为基准，x轴方向平移，单位像素。
 * @default 0
 *
 * @param 平移-位置 Y
 * @desc 以事件的头顶为基准，y轴方向平移，单位像素。
 * @default 0
 *
 * @param 字体大小
 * @desc 漂浮文字的字体大小。
 * @type number
 * @min 1
 * @default 18 
 *
 * @param 文字宽度
 * @desc 漂浮文字的宽度，如果过小，文字会被压缩在一起。
 * @type number
 * @min 1
 * @default 120
 *
 * @help  
 * =============================================================================
 * +++ MOG - Event Text (v1.2) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 在事件头顶显示固定不动的漂浮文字。 
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，也可以被以下插件扩展。
 * 被扩展：
 *   - Drill_EnemyTextColor 敌人文本颜色 
 *   - Drill_ActorTextColor 角色文本颜色 
 *   - Drill_ItemTextColor 物品+技能文本颜色 
 *     （三者任一即可）
 *     结合目标插件，可以使得文字变色。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   只对事件有效。
 * 2.你可以通过换事件页，来切换头顶的漂浮文字。
 * 3.事件变形、位移时，漂浮文字会一直跟着事件。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 事件中，添加注释，在注释中填入以下指令：
 *（中英文冒号都可以，旧注释冒号左右不能有空格，新注释冒号左右都有一个空格。）
 *
 * 事件注释（旧）：事件漂浮文字:这是一串被显示出来的文字
 *
 * 事件注释：=>事件漂浮文字 : 这是一串被显示出来的文字
 * 事件注释：=>事件漂浮文字 : 这是一串被显示出来的文字 : 201
 *
 * 文字后面的数字表示颜色，0-27为默认颜色，
 * 100以上为配置的自定义颜色，200以上为配置的高级颜色。
 * （需要文本颜色插件支持）
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * mog v1.0版本的注释关键字是 event text: aaa
 * mog v1.2版本的注释关键字变成了 event_text : aaa
 * 由于这里面空格要求还十分严格，格式不对还不显示，所以我索性把这里的直接
 * 换成中文了。
 * [v1.2]
 * 规范了插件指令，并且你可以设置文字颜色。
 * [v1.3]
 * 修改了插件分类。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		该插件看起来非常基础，但原理并不简单。
//		每个事件都绑定了一个Sprite，用于显示文字。
//
//		这里修改了_char_text，添加了一个参数用于控制颜色。
//		check_event_text 和 refresh_char_text 函数改动了。
//			 
//

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_EventText = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_EventText');
    Moghunter.charText_x = Number(Moghunter.parameters['平移-位置 X'] || 0);
	Moghunter.charText_y = Number(Moghunter.parameters['平移-位置 Y'] || 0);
    Moghunter.charText_Size = Number(Moghunter.parameters['字体大小'] || 18);
    Moghunter.charText_Length = Number(Moghunter.parameters['文字宽度'] || 120);
	
//=============================================================================
// ** Character Base
//=============================================================================

//==============================
// * Init Members
//==============================
var _alias_mog_eventext_cbase_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
    _alias_mog_eventext_cbase_initMembers.call(this);
	this._char_text = [false,"",0];
};

//=============================================================================
// ** Game Event
//=============================================================================

//==============================
// * Setup Page
//==============================
var _alias_mog_eventext_gevent_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_alias_mog_eventext_gevent_setupPage.call(this);
    this.check_event_text();
};

//==============================
// * Check Event Text
//==============================
Game_Event.prototype.check_event_text = function() {
	this._need_clear_text = true
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var p = l.parameters[0];
			var comment = p.split(/[:：]/);		//冒号正则
				if (comment[0].toLowerCase() === "事件漂浮文字"){
					this._char_text = [true,String(comment[1]),0];
					this._need_clear_text = false;			  
				};
			};
			var args = String(p).split(' ');
			var command = args.shift();
			if (command == "=>事件漂浮文字"){
				if(args.length == 2){
					this._char_text = [true,String(args[1]),0];
					this._need_clear_text = false;			  
				}
				if(args.length == 4){
					this._char_text = [true,String(args[1]),Number(args[3])];
					this._need_clear_text = false;		
				}
		};
	}, this);};
	if (this._need_clear_text) {this._char_text = [true,"",0]};
};

//=============================================================================
// ** Sprite Character
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_eventext_schar_initialize = Sprite_Character.prototype.initialize;
Sprite_Character.prototype.initialize = function(character) {
    _alias_mog_eventext_schar_initialize.call(this,character);
	if (this._character && this._character._eventId) {this._character.check_event_text()};
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// * create Lower Layer
//==============================
var _alias_mog_eventext_srmap_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
	_alias_mog_eventext_srmap_createLowerLayer.call(this);
	this.create_event_text_field();
};

//==============================
// * create Event Text Field
//==============================
Spriteset_Map.prototype.create_event_text_field = function() {
	this._etextField = new Sprite();
	this._baseSprite.addChild(this._etextField);
	this._sprite_char_text = [];
	for (var i = 0; i < this._characterSprites.length; i++) {
	     this._sprite_char_text[i] = new Sprite_CharText(this._characterSprites[i]);
		 this._etextField.addChild(this._sprite_char_text[i]);
    };
};

//=============================================================================
// ** Sprite CharText
//=============================================================================
function Sprite_CharText() {
    this.initialize.apply(this, arguments);
};

Sprite_CharText.prototype = Object.create(Sprite.prototype);
Sprite_CharText.prototype.constructor = Sprite_CharText;

//==============================
// * Initialize
//==============================
Sprite_CharText.prototype.initialize = function(target) {
    Sprite.prototype.initialize.call(this);
	this.sprite_char = target;
	this.drill_window_color_get = ImageManager.loadSystem('Window');
};

//==============================
// * Character
//==============================
Sprite_CharText.prototype.character = function() {
	 return this.sprite_char._character;
};

//==============================
// * Update Char Text
//==============================
Sprite_CharText.prototype.update = function() {
	Sprite.prototype.update.call(this);
	if (this.character()._char_text[0] && this.drill_window_color_get.isReady()) {this.refresh_char_text()};
	if (!this._char_text) {return};
	this._char_text.x = this.textX_axis();
	this._char_text.y = this.textY_axis();
};

//==============================
// * Create Char Text
//==============================
Sprite_CharText.prototype.create_char_text = function() {
	 if (this._char_text) {this.removeChild(this._char_text)};
	 if (this.character()._char_text[1] === "") {return};
     this._char_text = new Sprite(new Bitmap(Moghunter.charText_Length,32));
	 this._char_text.anchor.x = 0.5;
	 this._char_text.y = -(this.sprite_char.patternHeight());
	 this._char_text.bitmap.fontSize = Moghunter.charText_Size;
	 this.addChild(this._char_text);
};

//==============================
// * Refresh Char Text
//==============================
Sprite_CharText.prototype.refresh_char_text = function() {
    this.create_char_text();
	this.character()._char_text[0] = false;
	if (this.character()._char_text[1] === "") {return};
	var text = this.character()._char_text[1];
	this._char_text.bitmap.clear();
	this._char_text.bitmap.textColor = this.drill_eventTextColor(this.character()._char_text[2]);
	this._char_text.bitmap.drawText(text,0,0,Moghunter.charText_Length,32,"center");
	this._char_text.bitmap.textColor = "#ffffff";
};

//==============================
// * 文字颜色（窗口颜色原理相似，这里组合了过来）
//==============================
Sprite_CharText.prototype.drill_eventTextColor = function(n) {
	if( n > 200 ){	//渐变颜色
		if( Imported.Drill_EnemyTextColor && DrillUp.g_ETC_seniorColor ){ return DrillUp.g_ETC_seniorColor[n-201]; }
		if( Imported.Drill_ActorTextColor && DrillUp.g_ATC_seniorColor ){ return DrillUp.g_ATC_seniorColor[n-201]; }
		if( Imported.Drill_ItemTextColor && DrillUp.g_ITC_seniorColor ){ return DrillUp.g_ITC_seniorColor[n-201]; }
		n = n-100;
	}
	if(n > 100){	//颜色
		if( Imported.Drill_EnemyTextColor ){ return DrillUp.g_ETC_color[n-101]; }
		if( Imported.Drill_ActorTextColor ){ return DrillUp.g_ATC_color[n-101]; }
		if( Imported.Drill_ItemTextColor ){ return DrillUp.g_ITC_color[n-101]; }
		
	}else{
		var px = 96 + (n % 8) * 12 + 6;
		var py = 144 + Math.floor(n / 8) * 12 + 6;
		return (this.drill_window_color_get).getPixel(px, py);
	}
};

//==============================
// * Text X Axis
//==============================
Sprite_CharText.prototype.textX_axis = function() {
	return Moghunter.charText_x + this.sprite_char.x;
};

//==============================
// * Text Y Axis
//==============================
Sprite_CharText.prototype.textY_axis = function() {
	return -(this.sprite_char.patternHeight() + 24) + Moghunter.charText_y + this.sprite_char.y;
};
