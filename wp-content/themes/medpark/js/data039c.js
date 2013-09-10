function calendarEvent(){
	jQuery.ajax({
		url: ajaxurl,
		type:'POST',
		data: "action=calendar_medpark",
		async: false,
		success: function(result){
			console.log(result);
			codropsEvents = jQuery.parseJSON(result);
		}
	});
return false;
}
var codropsEvents;
calendarEvent();









// 	'07-12-2013' : {
// 		badge:'part',
// 		doctors:{
// 			'Joe Dowe':'18:00-20:00,23:00-24:00',
// 			'Michael Doe':'11:00-12:00,13:00-14:00'
// 		},
// 		info:'In vacation.'
// 	},
// 	'07-14-2013' : {
// 		badge:'no',
// 		doctors:{
// 			'Joe Dowe':'13:00-20:00,23:00-24:00',
// 			'Michael Doe':'11:00-12:00,13:00-14:00'
// 		},
// 		info:'In vacation.'
// 	},
	
// };