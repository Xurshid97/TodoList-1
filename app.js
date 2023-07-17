const title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      year = document.querySelector('#year'),
      button = document.querySelector('.btn')
      bookList = document.querySelector('#book-list')

button.addEventListener('click', (e)=> {
    e.preventDefault()
    if(title.value == '' || author.value == '' || year.value == '') {
        alert('Please fill the gaps')
    }
    else {
        let tableRow = document.createElement('tr')
        
        let tagTitle = document.createElement('td')
        tagTitle.textContent = title.value
        let authorTitle = document.createElement('td')
        authorTitle.textContent = author.value
        let yearTitle = document.createElement('td')
        yearTitle.textContent = year.value

        tableRow.appendChild(tagTitle)
        tableRow.appendChild(authorTitle)
        tableRow.appendChild(yearTitle)
        bookList.appendChild(tableRow)

        title.value = ''
        author.value = ''
        year.value = ''
    }
})
