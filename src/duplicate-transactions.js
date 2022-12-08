function findDuplicateTransactions(transactions) {

  let copyTrans = [...transactions]
    
    if(transactions.length == 1) {
        return []
    };

    if(!Array.isArray(transactions)){
        throw Error('Invalid')
    }

    //Group similar objects together by comparing properties
    let similarObjArr = [];
    for (let i = 0; i < copyTrans.length; i++) {
        let arr2 = []

        const {
            sourceAccount: srcActI, 
            targetAccount: tgrActI, 
            category: categI,
            amount: amtI,
            time: timeI
        } = copyTrans[i]
        
        for(let j = i; j < copyTrans.length; j++) {
            
            const {
                sourceAccount: srcActJ, 
                targetAccount: tgrActJ, 
                category: categJ,
                amount: amtJ,
                time: timeJ
            } = copyTrans[j]

            let index = copyTrans.findIndex((transaction) => {
                        return (transaction.sourceAccount === srcActI && 
                                transaction.targetAccount == tgrActI && 
                                transaction.amount == amtI
                                && transaction.category == categI) 
            })

            if (index == i) {
                if ((srcActI === srcActJ) && (tgrActI === tgrActJ) && (amtI === amtJ) && (categI === categJ)) {
                    arr2.push(copyTrans[j])
                }   
            } else continue
        }

        if (arr2.length > 0) {
            similarObjArr.push(arr2)
        }
    }
    
    //Sort objects in each sub-array by time of occurence
    let sortedArray = []
    for (let i = 0; i < similarObjArr.length; i++) {
        let sortedArr = similarObjArr[i].sort((a, b) => {
            let aTime =  Math.floor(new Date(a.time).getTime()/1000);
            let bTime = Math.floor(new Date(b.time).getTime()/1000);
            return  aTime - bTime
        })
    
        sortedArray.push(sortedArr)
    }
    
    //Filter to remove empty arrays
    let filter = sortedArray.filter((elem) => {
      return elem.length !== 1
    })
    
    //Remove more than 60 secs interval transactions
    let solutionArray = []
    filter.forEach((subArr) => {
    let holder = []
    for (let j = 0; j < subArr.length-1; j++) {

          let currentTime = Math.floor(new Date(subArr[j].time).getTime()/1000);
          let nextTime = Math.floor(new Date(subArr[j+1].time).getTime()/1000);
  
          if (subArr.length < 3) {
  
            if(j<2 && nextTime - currentTime <= 60) {
              holder.push(subArr[j]);
              holder.push(subArr[j+1]);
              
            } else continue
  
          }else if (subArr.length > 2) {
            if (Math.abs(currentTime - nextTime) <= 60) {
              holder.push(subArr[j]);
              if (j == subArr.length-2) {
                holder.push(subArr[j+1])
              }
            }else if (j >= 2 && Math.abs(currentTime - nextTime) > 60 && Math.abs(currentTime - Math.floor(new Date(subArr[j-1].time).getTime()/1000)) <= 60) {
              holder.push(subArr[j]);
            } else continue; 
          }
        }

        if(holder.length > 0) {
          solutionArray.push(holder)
        }

  })

    //Sort by id
    solutionArray.sort((a, b) => {
      return a[0].id - b[0].id
    })
    return solutionArray
}

export default findDuplicateTransactions;