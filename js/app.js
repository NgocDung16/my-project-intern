
$(function(){

	var p=$('#content').responsiveSlides({
		height:450,						// slides conteiner height
		background:'#fff',				// background color and color of overlayer to fadeout on init
		autoStart:true,					// boolean autostart
		startDelay:0,					// start whit delay
		effectInterval:5000,			// time to swap photo
		effectTransition:1000,			// time effect
		pagination:[
			{
				active:true,			// activate pagination
				inner:true,				// pagination inside or aouside slides conteiner
				position:'B_L', 		/* 
											pagination align:
												T_L = top left
												T_C = top center
												T_R = top right
									
												B_L = bottom left
												B_C = bottom center
												B_R = bottom right
										*/
				margin:10, 				// pagination margin
				dotStyle:'', 			// dot pagination class style
				dotStyleHover:'', 		// dot pagination class hover style
				dotStyleDisable:''		// dot pagination class disable style
			}
		]
	});

});