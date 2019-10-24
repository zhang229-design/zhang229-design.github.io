$(function(){
	(function(){
		var now = 0;
		var zindex = 2;
		var time;
		function fun(){
			$('#ul1>li').eq(now).css('z-index',zindex++);
			$('#ul1>li').fadeOut(500);
			$('#ul1>li').eq(now).fadeIn(500);
		}
		$('#right').click(function(){
			now++;
			if(now >=4){
				now = 0;
			}
			fun();
		});
		$('#left').click(function(){
			now--;
			if(now<=-1){
				now=3;
			}
			fun();
		})
		timeu = setInterval(function(){
			now++
			if(now >=4){
				now = 0;
			}
			fun();
		},3000)
		$('#lbt').mouseover(function(){
			clearInterval(time);
		})
		$('#lbt').mouseout(function(){
			time = setInterval(function(){
				now++
				if(now >=4){
					now = 0;
				}
				fun();
			},3000)
		})
	})();


	
	//ȫ����������Ч��
	(function(){
		$('#tiao>a>span').mouseover(function(){
			//����򵥣���ǰ��topֵ�仯����
			$(this).stop().animate({top:'-15px'},300)
		}).mouseout(function(){
			$(this).stop().animate({top:0},200)
		})
	})();


	//͸���ȱ仯�Ǹ�
	(function(){
		var aLis = $('.tul .haiyan');//������ȡ��ͬ������
		//alert(aLis.size())   13
		aLis.mouseover(function () {
			//���������е�img͸���ȱ�Ϊ.3
			$(this).closest('.tul').find('img').stop().animate({'opacity': .3});
			//ֻ�õ�ǰ��ͼƬ͸���ȱ�Ϊ1��
			$(this).find('img').stop().animate({'opacity': 1});
		}).mouseout(function () {
			//����ͼƬ͸���Ȼָ�Ϊ1��
			$(this).closest('.tul').find('img').stop().animate({'opacity': 1});
		})
	})();


	// �����ֲ�
	(function(){

		 //var oDiv=$('.jiao1')
		 //var oDiv=$('.jiao2')
		var oUl = $('.wdy ul');
	    var aLis = oUl.children();

	    // ��һ��ת����ʱ������һ������ ��parseIntת��֮�����һ����
	    var len = aLis.eq(0).width()+21;
	    var timer = null;
	    var index = 3;
	     timer = setInterval(autoPlay,2000);
	     function autoPlay(){
	         index++;
	         if(index == 12){
	             oUl.css('left','-1218px');
	                 index = 4;
	         }
	          oUl.stop().animate({'left':-len*index-30});
	        

	         oUl.stop().animate({'left':-len*index-30},
	         	function(){
	             $(this).stop().animate({'left':-len*index})
	         });
	         console.log(index);

		 }

		$('.wdy').mouseover(function () {
			clearInterval(timer)
		});
		$('.wdy').mouseout(function () {
			timer = setInterval(autoPlay, 2000)
		});

		$('.jiao1').mouseover(function(){
			clearInterval(timer)
		})
		$('.jiao1').mouseout(function(){
			timer = setInterval(autoPlay, 2000)
		});

		$('.jiao2').mouseover(function(){
			clearInterval(timer)
		})
		$('.jiao2').mouseout(function(){
			timer = setInterval(autoPlay, 2000)
		});


		$('.jiao1').click(function () {
			index--;
			if (index == -1) {
				oUl.css('left', -7*len);
				index = 6;
			}

			oUl.stop().animate({'left':-len*index+20},function(){
					$(this).stop().animate({'left':-len*index})
				});

		});
		$('.jiao2').click(function () {
			autoPlay();
		})

	})();
	// �����ֲ�2
	(function(){
		var oUl = $('.wdy1 ul');
	    var aLis = oUl.children();
	    var len = aLis.eq(0).width()+25;
		//alert(len)
	    var timer = null;
	    var index = 3;
	    timer = setInterval(autoPlay,2000);
	    function autoPlay(){
	        index++;
	        if(index == 11){
	            oUl.css('left','-915px');
	                index = 4;
	        }
	        oUl.stop().animate({'left':-len*index-20},
	        	function(){
	            $(this).stop().animate({'left':-(len)*(index)})
	        });
	        console.log(index);

		}

		$('.wdy1').mouseover(function () {
			clearInterval(timer)
		});
		$('.wdy1').mouseout(function () {
			timer = setInterval(autoPlay, 2000)
		});

		$('.jiao1').mouseover(function(){
			clearInterval(timer)
		})
		$('.jiao1').mouseout(function(){
			timer = setInterval(autoPlay, 2000)
		});

		$('.jiao3').mouseover(function(){
			clearInterval(timer)
		})
		$('.jiao3').mouseout(function(){
			timer = setInterval(autoPlay, 2000)
		});

		$('.jiao1').click(function () {
			index--;
			if (index == -1) {
				oUl.css('left', -8*len);
				index = 6;
			}

			oUl.stop().animate({'left':-len*index+20},function(){
				$(this).stop().animate({'left':-len*index})
			});

		});

		$('.jiao3').click(function () {
			autoPlay();
		})

	})();

});