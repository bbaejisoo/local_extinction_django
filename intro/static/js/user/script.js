(function($) {
    "use strict";
    $(document).ready(function() {
    	
    	$('header.header .right a.search, .intro-wrap .top .right a.search').click(function(e) {
    		e.preventDefault();
    		
    		$('.full-search-wrap').removeClass('hide');
		});
		
		$('.full-search-wrap .close').click(function(e) {
			$('.full-search-wrap').addClass('hide');
		});
		
		$('.reset-pass').click(function(e) {
			e.preventDefault();
			
			$('.full-reset-wrap').removeClass('hide');
		});
		
		$('.full-reset-wrap .close, .full-reset-wrap .btn-cancel').click(function(e) {
			$('.full-reset-wrap').addClass('hide');
    	});
    	
    	$('#reset_form').submit(function() {
    		var url  = $(this).attr('action');
    		var form = $(this).serialize();
    		
    		var password = $(this).find('#password_reset');
    		var repeat   = $(this).find('#repeat');
    		
    		if (password.val()=='') {
    			alert('비밀번호를 입력해주세요');
    			password.focus();
    			return false;
    		} else if (repeat.val()=='') {
    			alert('비밀번호를 입력해주세요');
    			repeat.focus();
				return false;
			} else if (password.val().length<4) {
    			alert('비밀번호를 4자리 이상 입력해주세요');
    			return false;
    		} else if (password.val()!=repeat.val()) {
    			alert('비밀번호가 서로 다릅니다');
				return false;
			} 
    		
			$.ajax({
				url: url,
			    type: 'post', 
			    data: form, 
			    dataType: 'json', 
			    success: function(data) {
			        var success = data.success;
					var msg 	= data.msg;
					var data 	= data.data;
					
					if (success==true) {
						alert(msg);
						$('.full-reset-wrap input').val('');
						$('.full-reset-wrap').addClass('hide');
					} else {
						alert(msg);
					}
				}, 
				error: function(error) {
				}, 
				complete: function(response) {
					console.log(response.responseText);
				}
			});
    		
    		return false;
		});
    	
    	if ($('#particles-bg').length>0 && typeof particlesJS!=='undefined') {
    		show_particles('particles-bg');
    	}
    	
		$('.header .left a.bar').click(function(e) {
			e.preventDefault();
			
			$('.menu').show();
		});
		
		$('.menu .close').click(function(e) {
			e.preventDefault();
			
			$('.menu').hide();
		});
		
		$('.menu .list-wrap > ul > li > a.has-sub').click(function(e) {
			e.preventDefault();
		});
		
		$('header.header .right a.chart').hover(function() {
			$('header.header .live-editor-panel').show();
		}, function() {
			$('header.header .live-editor-panel').hide();
		});
		
		$('header.header .right a.map').hover(function() {
			$('header.header .map-editor-panel').show();
		}, function() {
			$('header.header .map-editor-panel').hide();
		});
		
		$('header.header .right a.chart.mobile').click(function(e) {
			e.preventDefault();
			$('.full-editor-wrap').removeClass('hide');
		});
		
		$('.intro-wrap .top .right a.chart').hover(function() {
			$('.intro-wrap .top .right .live-editor-panel').show();
		}, function() {
			$('.intro-wrap .top .right .live-editor-panel').hide();
		});
		
		$('.intro-wrap .top .right a.map').hover(function() {
			$('.intro-wrap .top .right .map-editor-panel').show();
		}, function() {
			$('.intro-wrap .top .right .map-editor-panel').hide();
		});
		
		$('.full-editor-wrap .overlay-editor, .full-editor-wrap .close').click(function(e) {
			e.preventDefault();
			$('.full-editor-wrap').addClass('hide');
		});
		
		$('.input-file-wrap input[type="file"]').change(function() {
			var filename  = $(this).val().split('\\').pop();
			var extension = filename.substring(filename.lastIndexOf('.') + 1); 
			var file      = $(this).get(0).files[0];
			
			var accept = /gif|jpg|jpeg|png|zip|tar|gz|tgz|rar|lzh|hqx|arj|ais|ppt|pptx|xls|xslx|doc|docx|hwp/i;
			
			if (accept.test(extension)==false) {
				alert(extension + ' 유형의 파일은 업로드하실 수 없습니다');
				return ;
			}
			
			$(this).parent().prev().text(filename);
		});
    });
})(this.jQuery);

var show_particles = function(id) {
	particlesJS(id, {
        "particles": {
            "number": {
                "value": 149,
                "density": {
                    "enable": true,
                    "value_area": 552.4033491425909
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "star",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 8
                },
                "image": {
                    "src": "",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.29987610382026364,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5782952832645452,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
};

var setCookie = function(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + (exp * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + escape(value) + ';expires=' + date.toUTCString() + ';path=/';
};