
public class DoublyLinkedList {
	Node head;
	Node tail;
	int count;
	
	class Node {
		int value;
		Node previous;
		Node next;
		
		Node(int data) {
			this.value = data;
		}
		
	}
	
	// creation operation
	public void addFirst(LinkedList<T> node) {
		temp = head;
		head = node;
		head.next = temp;

		count++

		if (count == 1) {
			tail = head;
		} else {
			temp.previous = head;
		}
	}

	public void addLast(LinkedList<T> node) {
		if (count == 0) {
			head = node;
		} else {
			tail.next = node;
			node.previous = tail;
		}

		tail = node;

		count++
	}


	// remove operation
	public void removeFirst() {
		if (count != 0) {
			head = head.next;
			count--
			if (count == 0) {
				tail = null;
			} else {
				head.previous = null;
			}

		}

	}

	public void removeLast() {
		if (count != 0) {
			if (count === 1) {
				head = null;
				tail = null;
			} else {
				tail.previous.next = null;
				tail = tail.previous;
			}
			count--
		}

	}


	public boolean remove(T item) {
		prev = null;
		current = head;

		while (current != null) {
			if (current.value.equals(item)) {
				if (prev !== null) {
					prev.next = current.next;
					if (current.next == null) {
						tail = prev;
					} else {
						current.next.previous = prev;
					}
					count--;
				} else {
					removeFirst();
				}
				return true;
			}
			prev = current;
			current = current.next;
		}
		return false;
	}


	// Enumerate
	public void enumerate() {
		current = head;
		while (current != null) {
			System.out.println(current.value);
			current = current.next;
		}

	}

	// Contains
	public boolean contains(T item) {
		current = head;
		while (current != null) {
			if (current.value.equals(item)) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	// Copy
	public void copyTo(T[] array, int index) {
		current = head;
		while (current != null) {
			array[index++] = current.value;
			current = current.next;
		}
	}

	public void clear() {
		head = null;
		tail = null;
		count = 0;
	}

}
