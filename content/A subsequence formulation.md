---
date: 2023-11-09
---
The statement $S_1$ is the first statement I am looking into, and it can be analysed by studying appropriate [[Subsequence|subsequences]], as will be demonstrated below. For the sake of completeness, its definition is included here. 

> [!note] Definition.
> **$S_1$: There exists a configuration of the cards that is unwinnable with the alternative ruleset $\cal R'$ and without 10-tricks.**

>[!tldr]  The alternative ruleset $\cal R'$
> The ruleset $\cal R '$ dictates that: no cards are drawn to begin with, and a player must play the top card of the deck as drawn. 

In the end of [[3. Formulations|the discussion on forming simpler questions]], it is explained how $\overline{S_1} \Rightarrow \overline Q$; if a configuration $\cal C$ is winnable under this ruleset, $\cal C$ is winnable with the original ruleset.

> [!note] Claim.
> $S_1$ is equivalent to there existing at most 4 mutually exclusive [[Monotone|monotone]] subsequences (two increasing and two decreasing) for each configuration of the deck. 

To see that this holds, consider the forward direction first. If $S_1$ holds, then the cards can be arranged in the monotone piles, as the removal of the 10-tricks implies that piles can only be monotone. We require that the subsequences are mutually exclusive because each card is played only once. Therefore, we can extract at most 4 such monotone (two increasing and two decreasing) subsequences. Conversely, if for some configuration there exist 4 such subsequences, it follows that that this configuration is winnable. 

This leads to the following question:
# What is the [[Lowest Upper Bound (LUB)|lowest upper bound]] for the number of mutually exclusive monotone subsequences for any card configuration? 

This number corresponds to the _minimum_ number of piles that is _necessary_ for the game under $\cal R'$ to always be winnable. This provides thus an upper bound for the number of piles that is necessary for the game under $\cal R$ 
to be winnable, but there is no guarantee that this is the lowest such bound. In fact, it is most likely not the lowest such bound. 

$\cal C$ is some shuffling of the cards, and can be thought of as just a permutation of the numbers 2 to 99. It is simpler to translate this as a permutation of the numbers 1 to 98, and no information is lost - we are simply thinking parallel to the context of the game.

Let $S_N$ denote the set of permutations of the numbers $1,\ldots,N$. That is, if $s$ is an element of (or in simpler English, belongs to) $S_N$, then $s$ is simply a permutation of the numbers $1,\ldots, N$, and $S_N$ contains in it _all_ the possible such permutations. It is a standard mathematical exercise to show that $S_N$ contains $N!$ elements. Notice now that in the context of the question, $\cal C$ is equivalent to an element of $S_{98}$. 

>[!note] Definition.
>For a given sequence $s$, denote by $\sigma(s)$ the minimum number of subsequences that partition $s$. Then, let $L(N)$ be defined as $$L(N) = \max_{s \in S_N} \sigma(s).$$ In words, $L(N)$ is the maximum number that $\sigma(s)$ attains over all the elements $s$ of $S_N$. 
^defLN

**Thus the lowest upper bound for the number of monotone subsequences that partition $\cal C$ is given by $L(98)$.** 



The first thing I tried to do to familiarise myself with this question is try out on paper some smaller examples. 
Very quickly we can see that $L(2)=1,\ L(3)=2,\ L(4)=2,\ L(5)=3,\ L(6)=3$.

>[!note]- Tangent: [[Concerning the distinct unwinnable configurations]]
>Playing around with these sequences in order to find the 'messiest' permutation, it quickly became apparent that since I wasn't looking for increasing (or respectively decreasing) subsequences, I only had to investigate things in one direction, as the other would be the same but 'mirrored'. What I refer to by mirroring here is a highly non-technical way of saying the for the case of $N=4$, for example, I carry out the following mapping:
>
>$$1 \to 4$$
>
>$$2\to 3$$
>
>$$3\to 2$$
>
>$$4\to 1$$
>
>This visualisation should make the use of the word mirror more obvious. 
>Then, if I take some sequence $s$ and mirror all its entries to get some other sequence $s'$, then $\sigma(s)=\sigma(s')$.
>This is simply because whatever subsequence was ascending for $s$ will be descending for $s'$, and vice versa. Thus the total number of subsequences is the same, simply of the opposite nature. 
>There is thus an isomorphism, or some correspondence between different elements of $S_N$. To generalise this, let us define the 'mirror' function by
>$$m_N(a) = N-a+1$$
?for $a = 1,\ldots , N$.
>
>Now, consider the function $M_N$, which takes a sequence $s$ and applies $m_N$ to all its elements. 
>
>Then, if $s$ and $s'$ are any two elements of $S_N$ such that $M_N(s) = s'$, we have that $\sigma(s) = \sigma(s')$.
>
>These are many words to say something very simple. The only reason I've used all these words is to abstractify the thought process, so that it is not case-specific. If it is unclear, consider the following example: let $s = (1,4,2,3), \ s' = (4,1,3,2)$. 
>
>Then apply the mapping mentioned above, and notice that the situation is the same but mirrored. 
>
>Thinking about the mapping $M_N$, we see that it is the inverse of itself, that is if $M_N(s)=s'$, then $M_N(s')=s$. This then implies a lot of nice things, and we quickly see that the total number of distinct cases that need to be compared in order to determine $L(N)$ is $N!/2$. 
>
>While this is not that exciting, it means that if there is one configuration which proves the truth of $S_1$, then it is not unique, or in general, that there must be an even number of them. Even though this also may not seem that enlightening, it gives a hint that if we ever end up with a situation that claims that there exist a unique configuration that shows the truth of $S_1$, this is a contradiction which suggests that either: a) the initial hypothesis that led to that statement is false; b) there is a flaw in the logic that led to this. 
>
>It is not immediate that this property is inherited to the original game, due to the fact that the player's hand is a set, thus the mapping $M_N$ is pointless there. It suggests that some weaker analogue should exist, however. 

After the first few small numbers, this becomes computationally a bit difficult and annoying, for a human. I thus decided to ask python to do the hard work for me. This type of task is one I often find very enjoyable, where one has to write concrete logical steps to something that may not be typically broken down in that way in our thoughtscape. After getting some code to do the hard work, it became apparent that this would soon also become computationally expensive for a computer. This is quite obvious, as there are $N!/2$ combinations to check to determine the maximum, and this is a quantity that grows incredibly rapidly with increasing $N$. 

In order to determine (an upper bound for) $L(N)$, I calculated (an upper bound for) $\sigma(s)$  for the first $N!/2$ elements of $S_N$ (by abused called $s$ here), and then took the maximum of all these numbers. The way I determined (an upper bound for) $\sigma(s)$ is as follows:

> [!abstract] Algorithm for determining an upper bound for $\sigma(s)$
> 1. Determine the longest monotone subsequence in $s$, call this $l$
> 2. Remove all the elements of $l$ from $s$
> 3. Repeat 1 and 2 until no elements are left in $s$
> 
Then an upper bound for $\sigma(s)$ is the number of subsequences determined, or more simply the amount of times this procedure was repeated. 

^fd928e

What happens here is essentially that the longest subsequence (or strictly speaking _a_ longest subsequence) is determined at every step, and removed from $s$. Thus each subsequent removed subsequence is smaller than the previous one. It is clear that this procedure gives an upper bound for $\sigma(s)$. The reason I cannot claim that this is the best such bound, is because the longest monotone subsequence need **not** be unique!

We can see this for example in the sequence $(4,5,6,1,2,3)$. This has two increasing subsequences that are of the maximum length - 3. None is better than the other, in this case. But, it creates some decisions that need to be made when implemented in general, and decisions are not a good thing. This is because all the different situations need to be examined, and then the smallest such $\sigma(s)$ determined. The complexity of this problem is already high enough that I did not pursue this.

Continuing with this sub-optimal algorithm, the first thing I had to ask this algorithm to do was to determine a monotone subsequence that is as long as possible. This was successful, albeit very slow, due to the many comparisons that had to be performed at each step. 

After some research, I found an algorithm published by [Fredman (1975)](https://www.sciencedirect.com/science/article/pii/0012365X7590103X) and credited to Donald Knuth, which determines the length of the longest increasing subsequence. I was both unsurprised and happy to read this, as Knuth is a person I find truly inspiring in so many aspects of his work and especially attitude. Apart from this, in the aforementioned paper, it is shown that this comparison algorithm has optimal performance for a comparison algorithm- it is performing "as well as it could in this situation".

Words of praise to the side, I will quickly outline the variant of this algorithm that was implemented to determine the longest increasing subsequence.

#### Algorithm for determining a longest increasing subsequence

**Idea:** Take a sequence $s= \{c_i\}_{i=1}^n$, and keep tabs on the 'best' sequences of each length produced by moving forward in the elements of $s$ in increasing $i$. (Best here refers to the sequence that has the smallest end value, as that is the sequence that has the most possible values that can be appended to it.) Start by putting $c_1$ into the best sequence of length one. Then, for each $i$ from $2$ to $n$, if $c_i$ is larger than the last entry of the longest best subsequence, then create the new longest best sequence, by appending $c_i$ to this previously longest best sequence. Otherwise, replace the last element of a smallest best subsequence by $c_i$ if that creates a new best subsequence.

**In detail:**
Let $s=\{c_i\}_{i=1}^n$ be a sequence of distinct numbers of length $n$. We will denote by $T(k)$ some sequence, and its elements by $t_j$, where $j$ ranges from $1$ to $k$. 


Then define the sequence $T(k)$ iteratively as follows: (note: we refer to the $j$-th element of $T(k)$ by $t^k_j$)  

Start by setting $T(1)=\{c_1\}$. 

Then, for each $i>1$, do the following:

If $c_i>t_k^k$ for the greatest $k$ for which $T(k)$ exists, then create $T(k+1)$ by setting $t^{k+1}_{k+1}=c_i$ and $t^{k+1}_j = t^k_j$ for $j=1,\ldots,k$. This simply corresponds to $T(k+1)$ being the sequence $T(k)$ with the element $c_i$ appended to the end. 

Otherwise, it means we cannot create $T(k+1)$, but we can improve some $T(m)$ where $1\leq m\leq k$.

To continue the procedure, starting from $m=k$ and working backwards to $m=2$, check whether $c_i<t^m_m$ and $c_i>t^{m-1}_{m-1}$ for any $m$. At the point that this condition is satisfied, stop this process and create the new $T(m)$ by appending $c_i$ to $T(m-1)$ in a similar manner to the case above. If there is no such $m$ for which this is satisfied, then it must be that $c_i<t^1_1$, in which case now set $t_1^1=1$, which updates $T(1)$ accordingly. 

When all the elements of $s$ have been exhausted, the longest increasing subsequence is given by $T(k)$ for the largest $k$. 

As has been mentioned already, it is important to highlight here that this longest subsequence is **not** unique. There are some alternative steps one could take at some points that would give a different subsequence, which agrees with the truth that no single longest subsequence needs to always exist. 

---

This algorithmic approach can only be so effective. I have no real hope that this code will give me the answer, but it was a good thing to think about. At the same time, it can give me some intuition about the first few values. These are:

$N$ | $L(N)\leq$
:--- | ---:
2|1
3|2
4|2
5|3
6|3
7|3
8|4
9|4
10|4
11|5

Notice that the rate at which the upper bound obtained for $L(N)$ increases is not constant. At the same time, these values are a big indicator that it is very unlikely that $L(98)=4$. 

However, instead of searching for an upper bound for $L(N)$, I could at least determine a reasonable lower bound by testing the results from $10000$ shufflings of 98 cards. If the problem of non-uniqueness was not there, I would be confident that this was indeed a true lower bound; after repeating this experiment 100 times, I have some confidence that $L(N)\geq 15$. The code can be amended to check for cases where there exist more than 1 solutions: once a longest subsequence has been determined, run a check to determine all subsequences of this length. If a separate one is found, then we know there are more cases. This is something that didn't seem worthwhile at this time, so I did not implement it, since at the same time a more constructive idea surfaced.  


While looking at things related to the longest increasing subsequence, I came across a theorem published in 1935 by Erdős and Szekeres (to which I cannot find a secure link, but a search involving those names will give you access to all the unsecure links I had access to), which said the following (in the language we are using in this situation):

> [!note] Theorem (Erdős-Szekeres).
>If a sequence $s$ is at least of length $n^2+1$ for some $n$, then there exists a monotone subsequence of length $n+1$ in $s$.

This result can be generalised as follows:
_If a sequence $s$ is at least of length $lm+1$ for some $l,m$, then there exists a monotonically increasing subsequence of length $l+1$ or a monotonically decreasing subsequence of length $l+1$ in $s$._

>[!note]- Tangent: [[The happy ending problem and a mathematician's mating ritual]].
> The Erdős-Szekeres Theorem is proved in the 1935 paper of Erdős and Szekeres which concerns what was later coined the "happy ending problem" by Erdős. The story is as follows:
> 
> Erdős and Szekeres were part of a group of Hungarians who discussed mathematical problems amongst them. Another member was Klein, who proposed the following problem: Any set of 5 points on the plane has a subset of 4 points that form the vertices of a [[Convex quadrilateral|convex quadrilateral]]. Szekeres then wanted to solve this problem to impress Klein. He eventually did so along with Erdős, and the rumour is that after that Klein was indeed impressed. Erdős then named this problem the "happy ending" problem, as he claims it is what led to Klein and Szekeres getting married. The marriage of the two was reportedly a very happy one, and they were together for pretty much the rest of their (long) lives, as they died within an hour of each other in their 90's. 

There exists a simple and easy to understand proof of this statement that requires hardly any mathematical knowledge, which I will present here in slightly more detail in hope that it is widely accessible. This is taken from the 1-page paper by A. Seidenberg, [A simple proof of the Erdős-Szekeres Theorem](https://academic.oup.com/jlms/article-abstract/s1-34/3/352/847946). (Much like _The Game_, this paper does exactly what it says on the tin.) 

This proof makes use of what is called "The Pigeonhole Principle": the concept that if you have $m$ things to put into $n$ boxes and $m>n$, then at least one box will have more than one thing in it. 

_Proof._
Consider a sequence $s= \{c_i\}_{i=1}^N$ of length $N$, where $N=lm+1$ for some integers $l$ and $m$. To each term $c_i$ attach a label $(a_i,b_i)$, where $a_i$ denotes the length of the longest _increasing_ sequence ending in $c_i$, and $b_i$ the longest _decreasing_ sequence ending in $c_i$. For example, if $s=(1,3,4,2)$ then we have:

$i$|$c_i$ | $(a_i,b_i)$
:--- |--- | ---:
$1$|$1$|$(1,1)$
$2$|$3$|$(2,1)$
$3$|$4$|$(3,1)$
$4$|$2$|$(2,2)$

Explaining this in words, for the first term, we have that $c_1=1$, and trivially the only subsequences that can end in the first term can only be of length $1$. Then, for $c_2=3$, the longest increasing subsequence ending in that is $(1,3)$, which is of length $2$, and the longest decreasing subsequence is just $(3)$ since $1<3$. Then continuing in a similar fashion we see that the longest increasing subsequence ending in $c_3=4$ is given by $(1,3,4)$, and the longest decreasing is just $(4)$; the longest increasing subsequence ending in $c_4=2$ is given by $(1,2)$, and the longest decreasing is $(3,2)$ or $(4,2)$, which are both of length $2$.

Then consider two distinct numbers $i$ and $j$ such that $i<j$. Then, only one of $c_i<c_j$ or $c_i>c_j$ can be true. Let us examine these two separate cases:

**Case 1:** $c_i<c_j$

What this means is that there is a number in the sequence $s$ further to the right of $c_i$ that is smaller than it. Therefore, we can deduce that $a_i<a_j$, that is, the longest increasing subsequence that ends in $c_j$ is longer than the longest increasing subsequence that ends in $c_i$. That is because we can append $c_j$ to the largest increasing sequence that ended in $c_i$, since $c_j$ is greater than $c_i$.

**Case 2:** $c_i>c_j$

What this means is that there is a number in the sequence $s$ further to the right of $c_i$ that is greater than it. Therefore, we can deduce that $b_i<b_j$, that is, the longest decreasing subsequence that ends in $c_j$ is longer than the longest decreasing subsequence that ends in $c_i$. That is because we can append $c_j$ to the largest decreasing sequence that ended in $c_i$, since $c_j$ is smaller than $c_i$.

But, this implies the following: no two terms can have the same label, since either the first part or the second part is different, as we observed in the two cases analysed above. 

If we assume that there are at most $l$ choices for $a_i$ and $m$ choices for $b_i$, then pairing up all this distinct choices gives a total of $lm$ choices for the labels $(a_i,b_i)$. But since there are $lm+1$ _distinct_ labels (since our sequence has $N=lm+1$ terms), this assumption cannot be true. Therefore there are either more than $l$ choices for $a_i$, or more than $m$ choices for $b_i$. Consequently, there must either exist an increasing subsequence of length at least $l+1$, or a decreasing subsequence of length at least $m+1$. 

---

This theorem is the key to a much easier and robust way of determining $L(N)$. Contrary to the algorithmic method above, we can obtain $L(N)$ instead of just an upper bound for it. This is done analogously to the [[#^fd928e|upper bound algorithm]], where a method for determining a longest subsequence is applied until no more elements are left in the sequence. We outline this below:

> [!abstract] Algorithm for determining $L(N)$
> 1. Set $M=N$ 
> 2. Find the largest $n$ such that $n^2 +1 \leq M$ 
> 3. Set $M$ to $M-(n+1)$
> 4. Repeat 2 and 3 until $M$ is set to 0
> 
> Then $L(N)$ is equal to the amount of repetitions.
^algoln

What happens here, is that the Erdős-Szekeres Theorem is applied successively to determine the length of the longest subsequence that is guaranteed to exist for a sequence of numbers of length $M$. Then, imagine that these cards are taken out, once the sequence has been found. This leaves us with $M-l$ cards, where $l$ here denotes the length of the subsequence. This process is then repeated until no numbers left in the sequence, or respectively, cards in the deck. We don't actually care about the specifics, for numbers (resp. cards) can be relabelled without loss of generality, provided that the order is preserved (for example, if the number 11 has been removed, then relabelling 12 to 11 doesn't change anything in the abstract logic of the theorem). 

**Why is this procedure giving $L(N)$?**

It is clear that this procedure gives an upper bound for $L(N)$, but it is not immediate that this is the lowest bound as well. To see that, notice that it works for the worst case scenario, that is, when $\sigma(s)$ is achieving the maximum. 
Let $l$ denote the length of the longest monotone subsequence of a sequence of length $M$. Since we have chosen $n$ such that it is the largest possible $n$ such that $n^2+1\leq M$, this immediately implies that $(n+1)^2+1\geq M$. We therefore know that we are guaranteed (by the E-S Theorem) that the sequence of length $M$ has a monotone subsequence of length $n+1$, thus $l \geq n+1$. But, it is not guaranteed that it has a monotone subsequence of length $n+2$ (and such an example can always be constructed in the vein of the proof of the theorem), thus $l< n+2$. Combining these two inequalities we see that if $n+1\leq l < n+2$, then necessarily $l=n+1$. 

This is a very quick thing to check now, and the python code below does just that:

```python
"""
Algorithm for L(N).
"""

from math import sqrt
  

def L(N, description=False):
    M=N
    n = int(sqrt(M-1))
    i = 0
    if description:
        print(f'Determine L({N}):')
        print(f'The greatest integer whose square is less than M-1={M-1} is {n}.')

    while M>0:
        if description:
            print(f'{M} - ({n}+1) = {M-n-1}, so set M to {M-n-1}.')
        i+=1
        if description:
            print(f'At this stage, we have removed the longest subsequence {i} times.')
        M -= n+1
        if M <= n**2:
            n-=1
        if description:    
            if M>0:    
                print(f'The greatest integer whose square is less than M-1={M-1} is {n}.')
    return i

print(L(98), description=True)
```

This snippet is taken from [my github folder](https://github.com/nikoletta13/subsequence_algorithms/blob/main/lub_algo.py), which also contains an implementation of the previous algorithm. You can run this without the `description` to simply get the result for any $N$ you are interested in. 

Running this for $N=98$, gives us that $L(98)=16$. The explanations why are shown below:

> [!info]- Explanation for $L(98)=16$
> The greatest integer whose square is less than M-1=97 is 9.
> 
>98 - (9+1) = 88, so set M to 88.
>
>At this stage, we have removed the longest subsequence 1 times.
>
>The greatest integer whose square is less than M-1=87 is 9.
>
>88 - (9+1) = 78, so set M to 78.
>
>At this stage, we have removed the longest subsequence 2 times.
>
>The greatest integer whose square is less than M-1=77 is 8.
>
>78 - (8+1) = 69, so set M to 69.
>
>At this stage, we have removed the longest subsequence 3 times.
>
>The greatest integer whose square is less than M-1=68 is 8.
>
>69 - (8+1) = 60, so set M to 60.
>
>At this stage, we have removed the longest subsequence 4 times.
>
>The greatest integer whose square is less than M-1=59 is 7.
>
>60 - (7+1) = 52, so set M to 52.
>
>At this stage, we have removed the longest subsequence 5 times.
>
>The greatest integer whose square is less than M-1=51 is 7.
>
>52 - (7+1) = 44, so set M to 44.
>
>At this stage, we have removed the longest subsequence 6 times.
>
>The greatest integer whose square is less than M-1=43 is 6.
>
>44 - (6+1) = 37, so set M to 37.
>
>At this stage, we have removed the longest subsequence 7 times.
>
>The greatest integer whose square is less than M-1=36 is 6.
>
>37 - (6+1) = 30, so set M to 30.
>
>At this stage, we have removed the longest subsequence 8 times.
>
>The greatest integer whose square is less than M-1=29 is 5.
>
>30 - (5+1) = 24, so set M to 24.
>
>At this stage, we have removed the longest subsequence 9 times.
>
>The greatest integer whose square is less than M-1=23 is 4.
>
>24 - (4+1) = 19, so set M to 19.
>
>At this stage, we have removed the longest subsequence 10 times.
>
>The greatest integer whose square is less than M-1=18 is 4.
>
>19 - (4+1) = 14, so set M to 14.
>
>At this stage, we have removed the longest subsequence 11 times.
>
>The greatest integer whose square is less than M-1=13 is 3.
>
>14 - (3+1) = 10, so set M to 10.
>
>At this stage, we have removed the longest subsequence 12 times.
>
>The greatest integer whose square is less than M-1=9 is 3.
>
>10 - (3+1) = 6, so set M to 6.
>
>At this stage, we have removed the longest subsequence 13 times.
>
>The greatest integer whose square is less than M-1=5 is 2.
>
>6 - (2+1) = 3, so set M to 3.
>
>At this stage, we have removed the longest subsequence 14 times.
>
>The greatest integer whose square is less than M-1=2 is 1.
>
>3 - (1+1) = 1, so set M to 1.
>
>At this stage, we have removed the longest subsequence 15 times.
>
>The greatest integer whose square is less than M-1=0 is 0.
>
>1 - (0+1) = 0, so set M to 0.
>
>At this stage, we have removed the longest subsequence 16 times.

>[!note]- Tangent: [[The function L(N)]]


This answers the question then, in order for the game under $\cal R'$ to be always winnable, we need at most 16 piles. However, from the statement of the theorem we cannot know how many of these are ascending or descending. Thus the most general answer we can give is 16 ascending and 16 descending piles. These are a lot more piles than just the 2 of the original game! However, $\cal R'$ is a lot more restrictive than $\cal R$ so this is not disheartening. As explained above, this hasn't shown us anything about the truth of $Q$, but we may use this strategy to that end. In conclusion we have shown that

> [!note] Conclusion.
> $S_1$ is True; an unwinnable configuration $\cal C$ exists under $\cal R'$.



