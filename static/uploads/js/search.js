const searchBox = document.querySelector('.search-input');

let suggestions = document.getElementById('suggestions');
if (!suggestions) {
  suggestions = document.createElement('ul');
  suggestions.id = 'suggestions';
  suggestions.className = 'suggestions-list';
  searchBox.parentNode.insertBefore(suggestions, searchBox.nextSibling);
}

const relatedKeywords = [
  "박연우 전북대",
  "박연우 CV",
  "박연우 연구",
  "박연우 프로젝트"
];

searchBox.addEventListener('input', function() {
  const query = this.value.trim().toLowerCase();
  suggestions.innerHTML = ''; 

  if(query === '') return; 

  const matched = relatedKeywords.filter(item => item.toLowerCase().includes(query));

  matched.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      searchBox.value = item;
      suggestions.innerHTML = '';

    });
    suggestions.appendChild(li);
  });
});