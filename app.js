

document.getElementById('filterInput').addEventListener('keyup', function() {
    const filterValue = this.value.toLowerCase();
    const items = document.querySelectorAll('#itemsList li');
    
    items.forEach(function(item) {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(filterValue)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});