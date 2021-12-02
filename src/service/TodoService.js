import app from '../firebase.config'

import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, where} from 'firebase/firestore'

const db = getFirestore(app)
const todoCollection= collection(db,'todos')

class TodoService{
	getAllTodos(){
		return getDocs(todoCollection)
	}

	getCompletedTodos(){
		return getDocs(query(todoCollection,where('checked','==', true)))
	}

	getImportantTodos(){
		return getDocs(query(todoCollection,where('isImportant','==', true)))
	}
	createTodo(todo){
		return addDoc(todoCollection, todo)
	}

	deleteTodo(id){
		return deleteDoc( doc(db, 'todos', id))
	}

	updateTodo(todo){
		const tempId = todo.id;
		delete todo.id;
		return updateDoc(doc(db,'todos', tempId), todo)
	}

}
export default new TodoService()