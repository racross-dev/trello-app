import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "65a5bb6030d3a2739c2a",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
