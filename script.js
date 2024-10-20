const fileStrucutre = [
    {
        id: 1,
        name: "Week 2 PQMS",
        folders: [
            {
                id: 2,
                name: "Tutorial 1",
                folders: {}
            },
            {
                id: 2,
                name: "Tutorial 2",
                folders: {}
            }
        ]
    },
    {
        id: 1,
        name: "Week 3 PQMS",
        folders: [
            {
                id: 2,
                name: "Tutorial 2",
                folders: {}
            },
            {
                id: 2,
                name: "Tutorial 4",
                folders: {}
            }
        ]
    },
]

const container = document.querySelector('.container')


window.addEventListener("load", (e) => {
    
    fileStrucutre.forEach(files => {
        
        const fileList = document.createElement('div')
        fileList.classList.add('files')
        const fileButton = document.createElement('button')
        fileButton.classList.add('file')
        fileButton.innerHTML = files.name
        
        fileList.appendChild(fileButton)
        container.appendChild(fileList)


        
        console.log(fileList);
        console.log(fileButton);
        
        if(Object.keys(fileStrucutre).length !== 0){
            
            const folders = files.folders

           
            
            folders.forEach(folder => {
                const folderList = document.createElement('div')
                folderList.classList.add('folders')
                
                const folderButton = document.createElement('button')
                folderButton.classList.add('folder')
                
                folderButton.innerHTML = folder.name

                  folderList.style.display = 'none'
                
                folderList.appendChild(folderButton)
                fileList.appendChild(folderList)

                fileButton.addEventListener("click", (e) => {
                    folderList.style.display = folderList.style.display === 'none' ? 'flex' : 'none';
                })
                
            })
            
            
            
        }
    })
    

})


function getFolderName(folders){
    folders.forEach(folder => {
        console.log(folder.name);
        
        return folder.name
    })
}