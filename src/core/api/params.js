import global from "@/core/global/global"
const getParams=global.getParam();
const  params={
	name:getParams.name||"",
	sex:getParams.sex||"",
	v:new Date().getTime()
}

export default params;