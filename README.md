# sudoku-combinations
A web app to help with finding combinations of integers that sum to a given total, useful for arrow and killer sudokus.

## Initial Ideas

I do want to have lots of customization options, but I'm going to just start with the basics of having inputs for the number of digits and total sum.

Since there's still a limited number of combinations, I can calculate all the sums beforehand to make a lookup table. Then if the user does more unusual inputs, those can be calculated, but the most common will be all set to go.
