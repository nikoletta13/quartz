---
draft: true
---

  

At some point in the many months of lockdown I had been introduced to the card game called Cribbage. The surplus of free time that came with the lockdown implied that I ended up playing this new (to me) game a lot. We didn't have a board at home (if you're not aware of the game this will become clear below), so we thought we could simply write our points down on a piece of paper, just like any traditional point keeping game from the stone age. This meant that we  created a decently sized dataset for the amount of points earned during each round, something not readily available when one plays the game with a board. 

As if the fun was not enough, I began wondering about the distribution of points earned. How many points do I get on an average round? How often am I exceeding this number? What is the maximum number of points I can score in one round? Are all the scores between 0 and this maximum attainable? Before answering these questions, let us first introduce the game. If you're acquainted with the game you can skip straight ahead to the [discussion](##Results).

  

  

[image here of our scores]

  

## Rules of the game

  

We will be concerned with the 2-player version of this game for which we explain the rules briefly here, and refer the reader to [pagat.com](https://www.pagat.com/adders/crib6.html) for more extensive information. 

  

Cribbage is a card game involving the whole deck. Points are kept using pegs on a board which is shown in Figure \ref{fig:board}, and the objective of the game is to be the first player to get 121 points, in this case to be the first one to travel beyond the end of the board. One point corresponds to one step pegged on the board. 


![[Board.PNG]]

\caption{An example of the board on which the points cribbage are counted on. Image taken from \texttt{\href{ https://cardgames.io/cribbage/}{cardgames.io}}, where you can also play this game online if no cribbage partners are to be found around. More examples of boards can be found in any website selling them. }\label{fig:board}


The game is comprised of 3 parts; the deal, the play, and the show. 

### The Deal

The game begins by determining the dealer, who is the player who draws the card of lowest value. The order of ranks in decreasing order is as `K Q J 10 9 8 7 6 5 4 3 2 A`. The dealer then deals six cards to each player, and in each subsequent round the two players alternate in the dealer's position.  

Each player then discards 2 cards out of their hand of 6. The total of 4 discarded cards then go to the _crib_, which belongs to the dealer of the corresponding round. We will refer to the cards a player has chosen to keep as their _hand_.
  
The non-dealer then cuts the deck, and the top card of the lower deck is then turned around and placed on top of the deck. We will refer to this card as the _top card_. If this card is a Jack, the dealer immediately pegs (game jargon; =receives) 2 points. 

### The Play

Then, the play of the round can begin. The non-dealer plays the first card, playing it face up on their side of the table. It is then the dealer's turn, who also plays the card on their side of the table. After a player plays a card they announce the sum of the values of the cards played. The King, Queen and Jack all have a value of 10, and Aces have a value of 1. The rest of the cards have their face value. This sum must never exceed 31. The two players alternate in turns until a player cannot play a card such that this sum is not exceeded. When this happens they say 'Go', and the other player has the chance to play if they have such a card. If they do not have such a card they peg 1 point immediately and the score goes back to 0 and the count starts over, with the latter player starting the play. If they have such a card they have to play it, and this keeps on going until they run out of cards they can play while staying under 31. If they do reach 31 points exactly, they peg 2 points, and if they otherwise stay below 31 they peg 1 point just like the previous case. The score then goes back to 0 and it is the next player's turn. 
  

During the play of the cards, the players can peg points in the following ways:


- **Fifteen**: If a player plays a card which brings the score to 15, they peg 2 points. 
- **Thirty-one**: As mentioned already, if a player plays a card which brings the score to 31, they peg 2 points.
- **Last Card**: As mentioned already, the player who plays the last card before the sum of 31 is exceeded pegs 1 point. 
- **Pair**: If a player plays a card which is the same rank as the previous card, they peg 2 points. 
- **Pair Royal**: If a card of the same rank is played for the 3rd time in a row, the player pegs 6 points. 
- **Double Pair Royal**: If a card of the same rank is played for the 4th time in a row, the player pegs 12 points. 
- **Run**: If at any point consecutive cards form a sequence in ranks in any order, then the player who played the card to complete such a sequence pegs as many points as the run is long. For example, if Player 1 plays a `3`, Player 2 `4`, and then Player 1 plays a `2`, then Player 1 pegs 3 points. If then Player 2 plays a `5`, they then earn 4 points.   

These points are pegged in real time. 

  
### The Show

After all 4 cards of each player have been played, they retrieve their cards. Now, they can collect points based on their _hands_, with the addition of the _top card_. It is first the non-dealer's turn to do so, and again the points are pegged as they are counted. Then, the dealer counts the points of their _hand_ first, and then of their _crib_. It is important that the points are pegged in real time, because it means that a player can win (or lose) dependent on whose turn it is to play. 


A player can collect points if any of the following are satisfied in their set of cards (_hand_ or _crib_):


- **Fifteen**: Any collection of cards which sums up to 15 earns 2 points. 
- __Pair__: Any pair of cards of the same rank earns 2 points. This means that 2 cards of the same rank earn 2 points, 3 cards of the same rank earn 6 points, and 4 cards of the same rank earn 12 points. ^[This follows from a quick combinatorial argument: $2\times {2 \choose 2} = 2 \times 1 = 2; \quad 2 \times {3 \choose 2} = 2 \times 3 = 6; \quad 2 \times {4 \choose 2} = 2 \times 6 = 12$. If you are unfamiliar with the notation ${3 \choose 2}$ etc., it is mathematical language for answering the question: In how many different ways can I choose 2 items (in this case cards) out of 3? The general form is ${n \choose r} = \frac{n!}{r!(n-r)!}$ where an exclamation mark denotes a factorial, that is, a number shouting loud by multiplying itself with all the positive integers smaller than itself ($n! = n \times (n-1) \times (n-2) \times \ldots \times 1$).]
- **Run**: A player earns as many points as the length of the longest run their cards can produce, in order of rank and irrespective of suit. For example `2-3-4` would earn 3 points; `2-3-4-5` would earn 4 points.
- **Flush**: If all the cards in a players hand are the same suit, they earn 4 points. If in addition the _top card_ is of the same suit, they earn 5 points. When counting the points in the crib however, only the latter can contribute, i.e., if a player has a flush in their crib but the top card is of different suit then this scores no points. If the flush matches the suit of the top card then they earn 5 points. 
- **One for his nob**: If the hand or crib contains the Jack of the same suit as the _top card_, the player earns 1 point.  

  
Finally, before delving in what comes next, it is probably more rewarding to do so after familiarising yourself with the game. 
  

  

  

------------------- explain you want to optimise the points in your hand. dealer wants to optimise crib and non-dealer wants to not help the crib

  

  
# Discussion 

In general, one would want to optimise the points they will earn. This means maximising the number of points they receive through their hand, and in addition, a dealer would want to maximise the (potential) points in the crib whereas the non-dealer would want to minimise this potential. Thus, presumably, the choice of cards to keep or discard is not random. 


## How many points in one round?

At any point of point evaluation, a player has 5 cards to gather points from - 4 from their hand (or crib) and one from the top of the deck.  

### Making the most of one's hand

What is the maximum amount of points one can earn from their hand? We will answer this question by first making an educated guess about this number by constructing what we think the ideal situation in our hand is. We will then show that we could never possibly exceed this number. This is a common technique in mathematics that is used to prove that something is a maximum.

In this game, I always look for `5`'s; since the `10`, Jack, Queen, and King all have a face value of 10, it means that having a 5 gives one a much higher chance of forming a 15 than with any other card, as a value of 10 is more likely to occur than any other value. More explicitly, 4/13 cards have a value of 10, and every other value occurs with a probability of 1/13. Also, three `5`s also make Fifteen. 

**Conjecture**: Three `5`'s is the most profitable collection of 3 cards.

**Proof**
Firstly, let us calculate how many points this is. We have a Fifteen, which gives us 2 points, and 3 of a kind, which gives us 6 points. This is a total of 8 points. 

Any other collection of 3 cards must either give Fifteens, or contain a run in order to give us points. The most profitable runs of 4 cards come to 5 points and are given by  `4-5-6`, `6-7-8`, and `7-8-9`, where we get 3 points for the run and 2 points for the Fifteen. All other runs come to a maximum of 3 points. ^[We are calculating points here solely based on 3 cards, so ignoring any top card related things that could arise from Jacks; in any case that would only incur one point more so it doesn't affect our statement.] If we are to make Fifteen, then this would be by addition of 2 cards, such as 5+10, 6+9,7+8. We optimise this by having double of one of these cards; this yields a total of $2\times2=4$ points from the Fifteens, and 2 points from the double, giving a total of 6 points. 

Any other combination of 3 cards is thus less than 8 points, and our conjecture has been proved. 


While we have shown that the most profitable collection if 3 cards is 3 `5`'s, this can only serve as a good guide going forward. Almost certainly, such information will make us include 3 `5`'s in our collection of 5 cards, but that is not necessarily the case for other games where point keeping is different.

There are 4 `5`s in the deck, and the best number to combine a 5 with is a card with value 10. Consider 4 `5`s and a 10; this gives ${4 \choose 3} \times 2 = 4 \times 2 = 8$ points for Fifteens coming from the 5s, 12 points from Four of a kind, and $4\times 2=8$ from Fifteens of the 10-card and a `5`. This yields a total of 28 points. 

Is that then, the most points that 5 cards can give us?

We can in fact squeeze one more point out of a 5-card collection! This can only be done using the one way of scoring we haven't yet: One for his nob. Having the arrangement of cards such that we have a Jack in our hand, and then the top card being a 5 of the same suit gives $28+1=29$ points. We claim now that this is the highest score one can possibly obtain in their hand. As this last point type doesn't exist in the crib, the maximum number of points one can earn from their crib is 28. Let us thus show why no other collection of 5 cards can exceed this score.



%The easiest way to make Fifteen is with a 5; the most abundant value on a card has value 10, thus making it most possible to score a 15 with a 5 and a 10. Also, three 5's make a Fifteen. Three 5's is the most profitable collection of 3 cards; Fifteen and a Three of a kind gives a total of $6+2 = 8$ points. Then, the best kind of a value 10 is a Jack, as it is the only card that can give bonus nob points. Jack plus 3 5's would then give a total of $8 + 3\times 2 = 14$ points. Adding one final 5 to this collection of cards would give the following: 8 Fifteen's (4 with the Jack and 4 without), and Four of a kind. This gives a total of $8 \times 2 + 12 = 28 $ points. Choosing the suit of the 5 on top of the deck to match that of the Jack in our hand to get the nob point, this gives a total of 29 points. 

  

### An average hand

Those of you that have for at least a short time befriended Statistics will quickly translate the question ``What score do I expect?" to ``What is the average score?". If we denote by $X$ the score in a hand, what is the expectation of $X$, $E(X)$?

  

When I first had these questions in my mind, I looked for what WolframAlpha had to offer. Without a doubt, I found a distribution of scores:

  

  

\begin{figure}[ht]

\includegraphics[width = \textwidth]{CribbageScoresWolfram}

\caption{Distribution of scores with a random choice of hand. Image taken {from wolfram.com.}}\label{fig:wolfram}

\end{figure}

  

This graph shows the distribution of scores, provided one picks their hand randomly. However, when one plays the game, one is presumably trying to maximise this score. The aim of the game is to win (unless you're playing with your boss? Your crush? Your grandma? I don't know) and one is thus choosing the cards in their hand \emph{not} at random. Of course, the cards are dealt at random, but after that the player has the choice to optimise the 4 cards they are left with. This choice is (most likely\footnote{We cannot be absolute about this, as the card on the top of the deck is unknown.}) going to give them a higher score than closing their eyes and picking 4 out of the 6 cards at random. 

  

For the purposes of comparing the scores obtained by us, I have recreated the plot from Figure \ref{fig:wolfram}. You can find the pseudocode for counting the points in a hand at the bottom of this page. I found the experience of coding this process -- making it rigid and following all the logic we are blind to due to how obvious it is %hyperlink here eventually

-- rather enjoyable. I don't think it is the optimal way of coding this procedure, and if you have any comments on it I would love to hear them. 

  

  

Without further digression, let us have a look at the plots, as shown in Figure \ref{fig:total}. Firstly, the total points distribution, assuming hands are chosen at random. I have zoomed in on the points on the higher end to highlight something quite interesting: the maximum possible score is 29, and the scores 19, 25, 26, 27 are impossible to attain. To see that these scores are indeed unattainable is a straightforward yet tedious combinatorial exercise which is neither illuminating nor fun. The fact that even scores are much more likely to occur is a good starting point to seeing why these scores are impossible. Another notable fact, is how much more likely a score of 28 is than that of 29. The only difference between a score of 28 and that of 29 is the nob point -- a matching suit between the Jack in hand and the card on top of the deck. That makes a score of 28 76/4=19 times more likely than 29.

  

\begin{figure}[ht]

\includegraphics[width=\textwidth]{TotalDistribution}

\includegraphics[width=0.5\textwidth]{TotalZoom19}

\includegraphics[width=0.5\textwidth]{TotalZoom29}

\caption{Distribution of all the scores assuming hands are chosen effectively at random.}\label{fig:total}

\end{figure}

  

Let us then see how our \emph{purely} scientifically driven results differ from this distribution. In Figures \ref{fig:hand} and \ref{fig:crib} you can see the distributions of the scores in the hand and crib respectively. Figure \ref{fig:handcrib} then shows the two distributions together. As anticipated, the scores from the cards in hand seem to be higher in general. 

  

\begin{figure}[ht]

\includegraphics[width=\textwidth]{HandDistribution}

\caption{Distribution of the scores obtained in the hand.}\label{fig:hand}

\end{figure}

  

  

\begin{figure}[ht]

\includegraphics[width=\textwidth]{CribDistribution}

\caption{Distribution of the scores obtained in the crib.}\label{fig:crib}

\end{figure}

  

  

  

\begin{figure}[ht]

\includegraphics[width=\textwidth]{HandCribDist}

\caption{Distributions of the scores obtained in the hand and crib.}\label{fig:handcrib}

\end{figure}

  

What is more interesting, however, is how these two sets compare to the one of random choices. Figures \ref{fig:totalhand} and \ref{fig:totalcrib}

show these comparisons. We can see that the distribution of the scores in the crib are very close to the random distribution. This is to be expected, as the cards that are in the crib are discarded. The player whose crib it is can try and optimise this choice, but the opponent naturally would try to make their worst in choosing which cards to give away. Theses differences and similarities are also quantitatively shown in the table below:

\begin{center}

\begin{tabular}{c | c | c}

& Mean & Variance\\

\hline

Hand & 7.8 & 15\\

\hline

Crib & 4.6 & 11\\

\hline

Random choice & 4.7 & 9.5

\end{tabular}

\end{center}

  

\begin{figure}[ht]

\includegraphics[width=\textwidth]{TotalHandDist}

\caption{Distribution of the scores obtained in the hand and random choice.}\label{fig:totalhand}

\end{figure}

  

  

\begin{figure}[ht]

\includegraphics[width=\textwidth]{TotalCribDist}

\caption{Distribution of the scores obtained in the crib and random choice.}\label{fig:totalcrib}

\end{figure}

  

  

\vspace{0.2in}

\textbf{Tl;dr}:

Crib scores are closer to a random draw of hand than the chosen hand scores, which are on average better. 

  

# Glossary ???
- **Crib**: the discarded cards
- 