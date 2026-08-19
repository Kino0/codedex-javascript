const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean (viewsArray){
  const totalViews = (viewsArray.reduce((acumulador, atual) => acumulador + atual, 0)) / viewsArray.length;
  return totalViews;
}

function median (viewsArray){
  const orderedArray = [...viewsArray].sort((a, b) => a - b);
  const middleIndex = Math.floor(orderedArray.length / 2);
  
  if (orderedArray.length % 2 !== 0) {
    return orderedArray[middleIndex]; 
  } else {
    return (orderedArray[middleIndex - 1] + orderedArray[middleIndex]) / 2;
  }
}

console.log("TikTok")
console.log("Mean: " + mean(recentTikTokViews))
console.log("Median: " + median(recentTikTokViews))
console.log("")

console.log("Instagram")
console.log("Mean: " + mean(recentInstagramViews))
console.log("Median: " + median(recentInstagramViews))
console.log("")


console.log("Youtube")
console.log("Mean: " + mean(recentYouTubeViews))
console.log("Median: " + median(recentYouTubeViews))
console.log("")