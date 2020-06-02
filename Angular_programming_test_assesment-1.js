<script>
let smallest;
let largest;
let numbersArray1 = [5, 2, 22, 3, 21, 0, 13, 17];
let numbersArray2 = [10.5, 30, 65, 99.99, 99.9, 68, 41, 72, 8.3];
let numbersArray3 = [-2, -4, -9, -13, -3, -16, -24];

function findLargestAndSmallest(numbers){
	let sorted = numbers.slice().sort(function(a, b) {
  		return a-b;
	});
 	smallest = sorted[0];
 	largest  = sorted[sorted.length - 1];
}

findLargestAndSmallest(numbersArray1);
document.write('<br>Smallest: ' + smallest);
document.write('\t\t\t\tLargest: ' + largest);

findLargestAndSmallest(numbersArray2);
document.write('<br>Smallest: ' + smallest);
document.write('\t\t\t\tLargest: ' + largest);

findLargestAndSmallest(numbersArray3);
document.write('<br>Smallest: ' + smallest);
document.write('\t\t\t\tLargest: ' + largest);

</script>