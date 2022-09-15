---
layout: default 
---
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
# Anhedral Foils
## Introduction
Anhedral foils are foils where the "horizontal" part of the foils are not strictly horizontal, but also slant downwards, in the simplest case with a constant anhedral angle $$\gamma$$.

<figure>
  <img src="{{site.url}}/assets/img/anhedral-foils/anhedral-foils.svg" alt="sketch of an anhedral foil"/>
  <figcaption>Figure 1: Different views of an anhedral foil with a constant anhedral angle</figcaption>
</figure>

The motivation for such a geometry is that that the vertical part of the "horizontal" foils produce a side force similar to that of a daggerboard, thus creating an effecively longer daggerboard (see the side view of figure 1) with only a small drag penalty because of the small loss of lift by the "horizontal" foils. A second desirable effect is that the foils are farther away from the surface, thus reducing wave resistance and reducing the chance of surface piercing of the wing tips in the case of heeling. 

## Calculation Results

As a first guess, one could assume that the percental loss of lift is the same as the percental loss of horizontal projection area of the foil, and that the side force is the same as the side force of a foil which has the same vertical projections as the "horizontal" foils (see the top and side view of figure 1 for those projection areas). 

However, the calculation shows that both assumptions are not correct, the second not even in the case of a small anhedral angle $$\gamma$$. Plus there exists a torque which acts as a negative "righting moment", i.e. it tends to turn the mast leewards. Overall, this means that anhedral foils produce a side force which only compensates but does not exceed the loss in lift in terms of produced drag, and also decrease the possible sidewards force of the rigg, thus reducing the possible driving force of the rigg. 

Having the foils farther away from the surface reduces wave resistance, but as wave resistance is typically small, this effect is also small and could also be achieved by using a longer daggerboard.

Note that the calculations are not considering an anhedrality which only compensates the bending-up of the tips under load, because the calculation is done for a wing under working conditions, i.e. under load. Also note that a dihedral wing or a wing with dihedral tips (in contrast to an anhedral wing) would produce a righting moment and thus increase the possible driving force of the rigg, but at the cost of the wing tips being nearer to the surface, producing more wave drag and having a higher chance of surface piercing of the wing tips.

The results for the vertical force component $$F_z$$, the horizontal force component $$F_y$$ and the righting moment $$M_x$$ are:

$$F_z = \cos(\gamma)  F_{z,0} + \cos^2(\gamma)F_{z,1} \frac{v_z}{v_x}$$

$$F_y= \sin^2(\gamma) F_{z,1} \frac{v_y}{v_x}$$

$$M_x = - 2 \sin(\gamma)\cos(\gamma)\ y_{cm}\ F_{z,1} \frac{v_y}{v_x}$$

Here $$v_z/v_x$$ is the tangent of the angle of attack in the vertical direction, $$v_y/v_x$$ is the tangent of the angle of attack in horizontal direction (leeway angle), $$y_{cm}$$ is the distance between daggerboard and center of area of a half "horizontal" wing, $$F_{z,0}$$ is the lifting force of the "horizontal" wing for $$\gamma=0$$ and $$v_z=0$$, and $$F_{z,1}$$ is the proportionality factor between the tangent oft the angle of attack and lift for $$\gamma=0$$.

## Example

We consider the horizontal main foil of an (older) moth with a span of 1 m and a constant anhedrality with an anhedrality angle of $$\gamma$$=10°. The boat is going upwind with a velocity of 6 m/s (approx. 12 knots) and has a leeway angle of 4°. The main foil has a lift of about 790N and an area of 0.11 m². The center of area of one wing half is assumed to be 20 cm away from the middle of the wing. We assume that the lift of the wing without anhedrality and with an angle of attack of zero is $$F_{z,0}$$ = 540 N, and that the proportionality factor beween angle and attack and lift force ist $$F_{z,1}$$ = 10 500 N. From the lift forces we get an angle of attack of the main foil of about 1,36°.
Then we have 

$$\cos(\gamma) = \cos(10°) = 0,985$$

$$\sin(\gamma) = \sin(10°) = 0,174$$

$$v_y/v_x = \tan(4°) = 0,070$$

$$v_z/v_x = \tan(1,36°) = 0,024$$

This gives the following results:

$$F_z = \cos(10°) \times 540 N + \cos^2(10°) \times 10 500 N \times 0,024 = 776 N$$

$$F_y= \sin^2(10°) \times 10 500 N \times 0,024 = 22N$$

$$M_x = - 2 \sin(10°)\cos(10°)\times 0,2m \times 10 500 N \times 0,024 = -50 Nm$$

As a comparison, for $$\gamma$$=0 we have $$F_z=540 N + 10 500 N \times 0,024 = 792 N$$ and both $$F_y$$ and $$M_x$$ are zero.

The additional 22 N side force would be produced by an additional area of the centerboard of about 3$$\times$$12cm, which is about 5% additional centerboard area for the chosen example. The anhedrality produces an additional heeling moment of about 5% of the total heeling moment produced by daggerboard and sail, which is on the order of 1000 Nm for a typical moth. This means one looses about 5% of possible sail pressure and thus about 5% of driving force of the rigg. The 16N or 2% loss of lift is small, but in absolute numbers close to the "gained" side force.

Of cource in reality, the side force would not increase, but the sideslip angle would decrease to account for the additional "centerboard area". Also, the lift would not decrease, but the angle of attack of the main foil would increase to compensate the loss of lift.

To summarize, the loss of driving force by the additional heeling moment  is by far the dominant effect of an anhedral wing for a typical moth setup, and thus anhedral wing configurations are not to be recommended, except perhaps in configurations where the anhedrality only occurs near the center of the wing and is zero on the outside, this having a very small effective $$y_{cm}$$ and thus a small heeling moment.
