
let array=[
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false,false,false,false,false],
[false,false,false]
]


export const sendData=(N)=>{

  let done=false;
  const cheackInRow=(n)=>{
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(!array[i][j]){
                if(j+n<=array[i].length){
                    let flag=true;
                    for(let k=j+1;k<j+n;k++){
                        if(array[i][k]){
                            flag=false;
                            break;
                        }
                    }
                    if(flag){
                        for(let k=j;k<j+n;k++){                    
                            array[i][k]=true;                  
                        }
                        done=true;
                        return ;  
                    }
                }             
            }
        }
    }
  }
  const checkInBlock=(n)=>{
    let arr1=[]
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(!array[i][j]){
                arr1.push([i+1,j+1])
            }
        }
    }
    if(arr1.length<n){
        return
    }

    let sum=0;
    let small=0,smallindex=0;
    for(let i=0;i<n;i++){
     sum+=(arr1[i][0]*arr1[i][1])
    }
   small=sum
   smallindex=0;

    for(let i=1;i<arr1.length-n;i++){
       sum-=(arr1[i-1][0]*arr1[i-1][1])
       sum+=(arr1[i-1+n][0]*arr1[i-1+n][1])
       if(sum<small){
        small=sum;
        smallindex=i;
       }
    }
    console.log(arr1[smallindex][0]-1,arr1[smallindex][1]-1)
  for(let i=smallindex;i<smallindex+n;i++){
    array[arr1[i][0]-1][arr1[i][1]-1]=true
  }
  }

  cheackInRow(N)
  if(!done){
     checkInBlock(N)
  }

return array;
}
export const getData=()=>{
    return array;
}


