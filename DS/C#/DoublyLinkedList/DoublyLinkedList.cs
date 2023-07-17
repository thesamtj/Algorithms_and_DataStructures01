//using System.Collections;

public class DoublyLinkedListNode<T>
{
	public T Value { get; set; }
	public DoublyLinkedListNode<T> Next { get; set; }
	public DoublyLinkedListNode<T> Previous { get; set; }
	
	public DoublyLinkedListNode(T value) 
	{
		Value = value;
	}
}

public class DoublyLinkedList<T> : System.Collections.Generic.ICollection<T>
{ 
	public DoublyLinkedListNode<T> Head { get; private set; }
	public DoublyLinkedListNode<T> Tail { get; private set; }
	public int Count { get; private set; }
	
	public void AddHead(DoublyLinkedListNode<T> node) 
	{
		DoublyLinkedListNode<T> temp = Head;
		
		Head = node;
		Head.Next = temp;
		
		if (Count == 0) {
			Tail = Head;
		} else {
			temp.Previous = Head;
		}
		
		Count++;
	}
	
	public void AddTail(DoublyLinkedListNode<T> node) 
	{
		if (Count == 0) {
			Head = Tail;
		} else {
			Head.Next = node;
			Node.Previous = Tail;
		}
		
		Tail = node;
		Count++;
	}
}
