<script>
const list = [
  { color: 'white', size: 'XXL', length: 21 },
  { color: 'red', size: 'XL', length: 14 },
  { color: 'blue', size: 'M', length: 30 },
  { color: 'black', size: 'S', length: 69 }
]

function sortArray(list, property){
	let sorted = list.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
 	return sorted;
}


let sortedArrayBySize = sortArray(list, 'size');
document.write('<br><br>Sorted by size');
display(sortedArrayBySize);

let sortedArrayByColor = sortArray(list, 'color');
document.write('<br><br>Sorted by Color');
display(sortedArrayByColor);

let sortedArrayByLength = sortArray(list, 'length');
document.write('<br><br>Sorted by length');
display(sortedArrayByLength);

function display(array){
	for(element of array){
		document.write('<br>{ size: ' + element.size + '\t\t, color: ' + element.color + '\t\t, length: '+ element.length + ' }');
	}
}

</script>