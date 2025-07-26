/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0);

  let first = l1;
  let second = l2;
  let result = head;

  let reminder = 0
  while (first || second) {
    let sum = (first?.val || 0) + (second?.val || 0) + reminder;
    reminder = 0

    if (sum >= 10) {
      reminder = sum / 10;
      sum = sum % 10
    }

    result.next = new ListNode(Math.floor(sum));
    result = result.next;

    first = first?.next;
    second = second?.next;
  }

  if (reminder) {
    result.next = new ListNode(Math.floor(reminder));
  }

  return head.next;
};
