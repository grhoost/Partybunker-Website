document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('keyword');
    const resultContainer = document.getElementById('search-results');
    const fileList = [,
      'agb.html',
      'datenschutzbestimmungen.html',
      'index.html',
      'index.js',
      'formate.css',
      'willstDuStress.html',
      'berlin.html',
      'burkhardtsdorf.html',
      'dresden.html',
      'erfolge.html',
      'finsterwalde.html',
      'halle.html',
      'impressum.html',
      'kontakt.html',
      'la.html',
      'la.js',
      'leipzig.html',
      'login.html',
      'nauen.html',
      'oktoberfest.html',
      'penig.html',
      'räume.html',
      'register.html',
      'search.js',
      'räume.js',
      'service.html',
      'silvester.html',
      'ut.html',
      'weihnachten.html'
    ];
  
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
      const results = fileList.filter(file => file.toLowerCase().includes(query));
  
      resultContainer.innerHTML = '';
  
      if (results.length > 0) {
        resultContainer.style.display = 'block';
        results.forEach(function(result) {
          const resultItem = document.createElement('div');
          resultItem.classList.add('search-result-item');
          resultItem.textContent = result;
          resultItem.addEventListener('click', function() {
            window.location.href = result;
          });
          resultContainer.appendChild(resultItem);
        });
      } else {
        resultContainer.style.display = 'none';
      }
    });
  
    searchInput.addEventListener('blur', function() {
      setTimeout(() => {
        resultContainer.style.display = 'none';
      }, 200);
    });
  
    searchInput.addEventListener('focus', function() {
      if (resultContainer.innerHTML !== '') {
        resultContainer.style.display = 'block';
      }
    });
  });