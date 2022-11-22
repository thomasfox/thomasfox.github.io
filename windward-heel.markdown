---
layout: default 
---

# Windward heel
## Introduction
Especially on an upwind course, moth sailors typically aim to achieve a windward heel. In contrast, in most other sailing boats the aim is to sail upright (without heel). The reason for the latter is that the hull resistance of a sailing boat is lowest in typical cases when the boat is sailed upright (there are some exceptions, e.g. a skiff hull in very light wind can have less resistance when being heeled). For a flying moth, the hull does not touch the water, therefore it has no water resistance and the main reason for sailing upright disappears. In such a scenario, other reasons for sailing heeled are important because they are not "shadowed" by the increase in drag for a heeled hull in water.

The main motivations for sailing with a windward heel are (in decreasing order of importance)
- it increases the lever arm for the helmsman's and boat's weight which produces a righting moment. The increased lever arm means that a larger sideway force from the sail can be tolerated, which in turn means the rigg can produce a larger forward force.
- The weight of helm and boat can compensate the sail force instead of the vertical foil, leading to a smaller or even negative leeway.
- the sail produces a vertical force component lifting the boat, so the lifting foils need produce less lift.
- The helm is closer to the water where the wind is slower, thus the helmsman produces less drag.

We will calculate each of these effects except the last by considering the force equilibrium on a heeled moth.

The main reason for not sailing heeled is that heeling reduces the effective sail area, therefore the maximum possible forward force decreases. This is not a problem in strong winds where the maximum possible forward force is limited by the righting moment the helmsman's weight can provide. In light winds, however, when the helmsman's weight can balance the sideway force by the sail, the strongest motivation for sailing heeled vanishes and the strongest reason for not sailing heeled becomes important. 

<figure>
  <img src="{{site.url}}/assets/img/windward-heel/windward-heel.svg" alt="forces on a heeled moth"/>
  <figcaption>Figure 1: Forces on a moth heeled by an angle &lambda;</figcaption>
</figure>
The forces on a moth heeled windward by an angle $$\lambda$$ can be seen in Figure 1. We are interested only in force components perpendicular to the motion of the boat, so all drag and driving force components are omitted. Also we are not interested in how the forces are distributed between front and rear foil, we consider the sum of the forces of both foils here. The forces are:
- the lift of the horizontal foils $$F_{f,h}$$. This needs to be calculated.
- the lateral force of the vertical foils $$F_{f,v}$$. This needs to be calculated. 
- the weight force of the helm $$F_{w,h}$$. This is assumed to be known. 
- the weight force of the boat $$F_{w,b}$$. This is assumed to be known. We assume that the boat weight is on the symmetry plane of the boat.
- the transversal force of the sail $$F_s$$. This needs to be calculated. We assume that the sail force compoent which is perpendicular to the symmetry plane of the boat has an angle $$\lambda$$ to the horizontal plane.

One could argue that the transversal force of the sail is given by the wind strength and the sail configuration and is therefore a known quantity. However, the typical mode of moth sailing is that the maximum transversal force which can be achieved by the wind strength and sail configuration is larger than the sail force the helm can counterbalance, so typically the helm decreases sail force e.g. by easing the main sheet such that the helm can just about counterbalance the sail force. So the maximum possible transversal sail force needs to be maximized, because a larger transversal force typically leads to a larger forward force and thus a faster boat.

Also shown in Figure 1 are the following distances, which are all assumed to be known:
- the height (in direction of the symmetry plane) of the center of gravity of the boat relative to the center of effort of the vertical foil, $$h_{cog,b}$$
- the height of the center of gravity of the helm relative to the center of effort of the vertical foil, $$h_{cog,h}$$
- the distance of the center of gravity of the helm from the symmetry plane of the boat, $$w_{cog,h}$$
- the height of the center of effort of the sail relative to the center of effort of the vertical foil, $$h_{coe,s}$$

To calculate the transversal sail force, we use the fact that in equilibrium, the net torque must be zero. 
To calculate the net torque of the forces, a point of reference must be chosen. 
Any point of reference will give the same result, so for convenience we choose the point in the symmetry axis of the boat 
where the force on the vertical foil acts, so the forces on both vertical and horizontal foils have zero torque.
Then the condition that the net torque is zero results in

$$F_s \ h_{coe,s} = F_{w,b} \ h_{cog,b} \ sin(\lambda) + F_{w,h} \left[ w_{cog,h} \ cos(\lambda) + h_{cog,h} \ sin(\lambda)\right]$$

This equation can be rewritten to determine the lateral sail force allowed by the depicted configuration:

$$F_s = cos(\lambda) \frac{F_{w,h} \ w_{cog,h}}{h_{coe,s}} + sin(\lambda) \frac{F_{w,b} \ h_{cog,b} + F_{w,h} \ h_{cog,h}}{h_{coe,s}}$$



Disregarding the factor of $$cos(\lambda)$$, the first term is the standard term for upright sailing: 
The sail force is proportional to the distance of the helm from the symmetry plane of the boat and the weight of the helm, 
and anti-proportional to the distance between the centers of effort of sail and vertical foil. When sailing heeled, only the projection of the helm's weight force onto the symmetry plane of the boat creates a torque, thus decreasing this term by the factor of $$cos(\lambda)$$.

The second term describes the additional torque by moving the weight of helm and boat transversally away from the vertical foil's center of effort. It increases the possible sail force when the boat is heeled windward. It takes into account the weight of both the boat and the helm, multiplied by their respective heights above the center of effort of the vertical foil, overall multiplied by the sine of the heel angle, 
and divided by the distance between the centers of effort of sail and vertical foil.
So the maximum possible sail force can be increased by
- lowering the center of effort of the sail $${h_{coe,s}}$$ (e.g. shorter mast, decksweeper sails)
- heeling the boat more to windward, thus increasing $$sin(\lambda)$$
- using steeper wings, thus increasing $$h_{cog,h}$$
- increasing the distance of the helm from the boat's symmetry plane $$w_{cog,h}$$ (riding out; wing width is restricted by class rules) 
- designing a boat with a higher center of gravity, thus increasing $$h_{cog,b}$$
- (going for more weight as helm, thus increasing $$F_{w,h}$$)
- (using a heavier boat, thus increasing $$F_{w,b}$$)

where the last two bracketed strategies have obvious disadvantages in other areas, and the third last point is probably very difficult to achieve without disadvantages in other areas.

For a typical moth and sailor we have:  

<label for="F_w_h" class="short">\\(F_{w,h}\\): </label><input id="F_w_h" value="800" onchange="recalculate();"/>N<br/>
<label for="F_w_b" class="short">\\(F_{w,b}\\): </label><input id="F_w_b" value="400" onchange="recalculate();"/>N<br/>
<label for="w_cog_h" class="short">\\(w_{cog,h}\\): </label><input id="w_cog_h" value="1.3" onchange="recalculate();"/>m<br/>
<label for="h_coe_s" class="short">\\(h_{coe,s}\\): </label><input id="h_coe_s" value="3.6" onchange="recalculate();"/>m<br/>
<label for="h_cog_b" class="short">\\(h_{cog,b}\\): </label><input id="h_cog_b" value="1.3" onchange="recalculate();"/>m<br/>
<label for="h_cog_h" class="short">\\(h_{cog,h}\\): </label><input id="h_cog_h" value="1.5" onchange="recalculate();"/>m<br/>
<button class="shortlabel" onclick="resetValues();">reset values</button><br/>

which results in the following transversal sail force:

<div class="canvas">
  <figure>
    <canvas id="sailForceVsWindwardHeelAngleCanvas" width="200" height="150"></canvas>
    <figcaption>Figure 2: transversal sail force vs windward heel angle</figcaption>
  </figure>
</div>

This shows that the maximum possible transversal sail force can be considerably increased by heeling the moth to windward.

To determine the forces $$F_{f,h}$$ and $$F_{f,v}$$ on the horizontal and vertical foils, respectively,
we use the fact that the net force on the boat must be zero to have a force equilibrium. The forces $$F_{f,v}$$ and $$F_{f,h}$$ are easily calculated in the coordinate system of the boat. 

In the direction perpendicular to the horizontal foils, the net force is zero when the following equation is satisfied:

$$F_{f,h} = cos(\lambda) \left[ F_{w,h} + F_{w,b} \right]$$

So the lift needed from the horizontal foils decreases as $$\lambda$$ increases, as part of the weight is carried by the sails. However, the effect only becomes significant for larger $$\lambda$$: For $$\lambda=10°$$, the lift decreases by 1,5%, for $$\lambda=20°$$, the lift decreases by 6%, and for 
$$\lambda=30°$$, the lift decreases by 13%. The above geometry and weights gives the following horizontal foil force versus windward heel angle:

<div class="canvas">
  <figure>
    <canvas id="horizontalFoilForceVsWindwardHeelAngleCanvas" width="200" height="150"></canvas>
    <figcaption>Figure 3: horizontal foil force vs windward heel angle</figcaption>
  </figure>
</div>



In the direction perpendicular to the vertical foils we have:

$$F_{f,v} = F_s - sin(\lambda) \left[ F_{w,s} + F_{w,b} \right]$$

So for non-zero positive $$\lambda$$, part of the sail force is compensated by the weight force of boat and helm, and need not be produced by the vertical foils. However, the sail force is larger than when sailing without heel, therefore it depends of the weights and geometry of the boat whether the force on the vertical foil is larger or smaller than when sailing unheeled.  

However, for the geometry and weights above, the forces on the vertical foil are zero at around 20 degrees windward heel angle and are negative afterwards, as the vertical foil now carries part of the weight of the boat and helm: 

<div class="canvas">
  <figure>
    <canvas id="verticalFoilForceVsWindwardHeelAngleCanvas" width="200" height="150"></canvas>
    <figcaption>Figure 3: vertical foil force vs windward heel angle</figcaption>
  </figure>
</div>
<script src="assets/js/windwardHeel.js"></script>

A negative $$F_{f,v}$$ means that the vertical foil needs to produce a leeward force, and this is only possible if the boat moves to windward. This means that heeling to windward can completely erase leeway and even lead to a negative leeway, i.e. the boat moves to windward instead of moving to leeward. 