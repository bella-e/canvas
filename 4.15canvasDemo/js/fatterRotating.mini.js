function RotatingCircle(canvas,optsParam,txtOptsParam)
{
    var obj=new Object();
    obj.ctx=canvas.getContext('2d');
if(0==canvas.clientWidth||0==canvas.clientHeight)
{
    obj.size=Math.min(canvas.width,canvas.height)
}else{obj.size=Math.min(canvas.clientWidth,canvas.clientHeight)}
obj.opts=optsParam;obj.txtOpts=txtOptsParam;obj.degreeStart=0;
obj.degreeEnd=0;obj.clockmoveStep=0;
obj.clockmoveStepOut=0;obj.init=function(){obj.createCircle()};
obj.createFont=function(){this.ctx.clearRect(0,0,this.size,this.size);
this.ctx.font="30px Arial";
this.ctx.fillText("Hello World",this.size,this.size)};
obj.createCircle=function(){var _curOpts=this.opts[0];var radius=_curOpts.radius;
var lineWidth=_curOpts.lineWidth;var strokeStyle=_curOpts.strokeStyle;
var stepStart=_curOpts.stepStart;var stepEnd=_curOpts.stepEnd;
var angleSpeed=_curOpts.angleSpeed;this.degreeStart=this.degreeStart+stepStart;
this.degreeEnd=this.degreeEnd+stepEnd;if(this.degreeStart-360>this.degreeEnd)
{this.degreeStart-=720}this.ctx.clearRect(0,0,this.size,this.size);
this.ctx.lineWidth=lineWidth;this.ctx.strokeStyle=strokeStyle;
this.ctx.beginPath();this.ctx.arc(this.size/ 2, this.size /2,radius-lineWidth/ 2,
(this.degreeStart < this.degreeEnd ? this.degreeStart : this.degreeEnd) * Math.PI /180,
(this.degreeStart<this.degreeEnd?this.degreeEnd:this.degreeStart)*Math.PI/180,false);
this.ctx.stroke();this.ctx.save();
var _curOpts2=this.opts[1];var lineWidth2=_curOpts2.lineWidth;var strokeStyle2=_curOpts2.strokeStyle;
var radius2=_curOpts2.radius;var degreeStart2=_curOpts2.degreeStart;
var degreeEnd2=_curOpts2.degreeEnd;this.ctx.lineWidth=lineWidth2;
this.ctx.strokeStyle=strokeStyle2;
this.ctx.beginPath();
this.ctx.arc(this.size/ 2, this.size /2,radius2-lineWidth2/ 2,
(degreeStart2) * Math.PI /180,(degreeEnd2)*Math.PI/180,false);this.ctx.stroke();
this.ctx.restore();
this.ctx.save();
var _curOpts4=this.opts[3];var _emFillStyle4=_curOpts4.emFillStyle;
var _fillStyle4=_curOpts4.fillStyle;
var _step4=_curOpts4.step;var _radius4=_curOpts4.radius;
var _lengthParam4=_curOpts4.lengthParam;this.ctx.lineWidth=_curOpts4.lineWidth;
this.ctx.translate(this.size/ 2, this.size /2);
for(var i=0;i<60;i++){if(i%5!=0){
    if(i>=this.clockmoveStep&&i<this.clockmoveStep+_step4){this.ctx.strokeStyle=_emFillStyle4}
    else{this.ctx.strokeStyle=_fillStyle4}this.ctx.beginPath();
    this.ctx.moveTo(_radius4,0);this.ctx.lineTo(_radius4+_lengthParam4,0);
    this.ctx.stroke()}
    this.ctx.rotate((-Math.PI/30))}
    this.clockmoveStep=this.clockmoveStep>=60?0:(this.clockmoveStep+0.5);
    this.ctx.restore();this.ctx.save();
    var _curOpts3=this.opts[2];var lineWidth3=_curOpts3.lineWidth;
    var strokeStyle3=_curOpts3.strokeStyle;
    var radius3=_curOpts3.radius;
    var degreeStart3=_curOpts3.degreeStart;
    var degreeEnd3=_curOpts3.degreeEnd;
    this.ctx.lineWidth=lineWidth3;
    this.ctx.strokeStyle=strokeStyle3;
    this.ctx.beginPath();
    this.ctx.arc(this.size/ 2, this.size /2,radius3+lineWidth3+14,(degreeStart3)*Math.PI/ 180,
        (degreeEnd3) * Math.PI /180,false);
    this.ctx.stroke();this.ctx.restore();
    this.ctx.save();this.ctx.beginPath();
    this.ctx.restore();this.ctx.font=this.txtOpts.font;this.ctx.textAlign=this.txtOpts.align;
    this.ctx.fillStyle=this.txtOpts.txtColor;
    this.ctx.textBaseline=this.txtOpts.textBaseline;
    this.ctx.fillText(this.txtOpts.content,this.size/ 2, this.size /2);
    this.ctx.restore();this.ctx.save();
    var _curOpts5=this.opts[4];
    var _emFillStyle5=_curOpts5.emFillStyle;
    var _fillStyle5=_curOpts5.fillStyle;
    var _step5=_curOpts5.step;
    var _speed5=_curOpts5.speed;
    var _radius5=_curOpts5.radius;
    var _lineWidth5=_curOpts5.lineWidth;
    this.ctx.translate(this.size/ 2, this.size /2);
    this.ctx.lineWidth=_lineWidth5;
    for(var i=0;i<60;i++){
        if((i>=this.clockmoveStepOut&&i<this.clockmoveStepOut+_step5))
        {
        this.ctx.fillStyle="RGBA("+_emFillStyle5+","+(i-this.clockmoveStepOut)/20+")"}
        else if(i>=(this.clockmoveStepOut+20)&&i<this.clockmoveStepOut+20+_step5)
        {this.ctx.fillStyle="RGBA("+_emFillStyle5+","+(i-this.clockmoveStepOut-20)/20+")"}
        else if(i>=(this.clockmoveStepOut+40)&&i<this.clockmoveStepOut+40+_step5)
        {this.ctx.fillStyle="RGBA("+_emFillStyle5+","+(i-this.clockmoveStepOut-40)/20+")"}
        else if(this.clockmoveStepOut+(40+_step5)>60&&i<(this.clockmoveStepOut+(40+_step5)-60))
        {this.ctx.fillStyle="RGBA("+_emFillStyle5+","+(20-this.clockmoveStepOut+i)/20+")"}
        else{this.ctx.fillStyle=_fillStyle5}this.ctx.beginPath();
        this.ctx.arc(_radius5,0,_lineWidth5,0,Math.PI*2,false);
        this.ctx.fill();
        this.ctx.rotate((Math.PI/30))}
        this.clockmoveStepOut=this.clockmoveStepOut>=20?0:(this.clockmoveStepOut+_speed5);this.ctx.restore()};
    obj.chageTxt=function(contentTxt){
        if(null!=this.txtOpts){
            this.txtOpts.content=contentTxt}};
            return obj};