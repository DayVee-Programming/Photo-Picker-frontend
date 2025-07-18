// Variables
const DB_NAME = 'photo-picker'
const STORE_NAME = 'images'
const DB_VERSION = 1
let dbPromise: Promise<IDBDatabase>

const openIDB = (): Promise<IDBDatabase> => {
  // Reuse same promise
  if (dbPromise) return dbPromise

  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.addEventListener('upgradeneeded', () => {
      if (!req.result.objectStoreNames.contains(STORE_NAME)) {
        req.result.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true })
      }
    })
    req.addEventListener('success', () => {
      resolve(req.result)
    })
    req.addEventListener('error', () => {
      reject(req.error)
    })
  })
  return dbPromise
}

export const addImageToIDB = async (file: File): Promise<number> => {
  const db = await openIDB()
  return new Promise((resolve, reject) => {
    // Transaction object
    const tx = db.transaction(STORE_NAME, 'readwrite')

    const store = tx.objectStore(STORE_NAME)
    const req = store.add(file)
    req.addEventListener('success', () => {
      resolve(req.result as number)
    })
    req.addEventListener('error', () => {
      reject(req.error)
    })
  })
}

export const getIDBImages = async (): Promise<Blob[]> => {
  const db = await openIDB()
  return new Promise((resolve, reject) => {
    // Transaction object
    const tx = db.transaction(STORE_NAME, 'readonly')

    const store = tx.objectStore(STORE_NAME)
    const req = store.getAll()

    req.addEventListener('success', () => {
      // Return only blobs/files
      console.log(req.result)
      resolve(req.result.map((res) => res as Blob))
    })
    req.addEventListener('error', () => {
      reject(req.error)
    })
  })
}

export const removeIDBImage = async (id: number): Promise<void> => {
  const db = await openIDB()
  return new Promise((resolve, reject) => {
    // Transaction object
    const tx = db.transaction(STORE_NAME, 'readwrite')

    const store = tx.objectStore(STORE_NAME)
    const req = store.delete(id)
    console.log(req)
    req.addEventListener('success', () => {
      resolve()
    })
    req.addEventListener('error', () => {
      reject(req.error)
    })
  })
}
