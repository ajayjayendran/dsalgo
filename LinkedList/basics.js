function createNode(data) {
    return {
      data: data,
      next: null
    };
  }
  
  class LinkedList {
    
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /*
        If the head is null, new value will be added in the 0th index
        else new value will added in to end of current value.
    */

    add(data) {
        const newNode = createNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    remove(data) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === data) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}
  
  // Example usage
  const list = new LinkedList();
  list.add(10);
  list.add(20);
  list.add(30);
  list.print(); // Output: 10 20 30
  
  list.remove(20);
  console.log("size:", list.size) // Output: size: 2
  list.print(); // Output: 10 30`