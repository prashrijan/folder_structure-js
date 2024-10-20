const fileStructure = [
    {
        id: 1,
        name: "File 1",
        folders: [
            {
                id: 2,
                name: "Folder 1",
                folders: []
            },
            {
                id: 3,
                name: "Folder 2",
                folders: [
                    {
                        id: 4,
                        name: "Subfolder 1",
                        folders: []
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "File 2",
        folders: [
            {
                id: 6,
                name: "Folder 3",
                folders: []
            },
            {
                id: 7,
                name: "Folder 4",
                folders: [
                    {
                        id: 8,
                        name: "Subfolder 2",
                        folders: [
                            {
                                id: 9,
                                name: "Nested Subfolder 1",
                                folders: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const container = document.querySelector('.container');

// Function to create folder structure recursively
function createFileStructure(files) {
    const fileList = document.createElement('div');
    fileList.classList.add('files');

    const fileButton = document.createElement('button');
    fileButton.classList.add('file');
    fileButton.innerHTML = files.name;

    fileList.appendChild(fileButton);

    if (files.folders && files.folders.length > 0) {
        files.folders.forEach(folder => {
            const folderList = document.createElement('div');
            folderList.classList.add('folders');

            const folderButton = document.createElement('button');
            folderButton.classList.add('folder');
            folderButton.innerHTML = folder.name;

            // Set initial display to 'none'
            folderList.style.display = 'none';

            folderList.appendChild(folderButton);
            fileList.appendChild(folderList);

            // Recursively create subfolders if they exist
            if (folder.folders && folder.folders.length > 0) {
                const nestedFolders = createFileStructure(folder);
                folderList.appendChild(nestedFolders);
            }

            // Toggle visibility on button click
            fileButton.addEventListener("click", () => {
                folderList.style.display = folderList.style.display === 'none' ? 'flex' : 'none';
            });
        });
    }

    return fileList;
}

window.addEventListener("load", () => {
    fileStructure.forEach(files => {
        const fileList = createFileStructure(files);
        container.appendChild(fileList);
    });
});
