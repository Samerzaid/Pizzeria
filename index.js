const fetchDataButton = document.getElementById('fetchDataButton');
        const dataList = document.getElementById('dataList');

        fetchDataButton.addEventListener('click', () => {
            fetch('https://official-joke-api.appspot.com/random_ten')
                .then(response => response.json())
                .then(data => {
                    dataList.innerHTML = ``;

                    data.forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.textContent = item.setup + " " + item.punchline;
                        dataList.appendChild(listItem);
                    });
                })
               
        });
