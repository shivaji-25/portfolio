# FoldText Examples & Variations

## Current Hero Implementation

Your main heading now features a **word-by-word unfold animation**:

```
"I build"           ← First line unfolds
"systems that move." ← Second line unfolds with stagger
```

Each word rotates from 92° (folded flat) to 0° (readable) with a crease shadow effect.

## Quick Customization Recipes

### 1. Character-by-Character (More Dramatic)

Replace the current FoldText config with:

```jsx
<FoldText
  text={`I build\nsystems that move.`}
  splitBy="char"        // ← Changed from "word"
  hinge="top"
  trigger="mount"
  duration={0.5}
  stagger={0.025}       // ← Faster stagger for chars
  ease="power3.out"
  perspective={800}
  creaseShading={0.5}
  fontSize="clamp(3.3rem, 8vw, 7.2rem)"
  fontWeight={800}
  color="#0A0A0A"
/>
```

**Effect**: Each letter unfolds individually - very eye-catching!

### 2. Line-by-Line (Cleaner)

```jsx
<FoldText
  text={`I build\nsystems that move.`}
  splitBy="line"        // ← Changed to "line"
  hinge="top"
  trigger="mount"
  duration={0.7}
  stagger={0.2}         // ← Longer pause between lines
  ease="power3.out"
  perspective={800}
  creaseShading={0.5}
  fontSize="clamp(3.3rem, 8vw, 7.2rem)"
  fontWeight={800}
  color="#0A0A0A"
/>
```

**Effect**: Each line unfolds as one panel - simpler and cleaner.

### 3. Bottom Hinge (Fold Up)

```jsx
<FoldText
  text={`I build\nsystems that move.`}
  splitBy="word"
  hinge="bottom"        // ← Changed from "top"
  trigger="mount"
  duration={0.6}
  stagger={0.05}
  ease="power3.out"
  perspective={800}
  creaseShading={0.5}
  fontSize="clamp(3.3rem, 8vw, 7.2rem)"
  fontWeight={800}
  color="#0A0A0A"
/>
```

**Effect**: Words flip up from bottom instead of down from top.

### 4. Left Hinge (Horizontal Fold)

```jsx
<FoldText
  text={`I build\nsystems that move.`}
  splitBy="word"
  hinge="left"          // ← Horizontal hinge
  trigger="mount"
  duration={0.6}
  stagger={0.05}
  ease="power3.out"
  perspective={800}
  creaseShading={0.5}
  fontSize="clamp(3.3rem, 8vw, 7.2rem)"
  fontWeight={800}
  color="#0A0A0A"
/>
```

**Effect**: Words swing in from the left side.

### 5. Scroll-Triggered (Animate When Visible)

```jsx
<FoldText
  text={`I build\nsystems that move.`}
  splitBy="word"
  hinge="top"
  trigger="scroll"      // ← Changed from "mount"
  duration={0.6}
  stagger={0.05}
  ease="power3.out"
  perspective={800}
  creaseShading={0.5}
  fontSize="clamp(3.3rem, 8vw, 7.2rem)"
  fontWeight={800}
  color="#0A0A0A"
/>
```

**Effect**: Animation starts when heading scrolls into view (82% from top).

### 6. Fast & Punchy

```jsx
<FoldText
  text={`I build\nsystems that move.`}
  splitBy="word"
  hinge="top"
  trigger="mount"
  duration={0.35}       // ← Faster
  stagger={0.03}        // ← Tighter cascade
  ease="power4.out"     // ← Snappier easing
  perspective={600}     // ← More dramatic
  creaseShading={0.65}  // ← Stronger shadow
  fontSize="clamp(3.3rem, 8vw, 7.2rem)"
  fontWeight={800}
  color="#0A0A0A"
/>
```

**Effect**: Quick, aggressive unfold - high energy!

### 7. Slow & Elegant

```jsx
<FoldText
  text={`I build\nsystems that move.`}
  splitBy="word"
  hinge="top"
  trigger="mount"
  duration={0.9}        // ← Slower
  stagger={0.08}        // ← Wider spacing
  ease="power2.out"     // ← Gentler easing
  perspective={1200}    // ← Subtle depth
  creaseShading={0.35}  // ← Light shadow
  fontSize="clamp(3.3rem, 8vw, 7.2rem)"
  fontWeight={800}
  color="#0A0A0A"
/>
```

**Effect**: Smooth, luxurious unfold - sophisticated feel.

### 8. Minimal (Almost No 3D)

```jsx
<FoldText
  text={`I build\nsystems that move.`}
  splitBy="word"
  hinge="top"
  trigger="mount"
  duration={0.5}
  stagger={0.04}
  ease="power3.out"
  perspective={2000}    // ← Very subtle
  creaseShading={0.15}  // ← Barely visible
  fontSize="clamp(3.3rem, 8vw, 7.2rem)"
  fontWeight={800}
  color="#0A0A0A"
/>
```

**Effect**: Gentle reveal with minimal 3D - professional and understated.

## Other Section Examples

### About Section Heading

```jsx
<h2>
  <FoldText
    text="About Me"
    splitBy="char"
    hinge="bottom"
    trigger="scroll"
    duration={0.4}
    stagger={0.02}
    ease="power3.out"
    perspective={700}
    creaseShading={0.4}
    fontSize="3rem"
    fontWeight={700}
    color="#0A0A0A"
  />
</h2>
```

### Skills Section

```jsx
<h2>
  <FoldText
    text="Technical Skills"
    splitBy="word"
    hinge="left"
    trigger="scroll"
    duration={0.5}
    stagger={0.06}
    ease="power3.out"
    perspective={800}
    creaseShading={0.45}
    fontSize="2.5rem"
    fontWeight={700}
    color="#0A0A0A"
  />
</h2>
```

### Projects Section

```jsx
<h2>
  <FoldText
    text="Featured Projects"
    splitBy="word"
    hinge="top"
    trigger="scroll"
    duration={0.5}
    stagger={0.05}
    ease="power3.out"
    perspective={700}
    creaseShading={0.5}
    fontSize="2.5rem"
    fontWeight={700}
    color="#0A0A0A"
  />
</h2>
```

## Interactive Examples

### Hover Effect for CTA Button

```jsx
<button>
  <FoldText
    text="Hire Me"
    splitBy="char"
    hinge="bottom"
    trigger="hover"      // ← Plays on hover
    duration={0.3}
    stagger={0.015}
    ease="back.out"
    perspective={600}
    creaseShading={0.5}
    fontSize="1.2rem"
    fontWeight={700}
    color="#fff"
  />
</button>
```

### Looping Animation (Attention Grabber)

```jsx
<FoldText
  text="New Project!"
  splitBy="char"
  hinge="top"
  trigger="loop"         // ← Continuous loop
  duration={0.4}
  stagger={0.02}
  ease="power3.inOut"
  perspective={700}
  creaseShading={0.6}
  fontSize="1.5rem"
  fontWeight={800}
  color="#0A66C2"
/>
```

## Mix & Match Parameters

Feel free to experiment! Here's what each does:

| Parameter | Low Value | High Value |
|-----------|-----------|------------|
| `duration` | 0.3 (fast) | 1.2 (slow) |
| `stagger` | 0.01 (tight) | 0.15 (spaced) |
| `perspective` | 400 (dramatic) | 2000 (subtle) |
| `creaseShading` | 0.1 (light) | 0.8 (strong) |

## Testing Your Changes

After modifying the config:

1. Save the file
2. Watch hot reload
3. See the new animation immediately
4. Iterate until perfect!

## Recommended Settings by Style

### Corporate/Professional
```
duration: 0.7
stagger: 0.06
perspective: 1200
creaseShading: 0.3
```

### Creative/Bold
```
duration: 0.5
stagger: 0.04
perspective: 600
creaseShading: 0.6
```

### Tech/Modern
```
duration: 0.4
stagger: 0.03
perspective: 800
creaseShading: 0.5
```

### Elegant/Luxury
```
duration: 0.9
stagger: 0.08
perspective: 1500
creaseShading: 0.25
```

Your **current settings** are in the **Tech/Modern** category - perfect for a developer portfolio!
