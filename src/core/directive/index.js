export default (Vue)=>{
  Vue.directive("getThis",(el)=>{
  	el.onclick=function(){
  		alert("OK");
  	}
  })
  Vue.directive("fileUpload",(el, binding, vnode, oldVnode)=>{
	var data=binding.value;//拿到了组件传过来的参数
     	//1.创建input file 文件上传表单
     	 createNode(data) 
     	 function createNode(data) {
            // 创见节点
            //<input type="file" multiple/> 
            var node = document.createElement("input");
            node.type = "file";
             //限制上传类型必会
            node.accept = " image/jpeg, image/png, image/jpg";
             //设置是否多张上传 false
            node.multiple = data.multiple ? "multiple" : "";
            node.style.display = "none";
            // 把当前创建file input节点对象 放入 指令节点之间
            el.prepend(node);
             //调用 button节点下面 input_file的onclick方法,自动弹出文件上传框
            el.onclick = function() {
              el.children[0].click();
            }
		  }
		  var inputFile = el.children[0];
     
     	inputFile.onchange = function(event) {
                //当用户上传图片了,拿到事件对象
            var event = event || window.event;
               // 在事件对象下面去求  file文件对象
            var file=event.target.files[0]
            
            //去调用当前组件组件里面 
            var fn=data.fn; //fileUpload
            var imgurl=window.URL.createObjectURL(file)

            //
            // vnode.context[fn](file)

            var image = new Image();  
            image.src = imgurl;  
          function getBase64Image(img) {  
              var canvas = document.createElement("canvas");  
              canvas.width = img.width;  
              canvas.height = img.height;  
              var ctx = canvas.getContext("2d");  
              ctx.drawImage(img, 0, 0, img.width, img.height);  
              var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();  
              var dataURL = canvas.toDataURL("image/"+ext);  
              return dataURL;  
         }  

            image.onload = function(){  
                 var base64 = getBase64Image(image);  
                 vnode.context.fileUpload(base64)
                  // console.log(typeof base64);  
            }  
          }
 })
  
}
