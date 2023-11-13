This tangent came as a result of trying to determine the number of subsequences of a given sequence in [[A subsequence formulation]]. 

Playing around with these sequences in order to find the 'messiest' permutation, it quickly became apparent that since I wasn't looking for increasing (or respectively decreasing) subsequences, I only had to investigate things in one direction, as the other would be the same but 'mirrored'. What I refer to by mirroring here is a highly non-technical way of saying the for the case of $N=4$, for example, I carry out the following mapping:

$$1 \to 4$$

$$2\to 3$$

$$3\to 2$$

$$4\to 1$$

This visualisation should make the use of the word mirror more obvious. 
Then, if I take some sequence $s$ and mirror all its entries to get some other sequence $s'$, then $\sigma(s)=\sigma(s')$.
This is simply because whatever subsequence was ascending for $s$ will be descending for $s'$, and vice versa. Thus the total number of subsequences is the same, simply of the opposite nature. 

There is thus an isomorphism, or some correspondence between different elements of $S_N$. To generalise this, let us define the 'mirror' function by
$$m_N(a) = N-a+1$$
for $a = 1,\ldots , N$.

Now, consider the function $M_N$, which takes a sequence $s$ and applies $m_N$ to all its elements. 

Then, if $s$ and $s'$ are any two elements of $S_N$ such that $M_N(s) = s'$, we have that $\sigma(s) = \sigma(s')$.

These are many words to say something very simple. The only reason I've used all these words is to abstractify the thought process, so that it is not case-specific. If it is unclear, consider the following example: let $s = (1,4,2,3), \ s' = (4,1,3,2)$. 

Then apply the mapping mentioned above, and notice that the situation is the same but mirrored. 

Thinking about the mapping $M_N$, we see that it is the inverse of itself, that is if $M_N(s)=s'$, then $M_N(s')=s$. This then implies a lot of nice things, and we quickly see that the total number of distinct cases that need to be compared in order to determine $L(N)$ is $N!/2$. 

While this is not that exciting, it means that if there is one configuration which proves the truth of $S_1$, then it is not unique, or in general, that there must be an even number of them. Even though this also may not seem that enlightening, it gives a hint that if we ever end up with a situation that claims that there exist a unique configuration that shows the truth of $S_1$, this is a contradiction which suggests that either: a) the initial hypothesis that led to that statement is false; b) there is a flaw in the logic that led to this. 

It is not immediate that this property is inherited to the original game, due to the fact that the player's hand is a set, thus the mapping $M_N$ is pointless there. It suggests that some weaker analogue should exist, however. 