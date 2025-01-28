document.querySelectorAll('.switch input[type="checkbox"]').forEach(element => {
    element.addEventListener('change', () => 
        document.querySelector('body').classList.toggle('themes')
      );
});