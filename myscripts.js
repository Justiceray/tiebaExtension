function RemoveVideo(){
   RemoveElementByClassName('per_list_body clearfix');
   RemoveELementById('game_frs_head');
   RemoveElementByClassName('worldcup_info_banner_wrap');
   RemoveELementById('j_worldcup_info_banner');    
   RemoveElementByClassName('j_worldcup_info_banner_wrap');
   RemoveElementByClassName('worldcup_info_banner_show');
   RemoveELementById("lecai_lottery");
   RemoveELementById("game_rank");
   RemoveElementByClassName("game_s  sel");
   RemoveElementByClassName("game_tab clearfix");
   RemoveElementByClassName("clearfix BAIDU_CLB_AD BAIDU_CLB_AD_frs");
   RemoveElementByClassName("clearfix spreadad spreadad_0001");
   RemoveELementById("tbmall_score_region");   
   RemoveElementByClassName("game_rank_title");
   RemoveElementByClassName("game_rank_list");
   RemoveElementByClassName("clearfix BAIDU_CLB_AD BAIDU_CLB_AD_pb");
   RemoveElementByClassName("per_list j_per_list per_list_frs");
   RemoveElementByClassName("lot_wrap");	
   RemoveElementByClassName("clearfix BAIDU_CLB_AD BAIDU_CLB_AD_frs");
   RemoveElementByClassName("l_post_bright dasense dasense_0101 clearfix");		
   RemoveELementById("j_ten_years");
   RemoveElementByClassName("dasense dasense_0003");
}

function RemoveElementByClassName(claseeName)
{
   var elementlist = document.getElementsByClassName(claseeName);
   for(var i =0; i < elementlist.length; i++)
   {
        elementlist[i].style.display = "none";
   }
}
function RemoveELementById(elementid)
{
   var elementToRemove = document.getElementById(elementid);
   
   if(elementToRemove!= null)
   {
		elementToRemove.style.display = "none";
   }
}
RemoveVideo();