# Euler-Totient-Function-Extended
Euler totient function (denoted by phi(N)) for a positive integer N is defined as number of positive integers less than or equal N that are coprime to N.

Let's generalize this concept of Euler totient function. For positive integer N let's write out the integers that are less than or equal to N and are coprime to N. We'll get a list of integers of the form A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>M</sub>, where M = phi(N). Let's denote E<sub>K</sub>(N) = A<sub>1</sub><sup>K</sup> + A<sub>2</sub><sup>K</sup>+...+A<sub>M</sub><sup>K</sup>. This way we obtain something more general version of Euler totient function, in particular, E<sub>0</sub>(N) = phi(N) for every positive integer N.
Task is to calculate E<sub>K</sub>(N). As answer could be large, print the answer modulo 10<sup>9</sup>+7

## Input
The first line of the input contains an integer T denoting the number of test cases. The description of T test cases follows.
The first line of each test case contains two space separated integers N and K.

## Output
For each test case, output a single line containing the answer to the problem i.e. the value of E<sub>K</sub>(N) modulo 10<sup>9</sup>+7.

## Constraints
1 ≤ T ≤ 128

Subtask 1:
1 ≤ N ≤ 104
0 ≤ K ≤ 104

Subtask 2:
1 ≤ N ≤ 1012
K = 0

Subtask 3:
1 ≤ N ≤ 1012
K = 1

Subtask 4:
1 ≤ N ≤ 1012
0 ≤ K ≤ 256
