it('Shows an autocomplete!', () => {
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [{ Title: 'Avengers' }, { Title: 'Not Avengers' }];
    },
    renderOption(movie) {
      return movie.Title;
    }
  });

  const dropdown = document.querySelector('.dropdown');
});
