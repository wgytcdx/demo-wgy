/**
 * Created by Administrator on 2016/11/29.
 */

    window.onload=function(){
        scrollPic();
    };
     function scrollPic(){
        var banner = document.getElementsByClassName('jd_banner')[0];
        var width = banner.offsetWidth ;
        var index = 0;
        var imgBox =document.getElementsByTagName('ul')[0];

        var addTransition = function(){
            imgBox.style.transition = 'all 1s ease 0s';
            imgBox.style.webkitTransition = 'all 1s ease 0s';
        };

        var setTransform = function(t){
            imgBox.style.transform = 'translateX ('+t+'px)' ;
            imgBox.style.webkitTransform = 'translateX ('+t+'px)' ;

        };

        var timer = setInterval(function(){
            index ++ ;

            addTransition();
            setTransform(- index*width);

        },3000);

        //imgBox.addEventListener('transitionEnd',function(){
        //    removeTransition();
        //    if(index>=9){
        //        index =1 ;
        //    }else if(index <= 0){
        //        index =8 ;
        //    }
        //    setTransform(- index*width);
        //});
        //
        // imgBox.addEventListener('webkitTransitionEnd',function(){
        //     removeTransition();
        //     if(index>=9){
        //         index =1 ;
        //     }else if(index <= 0){
        //         index =8 ;
        //     }
        //     setTransform(- index*width);
        // });
        //
        // var removeTransition = function(){
        //     imgBox.style.transition = 'none';
        //     imgBox.style.webkitTransition = 'none';
        //
        // }
    }
