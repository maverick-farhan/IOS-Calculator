const calArea = document.querySelector('#resultArea');
const audio = document.querySelector('#audio');
const btn = document.querySelectorAll('.btn');
const toggle = document.querySelector('#toggleIcon');
const hrEl = document.querySelector('.hour');
const minEl = document.querySelector('.min');

const decimal = document.querySelector('.point');
const equal = document.querySelector('.equal');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const mult = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const percent = document.querySelector('.mod');
const pm = document.querySelector('.complement');
const clear = document.querySelector('.clear');
const num0 = document.querySelector('.zero');
const num1 = document.querySelector('.one');
const num2 = document.querySelector('.two');
const num3 = document.querySelector('.three');
const num4 = document.querySelector('.four');
const num5 = document.querySelector('.five');
const num6 = document.querySelector('.six');
const num7 = document.querySelector('.seven');
const num8 = document.querySelector('.eight');
const num9 = document.querySelector('.nine');

const numbersArray = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9];

//Varables
let valueStrInMemory = null;
let operator = null;

//Functions

const getValueAsStr = ()=>calArea.textContent.split(',').join('');

const getValueAsNum = ()=>{
return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr)=>{
	if(valueStr[valueStr.length - 1] === '.'){
	calArea.textContent += '.';
	return;
	}


const [wholeNumStr,decimalStr] = valueStr.split('.');
if(decimalStr){
calArea.textContent = parseFloat(wholeNumStr).toLocalString() + '.' + decimalStr;
}
else{
calArea.textContent = parseFloat(wholeNumStr).toLocaleString()
}
};


const getResultOfOperationAsStr = () =>{

	const valueNumInMemory = parseFloat(valueStrInMemory);
	const currentValueNum = getValueAsNum();
	let newValueNum;
	if(operatorInMemory==='plus'){
	newValueNum = valueNumInMemory + currentValueNum;
	}

	else if(operatorInMemory === 'minus'){
	newValueNum = valueNumInMemory - currentValueNum;
	}
	else if(operatorInMemory === 'mult'){
	newValueNum = valueNumInMemory * currentValueNum;
	}
	else if(operatorInMemory === 'divide'){
	newValueNum = valueNumInMemory / currentValueNum;
	}

return newValueNum.toString();
}

const handleOperatorClick = (operation) =>{
	const currentValueStr = getValueAsStr();
	if(!valueStrInMemory){
	valueStrInMemory = currentValueStr;
		operatorInMemory = operation;
		setStrAsValue('0');
		return;
	}

	valueStrInMemory = getResultOfOprationAsStr(); ;
	operatorInMemory = operation;
	setStrAsValue('0');
}




//Operators

plus.addEventListener('click',()=>{
handleOperatorClick('plus');
});
minus.addEventListener('click',()=>{
handleOperatorClick('minus');
});
mult.addEventListener('click',()=>{
handleOperatorClick('mult');
});
divide.addEventListener('click',()=>{
handleOperatorClick('divide');
});

equal.addEventListener('click',()=>{

	if(valueStrInMemory){
	setStrAsValue(getResultOfOperationAsStr());
valueStrInMemory = null;
operatorInmemory = null;
	}
});
 
const handleNumberClick = (numStr)=>{
const currentValueStr = getValueAsStr();
	if(currentValueStr === '0'){
		setStrAsValue(numStr);
		//calArea.textContent = numStr;

	}
	else{
		setStrAsValue(currentValueStr + numStr);
	}
};



clear.addEventListener('click',()=>{
setStrAsValue('0');
valueStrInMemory = null;
operatorInMemory = null;
});


pm.addEventListener('click',()=>{
const currentValueNum = getValueAsNum();
const currentValueStr = getValueAsStr();

if(currentValueStr === '-0'){
setStrAsValue('0');
	return;

}

	if(currentValueNum>=0){
	setStrAsValue('-'+currentValueStr);
	}
	else{
	
	setStrAsValue(currentValueStr.substring(1));
	}


});

percent.addEventListener('click',()=>{

const currentValueNum = getValueAsNum();
	const newValueNum = currentValueNum/100;
 	setStrAsValue(newValueNum.toString());

	valueStrInMemory = null;
	operatorInMMemory = null;

});

for(let i=0;i<numbersArray.length;i++){
const numbers = numbersArray[i];
	numbers.addEventListener('click',()=>{	
	handleNumberClick(i.toString());
	});

}


decimal.addEventListener('click',()=>{
const currentValueAsStr = getValueStr();
	if(!currentValueStr.includes('.')){
		setStrAsValue(currentValueStr + '.');
	}

});
/*
//Time Update
const updateTime = ()=>{
const currentTime = new Date();
const currentMin = currentTime.getMinutes();
let currentHour = currentTime.getHours();
if(currentHour>12){
	currentHour-=12;
}

hrEl.textContent = currentHour.toString();
minEl.textContent = currentMin.toString().padAStart(2,'0');
}

setInterval(updateTime,1000);
updateTime();
*/

//Music On tap in btns
//Add Music on Tap of each btns
/*
btn.forEach(elems =>{
elems.addEventListener('click',function(){
if(audio.paused){
audio.volume = 0.9;
audio.play();}
});
});
//Music Done
*/
