---
layout: default 
---
# Aerodynamics of the trampolines

A moth has trampolines for the helm to hike out to get his/her body weight as far out as possible to create a large righting moment.
However, the trampolines themselves act as sails and produce aerodynamic forces. 
The smallest trampolines of currently available boats are about 1 m deep (and have a standard width of 2.25 m), 
meaning they have a sail area of more than 2 square meters
which is more than 1/4 of the area of the sail, 
so it is not difficult to imagine that the trampolines can change the areodynamics of the boat significantly.

For a moth flying on a windward course, it is typical that the windward trampoline is more or less parallel to the water surface
and thus the angle of attack is approximately zero.
The leeward trampoline, on the contrary, typically has an angle of 40-60 degrees to the water surface.
For an apparent wind direction of 20-25° on a windward beat,
the angle of attack of the leeward trampoline is non-negligible and the wind can exert significant forces on the trampoline.

On this page, we will try to estimate the forces on the trampolines. The parameters for a modern moth might be the following:

<label for="beta" class="long">\\(\beta\\) (apparent wind angle): </label><input id="beta" value="22" onchange="recalculate();"/>°<br/>
<label for="gamma" class="long">\\(\gamma\\) (sideway tramp angle): </label><input id="gamma" value="20" onchange="recalculate();"/>°<br/>
<label for="delta" class="long">\\(\delta\\) (backward tramp angle): </label><input id="delta" value="0" onchange="recalculate();"/>°<br/>
<label for="A" class="long">\\(A\\) (area of a single tramp): </label><input id="A" value="1.25" onchange="recalculate();"/>m^2<br/>
<label for="v_w_a" class="long">\\(v_{w,a}\\) (apparent wind speed): </label><input id="v_w_a" value="12" onchange="recalculate();"/>m/s<br/>
<label for="w" class="long">\\(w\\) (boat width): </label><input id="w" value="2.25" onchange="recalculate();"/>m<br/>
<label for="h_w" class="long">\\(h_w\\) (coe height of trampolines): </label><input id="h_w" value="1.2" onchange="recalculate();"/>m<br/>
<button class="shortlabel" onclick="resetValues();">reset values</button><br/>

From these parameteres, one can estimate the angle of attack and the forces on the two trampolines.
The calculation is a bit lenghty, so check below if you want to verify the assumptions, but here are the results:

The estimate for the apparent wind's angle of attack at the windward respectively leeward trampolines is plotted in figures 1 and 2:

<div class="row">
  <div class="column">
    <figure class="smallmargin">
      <canvas id="angleOfAttackWindwardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 1: angle of attack of windward tramp</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure class="smallmargin">
      <canvas id="angleOfAttackLeewardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 2: angle of attack of leeward tramp</figcaption>
    </figure>
  </div>
</div>

A negative angle of attack means that the wind is blowing onto the top side of the trampoline,
whereas a positive angle of attack means it blows onto the bottom side.

For typical upwind conditions as the default values above and a heel angle of 25°,
the angle of attack at the leeward trampoline is on the order of -15° - 
large enough to create a considerable force on the trampoline.

Adding the forces of the windward and leeward trampoline gives the following results:

<div class="row">
  <div class="column">
    <figure class="smallmargin">
      <canvas id="forceXCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 3: total braking force</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure class="smallmargin">
      <canvas id="forceYCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 4: total sideway force</figcaption>
    </figure>
  </div>
</div>

<div class="row">
  <div class="column">
    <figure class="smallmargin">
      <canvas id="forceZCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 5: total lift force</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure class="smallmargin">
      <canvas id="torqueXCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 6: total torque around x axis</figcaption>
    </figure>
  </div>
</div>

The braking force in x direction from figure 3 is on the order of 1 N for standard parameters, which is
small as compared of the typical 100 N braking force created by resistance of the foils 
and aerodynamic drag of boat and helm.
The sideway force from figure 4 is on the order of 60 N for a heel angle of 25°, 
which is more than 10% of the typical sideway force of the sail of about 600N.
The downward force, displayed in figure 5, is also on the order of 60 N, which is about 5% of the typical weight force 
of 1200 N of boat and helm combined. 
The torque which heels the boat is displayed in figure 6, and is on the order of 70Nm, 
which is on the order of 4% of the typical torque created by the main sail 
(this means that the main sail can produce about 4% less heeling moment and thus about 4% less driving force).

So overall, the effect is not huge, but all effects are slowing the boat down, 
so it makes sense to keep the trampolines as small as possible if one wants to have a fast boat.
My estimate is (not elaborated here) that by reducing the tramp lenght from 2 m to 1 m, one gains about 5% boat speed.

In the following, the single forces on the windward and leeward tramp are plotted.
For the windward trampoline, the forces are:

<div class="row">
  <div class="column">
    <figure class="smallmargin">
      <canvas id="forceXWindwardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 7: braking force of windward tramp</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure class="smallmargin">
      <canvas id="forceYWindwardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 8: sideway force of windward tramp</figcaption>
    </figure>
  </div>
</div>

<div class="row">
  <div class="column">
    <figure class="smallmargin">
      <canvas id="forceZWindwardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 9: lift force of windward tramp</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure class="smallmargin">
      <canvas id="torqueXWindwardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 10: x torque of windward tramp</figcaption>
    </figure>
  </div>
</div>

For the leeward trampoline, the forces are:

<div class="row">
  <div class="column">
    <figure class="smallmargin">
      <canvas id="forceXLeewardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 11: braking force of leeward tramp</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure class="smallmargin">
      <canvas id="forceYLeewardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 12: sideway force of leeward tramp</figcaption>
    </figure>
  </div>
</div>

<div class="row">
  <div class="column">
    <figure class="smallmargin">
      <canvas id="forceZLeewardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 13: lift force of leeward tramp</figcaption>
    </figure>
  </div>
  <div class="column">
    <figure class="smallmargin">
      <canvas id="torqueXLeewardCanvas" width="200" height="150"></canvas>
      <figcaption>Figure 14: x torque of leeward tramp</figcaption>
    </figure>
  </div>
</div>


-----------------------

## Calculation

For estimating the forces, we assume that the wind flow is not disturbed by either hull or sail 
(which is clearly not the case, but the best assumption we can make and still have a simple solution).
We assume that the trampolines are flat (another simplification) 
and have an angle $$\gamma$$ to the $$y$$ axis on the plane $$x=0$$ when the boat is in upright position.
For a boat which is heeled to windward by the angle $$\lambda$$, the angle $$\gamma'$$ on the plane $$x=0$$ is given by

$$\gamma' = - \lambda \pm \gamma$$ 

where the plus sign is for the windward trampoline and the minus sign for the leeward trampoline.

The trampolines have an angle of $$\delta$$ to the $$x$$ axis. 
Then (when choosing the origin accordingly), 
all points $$\boldsymbol{r}$$ on the trampoline observe the equation 

$$\boldsymbol{r} \cdot \boldsymbol{n} = 0$$

where $$\boldsymbol{n}$$ is the normal vector of the trampoline area and is given in world coordinates by

$$\boldsymbol{n} = \begin{pmatrix} \sin \left(\delta\right) \\ \sin \left(\gamma'\right) \cos \left(\delta\right) \\  \cos \left(\gamma'\right) \cos \left(\delta\right) \end{pmatrix}$$

With this definition, $$\boldsymbol{n}$$ has the length 1. 

With an apparent wind angle of $$\beta$$, the apparent wind velocity vector $$\boldsymbol{v}_{w,a}$$ is given by

$$\boldsymbol{v}_{w,a} = \begin{pmatrix} \cos \left(\beta\right) \\ \sin \left(\beta\right) \\ 0 \end{pmatrix} v_{w,a}$$

The sine of the angle of attack $$\alpha$$ of the trampoline with respect to the wind is given by the scalar product
of the normalized vectors $$\boldsymbol{v}_w / v_w$$ and $$\boldsymbol{n}$$

$$ \sin \left(\alpha\right) = \frac{1}{v_w} \boldsymbol{v}_w \cdot \boldsymbol{n} $$

which gives 

$$ \sin \left(\alpha\right) = \sin \left(\delta\right) \cos \left(\beta\right) + \sin \left(\gamma'\right) \cos \left(\delta\right) \sin \left(\beta\right)$$

This gives the angle of attack plotted in figures 1 and 2.

The drag force $$\boldsymbol{F}_d$$ of a trampoline is always in direction of the wind, i.e. in boat coordinates 

$$\boldsymbol{F}_D = \begin{pmatrix} \cos \left(\beta\right) \\ \sin \left(\beta\right) \\ 0 \end{pmatrix} F_D $$
 
Assuming that the lift force acts in the direction of the component of the normal vector
which is also perpendicular to the wind direction, the lift acts in the direction of the non-normalized vector

$$\boldsymbol{f}_L = \begin{pmatrix} \sin \left(\delta\right) - \sin \left(\alpha\right) \cos \left(\beta\right) \\ 
                                     \sin \left(\gamma'\right) \cos \left(\delta\right) - \sin \left(\alpha\right) \sin \left(\beta\right)\\ 
									 \cos \left(\gamma'\right) \cos \left(\delta\right) \end{pmatrix}$$

so that the lift force $$\boldsymbol{F}_L$$ is

$$\boldsymbol{F}_L = \frac{1}{\lvert \boldsymbol{f}_L \rvert} \boldsymbol{f}_L F_L$$

The drag and lift components of the aerodynamic force are given by standard wing theory as

$$F_D = c_D \frac{\rho}{2}v_a^2 A$$

$$F_L = c_L \frac{\rho}{2}v_a^2 A$$

where $$c_D$$ and $$c_L$$ typically depend on the wing geometry, wing profile and the Reynolds number.
As we typically have a somewhat unusual wing geometry and a quite small aspect ratio,
$$c_L$$ and $$c_D$$ are difficult to determine accurately, but for an estimation, one can 
e.g. use the experimental flat plate results (Low Reynolds Number Aerodynamics of Low-Aspect-Ratio,
Thin/Flat/Cambered-Plate Wings, Alain Pelletier and Thomas J. Mueller, Journal of Aircraft Vol. 37, No. 5, September–October 2000)
which were measured for somewhat lower Reynolds numbers than encountered in a moth.

So in three dimensions, the total aerodynamic force on a trampoline is given by the lengthy expression

$$\boldsymbol{F} = \boldsymbol{F}_D + \boldsymbol{F}_L = \frac{\rho}{2}v_a^2 A 
  \begin{pmatrix} 
     c_D \cos \left(\beta\right) + \frac{c_L}{\lvert \boldsymbol{f}_L \rvert} \left[ \sin \left(\delta\right) - \sin \left(\alpha\right) \cos \left(\beta\right) \right]\\ 
	 c_D \sin \left(\beta\right) + \frac{c_L}{\lvert \boldsymbol{f}_L \rvert} \left[ \sin \left(\gamma'\right) \cos \left(\delta\right) - \sin \left(\alpha\right) \sin \left(\beta\right)\right]\\ 
	 \frac{c_L}{\lvert \boldsymbol{f}_L \rvert} \left[ \cos \left(\gamma'\right) \cos \left(\delta\right) \right]
  \end{pmatrix} $$
  
For a sailboat, not only the forces themselves are important, but also how much the righting moment is decreased.
For this, we calculate the torque of the aerodynamic forces on a trampoline with respect to the center of effort of the horizontal foil 
(see [effects of windward heel](./windward-heel.html) for why this point of reference is chosen).
The torque vector is given by the vector product of the vector between the center of effort of the horizontal foil 
and the center of effort of the aredynamic force and the force vector $$\boldsymbol{F}$$. 
We assume that the center of effort of the aredynamic force lies in the middle of a trampoline. 
So in boat coordinates, the z coordinate is given by the height $$h_w$$ of the trampoline above the center of effort of the horizontal foil,
and the y coordinate is given by half of the span of a single trampoline, which we assume to be a quarter of the total width $$w$$ of the boat.
As we have calculated the force in world coordinates, we must transform the difference vector into world coordinates. This gives

$$\boldsymbol{r} = \begin{pmatrix}
    0 \\ 
	\cos \left(\lambda\right) w/4 - \sin \left(\lambda\right) h_w \\
	\cos \left(\lambda\right) h_w + \sin \left(\lambda\right) w/4 
  \end{pmatrix}$$
  
So the x coordinate of the torque $$\boldsymbol{\tau}$$ is given by

$$\tau_x = \left(\boldsymbol{r} \times \boldsymbol{F}\right)_x = r_y F_z - r_z F_y$$ 

and as both $$\boldsymbol{r}$$ and $$\boldsymbol{F}$$ are known, the x xomponent of the torque can be calculated.

<script src="assets/js/trampolines.js"></script>
