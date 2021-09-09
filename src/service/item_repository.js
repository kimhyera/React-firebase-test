import firebaseApp from './firebase';

class ItemRepositioy {
	saveItem(userId, item) {
		firebaseApp.database().ref(`${userId}/items/${item.id}`).set();
	}
}

export default ItemRepositioy;
