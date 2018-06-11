const defaultHashTableSize = 32;
// bucket 存储结构
class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    // 每个位置都是链表
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    // 存储key
    this.keys = {};
  }

  hash(key) {
    // 由charCodeAt  值来计算hash 值
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => {
        console.log(hashAccumulator, keySymbol.charCodeAt(0));
        return hashAccumulator + keySymbol.charCodeAt(0);
      },
      0,
    );
    // console.log(hash);
    // console.log(hash);
    return hash % this.buckets.length;
  }

  get (key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key});
    return node ? node.value.value : undefined;
  }

  set (key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key});
    
    if (!node) {
      bucketLinkedList.append({key, value});
    } else {
      node.value.value = value;
    }
  }

  has (key) {
    console.log(this.keys);
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys () {
    console.log(this.keys);
    return Object.keys(this.keys);
  }
}