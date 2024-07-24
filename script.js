function mincost(arr)
{ 
	
	let sum=0
	while(arr.length>1)
		{
			arr.sort((a,b)=> a-b)
			sum+= arr[0] + arr[1]
			arr.push(arr[0] + arr[1])
			arr.shift();
			arr.shift();
			
		}
	console.log(sum)
	
	//[2,3,4,6]
	
	//2+3=5 + 9 + 15
	//5,4,6
	//4,5,6
	//4+5=9
	
	//9,6
	//6,9
	//15
	
	
	
//write your code here
// return the min cost
  
}

module.exports=mincost;
