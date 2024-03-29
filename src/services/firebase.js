import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  documentId,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOBncE9FS57_y77bT-H2oIQQIN2s851m4",
  authDomain: "mangaanime-shop.firebaseapp.com",
  projectId: "mangaanime-shop",
  storageBucket: "mangaanime-shop.appspot.com",
  messagingSenderId: "440383602392",
  appId: "1:440383602392:web:d850eb7ac84fa57207a1ad"
};

const app = initializeApp(firebaseConfig); 

const DB = getFirestore(app);

export async function getSingleItem(id) {
  //1. referencia
  let docRef = doc(DB, "products", id);

  //2. obtenemos la respuesta async de getDoc
  let docSnapshot = await getDoc(docRef);

  //3. retornamos la respuesta.data()
  let item = docSnapshot.data();
  item.id = docSnapshot.id;

  return item;
}

export async function getItems() {
  let collectionRef = collection(DB, "products");
  let docsSnapshot = await getDocs(collectionRef);

  let docsArray = docsSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

export async function getItemsCategory(categoryID) {
  let collectionRef = collection(DB, "products");

  let q = query(collectionRef, where("category", "==", categoryID));

  let docsSnapshot = await getDocs(q);
  let docsArray = docsSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

export async function createBuyOrder(order) {
  const colectionRef = collection(DB, "orders");

  let newOrder = await addDoc(colectionRef, order);
  return newOrder.id;
}

export async function createBuyOrder_WithStockControl(order) {
  const colectionRef = collection(DB, "orders");
  const colectionProductsRef = collection(DB, "products");

  let batch = writeBatch(DB);

  let arrayIds = order.items.map((itemInCart) => itemInCart.id);
  const q = query(colectionProductsRef, where(documentId(), "in", arrayIds));
  let snapshot = await getDocs(q);

  snapshot.docs.forEach((doc) => {
    let stockDispoible = doc.data().stock;

    let ItemInCart = order.items.find((item) => item.id === doc.id);
    let countItemInCart = ItemInCart.count;

    if (stockDispoible < countItemInCart)
      throw new Error(
        `Stock no disponible para el producto para el producto ${doc.id}`
      );
    else batch.update(doc.ref, { stock: stockDispoible - countItemInCart });
  });

  await batch.commit();
  let newOrder = await addDoc(colectionRef, order);
  return newOrder.id;
}

export async function exportItemsToFirestore() {
  const products = [
    {
      id: 1, 
      title: "Evangelion: 3.0+1.0 – Rei Ayanami",
      price: 2500,
      stock: 7,
      category: "figura",
      img: "https://criticalhit.com.au/wp-content/uploads/2022/07/rei_3-200x224.jpg",
      description: "esto es un Figura",
    },
  
    {
      id: 2, 
      title: "LUNAR JAPAN",
      price: 4800,
      stock: 2,
      category: "buzo",
      img: "https://http2.mlstatic.com/D_NQ_NP_958468-MLA50575713162_072022-V.webp",
      description: "esto es un buzo",
    },
  
    {
      id: 3, 
      title: "kanojo, Okarishimasu Vol.04",
      price: 900,
      stock: 2,
      category: "manga",
      img: "https://http2.mlstatic.com/D_NQ_NP_733376-MLA48233994693_112021-V.webp",
      description: "esto es un manga",
    },
  
    {
      id: 4, 
      title: "Kimetsu no Yaiba Vol.10",
      price: 1200,
      stock: 8,
      category: "manga",
      img: "https://http2.mlstatic.com/D_NQ_NP_731778-MLA47384343008_092021-V.webp",
      description: "esto es un manga",
    },
  
    {
      id: 5, 
      title: "Dragon Head Vol.04",
      price: 2799,
      stock: 12,
      category: "manga",
      img: "https://http2.mlstatic.com/D_NQ_NP_794333-MLA52481874055_112022-V.webp",
      description: "esto es un manga",
    },
  
    {
      id: 6, 
      title: "Nagatoro Vol.06",
      price: 1200,
      stock: 3,
      category: "manga",
      img: "https://http2.mlstatic.com/D_NQ_NP_667329-MLA52650429599_112022-V.webp",
      description: "esto es un manga",
    },
  
    {
      id: 7, 
      title: "Monkey D Luffy 1",
      price: 5800,
      stock: 20,
      category: "buzo",
      img: "https://http2.mlstatic.com/D_NQ_NP_960184-MLA50941468734_072022-W.webp",
      description: "esto es un buzo",
    },
  
    {
      id: 8, 
      title: "Fase Lunar Aesthetic",
      price: 5399,
      stock: 32,
      category: "buzo",
      img: "https://http2.mlstatic.com/D_NQ_NP_614425-MLA49856617783_052022-W.webp",
      description: "esto es un buzo",
    },
  
    {
      id: 9, 
      title: "Darling - Buzo Canguro Unisex",
      price: 5800,
      stock: 7,
      category: "buzo",
      img: "https://http2.mlstatic.com/D_NQ_NP_604160-MLA49745966759_042022-W.webp",
      description: "esto es un buzo",
      discount: 20,
    },
  
    {
      id: 10, 
      title: "Haikyu!! To The Top – Tobio Kageyama POP UP PARADE",
      price: 6298,
      stock: 5,
      category: "figura",
      img: "https://criticalhit.com.au/wp-content/uploads/2021/05/000942706_06-200x281.jpg",
      description: "esto es un Figura",
    
    },
  
    {
      id: 11, 
      title: "Jujutsu Kaisen 0 – Hikkake Figure",
      price: 2100,
      stock: 2,
      category: "figura",
      img: "https://criticalhit.com.au/wp-content/uploads/2022/06/4580736401587-200x200.jpg",
      description: "esto es un Figura",
    },
  
    {
      id: 12, 
      title: "Demon Slayer: Kimetsu no Yaiba – Mitsuri Kanroji",
      price: 3800,
      stock: 1,
      category: "figura",
      img: "https://criticalhit.com.au/wp-content/uploads/2022/07/DemonSlayerKimetsunoYaibaPMPerchingPVCStatueMitsuriKanroji_1400x-200x200.png",
      description: "esto es un Figura",
    },
  ];

  const colectionRef = collection(DB, "products");

  for (let item of products) {

    let newItem = await addDoc(colectionRef, item);
    console.log(newItem.id);
  }
}