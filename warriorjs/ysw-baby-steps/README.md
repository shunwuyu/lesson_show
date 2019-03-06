# ysw - Baby Steps

### _For players new to WarriorJS_

## Level 3

_The air feels thicker than before. There must be a horde of sludge._

> **TIP:** Be careful not to die! Use `warrior.health()` and `warrior.maxHealth()` to keep an eye on your health, and `warrior.rest()` to earn 10% of your max health back.

### Floor Map

```
╔═════════╗
║@ s ss s>║
╚═════════╝

@ = ysw (20 HP)
s = Sludge (12 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attacks a unit in the given direction (`'forward'` by default), dealing 5 HP of damage.
- `warrior.rest()`: Gains 10% of max health back, but does nothing more.
- `warrior.walk()`: Moves one space in the given direction (`'forward'` by default).

### Senses

- `warrior.feel()`: Returns the adjacent space in the given direction (`'forward'` by default).
- `warrior.health()`: Returns an integer representing your health.
- `warrior.maxHealth()`: Returns an integer representing your maximum health.
- `warrior.think()`: Thinks out loud (`console.log` replacement).

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
