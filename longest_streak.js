const longestStreak = (head) => {
  let currentStreak = 0;
  let maxStreak = 0;
  let current = head;
  let prevVal = null;
  while (current !== null){
    if (current.val === prevVal){
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }
    if (currentStreak > maxStreak){
      maxStreak = currentStreak;
    }
    prevVal = current.val;
    current = current.next;
  }
  return maxStreak;
};
