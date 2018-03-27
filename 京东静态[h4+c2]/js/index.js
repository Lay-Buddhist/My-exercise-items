/**
 * Created by WQM on 2017/12/6.
 */
function animate(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer  = setInterval(function(){
        var bool = true;
        for(var k in json){
            var leader;
            if(k === "opacity"){
                leader =  getStyle(ele,k)*100  || 1;
            }else {
            leader = parseInt(getStyle(ele,k)) || 0;
            }
            var step = (json[k] - leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader= leader + step;
            if(k === "opacity"){
                ele.style[k] = leader/100;
            }else{
                ele.style[k] = leader + "px";
                ele.style.filter = "alpha(opacity = " +leader+ ")";
            }
            if(json[k] !== leader){
                bool = false;
            }
        }
        if(bool){
            if(fn){
                fn();
            }
        }

    })
}
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}


//topbanner start

//mian start




//  基本封装
function animate(obj,target) {
    clearInterval(obj.timer);
    var speed = obj.offsetLeft < target ? 15 : -15;
    obj.timer = setInterval(function() {
        var result = target - obj.offsetLeft;
        obj.style.left = obj.offsetLeft + speed  + "px";
        if(Math.abs(result) <= 15) {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    },10);
}