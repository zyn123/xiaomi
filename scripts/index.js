window.onload=function(){
	// var changtu=document.getElementById('changtu');
	var changt1=document.getElementsByClassName('changt1');
	var xx=document.getElementsByClassName('xx');
	// width=

	var thirdx1=document.getElementById('thirdx1');
	var thirdx2=document.getElementById('thirdx2');
	var coun=1;
	var xxx=xx[0];
	var changt=changt1[0];
	var kaiguan=true;

	var fn=function(){
		changt.style.display='none';
		xxx.style.background='#666';
		changt1[coun].style.display='block';
		xx[coun].style.background='white';
		changt=changt1[coun];
		xxx=xx[coun];
		coun++;
		if(coun==5){
			coun=0;
		}
	};	

	var timer=setInterval(fn,2000);

	for(var i=0;i<xx.length;i++){
		xx[i].index=i;
		changt1[0].style.display='block';
	// xxx=xx[0];
		xx[i].onclick=function(){
			
			changt.style.display='none';
			xxx.style.background='#666';

			changt1[this.index].style.display='block';
			xx[this.index].style.background='white';

			xxx=xx[this.index];
			changt=changt1[this.index];
			kaiguan=false;
			coun=this.index;
			// clearInterval(timer);
		};

		changt1[i].onmouseover=function(){
			clearInterval(timer);	
		}
		changt1[i].onmouseout=function(){
			if(kaiguan==true){
				timer=setInterval(fn,2000);				
			}

		};
}
		thirdx1.onclick=function(){
			if(coun==0){
				coun=5;
			}
			changt.style.display='none';
			xxx.style.background='black';
			coun--;
			changt1[coun].style.display='block';
			xx[coun].style.background='white';
			changt=changt1[coun];
			xxx=xx[coun];
			kaiguan=false;
			clearInterval(timer);
		}
		// (function(){
		// 	cc=0;
		// 	thirdx1.onclick=function(){
		// 		if(cc==3){return;}
		// 		cc++;
		// 		if(coun==0){
		// 			coun=5;
		// 		}
		// 		changt.style.display='none';
		// 		xxx.style.background='black';
		// 		coun--;
		// 		changt1[coun].style.display='block';
		// 		xx[coun].style.background='white';
		// 		changt=changt1[coun];
		// 		xxx=xx[coun];
		// 		kaiguan=false;
		// 		clearInterval(timer);
				
		// 		}
		// 	// var ff=thirdx1.onclick;
			
		// })()


		thirdx2.onclick=function(){

			changt.style.display='none';
			xxx.style.background='black';

			changt1[coun].style.display='block';
			xx[coun].style.background='white';
			changt=changt1[coun];
			xxx=xx[coun];
			coun++;
				if(coun==5){
				coun=0;
			}
			kaiguan=false;
			clearInterval(timer);
		}


	







// 函数在定义时































};