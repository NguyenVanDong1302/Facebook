import { getStorage, ref, deleteObject } from 'firebase/storage';

export const handleDeleteFileStorage = (items) => {
    const storage = getStorage();
    const urlParts = items.fileUrl.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    let nameFile = lastPart.split('?')[0]; // Lấy phần trước dấu hỏi
    if (items.typeFile) {
        nameFile = 'videos/' + nameFile;
    }
    // Tách phần cuối để lấy tên file

    // Create a reference to the file to delete
    const desertRef = ref(storage, nameFile);

    // Delete the file
    deleteObject(desertRef)
        .then(() => {
            // File deleted successfully
        })
        .catch((error) => {
            // Uh-oh, an error occurred!
        });
};
