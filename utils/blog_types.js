var tps = [{
	label:"笔记",
	value:1
},{
	label:"原创",
	value:3
},{
	label:"小感想",
	value:2
}]

export const getTpValue = (tp) => {
	let finded = tps.find(item => {
		return item.value == tp
	})
	if(finded){
		return finded.label
	}
	return ""
}