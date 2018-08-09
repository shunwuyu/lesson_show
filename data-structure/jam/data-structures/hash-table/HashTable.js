import LinkedList from '../linked-list/LinkedList';

const defaultHashTableSize = 32;

export default class HashTable {
  constructor (hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    this.keys = {}
  }
  // For simplicity reasons we will ust use character codes sum of all characters of the key to calculate the hash.
  // But you may also use more sophisticated approaches like polynomial string hash to reduce the number of collisions;
  // hash = charCodeAt(0) + PRIME^(n-1) + char
  hash (key) {
    const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)), 0);
    // console.log(hash);
    return hash % this.buckets.length
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    // console.log(keyHash);
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
    
    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  get(key) {
    // console.log(key);
    const bucketLinkedList = this.buckets[this.hash(key)];
    // console.log(bucketLinkedList);
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });
    
    return node ? node.value.value : undefined; 
  }

  delete (key) {
    const keyHash = this.hash(key);
    console.log(this.keys);
    // console.log(keyHash);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key});

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  getKeys () {
    return Object.keys(this.keys);
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
  
}