// JavaScript Document
var inputName = document.getElementsByTagName('input')[0],
		infoWord = document.getElementById('info');
	document.getElementsByTagName('button')[0].onclick = validate;
	
	function validate() {
		var inputValue = inputName.value;
		//利用countlength辨别输入框的字符数
		if (countLength(inputValue) == 0) {
			infoWord.innerHTML = '姓名不能为空';
			infoWord.style.color = 'red';
			inputName.style.border = '1px solid red';
		} else if (countLength(inputValue) >=4 && countLength(inputValue) <= 16) {
			infoWord.innerHTML = '格式正确';
			infoWord.style.color = 'lightgreen';
			inputName.style.border = '1px solid lightgreen';
		} else {
			infoWord.innerHTML = '请输入长度为4~16位字符';
			infoWord.style.color = 'red'
			inputName.style.border = '1px solid red';
		}
	}
	
	 function countLength(str) {
		var getLength = 0;
		for (var i = 0; i < str.length;	i++) {
			var countCode = str.charCodeAt(i);
			if (countCode >= 0 && countCode <=128) {
				getLength += 1;
			} else {
				getLength += 2;
			}
		}
		return getLength;}
