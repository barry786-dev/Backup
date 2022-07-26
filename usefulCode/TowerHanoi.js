// start java script cosding here
console.log('!--------Tower of Hanoi puzzel ?-------!');
/* function towerOfHanoi1(n, From, To, Aux) {
  console.log('called with ' + n + ', ' + From + ', ' + To + ' and ' + Aux);
  if (n === 1) {
    console.log(`Move disk 1 from ${From} to ${To}`);
    return;
  }
  //console.log(`we need to move ${n - 1} disks from ${From} to ${Aux}`);
  towerOfHanoi1(n - 1, From, Aux, To);
  console.log(`Move disk ${n} from ${From} to ${To}`);
  // console.log(`we need to move ${n - 1} disks from ${Aux} to ${To}`);
  towerOfHanoi1(n - 1, Aux, To, From);
}
towerOfHanoi1(3, 'A', 'C', 'B'); */

function towerOfHanoi(n, From, To, Aux) {
    if (n > 0) {
      towerOfHanoi(n-1,From,Aux,To);
      console.log(`Move disk ${n} from ${From} to ${To}`);
      towerOfHanoi(n-1,Aux,To,From)
    }
    
  }
  towerOfHanoi(4, 'A', 'C', 'B');

 /*  class Stack
    {
        constructor(capacity) {
            this.capacity = capacity;
            this.top = -1;
            this.array = new Array(capacity);
        }
    }
     
    // function to create a stack of given capacity.
    function createStack(capacity)
    {
        let stack = new Stack(capacity);
        return stack;
    }
     
    // Stack is full when top is equal to the last index
    function isFull(stack)
    {
        return (stack.top == (stack.capacity - 1));
    }
      
    // Stack is empty when top is equal to -1
    function isEmpty(stack)
    {
        return (stack.top == -1);
    }
      
    // Function to add an item to stack.
    // It increases top by 1
    function push(stack, item)
    {
        if(isFull(stack))
            return;
        stack.array[++stack.top] = item;
    }
      
    // Function to remove an item from stack.
    // It decreases top by 1
    function pop(stack)
    {
        if(isEmpty(stack))
            return Number.MIN_VALUE;
        return stack.array[stack.top--];
    }
      
    // Function to implement legal
    // movement between two poles
    function moveDisksBetweenTwoPoles(src, dest, s, d)
    {
        let pole1TopDisk = pop(src);
        let pole2TopDisk = pop(dest);
  
        // When pole 1 is empty
        if (pole1TopDisk == Number.MIN_VALUE)
        {
            push(src, pole2TopDisk);
            moveDisk(d, s, pole2TopDisk);
        }
          
        // When pole2 pole is empty
        else if (pole2TopDisk == Number.MIN_VALUE)
        {
            push(dest, pole1TopDisk);
            moveDisk(s, d, pole1TopDisk);
        }
          
        // When top disk of pole1 > top disk of pole2
        else if (pole1TopDisk > pole2TopDisk)
        {
            push(src, pole1TopDisk);
            push(src, pole2TopDisk);
            moveDisk(d, s, pole2TopDisk);
        }
          
        // When top disk of pole1 < top disk of pole2
        else
        {
            push(dest, pole2TopDisk);
            push(dest, pole1TopDisk);
            moveDisk(s, d, pole1TopDisk);
        }
    }
      
    // Function to show the movement of disks
    function moveDisk(fromPeg, toPeg, disk)
    {
        document.write("Move the disk "+disk +
                        " from '"+fromPeg+"' to '"+toPeg + "'</br>");
    }
      
    // Function to implement TOH puzzle
    function tohIterative(num_of_disks, src, aux, dest)
    {
        let i, total_num_of_moves;
        let s = 'S', d = 'D', a = 'A';
      
        // If number of disks is even, then interchange
        // destination pole and auxiliary pole
        if (num_of_disks % 2 == 0)
        {
            let temp = d;
            d = a;
            a = temp; class Stack
    {
        constructor(capacity) {
            this.capacity = capacity;
            this.top = -1;
            this.array = new Array(capacity);
        }
    }
     
    // function to create a stack of given capacity.
    function createStack(capacity)
    {
        let stack = new Stack(capacity);
        return stack;
    }
     
    // Stack is full when top is equal to the last index
    function isFull(stack)
    {
        return (stack.top == (stack.capacity - 1));
    }
      
    // Stack is empty when top is equal to -1
    function isEmpty(stack)
    {
        return (stack.top == -1);
    }
      
    // Function to add an item to stack.
    // It increases top by 1
    function push(stack, item)
    {
        if(isFull(stack))
            return;
        stack.array[++stack.top] = item;
    }
      
    // Function to remove an item from stack.
    // It decreases top by 1
    function pop(stack)
    {
        if(isEmpty(stack))
            return Number.MIN_VALUE;
        return stack.array[stack.top--];
    }
      
    // Function to implement legal
    // movement between two poles
    function moveDisksBetweenTwoPoles(src, dest, s, d)
    {
        let pole1TopDisk = pop(src);
        let pole2TopDisk = pop(dest);
  
        // When pole 1 is empty
        if (pole1TopDisk == Number.MIN_VALUE)
        {
            push(src, pole2TopDisk);
            moveDisk(d, s, pole2TopDisk);
        }
          
        // When pole2 pole is empty
        else if (pole2TopDisk == Number.MIN_VALUE)
        {
            push(dest, pole1TopDisk);
            moveDisk(s, d, pole1TopDisk);
        }
          
        // When top disk of pole1 > top disk of pole2
        else if (pole1TopDisk > pole2TopDisk)
        {
            push(src, pole1TopDisk);
            push(src, pole2TopDisk);
            moveDisk(d, s, pole2TopDisk);
        }
          
        // When top disk of pole1 < top disk of pole2
        else
        {
            push(dest, pole2TopDisk);
            push(dest, pole1TopDisk);
            moveDisk(s, d, pole1TopDisk);
        }
    }
      
    // Function to show the movement of disks
    function moveDisk(fromPeg, toPeg, disk)
    {
        document.write("Move the disk "+disk +
                        " from '"+fromPeg+"' to '"+toPeg + "'</br>");
    }
      
    // Function to implement TOH puzzle
    function tohIterative(num_of_disks, src, aux, dest)
    {
        let i, total_num_of_moves;
        let s = 'S', d = 'D', a = 'A';
      
        // If number of disks is even, then interchange
        // destination pole and auxiliary pole
        if (num_of_disks % 2 == 0)
        {
            let temp = d;
            d = a;
            a = temp;
        }
        total_num_of_moves = parseInt(Math.pow(2, num_of_disks) - 1, 10);
      
        // Larger disks will be pushed first
        for (i = num_of_disks; i >= 1; i--)
            push(src, i);
      
        for (i = 1; i <= total_num_of_moves; i++)
        {
            if (i % 3 == 1)
                moveDisksBetweenTwoPoles(src, dest, s, d);
      
            else if (i % 3 == 2)
                moveDisksBetweenTwoPoles(src, aux, s, a);
      
            else if (i % 3 == 0)
                moveDisksBetweenTwoPoles(aux, dest, a, d);
        }
    }
     
    // Input: number of disks
    let num_of_disks = 3;
 
    let src, dest, aux;
 
    // Create three stacks of size 'num_of_disks'
    // to hold the disks
    src = createStack(num_of_disks);
    dest = createStack(num_of_disks);
    aux = createStack(num_of_disks);
 
    tohIterative(num_of_disks, src, aux, dest);
     
    // This code is contributed by decode2207
        }
        total_num_of_moves = parseInt(Math.pow(2, num_of_disks) - 1, 10);
      
        // Larger disks will be pushed first
        for (i = num_of_disks; i >= 1; i--)
            push(src, i);
      
        for (i = 1; i <= total_num_of_moves; i++)
        {
            if (i % 3 == 1)
                moveDisksBetweenTwoPoles(src, dest, s, d);
      
            else if (i % 3 == 2)
                moveDisksBetweenTwoPoles(src, aux, s, a);
      
            else if (i % 3 == 0)
                moveDisksBetweenTwoPoles(aux, dest, a, d);
        }
    }
     
    // Input: number of disks
    let num_of_disks = 3;
 
    let src, dest, aux;
 
    // Create three stacks of size 'num_of_disks'
    // to hold the disks
    src = createStack(num_of_disks);
    dest = createStack(num_of_disks);
    aux = createStack(num_of_disks);
 
    tohIterative(num_of_disks, src, aux, dest);
     
    // This code is contributed by decode2207 */
