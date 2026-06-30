let developers_list = []

async function downloadAndDisplay() {
    const response = await fetch('http://localhost:5248/DeveloperApi')
    const devs = await response.json()

    console.log(devs)

    let container = document.querySelector('#developers')
    developer_list = []
    container.innerHTML = ''



    devs.map(x => {
        developers_list.push(x)

        let div = document.createElement('div')
        let p = document.createElement('p')

        let delBtn = document.createElement('button')
        delBtn.innerHTML = 'Törlés'
        delBtn.onclick = () => DeleteDeveloper(x.id)

        let modBtn = document.createElement('button')
        modBtn.innerHTML = 'Módosít'
        modBtn.onclick = () => SaveID(x.id)

        p.innerHTML = `${x.name}, Fizetése: ${x.salary}, Aktív: ${x.isActive === true ? "Igen" : "Nem"}`

        div.appendChild(p)
        p.appendChild(delBtn)
        p.appendChild(modBtn)
        container.appendChild(div)
    })
}

async function GetDeveloper() {
    let id = document.querySelector('#developer-id').value

    const response = await fetch(`http://localhost:5248/DeveloperApi/${id}`)
    const dev = await response.json()

    let div = document.querySelector('#developer-byid')

    let p = document.createElement('p')
    p.innerHTML = `${dev.name}, Fizetése: ${dev.salary}, Aktív: ${dev.isActive === true ? "Igen" : "Nem"}`

    div.appendChild(p)
}

function CreateDeveloper() {
    let name = document.querySelector('#developer-name').value
    let salary = Number(document.querySelector('#developer-salary').value)
    let isActive = document.querySelector('#developer-active').checked

    fetch('http://localhost:5248/DeveloperApi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Name: name,
            Salary: salary,
            isActive: isActive
        })
    }).then(resp => {
        console.log(resp)
        downloadAndDisplay()
    })

    console.log(isActive)
}

function DeleteDeveloper(id) {
    fetch(`http://localhost:5248/DeveloperApi/${id}`, {
        method: 'DELETE'
    }).then(resp => {
        console.log(resp)
        developers_list.filter(x => x.id !== id)
        downloadAndDisplay();
    })

    
}

let devToModify = null

async function SaveID(id) {
    devToModify = id

    const response = await fetch(`http://localhost:5248/DeveloperApi/${id}`)
    const dev = await response.json()

    document.querySelector('#developer-name').value = dev.name
    document.querySelector('#developer-salary').value = dev.salary
    document.querySelector('#developer-active').checked = dev.isActive

}

function UpdateDeveloper() {
    let id = devToModify
    let name = document.querySelector('#developer-name').value
    let salary = Number(document.querySelector('#developer-salary').value)
    let isActive = document.querySelector('#developer-active').checked

    fetch(`http://localhost:5248/DeveloperApi/${id}`, {
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            Name: name,
            Salary: salary,
            isActive: isActive
        })
    }).then(resp => {
        console.log(resp)
        downloadAndDisplay()
    })
}


downloadAndDisplay();