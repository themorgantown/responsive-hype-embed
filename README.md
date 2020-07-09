This document is helpful for testing embedded responsive Hype documents. It will show you the available width and height for your Hype projects before you structure them in Hype. To use this, embed the following code on your HTML page: 


    <div id="hypeembedsizedetector_hype_container" class="HYPE_document" style="margin:auto;position:relative;width:100%;height:400px;overflow:hidden;">
		<script type="text/javascript" charset="utf-8" src="https://themorgantown.github.io/responsive-hype-embed/HypeEmbedSizeDetector.hyperesources/hypeembedsizedetector_hype_generated_script.js?94255"></script>
	</div>
    
The first scene simulates a Hype document that is responsive in the Width Dimension only. The second scene simulates a Hype document responsive in both the Width and Height dimension. 

If you load the second scene into a `<div>` that has no set height, you'll see a warning: `The height of the document is less than 1. This is likely because its parent element height is not set`. 

The second scene runs the following code to detect the width and height of the parent element:

	var hypeEl = document.getElementById(hypeDocument.documentId());
    var navigatorinfo = navigator.userAgent;		
    function reportWindowSize() {
        var h = hypeEl.offsetHeight;
        var w = hypeEl.offsetWidth;
        hypeDocument.getElementById('rect2').innerHTML = "This scene has a 100% height, and its current height is: "+h+"px <br>The width of this scene is 100%, and the current width of the Hype document element is: <br> "+w+"px<br><br>Browser / device info: Navigator.useragent: "+navigatorinfo+"</p>";
        if ( h < 1 ) {
            alert('The height of the document is less than 1. This is likely because its parent element height is not set');
        };
    }
    reportWindowSize();
    window.onresize = reportWindowSize;

