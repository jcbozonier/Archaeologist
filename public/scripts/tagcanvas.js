/**
 * Copyright (C) 2010-2011 Graham Breach
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * jQuery.tagcanvas 1.7
 * For more information, please contact <graham@goat1000.com>
 */
(function(f){var x,w,l={},n={},o={"0":"0,","1":"17,","2":"34,","3":"51,","4":"68,","5":"85,","6":"102,","7":"119,","8":"136,","9":"153,",a:"170,",A:"170,",b:"187,",B:"187,",c:"204,",C:"204,",d:"221,",D:"221,",e:"238,",E:"238,",f:"255,",F:"255,"};for(x=0;x<256;++x){w=x.toString(16);if(x<16){w="0"+w}n[w]=n[w.toUpperCase()]=x.toString()+","}function A(H){var j,G,C,B,F=[],D=Math.PI*(3-Math.sqrt(5)),E=2/H;for(j=0;j<H;++j){G=j*E-1+(E/2);C=Math.sqrt(1-G*G);B=j*D;F.push([Math.cos(B)*C,G,Math.sin(B)*C])}return F}function t(E,i){var D=E,C,B,j=new Number(i).toPrecision(3)+")";if(E[0]==="#"){if(!l[E]){if(E.length===4){l[E]="rgba("+o[E[1]]+o[E[2]]+o[E[3]]}else{l[E]="rgba("+n[E.substr(1,2)]+n[E.substr(3,2)]+n[E.substr(5,2)]}}D=l[E]+j}else{if(E.substr(0,4)==="rgb("||E.substr(0,4)==="hsl("){D=(E.replace("(","a(").replace(")",","+j))}else{if(E.substr(0,5)==="rgba("||E.substr(0,5)==="hsla("){C=E.lastIndexOf(",")+1,B=E.indexOf(")");i*=parseFloat(E.substring(C,B));D=E.substr(0,C)+i.toPrecision(3)+")"}else{D=E}}}return D}function m(i,j){if(window.G_vmlCanvasManager){return null}var B=document.createElement("canvas");B.width=i;B.height=j;return B}function h(){var j=m(3,3),C,B;if(!j){return false}C=j.getContext("2d");C.strokeStyle="#000";C.shadowColor="#fff";C.shadowBlur="3";C.globalAlpha=0;C.strokeRect(2,2,2,2);C.globalAlpha=1;B=C.getImageData(2,2,1,1);j=null;return(B.data[0]>0)}function p(I,j){var B=1024,E=I.weightGradient,D,G,C,H,F;if(I.gCanvas){G=I.gCanvas.getContext("2d")}else{I.gCanvas=D=m(B,1);if(!D){return null}G=D.getContext("2d");H=G.createLinearGradient(0,0,B,0);for(C in E){H.addColorStop(1-C,E[C])}G.fillStyle=H;G.fillRect(0,0,B,1)}F=G.getImageData(~~((B-1)*j),0,1,1).data;return"rgba("+F[0]+","+F[1]+","+F[2]+","+(F[3]/255)+")"}function b(N,F,L){var M=parseInt(N.length*L),E=parseInt(L*2),C=m(M,E),I,j,D,H,K,J,B,G;if(!C){return null}I=C.getContext("2d");I.fillStyle="#000";I.fillRect(0,0,M,E);I.font=F;I.textHeight=L;I.textBaseline="top";I.fillStyle="#fff";I.font=L+"px "+F;I.fillText(N,0,0);j=I.getImageData(0,0,M,E);D=j.width;H=j.height;G={min:{x:D,y:H},max:{x:-1,y:-1}};for(J=0;J<H;++J){for(K=0;K<D;++K){B=(J*D+K)*4;if(j.data[B+1]>0){if(K<G.min.x){G.min.x=K}if(K>G.max.x){G.max.x=K}if(J<G.min.y){G.min.y=J}if(J>G.max.y){G.max.y=J}}}}if(D!=M){G.min.x*=(M/D);G.max.x*=(M/D)}if(H!=E){G.min.y*=(M/H);G.max.y*=(M/H)}C=null;return G}function u(i){return"'"+i.replace(/(\'|\")/g,"").replace(/\s*,\s*/g,"', '")+"'"}function s(C,B,j){if(C.complete){B.w=C.width;B.h=C.height;j.push(B)}else{jQuery(C).bind("load",function(){B.w=this.width;B.h=this.height;j.push(B)})}}function r(B,j){var i=1,C;if(B.weightFrom){i=1*(j.getAttribute(B.weightFrom)||B.textHeight)}else{if(document.defaultView&&document.defaultView.getComputedStyle){C=document.defaultView.getComputedStyle(j,null).getPropertyValue("font-size");i=C.replace("px","")*1}else{B.weight=false}}return i}function g(D){var C,B,j=document.documentElement;for(C in y.tc){B=y.tc[C];if(D.pageX){B.mx=D.pageX-B.cx;B.my=D.pageY-B.cy}else{B.mx=D.clientX+(j.scrollLeft||document.body.scrollLeft)-B.cx;B.my=D.clientY+(j.scrollTop||document.body.scrollTop)-B.cy}}}function a(C){var j=y,i=document.addEventListener?0:1,B=C.target&&C.target.id?C.target.id:C.srcElement.parentNode.id;if(C.button==i&&j.tc[B]){g(C);j.tc[B].Clicked(C)}}function q(){var B=y.tc,j;for(j in B){B[j].Draw()}}function d(i,B,j){this.x=i;this.y=B;this.z=j}function e(B,i){var j=Math.sin(i),C=Math.cos(i);return new d(B.x,(B.y*C)+(B.z*j),(B.y*-j)+(B.z*C))}function c(B,i){var j=Math.sin(i),C=Math.cos(i);return new d((B.x*C)+(B.z*-j),B.y,(B.x*j)+(B.z*C))}function v(C,I,H,F,D,j){var i,E,G,B=C.z1/(C.z1+C.z2+I.z);i=I.y*B;E=I.x*B;G=C.z2+I.z;return new d(E,i,G)}function z(i){this.tc=i;this.ts=new Date().valueOf();this.x=this.y=this.w=this.h=this.sc=1}z.prototype.Update=function(i,E,j,B,D){var C=this.tc.outlineOffset;this.x=D*(i-C);this.y=D*(E-C);this.w=D*(j+C*2);this.h=D*(B+C*2);this.sc=D};z.prototype.Draw=function(j){var i=new Date().valueOf()-this.ts;j.setTransform(1,0,0,1,0,0);j.strokeStyle=this.tc.outlineColour;j.lineWidth=this.tc.outlineThickness;j.shadowBlur=j.shadowOffsetX=j.shadowOffsetY=0;if(this.tc.pulsateTo<1){j.globalAlpha=this.tc.pulsateTo+((1-this.tc.pulsateTo)*(0.5+(Math.cos(2*Math.PI*i/(1000*this.tc.pulsateTime))/2)))}else{j.globalAlpha=1}j.strokeRect(this.x,this.y,this.w,this.h)};z.prototype.Active=function(B,i,j){return(i>=this.x&&j>=this.y&&i<=this.x+this.w&&j<=this.y+this.h)};function k(i,D,B,C,j,E){var F=i.ctxt;this.tc=i;this.image=D.src?D:null;this.name=D.src?"":D;this.a=B;this.p3d=new d;this.p3d.x=C[0]*i.radius*1.1;this.p3d.y=C[1]*i.radius*1.1;this.p3d.z=C[2]*i.radius*1.1;this.x=this.y=0;this.w=j;this.h=E;this.colour=i.textColour;this.weight=this.sc=this.alpha=1;this.weighted=!i.weight;this.outline=new z(i);if(!this.image){this.textHeight=i.textHeight;this.extents=b(this.name,this.tc.textFont,this.textHeight);this.Measure(F,i)}this.SetShadowColour=i.shadowAlpha?this.SetShadowColourAlpha:this.SetShadowColourFixed;this.Draw=this.image?this.DrawImage:this.DrawText}k.prototype.Measure=function(j,i){this.h=this.extents?this.extents.max.y+this.extents.min.y:this.textHeight;j.font=this.font=this.textHeight+"px "+i.textFont;this.w1=j.measureText(this.name).width};k.prototype.SetWeight=function(i){this.weight=i;this.Weight(this.tc.ctxt,this.tc);this.Measure(this.tc.ctxt,this.tc)};k.prototype.Weight=function(C,B){var j=this.weight,i=B.weightMode;this.weighted=true;if(i==="colour"||i==="both"){this.colour=p(B,(j-B.min_weight)/(B.max_weight-B.min_weight))}if(i=="size"||i=="both"){this.textHeight=j*B.weightSize}this.extents=b(this.name,B.textFont,this.textHeight)};k.prototype.SetShadowColourFixed=function(B,j,i){B.shadowColor=j};k.prototype.SetShadowColourAlpha=function(B,j,i){B.shadowColor=t(j,i)};k.prototype.DrawText=function(C,G,B){var H=this.tc,E=this.x,D=this.y,F,j,I=this.sc,i=this.outline;C.globalAlpha=this.alpha;C.setTransform(I,0,0,I,0,0);C.fillStyle=this.colour;this.SetShadowColour(C,H.shadow,this.alpha);C.font=this.font;F=this.w1*I;j=this.h*I;E+=1+(G/I)-(F/2);D+=1+(B/I)-(j/2);C.fillText(this.name,E,D);i.Update(E,D,this.w1,this.h,I);return i.Active(C,H.mx,H.my)?i:null};k.prototype.DrawImage=function(C,G,B){var H=this.tc,E=this.x,D=this.y,F,j,I=this.sc,i=this.outline;C.globalAlpha=this.alpha;C.setTransform(I,0,0,I,0,0);C.fillStyle=this.colour;this.SetShadowColour(C,H.shadow,this.alpha);F=this.w*I;j=this.h*I;E+=(G/I)-(F/2);D+=(B/I)-(j/2);C.drawImage(this.image,E,D,F,j);i.Update(E,D,F,j,I);return i.Active(C,H.mx,H.my)?i:null};k.prototype.Calc=function(D,C){var i=c(this.p3d,D),j=this.tc,E=j.minBrightness,B=j.radius;this.p3d=e(i,C);i=v(j,this.p3d,this.w,this.h,Math.PI/4,20);this.x=i.x;this.y=i.y;this.sc=(j.z1+j.z2-i.z)/j.z2;this.alpha=Math.max(E,Math.min(1,E+1-((i.z-j.z2+B)/(2*B))))};k.prototype.Clicked=function(D){var j=this.a,B=j.target,C=j.href,i;if(B!=""&&B!="_self"){if(self.frames[B]){self.frames[B]=C}else{if(top.frames[B]){top.frames[B]=C}else{window.open(C,B)}}return}if(j.fireEvent){if(!j.fireEvent("onclick")){return}}else{i=document.createEvent("MouseEvents");i.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);if(!j.dispatchEvent(i)){return}}document.location=C};function y(){var j,B={mx:-1,my:-1,cx:0,cy:0,z1:20000,z2:20000,z0:0.0002,freezeActive:false,pulsateTo:1,pulsateTime:3,reverse:false,depth:0.5,maxSpeed:0.05,minSpeed:0,decel:0.95,interval:20,initial:null,hideTags:true,minBrightness:0.1,outlineColour:"#ffff99",outlineThickness:2,outlineOffset:5,textColour:"#ff99ff",textHeight:15,textFont:"Helvetica, Arial, sans-serif",shadow:"#000",shadowBlur:0,shadowOffset:[0,0],zoom:1,weight:false,weightMode:"size",weightFrom:null,weightSize:1,weightGradient:{0:"#f00",0.33:"#ff0",0.66:"#0f0",1:"#00f"}};for(j in B){this[j]=B[j]}this.max_weight=0;this.min_weight=200}y.prototype.Draw=function(){var C=this.canvas,G=0,D,F,H=this.ctxt,B,E,j=this.taglist.length;H.setTransform(1,0,0,1,0,0);D=C.width/2;F=C.height/2;this.active=null;for(E=0;E<j;++E){this.taglist[E].Calc(this.yaw,this.pitch)}this.taglist=this.taglist.sort(function(I,i){return I.sc-i.sc});H.textBaseline="top";if(this.shadowBlur||this.shadowOffset[0]||this.shadowOffset[1]){H.shadowBlur=this.shadowBlur;H.shadowOffsetX=this.shadowOffset[0];H.shadowOffsetY=this.shadowOffset[1]}H.clearRect(0,0,C.width,C.height);for(E=0;E<j;++E){B=this.taglist[E].Draw(H,D,F);if(B&&B.sc>G){this.active=B;this.active.index=E;G=B.sc}}if(this.freezeActive&&this.active){this.yaw=this.pitch=0}else{this.Animate(C.width,C.height)}if(this.active){this.active.Draw(H)}};y.prototype.Animate=function(F,C){var j=this,E=j.mx,D=j.my,H,G,B,i;if(E>=0&&D>=0&&E<F&&D<C){H=j.maxSpeed,i=j.reverse?-1:1;this.yaw=i*((H*2*E/F)-H);this.pitch=i*-((H*2*D/C)-H);this.initial=null}else{if(!j.initial){H=j.minSpeed,G=Math.abs(this.yaw),B=Math.abs(this.pitch);if(G>H){this.yaw=G>j.z0?j.yaw*j.decel:0}if(B>H){this.pitch=B>j.z0?j.pitch*j.decel:0}}}};y.prototype.Clicked=function(C){var i=this.active,B=this.taglist;try{if(i&&B[i.index]){B[i.index].Clicked(C)}}catch(j){}};y.tc={};jQuery.fn.tagcanvas=function(B,j){var i,C=j?jQuery("#"+j):this;if(document.all&&!j){return false}i=C.find("a");if(typeof(window.G_vmlCanvasManager)!="undefined"){this.each(function(){f(this)[0]=window.G_vmlCanvasManager.initElement(f(this)[0])})}if(!i.length||!this[0].getContext||!this[0].getContext("2d").fillText){return false}this.each(function(){var F,E,H,K,L,G,D=f(this).offset(),J,I=[];if(!j){i=f(this).find("a")}G=new y;for(F in B){G[F]=B[F]}G.z1=(19800/(Math.exp(G.depth)*(1-1/Math.E)))+20000-19800/(1-(1/Math.E));G.z2=G.z1*(1/G.zoom);G.radius=(this.height>this.width?this.width:this.height)*0.33*(G.z2+G.z1)/(G.z1);G.yaw=G.initial?G.initial[0]*G.maxSpeed:0;G.pitch=G.initial?G.initial[1]*G.maxSpeed:0;G.cx=D.left;G.cy=D.top;G.canvas=f(this)[0];G.ctxt=G.canvas.getContext("2d");G.textFont=u(G.textFont);G.ctxt.shadowColor=G.shadow;G.shadow=G.ctxt.shadowColor;G.shadowAlpha=(G.shadowBlur||G.shadowOffset[0]||G.shadowOffset[1])&&h();G.taglist=[];E=A(i.length);for(F=0;F<i.length;++F){H=i[F].getElementsByTagName("img");if(H.length){K=new Image;K.src=H[0].src;L=new k(G,K,i[F],E[F],1,1);s(K,L,G.taglist)}else{G.taglist.push(new k(G,i[F].innerText||i[F].textContent,i[F],E[F],2,G.textHeight+2))}if(G.weight){J=r(G,i[F]);if(J>G.max_weight){G.max_weight=J}if(J<G.min_weight){G.min_weight=J}I.push(J)}}if(G.weight=(G.max_weight>G.min_weight)){for(F=0;F<G.taglist.length;++F){G.taglist[F].SetWeight(I[F])}}y.tc[f(this)[0].id]=G;if(!y.started){jQuery(document).bind("mousemove",g);jQuery(document).bind("mouseout",g);jQuery(document).bind("mouseup",a);y.started=setInterval(q,G.interval)}if(j&&G.hideTags){C.hide()}});return true}})(jQuery);