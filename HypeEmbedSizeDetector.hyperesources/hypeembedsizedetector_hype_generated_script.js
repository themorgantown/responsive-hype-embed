//	HYPE.documents["HypeEmbedSizeDetector"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="HypeEmbedSizeDetector.hyperesources",f="HypeEmbedSizeDetector",g="hypeembedsizedetector_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/hypeembedsizedetector_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_670F||null!=window.HYPE_dtl_670F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-670.full.min.js":"HYPE-670.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_670"+c,"HYPE_dtl_670"+c,a,d),false==!0&&(a=a||k("HYPE_w_670","HYPE_wdtl_670","HYPE-670.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_670","HYPE-670.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"checksize",source:"function(hypeDocument, element, event) {\nvar hypeEl = document.getElementById(hypeDocument.documentId());\nvar navigatorinfo = navigator.userAgent;\t\t\n\t\nfunction reportWindowSize() {\n\tvar h = hypeEl.offsetHeight;\n\tvar w = hypeEl.offsetWidth;\n\thypeDocument.getElementById('rect1').innerHTML = \"This scene has a (fixed) height of: \"+h+\"px <br>The width of this scene is 100%, and the current width of the Hype document element is: <br>\"+w+\"px<br><br>Browser / device info: Navigator.useragent: \"+navigatorinfo+\"</p>\";\n\n}\n\nreportWindowSize();\n\nwindow.onresize = reportWindowSize;\n\n\t\t \n\t\t \n\t\t \n}",identifier:"5"},{name:"checksizescene2",source:"function(hypeDocument, element, event) {\t\n\tvar hypeEl = document.getElementById(hypeDocument.documentId());\nvar navigatorinfo = navigator.userAgent;\t\t\n\t\nfunction reportWindowSize() {\n\tvar h = hypeEl.offsetHeight;\n\tvar w = hypeEl.offsetWidth;\n\thypeDocument.getElementById('rect2').innerHTML = \"This scene has a 100% height, and its current height is: \"+h+\"px <br>The width of this scene is 100%, and the current width of the Hype document element is: <br> \"+w+\"px<br><br>Browser / device info: Navigator.useragent: \"+navigatorinfo+\"</p>\";\n\tif ( h < 1 ) {\n\t\talert('The height of the document is less than 1. This is likely because its parent element height is not set');\n\t};\n}\n\nreportWindowSize();\n\nwindow.onresize = reportWindowSize;\n\n\t\n}",identifier:"23"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_670"+c](f,g,{"3":{p:1,n:"Pasted-1_2x.jpg",g:"29",o:true,t:"@2x"},"1":{p:1,n:"Pasted_2x.jpg",g:"27",o:true,t:"@2x"},"-2":{n:"blank.gif"},"-1":{n:"PIE.htc"},"2":{p:1,n:"Pasted-1.jpg",g:"29",o:true,t:"@1x"},"0":{p:1,n:"Pasted.jpg",g:"27",o:true,t:"@1x"}},l,[],e,[{n:"responsive w",o:"13",X:[0]},{n:"responsive w and h",o:"1",X:[1]}],
[{o:"21",A:{a:[{p:4,h:"5"}]},p:"600px",cA:false,a:100,Z:400,Y:600,c:"#FFF",L:[],bY:1,d:600,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["35","37","36","38","34"],n:"Untitled Layout","_":0,v:{"34":{b:345,z:3,K:"Solid",c:174,L:"Solid",d:34,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1,p:1,g:1,f:1}]},F:"center",G:"#000",aP:"pointer",w:"Visit scene with a 100% width and 100% height",x:"visible",I:"Solid",a:402,y:"preserve",J:"Solid"},"37":{aV:8,w:"<br>",x:"visible",a:57,Z:"break-word",y:"preserve",j:"absolute",r:"inline",b:224,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",z:2,aS:8,t:16,aT:8,k:"div",aU:8,G:"#000"},"36":{aU:8,G:"#000",c:331,aV:8,r:"inline",d:36,cQ:0.7925072,s:"Helvetica,Arial,Sans-Serif",t:16,cR:0.78846154,Z:"break-word",w:"You\u2019re on Scene 1: Responsive Width.<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:-23,b:232},"35":{aU:22,c:554,bS:63,aV:22,d:354,I:"Solid",J:"Solid",t:18,K:"Solid",g:"#E8EBED",L:"Solid",M:1,i:"rect1",w:"",N:1,j:"absolute",x:"visible",A:"#D8DDE4",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:1,aS:22,D:"#D8DDE4",k:"div",aT:22,a:0,b:0},"38":{h:"27",p:"no-repeat",x:"visible",a:13,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:5,k:"div",b:264,d:129,c:198}}},{o:"3",A:{a:[{p:4,h:"23"},{p:0}]},p:"600px",a:100,Y:600,Z:400,b:100,cA:false,c:"#FFF",L:[],bY:1,d:600,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["40","39","41","42"],n:"Untitled Layout","_":1,v:{"42":{b:309,z:5,K:"Solid",c:137,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1,p:1,g:1,f:2}]},F:"center",G:"#000",aP:"pointer",w:"Back to Scene 1",x:"visible",I:"Solid",a:337,y:"preserve",J:"Solid"},"41":{h:"29",p:"no-repeat",x:"visible",a:16,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,k:"div",b:267,d:113,c:174},"39":{aU:8,G:"#000",c:248,aV:8,r:"inline",d:60,cQ:0.8030303,s:"Helvetica,Arial,Sans-Serif",t:16,cR:0.80263158,Z:"break-word",w:"You\u2019re on Scene 2:&nbsp;<br>Responsive Width and Height.<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:-10,b:214},"40":{aU:22,c:554,bS:63,aV:22,d:354,I:"Solid",J:"Solid",t:18,K:"Solid",g:"#E8EBED",L:"Solid",M:1,i:"rect2",w:"",N:1,j:"absolute",x:"visible",A:"#D8DDE4",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:1,aS:22,D:"#D8DDE4",k:"div",aT:22,a:0,b:0}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
