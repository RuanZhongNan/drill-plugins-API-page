//=============================================================================
// Drill_SimpleCourseA2.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        脚本教学 - 课程a2
 * @author Drill_up
 *
 * @help
 * =============================================================================
 * +++ Drill_SimpleCourseA2 +++
 * 作者：Drill_up
 * =============================================================================
 * 课程：修改存档上限。
 * 
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * 
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		SCA（Simple_Course_A）
//		临时全局变量	无
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		★大体框架与功能如下：
//			课程a2：
//				->修改存档上限
//				->变量控制
//
//		★必要注意事项：
//			1.不要用记事本打开，查看代码会非常吃力。
//
//		★其它说明细节：
//			暂无
//			

//=============================================================================
// ** 变量获取
//=============================================================================
	var Imported = Imported || {};					//导入识别类
	Imported.Drill_SimpleCourseA2 = true;			//导入的插件标记
	var DrillUp = DrillUp || {}; 											//临时全局变量中转类
	DrillUp.parameters = PluginManager.parameters('Drill_SimpleCourseA2');	//读取插件管理器中的数据


//=============================================================================
// * 存档数量
//=============================================================================
DataManager.maxSavefiles = function() {
	
	//  >> 代码 - 存档数量部分
	// （在这部分写课程提供的脚本内容）
	
};



