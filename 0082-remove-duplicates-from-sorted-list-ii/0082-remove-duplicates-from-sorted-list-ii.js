/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;

  const newHead = new ListNode(0);
  newHead.next = head;

  let prev = newHead;
  let curr = head;
  let next = curr.next;

  while (next) {

    if (curr.val == next.val) {
      while (curr.val == next?.val) {
        curr = next;
        next = curr.next;
      }

      prev.next = curr.next;
      curr = curr.next;
      next = next?.next;

      continue;
    }

    prev = curr;
    curr = next;
    next = curr.next;
  }

  return newHead.next;
};