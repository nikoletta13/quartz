---
date: 2023-11-09
---
This is a straightforward definition, but it may take some thought for it to become immediate and intuitive. As the words say, this is the lowest upper bound. That is, for a collection of numbers (in this case), this number is:
- an upper bound,
- the lowest of all the other upper bounds.

To see this with an example, consider the following situation. I give you the following information: the set $S$ contains only 1-digit numbers. What is the LUB of $S$?
Naturally, 100 is an upper bound of $S$. However, so is 95, for example. Therefore, 100 cannot be the LUB. Then we can keep decreasing the LUB, until we cannot claim that this number is an upper bound. In this case, if we take the number 9, we see that it is an upper bound as every 1-digit number is either lower or equal to 9. Notice that there is no number lower than that that could be an upper bound (8<9 so if 9 is in $S$ this is disproved). Therefore, 9 is the LUB for $S$. 

Something interesting to see is that a LUB is unique, whereas an upper bound is not unique. This can be thought as the 'harshest possible boundary' for a set. 